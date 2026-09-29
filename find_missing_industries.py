import os
import re

with open('src/types/index.ts', 'r') as f:
    content = f.read()

industry_match = re.search(r"export type Industry = (.*?);", content, re.DOTALL)
if industry_match:
    industries_str = industry_match.group(1)
    industries = [i.strip().strip("'") for i in industries_str.split('|')]

    existing = os.listdir('src/app/industries')

    missing = []
    for ind in industries:
        # Check common patterns
        patterns = [
            f"{ind}-names",
            f"{ind}-company-names",
            f"{ind}-brand-names",
            f"{ind}-business-names",
            f"{ind}-startup-names",
            f"{ind}-store-names"
        ]
        found = False
        for p in patterns:
            if p in existing:
                found = True
                break
        if not found:
            missing.append(ind)

    print("Missing industries:", missing)
