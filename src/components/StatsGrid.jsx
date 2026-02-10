// src/components/StatsGrid.jsx
import React from "react";

const stats = [
  { value: "6+", label: "Audits Completed" },
  { value: "15+", label: "Critical/High Findings" },
  { value: "Top 10%", label: "Platform Ranking" },
];

export default function StatsGrid() {
  return (
    <section className="section section-alt">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
