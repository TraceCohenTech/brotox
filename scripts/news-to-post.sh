#!/bin/bash
# news-to-post.sh — Search for today's top men's aesthetics/Botox news, write a post if strong signal
# Runs daily at 11am. SKIPS on slow news days.

set -euo pipefail

REPO_DIR="$HOME/broto-official"
LOG_DIR="$REPO_DIR/scripts/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/news-$(date +%Y-%m-%d).log"

exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== News Check: $(date) ==="

cd "$REPO_DIR"
git pull origin main --rebase || git pull origin main --ff-only

# Use Claude to search for news and decide if there's a post-worthy story
RESULT=$(claude -p "You are a news analyst for brotoxofficial.com, a men's Botox education site.

Search the web for today's news about: men's Botox, Brotox, male aesthetics, Botox trends, new injectable products, FDA approvals for neurotoxins, celebrity Botox, men's grooming industry news.

DECISION CRITERIA — only write a post if:
1. There is a genuine newsworthy development (FDA approval, major study, celebrity story, industry trend report, new product launch)
2. The story is relevant to men specifically
3. The story hasn't been covered in the last 7 days

If there IS a strong signal, output EXACTLY:
WRITE_POST
HEADLINE: [compelling headline]
SLUG: [url-safe-slug]
---
[Full article in the TypeScript article format with slug, title, metaTitle, description, publishedDate set to $(date +%Y-%m-%d), sections, and faqs]

If there is NO strong news signal today, output EXACTLY:
SKIP_TODAY
REASON: [brief explanation]

Be honest — it's better to skip than to write a weak post." --max-turns 3 2>/dev/null)

if echo "$RESULT" | grep -q "SKIP_TODAY"; then
  REASON=$(echo "$RESULT" | grep "REASON:" | head -1)
  echo "Skipping today. $REASON"
  exit 0
fi

if echo "$RESULT" | grep -q "WRITE_POST"; then
  echo "News story found! Writing post..."

  # Extract the article content (everything after ---)
  ARTICLE=$(echo "$RESULT" | sed -n '/^---$/,$ p' | tail -n +2)

  if [ -z "$ARTICLE" ]; then
    echo "ERROR: No article content extracted"
    exit 1
  fi

  LATEST=$(ls app/blog/data/articles-extra*.ts 2>/dev/null | grep -o '[0-9]*' | sort -n | tail -1)
  NEXT=$((LATEST + 1))
  NEW_FILE="app/blog/data/articles-extra${NEXT}.ts"

  cat > "$NEW_FILE" << HEADER
import { Article, ArticleSection } from "./articles";

export const extraArticles${NEXT}: Article[] = [
HEADER

  echo "$ARTICLE" >> "$NEW_FILE"
  echo "];" >> "$NEW_FILE"

  # Update master import
  MASTER="app/blog/data/articles-extra3.ts"
  sed -i '' "s|...extraArticles${LATEST}|...extraArticles${LATEST}, ...extraArticles${NEXT}|" "$MASTER"
  sed -i '' "/extraArticles${LATEST}/a\\
import { extraArticles${NEXT} } from \"./articles-extra${NEXT}\";" "$MASTER"

  if npm run build 2>&1 | grep -q "Compiled successfully"; then
    git add -A
    HEADLINE=$(echo "$RESULT" | grep "HEADLINE:" | head -1 | sed 's/HEADLINE: //')
    git commit -m "News post: $HEADLINE"
    git push origin main
    echo "News post published!"
  else
    echo "ERROR: Build failed, reverting"
    git checkout -- .
  fi
else
  echo "No clear signal from Claude. Skipping."
fi

echo "=== Done: $(date) ==="
