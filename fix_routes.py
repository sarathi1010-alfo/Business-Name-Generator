import re

with open('src/app/sitemap-products.xml/route.ts', 'r') as f:
    content = f.read()

# Make sure we don't duplicate
if 'esports-team-names' not in content:
    with open('src/app/sitemap-products.xml/route.ts', 'w') as f:
        f.write(content)
else:
    print("Already added")
