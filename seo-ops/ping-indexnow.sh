#!/bin/bash

# Configuration
HOST="brandforge.alfo.online"
KEY="685c40483863493a8e998a4740f993d0"
API_URL="https://api.indexnow.org/indexnow"

# List of URLs to index
URLS=(
  "https://brandforge.alfo.online/blog/choose-standout-brand-name"
  "https://brandforge.alfo.online/blog/what-is-brand-identity"
  "https://brandforge.alfo.online/blog/brand-identity-vs-brand-image"
  "https://brandforge.alfo.online/name-styles/descriptive-brand-names"
  "https://brandforge.alfo.online/name-styles/evocative-brand-names"
  "https://brandforge.alfo.online/name-styles/abstract-brand-names"
  "https://brandforge.alfo.online/name-styles/acronym-brand-names"
  "https://brandforge.alfo.online/industries/tech-startup-names"
  "https://brandforge.alfo.online/industries/fashion-brand-names"
  "https://brandforge.alfo.online/industries/food-beverage-names"
  "https://brandforge.alfo.online/industries/health-wellness-names"
  "https://brandforge.alfo.online/archetypes/hero-brand-names"
  "https://brandforge.alfo.online/archetypes/outlaw-brand-names"
)

# Convert array to JSON array
URL_LIST_JSON=$(printf '%s\n' "${URLS[@]}" | jq -R . | jq -s .)

# Create JSON payload
PAYLOAD=$(jq -n \
  --arg host "$HOST" \
  --arg key "$KEY" \
  --argjson urlList "$URL_LIST_JSON" \
  '{host: $host, key: $key, urlList: $urlList}')

# Trigger IndexNow
echo "Triggering IndexNow for URLs..."
curl -X POST "$API_URL" \
     -H "Content-Type: application/json; charset=utf-8" \
     -d "$PAYLOAD"

echo -e "\nPinging Sitemaps..."
# Ping Google Sitemap (Legacy, but still sometimes useful)
curl -s "https://www.google.com/ping?sitemap=https://brandforge.alfo.online/sitemap.xml" > /dev/null
curl -s "https://www.google.com/ping?sitemap=https://brandforge.alfo.online/sitemap-articles.xml" > /dev/null
curl -s "https://www.google.com/ping?sitemap=https://brandforge.alfo.online/sitemap-products.xml" > /dev/null

# Ping Bing Sitemap
curl -s "https://www.bing.com/ping?sitemap=https://brandforge.alfo.online/sitemap.xml" > /dev/null
curl -s "https://www.bing.com/ping?sitemap=https://brandforge.alfo.online/sitemap-articles.xml" > /dev/null
curl -s "https://www.bing.com/ping?sitemap=https://brandforge.alfo.online/sitemap-products.xml" > /dev/null

echo "Done."
