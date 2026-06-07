#!/bin/bash
# prompt-improver.sh — Self-improving content quality loop
# Two modes:
#   --quick (Mon/Wed/Fri): Score recent posts, micro-fix the daily-blog prompt
#   --gsc   (Sunday):      Analyze GSC data, make structural prompt improvements

set -euo pipefail

MODE="${1:---quick}"
REPO_DIR="$HOME/broto-official"
SCRIPTS_DIR="$REPO_DIR/scripts"
PROMPT_LOG="$SCRIPTS_DIR/prompt-log"
LOG_DIR="$SCRIPTS_DIR/logs"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

mkdir -p "$PROMPT_LOG/$TIMESTAMP" "$LOG_DIR"
LOG_FILE="$LOG_DIR/prompt-improver-$(date +%Y-%m-%d).log"

exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== Prompt Improver ($MODE): $(date) ==="

cd "$REPO_DIR"
git pull origin main --rebase || git pull origin main --ff-only

# Snapshot current scripts before any changes
cp "$SCRIPTS_DIR/daily-blog.sh" "$PROMPT_LOG/$TIMESTAMP/daily-blog.sh.bak"

# Get previous improvements to avoid repeating
PREV_IMPROVEMENTS=""
PREV_DIR=$(ls -d "$PROMPT_LOG"/*/improvements.md 2>/dev/null | sort | tail -1)
if [ -n "$PREV_DIR" ]; then
  PREV_IMPROVEMENTS=$(cat "$PREV_DIR")
fi

if [ "$MODE" = "--quick" ]; then
  echo "Running QUICK mode — scoring recent posts..."

  # Find 5 most recently added article files
  RECENT_FILES=$(ls -t app/blog/data/articles-extra*.ts | head -5)

  # Score each file
  SCORES=""
  for f in $RECENT_FILES; do
    fname=$(basename "$f")
    nums=$(grep -c '[0-9]\+[%$]' "$f" 2>/dev/null || echo "0")
    faqs=$(grep -c 'faqs:' "$f" 2>/dev/null || echo "0")
    qa=$(grep -c 'quickAnswer' "$f" 2>/dev/null || echo "0")
    schema=$(grep -c 'application/ld+json' "$f" 2>/dev/null || echo "0")
    words=$(wc -w < "$f" | tr -d ' ')
    slugs=$(grep -c 'slug:' "$f" 2>/dev/null || echo "0")
    SCORES="$SCORES\n$fname: nums=$nums faqs=$faqs qa=$qa schema=$schema words=$words articles=$slugs"
  done

  echo -e "Quality scores:\n$SCORES"

  claude -p "You are a prompt engineer improving the daily-blog.sh script for brotoxofficial.com.

QUALITY SCORES for the 5 most recent article batches:
$(echo -e "$SCORES")

TARGETS:
- nums (specific numbers/percentages): >15 per file (articles should have data-rich content)
- faqs: should be present in every article (1 per article)
- words: 1800-2500 per article (each file has ~5 articles, so 9000-12500 per file)

PREVIOUS IMPROVEMENTS (do NOT repeat these):
$PREV_IMPROVEMENTS

CURRENT daily-blog.sh prompt:
$(cat "$SCRIPTS_DIR/daily-blog.sh" | grep -A100 'claude -p' | head -80)

YOUR TASK:
1. Identify which quality signals are below target
2. Make 1-2 TARGETED micro-fixes to the prompt in daily-blog.sh
3. Write your changes to $PROMPT_LOG/$TIMESTAMP/improvements.md explaining:
   - What signal was low
   - What prompt change you made
   - Why it should help
4. Edit daily-blog.sh directly with the improved prompt
5. Do NOT change the script structure — only the prompt text inside the claude -p call

Be surgical. Small, specific changes only." --max-turns 5 2>/dev/null

elif [ "$MODE" = "--gsc" ]; then
  echo "Running GSC mode — analyzing search performance..."

  GSC_REPORT="$SCRIPTS_DIR/gsc-report-latest.json"
  if [ ! -f "$GSC_REPORT" ]; then
    echo "ERROR: No GSC report found. Run gsc-weekly.sh first."
    exit 1
  fi

  claude -p "You are a prompt engineer using GSC data to improve content generation for brotoxofficial.com.

GSC REPORT (latest):
$(cat "$GSC_REPORT")

PREVIOUS IMPROVEMENTS (do NOT repeat these):
$PREV_IMPROVEMENTS

CURRENT daily-blog.sh:
$(cat "$SCRIPTS_DIR/daily-blog.sh")

YOUR TASK:
1. ANALYZE the GSC data:
   - Which posts have the highest CTR? Read their structure from the article data files.
   - Which posts have high impressions but zero clicks? Diagnose why.
   - What query patterns are emerging? What topics should we target?

2. MAKE 3-5 prompt improvements to daily-blog.sh, each traced to specific GSC evidence:
   - 'Query X has Y impressions at position Z — we should generate more content about [topic]'
   - 'Posts about [topic] consistently rank on page 1 — add this topic cluster to the prompt'
   - 'Low-CTR posts have [pattern] — fix by requiring [specific thing] in the prompt'

3. WRITE hypotheses to test next week

4. Save everything to $PROMPT_LOG/$TIMESTAMP/improvements.md:
   - GSC evidence for each change
   - The specific prompt edit made
   - Hypothesis to validate next week

5. Edit daily-blog.sh with the improvements
6. Commit: git add scripts/ && git commit -m 'Prompt improvement: [brief summary]'
7. Push: git push origin main

Do NOT include Co-Authored-By lines.
Do NOT change the script structure — only the prompt content and topic lists." --max-turns 10 2>/dev/null

fi

echo "=== Done: $(date) ==="
