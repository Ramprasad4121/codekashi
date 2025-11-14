// src/pages/AuditCaseStudy.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiShield, FiGithub, FiFileText } from "react-icons/fi";

const auditData = {
  tswap: {
    title: "Tswap Protocol Audit",
    severity: "Critical",
    summary:
      "Comprehensive security assessment of swap execution, oracle integrations, liquidity flows, and callback surfaces.",
    attack_surface: [
      "Swap callbacks",
      "Oracle sync windows",
      "Liquidity provider state transitions",
      "Unchecked external calls"
    ],
    findings: [
      {
        title: "Reentrancy via callback window",
        impact: "Allowed attacker-controlled pricing during swap execution",
        description:
          "The swap contract exposed an unsafe callback timing window that allowed recursive swaps using manipulated intermediate states.",
        poc: `function attack() external {
    tswap.swap(...);
    // reenter via callback and manipulate state
}`,
        fix: "Isolated external calls, added reentrancy guards, tightened callback execution scope."
      },
      {
        title: "Oracle desync near boundary blocks",
        impact: "Inaccurate pricing allowed micro arbitrage",
        description:
          "Oracle data could fall behind price movements at block boundaries, allowing exploitation.",
        fix: "Added sync checkpoints + invariant checks on swap entry."
      }
    ],
    impact:
      "Prevented multi-million exploit & stabilized swap reliability across all edge cases.",
    github: "https://github.com/Ramprasad4121",
    report: "#"
  },

  thunderloan: {
    title: "ThunderLoan Audit",
    severity: "High",
    summary:
      "Analysis of flash-loan repayment flows, invariant enforcement, callback sanitization, and interest calculations.",
    attack_surface: [
      "Flash loan repayment",
      "Interest math",
      "Callback hooks",
      "Entry-point invariants"
    ],
    findings: [
      {
        title: "Interest rounding mismatch",
        impact: "Repayments under-calculated under specific volumes",
        description: "Integer division caused small exploitable rounding errors.",
        fix: "Normalized interest math using high-precision scaling."
      }
    ],
    impact:
      "Strengthened flash loan reliability & ensured repayment correctness under all volumes.",
    github: "https://github.com/Ramprasad4121",
    report: "#"
  }
};

export default function AuditCaseStudy() {
  const { id } = useParams();
  const audit = auditData[id];

  if (!audit)
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-xl">Audit not found.</div>
    );

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 relative">
      <div className="absolute -top-20 left-0 w-48 h-48 bg-gold opacity-[0.06] blur-3xl rounded-full" />
      <div className="absolute -bottom-32 right-0 w-64 h-64 bg-gold opacity-[0.05] blur-3xl rounded-full" />

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-brown/70 dark:text-beige/70 hover:text-gold mb-6"
      >
        <FiArrowLeft /> Back to Portfolio
      </Link>

      <h1 className="text-4xl font-heading font-bold text-dark-temple dark:text-gold">
        {audit.title}
      </h1>

      <div className="mt-2 inline-block px-3 py-1 rounded-full bg-gold text-dark-temple text-sm font-semibold">
        {audit.severity} Severity
      </div>

      <p className="mt-6 text-brown/80 dark:text-beige/80 text-lg leading-relaxed">
        {audit.summary}
      </p>

      {/* Attack Surface */}
      <div className="mt-10">
        <h3 className="font-heading text-2xl font-bold mb-3 text-dark-temple dark:text-gold flex items-center gap-2">
          <FiShield /> Attack Surface Reviewed
        </h3>

        <ul className="list-disc pl-5 text-brown/80 dark:text-beige/70 space-y-1">
          {audit.attack_surface.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* Findings */}
      <div className="mt-12 space-y-10">
        {audit.findings.map((f, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow relative">
            <h4 className="font-heading text-xl font-bold text-dark-temple dark:text-gold">
              {f.title}
            </h4>

            <p className="mt-2 text-sm text-brown/90 dark:text-beige/90"><strong>Impact:</strong> {f.impact}</p>
            <p className="mt-2 text-sm text-brown/80 dark:text-beige/80">{f.description}</p>

            {f.poc && (
              <pre className="mt-4 p-4 bg-dark-temple text-beige text-sm rounded-lg overflow-x-auto">
{f.poc}
              </pre>
            )}

            <p className="mt-4 text-sm text-brown/90 dark:text-beige/90">
              <strong>Fix:</strong> {f.fix}
            </p>
          </div>
        ))}
      </div>

      {/* Final Impact */}
      <div className="mt-12 p-6 bg-gold/10 border border-gold/30 rounded-xl">
        <h3 className="font-heading text-xl font-bold text-dark-temple dark:text-gold">Overall Impact</h3>
        <p className="mt-2 text-brown/80 dark:text-beige/80">{audit.impact}</p>
      </div>

      {/* CTA buttons */}
      <div className="mt-8 flex items-center gap-4">
        <a
          href={audit.github}
          target="_blank"
          className="px-5 py-2 bg-gold/20 text-brown dark:text-beige border border-gold/30 rounded-md flex items-center gap-2 hover:bg-gold/30 transition"
        >
          <FiGithub /> Repository
        </a>
        <a
          href={audit.report}
          className="px-5 py-2 border border-gold text-gold rounded-md flex items-center gap-2 hover:bg-gold/10 transition"
        >
          <FiFileText /> Full Report
        </a>
      </div>
    </section>
  );
}