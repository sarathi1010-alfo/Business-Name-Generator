import re

pages = [
    "/blog/complete-guide-to-brand-strategy",
    "/name-styles/compound-brand-names",
    "/name-styles/invented-brand-names",
    "/name-styles/minimal-brand-names",
    "/name-styles/playful-brand-names",
    "/industries/esports-team-names",
    "/industries/printing3d-company-names",
    "/industries/tattoo-shop-names",
    "/industries/travel-agency-names",
    "/archetypes/jester-brand-names",
    "/archetypes/ruler-brand-names"
]

# Update ping-indexnow.sh
with open('seo-ops/ping-indexnow.sh', 'r') as f:
    content = f.read()

new_urls_str = "\n".join([f'    "https://brandforge.alfo.online{url}"' for url in pages])
content = content.replace('    "$@"', f'{new_urls_str}\n    "$@"')

with open('seo-ops/ping-indexnow.sh', 'w') as f:
    f.write(content)

# Update verify-daily.spec.ts
with open('tests/verify-daily.spec.ts', 'r') as f:
    content = f.read()

new_urls_str_spec = ",\n".join([f"  '{url}'" for url in pages]) + ",\n  '/blog/how-to-build-a-saas-brand'"
content = content.replace("  '/blog/how-to-build-a-saas-brand'", new_urls_str_spec, 1)

with open('tests/verify-daily.spec.ts', 'w') as f:
    f.write(content)

# Update sitemap-articles.xml
with open('src/app/sitemap-articles.xml/route.ts', 'r') as f:
    content = f.read()

article_route = "\n".join([f"""  routes.push({{
    url: buildCanonical('{url}'),
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }});""" for url in pages if url.startswith('/blog')])

content = content.replace('  const xml = generateSitemapXml(routes);', f"{article_route}\n\n  const xml = generateSitemapXml(routes);")

with open('src/app/sitemap-articles.xml/route.ts', 'w') as f:
    f.write(content)

# Update sitemap-products.xml
with open('src/app/sitemap-products.xml/route.ts', 'r') as f:
    content = f.read()

prod_routes = "\n".join([f"""  routes.push({{
    url: buildCanonical('{url}'),
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }});""" for url in pages if not url.startswith('/blog')])

content = content.replace('  const xml = generateSitemapXml(routes);', f"{prod_routes}\n\n  const xml = generateSitemapXml(routes);")

with open('src/app/sitemap-products.xml/route.ts', 'w') as f:
    f.write(content)
