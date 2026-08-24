'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'CCIP Rebase Token',
    description: 'Built a cross-chain rebase token with Chainlink CCIP, elastic supply mechanics, cross-chain messaging, Foundry tests, and Sepolia deployment workflows.',
    tags: ['Solidity', 'Chainlink CCIP', 'Cross-chain', 'Foundry'],
    link: 'https://github.com/Ramprasad4121/ccip-rebase-token',
  },
  {
    name: 'DeFi Stable Coin',
    description: 'Built an over-collateralized stablecoin system with WETH collateral, mint/burn flows, liquidation mechanics, Foundry unit/fuzz testing, and Slither analysis.',
    tags: ['Solidity', 'DeFi', 'Foundry', 'Slither'],
    link: 'https://github.com/Ramprasad4121/defi-stable-coin',
  },
  {
    name: 'Anchor-Sentinel',
    description: 'Built a Rust static analyzer for Solana/Anchor programs with 20+ security detectors, severity filtering, version-diff scanning, CI integration, and executable exploit PoC generation.',
    tags: ['Rust', 'Solana', 'Anchor', 'Security'],
    link: 'https://github.com/Ramprasad4121/anchor-sentinel',
  },
  {
    name: 'Account Abstraction',
    description: 'Built smart-wallet flows using an EVM account-abstraction model with an alt-mempool implementation, plus native zkSync account abstraction via IAccount; tested deployments on Arbitrum and zkSync.',
    tags: ['EVM', 'zkSync', 'Arbitrum', 'Account Abstraction'],
    link: 'https://github.com/Ramprasad4121/account-abstraction',
  },
  {
    name: 'Session Policy Wallet',
    description: 'Built an on-chain policy layer for restricted session keys with spend limits and contract allowlists; deployed and tested the fail-closed policy validator on Monad Testnet.',
    tags: ['EVM', 'Monad', 'Smart Wallets'],
    link: 'https://github.com/Ramprasad4121/session-policy-wallet',
  },
  {
    name: 'Merkle Airdrop & NFT Raffle',
    description: 'Merkle Airdrop with Ethereum/zkSync support and proof generation; NFT Marketplace with ERC-721/1155 assets and Chainlink VRF-backed raffle mechanics.',
    tags: ['EVM', 'zkSync', 'Chainlink VRF', 'NFTs'],
    link: 'https://github.com/Ramprasad4121/merkle-airdrop',
  },
  {
    name: 'Governance DAO',
    description: 'Built a governance DAO using OpenZeppelin Governor and ERC-20 voting tokens, with proposal creation, token delegation, quorum, timelocked execution, and Sepolia deployment. Developed and tested the contracts with Foundry.',
    tags: ['Solidity', 'OpenZeppelin', 'Governance', 'Foundry'],
    link: 'https://github.com/Ramprasad4121/dao',
  },
]

// Simple SVG Github Icon
const GithubIcon = ({ className = "inline-block mr-2 text-zinc-500 group-hover:text-white transition-colors" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.48-1.54 6.48-7.89a5.06 5.06 0 0 0-1.38-3.6 5.17 5.17 0 0 0-.14-3.52s-1.13-.36-3.6 1.3a12.2 12.2 0 0 0-6.5 0c-2.47-1.66-3.6-1.3-3.6-1.3a5.17 5.17 0 0 0-.14 3.52A5.06 5.06 0 0 0 2 8.09c0 6.35 3.34 7.54 6.48 7.89A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-6 bg-[#000000] text-zinc-400 font-sans border-t border-zinc-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center mb-12">
             <div className="flex items-center gap-4 pr-6">
               <h2 className="text-white text-xl font-medium tracking-tight">
                 Projects
               </h2>
               <a 
                 href="https://github.com/Ramprasad4121" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex items-center text-zinc-500 hover:text-white transition-colors"
               >
                 <GithubIcon className="inline-block w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
               </a>
             </div>
             <div className="h-[1px] flex-1 bg-zinc-900/50" />
          </div>

          <div className="flex flex-col space-y-12 md:space-y-16">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 flex items-center">
                    <GithubIcon />
                    <span className="underline decoration-zinc-700 underline-offset-4 group-hover:decoration-zinc-400 transition-colors">
                      {project.name}
                    </span>
                    <span className="ml-1 text-zinc-600 group-hover:text-white transition-colors">→</span>
                  </h3>
                  
                
                </div>
                
                <p className="text-base sm:text-lg leading-[1.8] text-zinc-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
