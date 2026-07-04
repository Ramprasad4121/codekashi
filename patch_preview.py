import json

new_posts = [
  {
    "title": "Chainlink Automation Isn't a Cron Job. It's a Consensus Decision",
    "slug": "chainlink-automation-isnt-a-cron-job-its-a-consensus-decision-4986",
    "url": "/writings/chainlink-automation-isnt-a-cron-job-its-a-consensus-decision-4986.html",
    "date": "2026-07-03T10:39:45Z"
  },
  {
    "title": "Why block.timestamp Is an NFT Mint Exploit Waiting to Happen (And What VRF Actually Does Instead)",
    "slug": "why-blocktimestamp-is-an-nft-mint-exploit-waiting-to-happen-and-what-vrf-actually-does-instead-4en9",
    "url": "/writings/why-blocktimestamp-is-an-nft-mint-exploit-waiting-to-happen-and-what-vrf-actually-does-instead-4en9.html",
    "date": "2026-07-02T09:39:15Z"
  },
  {
    "title": "Chainlink's Foundation Layer, Explained for Smart Contract Auditors",
    "slug": "chainlinks-foundation-layer-explained-for-smart-contract-auditors-51g1",
    "url": "/writings/chainlinks-foundation-layer-explained-for-smart-contract-auditors-51g1.html",
    "date": "2026-07-01T06:33:33Z"
  },
  {
    "title": "The latestRoundData() Footgun That Drained Two DeFi Protocols for $19.5M",
    "slug": "the-latestrounddata-footgun-that-drained-two-defi-protocols-for-195m-581f",
    "url": "/writings/the-latestrounddata-footgun-that-drained-two-defi-protocols-for-195m-581f.html",
    "date": "2026-06-30T06:39:43Z"
  },
  {
    "title": "Reading the OCR Protocol So You Don't Have To (But You Should Anyway)",
    "slug": "reading-the-ocr-protocol-so-you-dont-have-to-but-you-should-anyway-3a1c",
    "url": "/writings/reading-the-ocr-protocol-so-you-dont-have-to-but-you-should-anyway-3a1c.html",
    "date": "2026-06-29T11:45:15Z"
  },
  {
    "title": "DONs Are Not Multisigs - The Architecture Difference That Actually Matters for Security",
    "slug": "dons-are-not-multisigs-the-architecture-difference-that-actually-matters-for-security-2ml5",
    "url": "/writings/dons-are-not-multisigs-the-architecture-difference-that-actually-matters-for-security-2ml5.html",
    "date": "2026-06-28T05:39:00Z"
  },
  {
    "title": "Before OCR: How Chainlink Used to Work, and Why It Had to Change",
    "slug": "before-ocr-how-chainlink-used-to-work-and-why-it-had-to-change-275a",
    "url": "/writings/before-ocr-how-chainlink-used-to-work-and-why-it-had-to-change-275a.html",
    "date": "2026-06-27T05:52:33Z"
  },
  {
    "title": "The Oracle Problem Isn't About Data. It's About Trust Minimization.",
    "slug": "the-oracle-problem-isnt-about-data-its-about-trust-minimization-jap",
    "url": "/writings/the-oracle-problem-isnt-about-data-its-about-trust-minimization-jap.html",
    "date": "2026-06-26T06:01:39Z"
  }
]

import re

for file_path in ["components/blog-preview.tsx", "app/blog/page.tsx"]:
    with open(file_path, "r") as f:
        content = f.read()
    
    # We need to insert the new posts into the 'posts' array.
    # We'll just replace 'const posts = [' with 'const posts = [ \n <new posts> \n'
    
    new_posts_str = ",\n".join(json.dumps(post, indent=2) for post in new_posts) + ",\n"
    
    content = content.replace("const posts = [\n", "const posts = [\n" + new_posts_str)
    
    # Write back
    with open(file_path, "w") as f:
        f.write(content)

# Update app/blog/[slug]/page.tsx
file_path = "app/blog/[slug]/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

new_maps_str = """
  "chainlink-automation-isnt-a-cron-job-its-a-consensus-decision-4986": "/writings/chainlink-automation-isnt-a-cron-job-its-a-consensus-decision-4986.html",
  "why-blocktimestamp-is-an-nft-mint-exploit-waiting-to-happen-and-what-vrf-actually-does-instead-4en9": "/writings/why-blocktimestamp-is-an-nft-mint-exploit-waiting-to-happen-and-what-vrf-actually-does-instead-4en9.html",
  "chainlinks-foundation-layer-explained-for-smart-contract-auditors-51g1": "/writings/chainlinks-foundation-layer-explained-for-smart-contract-auditors-51g1.html",
  "the-latestrounddata-footgun-that-drained-two-defi-protocols-for-195m-581f": "/writings/the-latestrounddata-footgun-that-drained-two-defi-protocols-for-195m-581f.html",
  "reading-the-ocr-protocol-so-you-dont-have-to-but-you-should-anyway-3a1c": "/writings/reading-the-ocr-protocol-so-you-dont-have-to-but-you-should-anyway-3a1c.html",
  "dons-are-not-multisigs-the-architecture-difference-that-actually-matters-for-security-2ml5": "/writings/dons-are-not-multisigs-the-architecture-difference-that-actually-matters-for-security-2ml5.html",
  "before-ocr-how-chainlink-used-to-work-and-why-it-had-to-change-275a": "/writings/before-ocr-how-chainlink-used-to-work-and-why-it-had-to-change-275a.html",
  "the-oracle-problem-isnt-about-data-its-about-trust-minimization-jap": "/writings/the-oracle-problem-isnt-about-data-its-about-trust-minimization-jap.html",
"""

content = content.replace("const postsMap: Record<string, string> = {\n", "const postsMap: Record<string, string> = {" + new_maps_str)

with open(file_path, "w") as f:
    f.write(content)

print("Files updated successfully.")
