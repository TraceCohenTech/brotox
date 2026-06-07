#!/bin/bash
# gsc-ctr-fix.sh — Read latest GSC report, rewrite meta on low-CTR pages
# Runs Monday at 9am (after Sunday's GSC data pull)

set -euo pipefail

REPO_DIR="$HOME/broto-official"
LOG_DIR="$REPO_DIR/scripts/logs"
REPORT="$REPO_DIR/scripts/gsc-report-latest.json"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/ctr-fix-$(date +%Y-%m-%d).log"

exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== CTR Fix: $(date) ==="

cd "$REPO_DIR"
git pull origin main --rebase || git pull origin main --ff-only

if [ ! -f "$REPORT" ]; then
  echo "ERROR: No GSC report found at $REPORT. Run gsc-weekly.sh first."
  exit 1
fi

# Extract low-CTR pages with high impressions
LOW_CTR=$(python3 -c "
import json
with open('$REPORT') as f:
    data = json.load(f)
pages = data.get('lowCTRPages', [])
for p in pages[:10]:
    url = p['keys'][0].replace('https://brotoxofficial.com', '')
    print(f'{url}|{p[\"impressions\"]}|{p[\"position\"]:.1f}')
")

if [ -z "$LOW_CTR" ]; then
  echo "No low-CTR pages found. Skipping."
  exit 0
fi

echo "Low-CTR pages to fix:"
echo "$LOW_CTR" | while IFS='|' read -r url imp pos; do
  echo "  $url — $imp impressions, position $pos"
done

# Use Claude to fix the meta titles and descriptions
claude -p "You are an SEO specialist for brotoxofficial.com.

These blog posts have HIGH impressions but ZERO clicks — their titles and descriptions aren't compelling enough:

$(echo "$LOW_CTR" | while IFS='|' read -r url imp pos; do
  echo "- $url ($imp impressions, position $pos)"
done)

YOUR TASK:
1. For each page above, find the corresponding article in the article data files (app/blog/data/articles*.ts)
2. Read the current title, metaTitle, and description
3. Rewrite the metaTitle and description to be more click-worthy using these rules:
   - Title must include a specific number in the first 6 words
   - Title formula: [Specific Number/Metric]: [Topic] — [Concrete Deliverable]
   - Description must open with a number
   - Description should create urgency or curiosity
   - Keep it honest — no clickbait
4. Edit the article data files directly with the improved meta
5. Build and verify: npm run build
6. Commit: git commit -m 'CTR fix: improve meta on [N] low-CTR pages'
7. Push: git push origin main

Do NOT include Co-Authored-By lines.
Do NOT change article content — only metaTitle and description.
Maximum 5 pages per run." --max-turns 10 2>/dev/null

echo "=== Done: $(date) ==="
