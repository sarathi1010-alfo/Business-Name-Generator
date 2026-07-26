#!/bin/bash

# Configuration
HOST="brandforge.alfo.online"
KEY="${INDEXNOW_KEY:-685c40483863493a8e998a4740f993d0}"
API_URL="https://api.indexnow.org/indexnow"

# If URLs are passed as arguments, use them. Otherwise, use the default list.
if [ $# -gt 0 ]; then
  URLS=("$@")
else
  # List of primary URLs to index
  URLS=(
    "https://brandforge.alfo.online/blog/how-to-choose-brand-colors"
    "https://brandforge.alfo.online/industries/ecommerce-store-names"
    "https://brandforge.alfo.online/industries/agency-business-names"
    "https://brandforge.alfo.online/industries/gaming-company-names"
    "https://brandforge.alfo.online/industries/education-brand-names"
    "https://brandforge.alfo.online/industries/fitness-brand-names"
    "https://brandforge.alfo.online/archetypes/magician-brand-names"
    "https://brandforge.alfo.online/archetypes/explorer-brand-names"
    "https://brandforge.alfo.online/archetypes/jester-brand-names"
    "https://brandforge.alfo.online/archetypes/lover-brand-names"
    "https://brandforge.alfo.online/archetypes/ruler-brand-names"
    "https://brandforge.alfo.online/blog/what-is-a-brand-story"
    "https://brandforge.alfo.online/industries/real-estate-company-names"
    "https://brandforge.alfo.online/industries/consulting-business-names"
    "https://brandforge.alfo.online/industries/nonprofit-organization-names"
    "https://brandforge.alfo.online/industries/photography-business-names"
    "https://brandforge.alfo.online/industries/podcast-names"
    "https://brandforge.alfo.online/industries/dental-clinic-names"
    "https://brandforge.alfo.online/industries/cleaning-business-names"
    "https://brandforge.alfo.online/archetypes/caregiver-brand-names"
    "https://brandforge.alfo.online/archetypes/everyman-brand-names"
    "https://brandforge.alfo.online/archetypes/innocent-brand-names"
    "https://brandforge.alfo.online/blog/brandforge-vs-looka"
    "https://brandforge.alfo.online/blog/brandforge-vs-brandmark"
    "https://brandforge.alfo.online/blog/what-is-a-logo-mark"
    "https://brandforge.alfo.online/blog/what-is-color-psychology"
    "https://brandforge.alfo.online/blog/what-is-typography-in-branding"
    "https://brandforge.alfo.online/blog/what-is-a-brand-guideline"
    "https://brandforge.alfo.online/blog/what-is-brand-differentiation"
  )
fi

# Convert array to JSON array
URL_LIST_JSON=$(printf '%s\n' "${URLS[@]}" | jq -R . | jq -s .)

# Create JSON payload
PAYLOAD=$(jq -n \
  --arg host "$HOST" \
  --arg key "$KEY" \
  --argjson urlList "$URL_LIST_JSON" \
  '{host: $host, key: $key, urlList: $urlList}')

# Trigger IndexNow
echo "Triggering IndexNow for ${#URLS[@]} URLs..."
curl -s -X POST "$API_URL" \
     -H "Content-Type: application/json; charset=utf-8" \
     -d "$PAYLOAD" > /dev/null

echo -e "\nPinging Sitemaps..."
# Ping Google Sitemap
curl -s "https://www.google.com/ping?sitemap=https://brandforge.alfo.online/sitemap.xml" > /dev/null
curl -s "https://www.google.com/ping?sitemap=https://brandforge.alfo.online/sitemap-articles.xml" > /dev/null
curl -s "https://www.google.com/ping?sitemap=https://brandforge.alfo.online/sitemap-products.xml" > /dev/null

# Ping Bing Sitemap
curl -s "https://www.bing.com/ping?sitemap=https://brandforge.alfo.online/sitemap.xml" > /dev/null
curl -s "https://www.bing.com/ping?sitemap=https://brandforge.alfo.online/sitemap-articles.xml" > /dev/null
curl -s "https://www.bing.com/ping?sitemap=https://brandforge.alfo.online/sitemap-products.xml" > /dev/null

echo "Done."
