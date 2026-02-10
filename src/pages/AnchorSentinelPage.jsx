// src/pages/AnchorSentinelPage.jsx
import React from "react";
import { FiGithub, FiArrowUpRight, FiShield, FiTerminal, FiGitBranch, FiZap, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

const features = [
  {
    icon: FiShield,
    title: "Automated Vulnerability Scanning",
    description: "Scans entire Anchor projects for security flaws including reinitialization attacks, unsafe CPI, missing PDA bump checks, and reentrancy vectors.",
  },
  {
    icon: FiAlertTriangle,
    title: "Exploit POC Generation",
    description: "Automatically generates Proof-of-Concept exploit code for identified vulnerabilities using the --generate-poc flag.",
  },
  {
    icon: FiGitBranch,
    title: "Security Diffing",
    description: "Compare two versions of a project with the diff command to track security changes over time during development.",
  },
  {
    icon: FiTerminal,
    title: "CI/CD Integration",
    description: "Built-in GitHub Actions support via anchor-sentinel init to automate security checks on every pull request.",
  },
];

const detectors = [
  { severity: "Critical", items: ["Reinitialization Attacks", "Unsafe CPI", "Missing PDA Bump Checks", "Reentrancy via CPI", "Unverified PDA Seeds"] },
  { severity: "High", items: ["Token-2022 Risks", "Unchecked Transfer Amounts", "Weak Authority Delegation", "Oracle Dependency Risks", "Loop Iteration Overflows"] },
  { severity: "Medium", items: ["Rent Exemption Bypass", "Missing Close Account", "Error Handling Suppression"] },
];

export default function AnchorSentinelPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">Open Source Tool</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Anchor Sentinel
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            A specialized security analysis and auditing tool for the <strong>Solana Anchor framework</strong>. 
            Scan projects, generate exploit POCs, and integrate security checks into CI/CD workflows.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://github.com/Ramprasad4121/anchor-sentinel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FiGithub />
              View on GitHub
            </a>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="px-3 py-1 border border-gray-300">Rust</span>
              <span className="px-3 py-1 border border-gray-300">Solana</span>
              <span className="px-3 py-1 border border-gray-300">CLI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section-alt">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Built for security researchers and developers working with Solana Anchor programs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <feature.icon className="text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="section">
        <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Get started with Anchor Sentinel in seconds.
        </p>

        <div className="space-y-6 max-w-2xl">
          <div className="bg-gray-900 text-gray-100 p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-gray-500 mb-2"># Install</div>
            <div>cargo install anchor-sentinel</div>
            <div className="mt-4 text-gray-500"># Scan a project</div>
            <div>anchor-sentinel scan ./programs/</div>
            <div className="mt-4 text-gray-500"># Generate exploit POCs</div>
            <div>anchor-sentinel scan --generate-poc ./programs/</div>
            <div className="mt-4 text-gray-500"># Filter by severity</div>
            <div>anchor-sentinel scan --severity critical,high ./programs/</div>
            <div className="mt-4 text-gray-500"># Security diff between versions</div>
            <div>anchor-sentinel diff v1/ v2/</div>
          </div>
        </div>
      </section>

      {/* Detectors */}
      <section className="section section-alt">
        <h2 className="text-3xl font-bold mb-4">Vulnerability Detectors</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Comprehensive detection covering critical Solana-specific attack vectors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {detectors.map((group) => (
            <div key={group.severity} className="card">
              <div className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 ${
                group.severity === "Critical" ? "bg-black text-white" :
                group.severity === "High" ? "bg-gray-800 text-white" :
                "bg-gray-200 text-gray-700"
              }`}>
                {group.severity}
              </div>
              <ul className="space-y-2">
                {group.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Anchor Sentinel is open source. Star it, fork it, contribute — let's make Solana safer together.
        </p>
        <a
          href="https://github.com/Ramprasad4121/anchor-sentinel"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <FiGithub />
          GitHub Repository
          <FiArrowUpRight />
        </a>
      </section>
    </div>
  );
}
