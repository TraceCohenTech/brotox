#!/bin/bash
# internal-linking-daily.sh — Find recently published posts with few inbound links
# and inject contextual links into related older posts
# Runs daily at 8am

set -euo pipefail

REPO_DIR="$HOME/broto-official"
LOG_DIR="$REPO_DIR/scripts/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/internal-linking-$(date +%Y-%m-%d).log"

exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== Internal Linking: $(date) ==="

cd "$REPO_DIR"
git pull origin main --rebase || git pull origin main --ff-only

# Get all article slugs and their content
claude -p "You are an internal linking specialist for brotoxofficial.com.

Your job: find recently published blog posts that have few inbound internal links,
then add contextual links to them from related older posts.

STEPS:
1. Read the master article list from app/blog/data/articles-extra3.ts to get all slugs
2. Read the blog article template at app/blog/[slug]/page.tsx — note the 'Popular Guides' section
3. Check the 5 most recently added article data files (highest numbered articles-extra*.ts files)
4. For each recent article, check if it's linked from the 'Popular Guides' section or any other article
5. For articles with 0-1 inbound links, find 2-3 older articles with related topics
6. In those older articles' data files, add a new section of type 'callout' or 'paragraph' that
   naturally references the newer article's topic with a mention like:
   'For more on [topic], see our guide to [title].'

   Note: Since these are data files (not rendered markdown), you can't add actual <Link> tags.
   Instead, add a section like:
   { type: 'callout', content: 'Related: [Article Title] — [brief teaser]. Read more in our complete guide.' }

7. Only modify article DATA files (articles-extra*.ts), never page templates
8. Make 3-5 link insertions maximum per run
9. Build and verify before committing

IMPORTANT:
- Don't break existing article structures
- Don't add duplicate links
- Keep insertions natural and contextual
- Build must pass before committing

After making changes:
git add -A
git commit -m 'Internal linking: connect [N] recent posts to older content'
git push origin main

Do NOT include Co-Authored-By lines in commits." --max-turns 10 2>/dev/null

echo "=== Done: $(date) ==="
