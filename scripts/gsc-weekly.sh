#!/bin/bash
# gsc-weekly.sh — Pull fresh GSC data and save as JSON for other scripts
# Runs Sunday at 8:15am

set -euo pipefail

REPO_DIR="$HOME/broto-official"
REPORT_DIR="$REPO_DIR/scripts"
LOG_DIR="$REPO_DIR/scripts/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/gsc-weekly-$(date +%Y-%m-%d).log"

exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== GSC Weekly Pull: $(date) ==="

cd "$REPO_DIR"

TOKEN=$(gcloud auth application-default print-access-token 2>/dev/null)
SITE="sc-domain%3Abrotoxofficial.com"
BASE="https://searchconsole.googleapis.com/webmasters/v3/sites/$SITE/searchAnalytics/query"
HEADERS=(-H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: gen-lang-client-0009275387" -H "Content-Type: application/json")

END_DATE=$(date -v-2d +%Y-%m-%d)  # GSC data lags 2 days
START_DATE=$(date -v-9d +%Y-%m-%d)  # Last 7 days

echo "Date range: $START_DATE to $END_DATE"

# Pull top queries
QUERIES=$(curl -s "${HEADERS[@]}" -X POST "$BASE" -d "{
  \"startDate\": \"$START_DATE\",
  \"endDate\": \"$END_DATE\",
  \"dimensions\": [\"query\"],
  \"rowLimit\": 100
}")

# Pull top pages
PAGES=$(curl -s "${HEADERS[@]}" -X POST "$BASE" -d "{
  \"startDate\": \"$START_DATE\",
  \"endDate\": \"$END_DATE\",
  \"dimensions\": [\"page\"],
  \"rowLimit\": 100
}")

# Pull daily trend
DAILY=$(curl -s "${HEADERS[@]}" -X POST "$BASE" -d "{
  \"startDate\": \"$START_DATE\",
  \"endDate\": \"$END_DATE\",
  \"dimensions\": [\"date\"],
  \"rowLimit\": 7
}")

# Combine into one JSON report
python3 -c "
import json, sys

queries = json.loads('''$QUERIES''')
pages = json.loads('''$PAGES''')
daily = json.loads('''$DAILY''')

# Extract page-1, page-2, low-CTR pages
all_pages = pages.get('rows', [])
page1 = [r for r in all_pages if r['position'] < 11]
page2 = [r for r in all_pages if 11 <= r['position'] < 21]
low_ctr = [r for r in all_pages if r['impressions'] >= 5 and r['ctr'] == 0]

report = {
    'dateRange': {'start': '$START_DATE', 'end': '$END_DATE'},
    'generatedAt': '$(date -u +%Y-%m-%dT%H:%M:%SZ)',
    'summary': {
        'totalImpressions': sum(r['impressions'] for r in all_pages),
        'totalClicks': sum(r['clicks'] for r in all_pages),
        'totalPages': len(all_pages),
        'page1Count': len(page1),
        'page2Count': len(page2),
    },
    'topQueries': queries.get('rows', [])[:50],
    'topPages': sorted(all_pages, key=lambda r: r['impressions'], reverse=True)[:50],
    'page1Winners': sorted(page1, key=lambda r: r['position']),
    'page2Opportunities': sorted(page2, key=lambda r: r['impressions'], reverse=True),
    'lowCTRPages': sorted(low_ctr, key=lambda r: r['impressions'], reverse=True)[:20],
    'dailyTrend': daily.get('rows', []),
}

with open('$REPORT_DIR/gsc-report-latest.json', 'w') as f:
    json.dump(report, f, indent=2)

print(f'Summary: {report[\"summary\"][\"totalImpressions\"]} impressions, {report[\"summary\"][\"totalClicks\"]} clicks')
print(f'Page 1: {report[\"summary\"][\"page1Count\"]} pages')
print(f'Page 2: {report[\"summary\"][\"page2Count\"]} pages')
print(f'Low CTR (5+ imp, 0 clicks): {len(low_ctr)} pages')
"

echo "Report saved to scripts/gsc-report-latest.json"

# Also save a dated copy
cp "$REPORT_DIR/gsc-report-latest.json" "$REPORT_DIR/logs/gsc-report-$(date +%Y-%m-%d).json"

echo "=== Done: $(date) ==="
