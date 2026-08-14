#!/bin/bash

# Configuration
HOST="brandforge.alfo.online"
KEY="${INDEXNOW_KEY:-685c40483863493a8e998a4740f993d0}"
API_URL="https://api.indexnow.org/indexnow"

# If URLs are passed as arguments, use them. Otherwise, use the default list.
if [ $# -gt 0 ]; then
  URLS=(
    "https://brandforge.alfo.online/blog/how-to-name-a-future-proof-startup"
    "https://brandforge.alfo.online/industries/vr-company-names"
    "https://brandforge.alfo.online/industries/space-startup-names"
    "https://brandforge.alfo.online/industries/esports-team-names"
    "https://brandforge.alfo.online/industries/influencer-agency-names"
    "https://brandforge.alfo.online/industries/drone-business-names"
    "https://brandforge.alfo.online/industries/3d-printing-company-names"
    "https://brandforge.alfo.online/name-styles/rhyming-brand-names"
    "https://brandforge.alfo.online/name-styles/misspelled-brand-names"
    "https://brandforge.alfo.online/name-styles/historical-brand-names"
    "https://brandforge.alfo.online/name-styles/geographic-brand-names"

    "$@"
    "https://brandforge.alfo.online/about"
    "https://brandforge.alfo.online/blog"
    "https://brandforge.alfo.online/identity-directions"
    "https://brandforge.alfo.online/blog/ultimate-guide-to-brand-identity"
    "https://brandforge.alfo.online/blog/what-is-brand-identity"
    "https://brandforge.alfo.online/blog/what-is-a-brand-archetype"
    "https://brandforge.alfo.online/blog/why-is-branding-important"
    "https://brandforge.alfo.online/blog/what-is-brand-positioning"
    "https://brandforge.alfo.online/blog/what-is-brand-voice"
  )
else
  # List of primary URLs to index
  URLS=(
    "https://brandforge.alfo.online/blog/how-to-build-brand-trust"
    "https://brandforge.alfo.online/industries/wind-energy-names"
    "https://brandforge.alfo.online/industries/hydro-energy-names"
    "https://brandforge.alfo.online/industries/ev-startup-names"
    "https://brandforge.alfo.online/industries/battery-tech-names"
    "https://brandforge.alfo.online/industries/smarthome-company-names"
    "https://brandforge.alfo.online/industries/iot-startup-names"
    "https://brandforge.alfo.online/industries/wearable-tech-names"
    "https://brandforge.alfo.online/industries/ar-company-names"
    "https://brandforge.alfo.online/industries/quantum-computing-names"
    "https://brandforge.alfo.online/industries/nanotech-company-names"
    "https://brandforge.alfo.online/industries/roofing-company-names"
    "https://brandforge.alfo.online/industries/hvac-company-names"
    "https://brandforge.alfo.online/industries/event-company-names"
    "https://brandforge.alfo.online/industries/interior-design-names"
    "https://brandforge.alfo.online/industries/childcare-business-names"
    "https://brandforge.alfo.online/industries/yoga-studio-names"
    "https://brandforge.alfo.online/industries/publishing-company-names"
    "https://brandforge.alfo.online/industries/insurance-company-names"
    "https://brandforge.alfo.online/industries/manufacturing-company-names"
    "https://brandforge.alfo.online/industries/aviation-company-names"
    "https://brandforge.alfo.online/blog/the-psychology-of-brand-names"
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
    "https://brandforge.alfo.online/blog/complete-guide-to-visual-identity-design"
    "https://brandforge.alfo.online/industries/crypto-startup-names"
    "https://brandforge.alfo.online/industries/solar-company-names"
    "https://brandforge.alfo.online/industries/robotics-company-names"
    "https://brandforge.alfo.online/industries/logistics-business-names"
    "https://brandforge.alfo.online/industries/biotech-company-names"
    "https://brandforge.alfo.online/industries/travel-agency-names"
    "https://brandforge.alfo.online/industries/hospitality-brand-names"
    "https://brandforge.alfo.online/industries/pet-brand-names"
    "https://brandforge.alfo.online/industries/music-studio-names"
    "https://brandforge.alfo.online/industries/automotive-brand-names"
    "https://brandforge.alfo.online/blog/how-to-craft-brand-tagline"
    "https://brandforge.alfo.online/industries/agriculture-company-names"
    "https://brandforge.alfo.online/industries/entertainment-business-names"
    "https://brandforge.alfo.online/industries/telecom-company-names"
    "https://brandforge.alfo.online/industries/pharmaceutical-company-names"
    "https://brandforge.alfo.online/industries/construction-company-names"
    "https://brandforge.alfo.online/industries/maritime-company-names"
    "https://brandforge.alfo.online/industries/mining-company-names"
    "https://brandforge.alfo.online/industries/forestry-business-names"
    "https://brandforge.alfo.online/industries/retail-store-names"
    "https://brandforge.alfo.online/industries/media-company-names"
    "https://brandforge.alfo.online/blog/how-to-design-a-memorable-logo"
    "https://brandforge.alfo.online/blog/brandforge-vs-canva"
    "https://brandforge.alfo.online/blog/brandforge-vs-hatchful"
    "https://brandforge.alfo.online/industries/ai-company-names"
    "https://brandforge.alfo.online/industries/cybersecurity-company-names"
    "https://brandforge.alfo.online/industries/music-studio-names"
    "https://brandforge.alfo.online/industries/pet-brand-names"
    "https://brandforge.alfo.online/archetypes/ruler-brand-names"
    "https://brandforge.alfo.online/archetypes/everyman-brand-names"
    "https://brandforge.alfo.online/archetypes/creator-brand-names"
    "https://brandforge.alfo.online/archetypes/magician-brand-names"
    "https://brandforge.alfo.online/name-styles/alliteration-brand-names"
    "https://brandforge.alfo.online/name-styles/alphanumeric-brand-names"
    "https://brandforge.alfo.online/name-styles/foreign-word-brand-names"
    "https://brandforge.alfo.online/name-styles/dictionary-word-brand-names"
    "https://brandforge.alfo.online/industries/florist-names"
    "https://brandforge.alfo.online/industries/barbershop-names"
    "https://brandforge.alfo.online/industries/cafe-names"
    "https://brandforge.alfo.online/industries/moving-company-names"
    "https://brandforge.alfo.online/archetypes/innovator-brand-names"
    "https://brandforge.alfo.online/archetypes/guide-brand-names"
    "https://brandforge.alfo.online/blog/how-to-name-local-business"
    "https://brandforge.alfo.online/industries/sustainability-company-names"
    "https://brandforge.alfo.online/industries/hardware-company-names"
    "https://brandforge.alfo.online/industries/delivery-company-names"
    "https://brandforge.alfo.online/industries/therapy-company-names"
    "https://brandforge.alfo.online/industries/jewelry-brand-names"
    "https://brandforge.alfo.online/industries/furniture-brand-names"
    "https://brandforge.alfo.online/industries/organic-brand-names"
    "https://brandforge.alfo.online/industries/fintech-startup-names"
    "https://brandforge.alfo.online/industries/web3-startup-names"
    "https://brandforge.alfo.online/industries/catering-business-names"
    "https://brandforge.alfo.online/blog/how-to-build-minimum-viable-brand"
    "https://brandforge.alfo.online/blog/complete-guide-to-brand-guidelines"
    "https://brandforge.alfo.online/industries/microbrewery-names"
    "https://brandforge.alfo.online/industries/foodtruck-names"
    "https://brandforge.alfo.online/industries/boutiquehotel-names"
    "https://brandforge.alfo.online/industries/glamping-business-names"
    "https://brandforge.alfo.online/industries/telehealth-startup-names"
    "https://brandforge.alfo.online/industries/medtech-company-names"
    "https://brandforge.alfo.online/industries/edtech-startup-names"
    "https://brandforge.alfo.online/industries/proptech-company-names"
    "https://brandforge.alfo.online/industries/insurtech-startup-names"
    "https://brandforge.alfo.online/industries/cleantech-company-names"
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
