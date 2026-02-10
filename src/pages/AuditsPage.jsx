// src/pages/AuditsPage.jsx
import React from "react";
import { FiGithub } from "react-icons/fi";
import AuditCard from "../components/AuditCard.jsx";

const audits = [
  {
    name: "PuppyRaffle",
    type: "DeFi / RNG Audit",
    findings: [
      "Critical: Predictable randomness",
      "High: Reentrancy vector",
      "Medium: Logic flow issues",
      "Low: Gas inefficiencies",
    ],
    tags: ["Reentrancy", "Randomness", "Gas"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/Puppy-Raffle-Audit-Report.pdf",
  },
  {
    name: "ThunderLoan",
    type: "Flash Loan Audit",
    findings: [
      "Critical: Repay math mismatch",
      "High: Callback exploit surface",
      "Medium: State sync risk",
    ],
    tags: ["Flash Loans", "Math Bugs", "DeFi"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/Thunder-Loan-Audit-Report.pdf",
  },
  {
    name: "PasswordStore",
    type: "Access Control Audit",
    findings: [
      "Critical: Unauthorized writes",
      "Medium: Storage shadowing",
      "Low: Missing checks",
    ],
    tags: ["Access Control", "Storage Bugs"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/PasswordStore-Audit-Report.pdf",
  },
  {
    name: "Tswap",
    type: "DEX Logic Audit",
    findings: [
      "High: Pricing formula flaw",
      "Medium: Rounding issues",
      "Low: Gas waste",
    ],
    tags: ["DEX", "Pricing", "DeFi"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/tswap-audit.pdf",
  },
  {
    name: "BossBridge",
    type: "Cross-Chain Bridge Audit",
    findings: [
      "High: Incorrect trust boundary assumptions",
      "Medium: Missing message sanity checks",
      "Low: Weak validation layers",
    ],
    tags: ["Bridge", "Cross-chain", "Validation"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/Boss-Bridge-Audit-Report.pdf",
  },
  {
    name: "VaultGuardians",
    type: "Vault / Funds Safety Audit",
    findings: [
      "High: Access control flaws",
      "Medium: Withdrawal bypass scenario",
      "Low: State sync vulnerability",
    ],
    tags: ["Vault", "Access Control", "Fund Safety"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/vault-guardians.pdf",
  },
];

export default function AuditsPage() {
  return (
    <div className="section">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">Security Audits</h1>
          <a
            href="https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="GitHub Audits Repository"
          >
            <FiGithub size={28} />
          </a>
        </div>
        <p className="text-gray-600 max-w-2xl">
          Publicly documented smart contract audits covering DeFi, randomness, 
          flash loans, DEX pricing, bridges, and vault security.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-8 mb-16 py-8 border-y border-gray-200">
        <div className="text-center">
          <div className="text-3xl font-bold">{audits.length}</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">Audits</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">15+</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">Findings</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">5</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">Critical</div>
        </div>
      </div>

      {/* Audit Cards with Alternating Layout */}
      <div>
        {audits.map((audit, index) => (
          <AuditCard
            key={audit.name}
            audit={audit}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
