// src/components/CodeShowcase.jsx
// Interactive code snippet showcase with syntax highlighting
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiCode } from "react-icons/fi";

// Sample code snippets showcasing audit/development skills
const codeSnippets = [
    {
        title: "Reentrancy Guard",
        language: "solidity",
        description: "Protection against reentrancy attacks",
        code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

abstract contract ReentrancyGuard {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }
}`,
    },
    {
        title: "Safe Math Check",
        language: "solidity",
        description: "Overflow protection pattern",
        code: `// Checked arithmetic example
function safeAdd(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a, "SafeMath: addition overflow");
    return c;
}

function safeSub(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b <= a, "SafeMath: subtraction underflow");
    return a - b;
}`,
    },
    {
        title: "Access Control",
        language: "solidity",
        description: "Role-based access pattern",
        code: `// Role-based access control
mapping(bytes32 => mapping(address => bool)) private _roles;

bytes32 public constant ADMIN_ROLE = keccak256("ADMIN");
bytes32 public constant MINTER_ROLE = keccak256("MINTER");

modifier onlyRole(bytes32 role) {
    require(hasRole(role, msg.sender), "AccessControl: unauthorized");
    _;
}

function hasRole(bytes32 role, address account) public view returns (bool) {
    return _roles[role][account];
}`,
    },
];

// Simple syntax highlighting
function highlightCode(code, language) {
    if (language !== "solidity") return code;

    // Keywords
    const keywords = ["function", "contract", "abstract", "modifier", "require", "return", "returns", "public", "private", "internal", "external", "view", "pure", "constant", "if", "else", "for", "while", "mapping", "uint256", "address", "bool", "bytes32", "string", "memory", "storage", "calldata"];

    let highlighted = code
        // Comments
        .replace(/(\/\/.*$)/gm, '<span class="text-green-500">$1</span>')
        // Strings
        .replace(/(".*?")/g, '<span class="text-amber-400">$1</span>')
        // Numbers
        .replace(/\b(\d+)\b/g, '<span class="text-purple-400">$1</span>');

    // Keywords
    keywords.forEach(kw => {
        const regex = new RegExp(`\\b(${kw})\\b`, 'g');
        highlighted = highlighted.replace(regex, '<span class="text-blue-400 font-semibold">$1</span>');
    });

    return highlighted;
}

export default function CodeShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippets[activeIndex].code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="code-showcase" className="max-w-4xl mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <FiCode className="text-gold text-3xl mx-auto mb-3" />
                <h2 className="text-3xl font-heading font-bold text-dark-temple dark:text-gold mb-3">
                    Code Showcase
                </h2>
                <p className="text-brown/70 dark:text-beige/60 max-w-xl mx-auto">
                    Security patterns and best practices I implement in my audits
                </p>
            </motion.div>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
                {codeSnippets.map((snippet, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeIndex === index
                                ? "bg-gold text-dark-temple"
                                : "bg-white/50 dark:bg-dark-temple/50 border border-gold/30 text-brown dark:text-beige hover:border-gold"
                            }
            `}
                    >
                        {snippet.title}
                    </button>
                ))}
            </div>

            {/* Code display */}
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden border border-gold/20 bg-[#1a1a2e] shadow-xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#16162a] border-b border-gold/10">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="ml-3 text-sm text-beige/70">{codeSnippets[activeIndex].title}</span>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1 rounded text-xs bg-gold/10 text-gold hover:bg-gold/20 transition"
                    >
                        {copied ? <><FiCheck /> Copied!</> : <><FiCopy /> Copy</>}
                    </button>
                </div>

                {/* Code */}
                <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                    <code
                        className="text-beige/90 font-mono"
                        dangerouslySetInnerHTML={{
                            __html: highlightCode(codeSnippets[activeIndex].code, codeSnippets[activeIndex].language)
                        }}
                    />
                </pre>

                {/* Description */}
                <div className="px-4 py-3 bg-[#16162a] border-t border-gold/10">
                    <p className="text-xs text-beige/60">{codeSnippets[activeIndex].description}</p>
                </div>
            </motion.div>
        </section>
    );
}
