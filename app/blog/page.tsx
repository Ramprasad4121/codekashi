import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Writing | Ramprasad',
  description: 'Writings on smart contract security, audit findings, and DeFi research',
}

const posts = [
{
  "title": "Five Chainlink Products. One Architecture. The DON+OCR Pattern Underneath Everything.",
  "slug": "five-chainlink-products-one-architecture-the-donocr-pattern-underneath-everything-597a",
  "url": "/writings/five-chainlink-products-one-architecture-the-donocr-pattern-underneath-everything-597a.html",
  "date": "2026-07-17T09:43:42Z"
},
{
  "title": "I Asked in a Chainlink Discord: \"Is Chainlink Building Any AI?\" The Answer Sent Me Down a Rabbit Hole for Three Days.",
  "slug": "i-asked-in-a-chainlink-discord-is-chainlink-building-any-ai-the-answer-sent-me-down-a-rabbit-5b7j",
  "url": "/writings/i-asked-in-a-chainlink-discord-is-chainlink-building-any-ai-the-answer-sent-me-down-a-rabbit-5b7j.html",
  "date": "2026-07-14T11:04:30Z"
},
{
  "title": "CCIP's Router Pattern: Why a Single Immutable Contract Per Chain Is the Entire Security Bet",
  "slug": "ccips-router-pattern-why-a-single-immutable-contract-per-chain-is-the-entire-security-bet-14ba",
  "url": "/writings/ccips-router-pattern-why-a-single-immutable-contract-per-chain-is-the-entire-security-bet-14ba.html",
  "date": "2026-07-10T10:47:56Z"
},
{
  "title": "Chainlink Staking Isn't a Yield Farm. It's Cryptoeconomic Security With Real Consequences.",
  "slug": "chainlink-staking-isnt-a-yield-farm-its-cryptoeconomic-security-with-real-consequences-41m2",
  "url": "/writings/chainlink-staking-isnt-a-yield-farm-its-cryptoeconomic-security-with-real-consequences-41m2.html",
  "date": "2026-07-08T10:36:58Z"
},
{
  "title": "TerraUSD Collapsed With $18B in Circulation. Chainlink Proof of Reserve Would Have Caught It Earlier",
  "slug": "terrausd-collapsed-with-18b-in-circulation-chainlink-proof-of-reserve-would-have-caught-it-earlier-4n3j",
  "url": "/writings/terrausd-collapsed-with-18b-in-circulation-chainlink-proof-of-reserve-would-have-caught-it-earlier-4n3j.html",
  "date": "2026-07-07T11:40:44Z"
},
{
  "title": "Chainlink Functions Is Serverless Compute With Oracle Guarantees. Here's the Full Request Lifecycle.",
  "slug": "chainlink-functions-is-serverless-compute-with-oracle-guarantees-heres-the-full-request-lifecycle-56i0",
  "url": "/writings/chainlink-functions-is-serverless-compute-with-oracle-guarantees-heres-the-full-request-lifecycle-56i0.html",
  "date": "2026-07-06T09:55:42Z"
},
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
},
  {
    title: "SOC 2 Type I & Type II: A Complete Beginner-to-Expert Guide",
    slug: "soc2-type-1-and-2-guide",
    url: "/writings/soc2-guide.html",
    date: "2026-06-25T12:00:00Z"
  },
  {
    title: "INCIDENT REPORT: OPERATIONAL SECURITY FAILURE AND TREASURY COMPROMISE AT STEP FINANCE (JANUARY 2026)",
    slug: "step-finance-incident",
    url: "https://docs.google.com/document/d/1RWfatb-H2O0kiwTdE5_nvcPcwhsP4LQFWLkirliiSiM/edit?usp=sharing",
    date: "2026-02-05T12:00:00Z"
  },
  {
    title: "Proof of Stake vs Proof of Work: A Look Through the Lens of Security",
    slug: "proof-of-stake-vs-proof-of-work",
    url: "https://medium.com/@0xramprasad/proof-of-stake-vs-proof-of-work-a-look-through-the-lens-of-security-cafeaabf74ef",
    date: "2025-07-29T13:46:10Z"
  },
  {
    title: "Trail of Bits: Raising the Standard for Blockchain Security",
    slug: "trail-of-bits-raising-the-standard",
    url: "https://medium.com/@0xramprasad/trail-of-bits-raising-the-standard-for-blockchain-security-d40710cf2da3",
    date: "2025-04-26T05:51:04Z"
  },
  {
    title: "Ethereum vs. Solana: The Battle of Layer 1 Giants",
    slug: "ethereum-vs-solana",
    url: "https://medium.com/@0xramprasad/ethereum-vs-solana-the-battle-of-layer-1-giants-7e22d54f6acf",
    date: "2025-04-15T16:38:55Z"
  },
  {
    title: "Major DeFi Security Incidents in January 2025",
    slug: "major-defi-security-incidents-january-2025",
    url: "https://medium.com/@0xramprasad/major-defi-security-incidents-in-january-2025-10a839507d3c",
    date: "2025-02-08T08:07:01Z"
  },
  {
    title: "Thala Protocol’s Recovery from a $25M Exploit",
    slug: "thala-protocol-recovery",
    url: "https://medium.com/@0xramprasad/thala-protocols-recovery-from-a-25m-exploit-0a06c3faf24a",
    date: "2024-12-01T17:16:29Z"
  },
  {
    title: "Unchecked External Calls and the Polter Finance Hack",
    slug: "unchecked-external-calls-polter-finance",
    url: "https://medium.com/@0xramprasad/unchecked-external-calls-and-the-polter-finance-hack-904e3dcb6adb",
    date: "2024-12-01T17:14:42Z"
  },
  {
    title: "How Governance Vulnerabilities Enabled the AquaDAO Exploit",
    slug: "governance-vulnerabilities-aquadao",
    url: "https://medium.com/@0xramprasad/how-governance-vulnerabilities-enabled-the-aquadao-exploit-aa2857e507c3",
    date: "2024-12-01T17:12:57Z"
  },
  {
    title: "How Mutation Testing Could Have Prevented the Penpie Reentrancy Attack",
    slug: "mutation-testing-penpie",
    url: "https://medium.com/@0xramprasad/how-mutation-testing-could-have-prevented-the-penpie-reentrancy-attack-14899b608a46",
    date: "2024-10-21T14:10:27Z"
  },
  {
    title: "Trail of Bits: Leading the Way in Cybersecurity",
    slug: "trail-of-bits-leading-the-way",
    url: "https://medium.com/@0xramprasad/trail-of-bits-leading-the-way-in-cybersecurity-bbb2e28bac10",
    date: "2024-10-20T17:21:37Z"
  },
  {
    title: "Understanding EVM Opcodes: A Simple Guide",
    slug: "understanding-evm-opcodes",
    url: "https://medium.com/@0xramprasad/understanding-evm-opcodes-a-simple-guide-c7fb20454adc",
    date: "2024-08-30T04:50:51Z"
  }
]

export default function BlogPage() {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-zinc-400">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/#writing" className="text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
            <span>←</span> Back to Home
          </Link>
        </div>

        {/* Section Header */}
        <div className="flex items-center mb-12">
           <div className="flex items-center gap-4 pr-6">
             <h1 className="text-white text-3xl font-medium tracking-tight">
               Writing
             </h1>
           </div>
           <div className="h-[1px] flex-1 bg-zinc-900/50" />
        </div>

        <p className="text-base sm:text-lg text-zinc-400 mb-16 leading-[1.8] max-w-xl">
          I write about smart contract security, audit methodologies, and the craft of building secure decentralized systems.
        </p>

        <div className="flex flex-col space-y-2">
          {posts.map((post) => (
            <a
              key={post.title}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center py-5 border-b border-zinc-900/30 hover:px-2 transition-all duration-300 -mx-2 px-2"
            >

              <div className="flex-1">
                <h3 className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
          {posts.length === 0 && (
            <p className="text-zinc-500 text-sm">No posts published yet.</p>
          )}
        </div>
      </main>
      <div className="max-w-3xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  )
}
