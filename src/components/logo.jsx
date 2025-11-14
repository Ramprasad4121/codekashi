import React from "react";
import yantra from "../assets/gayatri-yantra.svg";

export default function Logo({ size = 48 }) {
  return (
    <div
      className="animate-spin-slow select-none"
      style={{ width: size, height: size }}
    >
      <img
        src={yantra}
        alt="CodeKashi Logo"
        className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(212,160,23,0.4)]"
      />
    </div>
  );
}