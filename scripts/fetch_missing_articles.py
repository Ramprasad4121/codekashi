import urllib.request
import json
import os
import time

missing_ids = [4165373, 4141528, 4112862, 4096398, 4087896, 4078776]

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

template_end = """</h1>
  """

template_close = """
</body>
</html>"""

output_dir = os.path.join("public", "writings")
os.makedirs(output_dir, exist_ok=True)

results = []

for article_id in missing_ids:
    article_url = f"https://dev.to/api/articles/{article_id}"
    req = urllib.request.Request(article_url, headers={'User-Agent': 'Mozilla/5.0'})
    res = urllib.request.urlopen(req)
    article_data = json.loads(res.read().decode())
    
    slug = article_data['slug']
    title = article_data['title']
    body_html = article_data.get('body_html', '')
    published = article_data['published_timestamp']
    
    html_content = template_start + title + template_mid + title + template_end + body_html + template_close
    
    file_path = os.path.join(output_dir, f"{slug}.html")
    with open(file_path, "w") as f:
        f.write(html_content)
    
    results.append({
        "title": title,
        "slug": slug,
        "date": published,
        "file": file_path,
        "size": len(html_content)
    })
    
    print(f"✅ Fetched and saved: {slug}")
    print(f"   Title: {title}")
    print(f"   Date: {published}")
    print(f"   Size: {len(html_content)} bytes")
    print()
    
    time.sleep(0.5)  # Be polite to the API

print("\n=== SUMMARY ===")
print(f"Total articles fetched: {len(results)}")
for r in results:
    print(f"  - {r['slug']} ({r['size']} bytes)")

print("\n=== POSTS ARRAY (for page.tsx) ===")
for r in results:
    print(f'{{"title": "{r["title"]}", "slug": "{r["slug"]}", "url": "/writings/{r["slug"]}.html", "date": "{r["date"]}"}}')

print("\n=== POSTS MAP (for [slug]/page.tsx) ===")
for r in results:
    print(f'  "{r["slug"]}": "/writings/{r["slug"]}.html",')
