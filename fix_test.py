import re

with open('tests/verify-daily.spec.ts', 'r') as f:
    content = f.read()

# find unique urls in tests/verify-daily.spec.ts
match = re.search(r'const urls = \[(.*?)\];', content, re.DOTALL)
if match:
    urls_str = match.group(1)
    urls = [u.strip().strip("'") for u in urls_str.split(',') if u.strip()]
    unique_urls = list(dict.fromkeys(urls))

    new_urls_str = ",\n".join([f"  '{u}'" for u in unique_urls])
    content = content.replace(urls_str, f"\n{new_urls_str}\n")

    with open('tests/verify-daily.spec.ts', 'w') as f:
        f.write(content)
