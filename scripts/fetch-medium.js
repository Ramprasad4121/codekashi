const fs = require('fs');
const path = require('path');

async function fetchMediumPosts() {
  const response = await fetch('https://medium.com/feed/@0xramprasad');
  const xml = await response.text();

  // Very basic regex parsing for RSS XML to avoid extra dependencies
  const items = xml.split('<item>').slice(1);
  
  const writingsDir = path.join(__dirname, '../public/writings');
  if (!fs.existsSync(writingsDir)) {
    fs.mkdirSync(writingsDir, { recursive: true });
  }

  items.forEach(item => {
    // Extract Title
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Unknown Title';

    // Extract Content
    const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    let content = contentMatch ? contentMatch[1] : '';

    if (!content) return;

    // Create a simplified slug matching our Next.js routing
    let slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    
    // Hand-tweaks to perfectly match the hardcoded slugs in `blog-preview.tsx`
    if (slug === 'proof-of-stake-vs-proof-of-work-a-look-through-the-lens-of-security') slug = 'proof-of-stake-vs-proof-of-work';
    if (slug === 'trail-of-bits-raising-the-standard-for-blockchain-security') slug = 'trail-of-bits-raising-the-standard';
    if (slug === 'ethereum-vs-solana-the-battle-of-layer-1-giants') slug = 'ethereum-vs-solana';
    if (slug === 'major-defi-security-incidents-in-january-2025') slug = 'major-defi-security-incidents-january-2025';
    if (slug === 'thala-protocol-s-recovery-from-a-25m-exploit') slug = 'thala-protocol-recovery';
    if (slug === 'unchecked-external-calls-and-the-polter-finance-hack') slug = 'unchecked-external-calls-polter-finance';
    if (slug === 'how-governance-vulnerabilities-enabled-the-aquadao-exploit') slug = 'governance-vulnerabilities-aquadao';
    if (slug === 'how-mutation-testing-could-have-prevented-the-penpie-reentrancy-attack') slug = 'mutation-testing-penpie';
    if (slug === 'trail-of-bits-leading-the-way-in-cybersecurity') slug = 'trail-of-bits-leading-the-way';
    if (slug === 'understanding-evm-opcodes-a-simple-guide') slug = 'understanding-evm-opcodes';

    // Wrap the HTML with some minimal styling to look good in the iframe
    const htmlFile = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
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
  <h1>${title}</h1>
  ${content}
</body>
</html>`;

    fs.writeFileSync(path.join(writingsDir, slug + '.html'), htmlFile);
    console.log('Saved ' + slug + '.html');
  });
}

fetchMediumPosts().catch(console.error);
