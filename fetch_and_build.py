import urllib.request
import json
import os

existing_slugs = [
    "soc2-type-1-and-2-guide",
    "step-finance-incident",
    "proof-of-stake-vs-proof-of-work",
    "trail-of-bits-raising-the-standard",
    "ethereum-vs-solana",
    "major-defi-security-incidents-january-2025",
    "thala-protocol-recovery",
    "unchecked-external-calls-polter-finance",
    "governance-vulnerabilities-aquadao",
    "mutation-testing-penpie",
    "trail-of-bits-leading-the-way",
    "understanding-evm-opcodes"
]

template_start = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>"""

template_mid = """</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.8;
      color: #e4e4e7;
      background-color: #09090b;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      font-size: 1.1rem;
    }
    h1, h2, h3, h4 { color: #ffffff; margin-top: 2rem; margin-bottom: 1rem; }
    h1 { font-size: 2.25rem; font-weight: 700; line-height: 1.2; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.5rem; }
    a { color: #60a5fa; text-decoration: none; }
    a:hover { text-decoration: underline; }
    p { margin-bottom: 1.5rem; }
    img { max-width: 100%; height: auto; border-radius: 0.5rem; margin: 2rem 0; }
    pre { background: #18181b; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto; font-family: monospace; }
    code { background: #18181b; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.9em; }
    blockquote { border-left: 4px solid #3f3f46; margin: 0; padding-left: 1rem; color: #a1a1aa; font-style: italic; }
    figure { margin: 2rem 0; }
    figcaption { text-align: center; color: #a1a1aa; font-size: 0.9rem; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <h1>"""

template_end = """</h1>\n  """

template_close = """\n</body>\n</html>"""

url = "https://dev.to/api/articles?username=0xramprasad"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
response = urllib.request.urlopen(req)
articles = json.loads(response.read().decode())

new_posts = []
new_maps = []

for article in articles:
    slug = article['slug']
    if "soc-2" in slug or "soc2" in slug:
        slug = "soc2-type-1-and-2-guide"
        
    if slug in existing_slugs:
        print(f"Skipping {slug} (already exists)")
        continue
        
    print(f"Fetching {slug}...")
    article_url = f"https://dev.to/api/articles/{article['id']}"
    req = urllib.request.Request(article_url, headers={'User-Agent': 'Mozilla/5.0'})
    res = urllib.request.urlopen(req)
    article_data = json.loads(res.read().decode())
    
    body_html = article_data.get('body_html', '')
    title = article['title']
    
    html_content = template_start + title + template_mid + title + template_end + body_html + template_close
    
    file_path = os.path.join("public", "writings", f"{slug}.html")
    with open(file_path, "w") as f:
        f.write(html_content)
        
    new_posts.append({
        "title": title,
        "slug": slug,
        "url": f"/writings/{slug}.html",
        "date": article['published_timestamp']
    })
    
    new_maps.append(f'  "{slug}": "/writings/{slug}.html",')

print("\n--- POSTS ARRAY JSON ---")
print(json.dumps(new_posts, indent=2))
print("\n--- POSTS MAP ---")
print("\n".join(new_maps))
