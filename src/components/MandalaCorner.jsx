// src/components/MandalaCorner.jsx
import React from "react";

/**
 * MandalaCorner
 * Props:
 *  - pos: "tl" | "tr" | "bl" | "br" (top-left, top-right, bottom-left, bottom-right)
 *  - size: number (px)
 *  - opacity: number (0..1)
 *  - className: extra classes if needed
 *
 * This renders a subtle SVG mandala in a page corner. Pointer-events are disabled so it never interferes with UI.
 */

export default function MandalaCorner({ pos = "tl", size = 140, opacity = 0.06, className = "" }) {
  const positions = {
    tl: { top: 8, left: 8 },
    tr: { top: 8, right: 8 },
    bl: { bottom: 8, left: 8 },
    br: { bottom: 8, right: 8 },
  };

  const style = {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    pointerEvents: "none",
    opacity,
    ...positions[pos],
  };

  return (
    <div style={style} className={`mandala-corner-svg ${className}`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <radialGradient id="g" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#D4A017" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#D4A017" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Simple mandala-ish decorative rings and petals (lightweight) */}
        <g transform="translate(50,50)">
          <circle r="28" fill="url(#g)" />
          <g stroke="#D4A017" strokeWidth="0.8" fill="none" strokeOpacity="0.85">
            <circle r="22" />
            <g>
              {Array.from({ length: 8 }).map((_, i) => {
                const a = (i * Math.PI * 2) / 8;
                const x1 = Math.cos(a) * 16;
                const y1 = Math.sin(a) * 16;
                const x2 = Math.cos(a) * 28;
                const y2 = Math.sin(a) * 28;
                return <path key={i} d={`M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${(x1*1.2).toFixed(2)} ${(y1*1.2).toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`} strokeLinecap="round" />;
              })}
            </g>
            <circle r="6" strokeOpacity="0.6" />
          </g>
        </g>
      </svg>
    </div>
  );
}