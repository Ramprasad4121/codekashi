import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Writing | Ramprasad',
  description: 'Writings on smart contract security, audit findings, and DeFi research',
}

const posts = [
  {
    title: "INCIDENT REPORT: OPERATIONAL SECURITY FAILURE AND TREASURY COMPROMISE AT STEP FINANCE (JANUARY 2026)",
    url: "https://docs.google.com/document/d/1RWfatb-H2O0kiwTdE5_nvcPcwhsP4LQFWLkirliiSiM/edit?usp=sharing",
    date: "2026-02-05T12:00:00Z"
  },
  {
    title: "Proof of Stake vs Proof of Work: A Look Through the Lens of Security",
    url: "https://medium.com/@0xramprasad/proof-of-stake-vs-proof-of-work-a-look-through-the-lens-of-security-cafeaabf74ef",
    date: "2025-07-29T13:46:10Z"
  },
  {
    title: "Trail of Bits: Raising the Standard for Blockchain Security",
    url: "https://medium.com/@0xramprasad/trail-of-bits-raising-the-standard-for-blockchain-security-d40710cf2da3",
    date: "2025-04-26T05:51:04Z"
  },
  {
    title: "Ethereum vs. Solana: The Battle of Layer 1 Giants",
    url: "https://medium.com/@0xramprasad/ethereum-vs-solana-the-battle-of-layer-1-giants-7e22d54f6acf",
    date: "2025-04-15T16:38:55Z"
  },
  {
    title: "Major DeFi Security Incidents in January 2025",
    url: "https://medium.com/@0xramprasad/major-defi-security-incidents-in-january-2025-10a839507d3c",
    date: "2025-02-08T08:07:01Z"
  },
  {
    title: "Thala Protocol’s Recovery from a $25M Exploit",
    url: "https://medium.com/@0xramprasad/thala-protocols-recovery-from-a-25m-exploit-0a06c3faf24a",
    date: "2024-12-01T17:16:29Z"
  },
  {
    title: "Unchecked External Calls and the Polter Finance Hack",
    url: "https://medium.com/@0xramprasad/unchecked-external-calls-and-the-polter-finance-hack-904e3dcb6adb",
    date: "2024-12-01T17:14:42Z"
  },
  {
    title: "How Governance Vulnerabilities Enabled the AquaDAO Exploit",
    url: "https://medium.com/@0xramprasad/how-governance-vulnerabilities-enabled-the-aquadao-exploit-aa2857e507c3",
    date: "2024-12-01T17:12:57Z"
  },
  {
    title: "How Mutation Testing Could Have Prevented the Penpie Reentrancy Attack",
    url: "https://medium.com/@0xramprasad/how-mutation-testing-could-have-prevented-the-penpie-reentrancy-attack-14899b608a46",
    date: "2024-10-21T14:10:27Z"
  },
  {
    title: "Trail of Bits: Leading the Way in Cybersecurity",
    url: "https://medium.com/@0xramprasad/trail-of-bits-leading-the-way-in-cybersecurity-bbb2e28bac10",
    date: "2024-10-20T17:21:37Z"
  },
  {
    title: "Understanding EVM Opcodes: A Simple Guide",
    url: "https://medium.com/@0xramprasad/understanding-evm-opcodes-a-simple-guide-c7fb20454adc",
    date: "2024-08-30T04:50:51Z"
  }
]

export default function BlogPage() {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-zinc-400">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
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
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
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
