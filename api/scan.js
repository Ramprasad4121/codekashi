// api/scan.js
export default function handler(req, res) {
  const { code } = req.body || {};

  const findings = [];

  if (!code) {
    return res.status(200).json({
      findings: [],
      riskScore: 0
    });
  }

  // Fake detection rules
  if (/reentrancy/i.test(code)) {
    findings.push({
      type: "Reentrancy",
      description:
        "Potential reentrancy vulnerability detected. Use checks-effects-interactions or ReentrancyGuard."
    });
  }

  if (/tx\.origin/i.test(code)) {
    findings.push({
      type: "Auth Issue",
      description: "Usage of tx.origin detected. Always use msg.sender for authentication."
    });
  }

  if (/public\s+(uint|int|string|bool)/i.test(code)) {
    findings.push({
      type: "State Exposure",
      description: "Public state variables expose internal state. Consider private + getter."
    });
  }

  const riskScore = findings.length === 0 ? 1 : findings.length * 2;

  res.status(200).json({
    oracle: "vedic-auditor",
    findings,
    riskScore
  });
}