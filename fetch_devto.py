import urllib.request
import json
import os

url = "https://dev.to/api/articles?username=0xramprasad"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
response = urllib.request.urlopen(req)
data = json.loads(response.read().decode())

print(f"Found {len(data)} articles.")

# Check if body_html exists in the basic endpoint
print("Keys in first article:", list(data[0].keys()))

# The basic list endpoint does not return body_html.
# We need to fetch each article individually by ID to get body_html.
