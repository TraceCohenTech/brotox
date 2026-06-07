#!/bin/bash
# daily-blog.sh — Generate N evergreen blog posts using Claude, commit, push
# Runs daily at 9am via launchd
# Uses the Claude CLI to generate posts directly

set -euo pipefail

REPO_DIR="$HOME/broto-official"
LOG_DIR="$REPO_DIR/scripts/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/daily-blog-$(date +%Y-%m-%d).log"

exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== Daily Blog Run: $(date) ==="

cd "$REPO_DIR"
git pull origin main --rebase || git pull origin main --ff-only

# Count existing articles
EXISTING=$(grep -rh '    slug: "' app/blog/data/articles*.ts | sed 's/.*slug: "//' | sed 's/".*//' | sort -u)
EXISTING_COUNT=$(echo "$EXISTING" | wc -l | tr -d ' ')
echo "Existing unique articles: $EXISTING_COUNT"

# Generate posts via Claude CLI
claude -p "You are a content writer for brotoxofficial.com — a Botox-for-men lead generation site (Next.js 14 + TypeScript + Tailwind).

EXISTING SLUGS (do NOT duplicate any):
$EXISTING

Write 5 NEW blog articles. Each must target a unique long-tail keyword men actually search for.

CRITICAL CTR RULES (our page-1 articles get 0 clicks without these):
- metaTitle MUST contain a specific number within the first 6 words (e.g., '5 Rules for...', '48-Hour Guide to...')
- metaTitle should create urgency or curiosity — use formats like: '5 [Topic] Rules — [Specific Detail]' or '[Number] [Topic] Tips Men Miss'
- description MUST open with a number or metric in the first 6 words (e.g., '72% of men...', '40-60 units required...')
- description should promise a specific deliverable the reader will GET
- First paragraph (quickAnswer) must open with a specific data point — never prose or generalities
- Each article needs 6-10 sections with specific numbers and data
- 4 FAQs per article — questions should be exact search queries people type
- Include at least 15 specific numbers/percentages/dollar amounts per article
- Category must be one of: Education, Guide, Lifestyle, Treatment, Comparison

BAD EXAMPLE (0 clicks on page 1):
  metaTitle: 'Botox and Shaving for Men — Before and After Appointment Guide'
  description: 'Shaving is a daily ritual for most men — but how does it interact with Botox?'

GOOD EXAMPLE (high-CTR pattern):
  metaTitle: '3 Shaving Rules After Botox — 48-Hour Timeline for Men'
  description: '72% of men shave within 24 hours of Botox and risk irritation. Follow this 3-step timeline.'

Output ONLY valid TypeScript that can be appended to the articles array.
Use this exact format for each article:
{
  slug: \"unique-slug-here\",
  title: \"...\",
  metaTitle: \"...\",
  description: \"...\",  // Must open with a number
  publishedDate: \"$(date +%Y-%m-%d)\",
  readTime: \"X min read\",
  category: \"Guide\",
  sections: [
    { type: \"paragraph\", content: \"...\" },
    { type: \"heading\", content: \"...\" },
    ...
  ],
  faqs: [
    { question: \"...\", answer: \"...\" },
  ],
},

Output raw TypeScript objects only. No markdown, no explanation, no imports." --max-turns 1 > /tmp/new-articles.ts 2>/dev/null

if [ ! -s /tmp/new-articles.ts ]; then
  echo "ERROR: Claude produced no output"
  exit 1
fi

# Find the latest extra file number
LATEST=$(ls app/blog/data/articles-extra*.ts 2>/dev/null | grep -o '[0-9]*' | sort -n | tail -1)
NEXT=$((LATEST + 1))
NEW_FILE="app/blog/data/articles-extra${NEXT}.ts"

# Create the new articles file
cat > "$NEW_FILE" << HEADER
import { Article, ArticleSection } from "./articles";

export const extraArticles${NEXT}: Article[] = [
HEADER

cat /tmp/new-articles.ts >> "$NEW_FILE"
echo "];" >> "$NEW_FILE"

# Update the master import file
MASTER="app/blog/data/articles-extra3.ts"

# Add import line before the export
sed -i '' "s|import { extraArticles${LATEST} }|import { extraArticles${LATEST} } from \"./articles-extra${LATEST}\";\nimport { extraArticles${NEXT} }|" "$MASTER"
sed -i '' "s|from \"./articles-extra${LATEST}\";|from \"./articles-extra${LATEST}\";|" "$MASTER"

# Add to the spread array
sed -i '' "s|...extraArticles${LATEST}|...extraArticles${LATEST}, ...extraArticles${NEXT}|" "$MASTER"

# Build and verify
if npm run build 2>&1 | grep -q "Compiled successfully"; then
  echo "Build succeeded"
  git add -A
  git commit -m "Add blog articles batch $NEXT: $(date +%Y-%m-%d)"
  git push origin main
  echo "Pushed successfully"
else
  echo "ERROR: Build failed, reverting"
  git checkout -- .
  exit 1
fi

echo "=== Done: $(date) ==="
