import urllib.request
import json

url = "https://dev.to/api/articles?username=0xramprasad&per_page=100"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
response = urllib.request.urlopen(req)
articles = json.loads(response.read().decode())

print(f"Total articles found: {len(articles)}")
print("\n=== ALL ARTICLES FROM DEV.TO ===\n")

for i, article in enumerate(articles):
    print(f"{i+1}. id={article['id']} slug={article['slug']}")
    print(f"   title={article['title']}")
    print(f"   date={article['published_timestamp']}")
    print()
