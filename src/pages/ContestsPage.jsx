// src/pages/ContestsPage.jsx
import React from "react";
import { FiAward, FiArrowUpRight } from "react-icons/fi";

const contests = [
  {
    platform: "Sherlock",
    name: "Fluid DEX V2",
    rank: "Participating",
    findings: "In Progress",
    prize: "$200,000 Pool",
    date: "Feb 2026",
    link: "https://audits.sherlock.xyz/contests/1225",
  },
  // Add more contest entries as you participate
];

export default function ContestsPage() {
  return (
    <div className="section">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contest Results</h1>
        <p className="text-gray-600 max-w-2xl">
          Competition rankings and achievements from Sherlock, Code4rena, and other audit platforms.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-8 mb-16 py-8 border-y border-gray-200">
        <div className="text-center">
          <div className="text-3xl font-bold">{contests.length}</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">Contests</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">-</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">Best Rank</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">-</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">Total Earned</div>
        </div>
      </div>

      {/* Contest Cards */}
      {contests.length > 0 ? (
        <div className="space-y-8">
          {contests.map((contest, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-b border-gray-200"
            >
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-wider mb-2">
                  <FiAward />
                  {contest.platform}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{contest.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500">Rank</div>
                    <div className="font-semibold">{contest.rank}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Findings</div>
                    <div className="font-semibold">{contest.findings}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Prize Pool</div>
                    <div className="font-semibold">{contest.prize}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Date</div>
                    <div className="font-semibold">{contest.date}</div>
                  </div>
                </div>

                <a
                  href={contest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View Contest
                  <FiArrowUpRight />
                </a>
              </div>

              <div className="flex items-center justify-center bg-gray-50 p-12">
                <div className="text-6xl font-bold text-gray-200">
                  {contest.platform.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-gray-400">
          <FiAward className="mx-auto text-6xl mb-4" />
          <p className="text-xl">Contest results coming soon...</p>
        </div>
      )}
    </div>
  );
}
