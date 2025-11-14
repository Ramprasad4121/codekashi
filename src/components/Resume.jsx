// src/components/Resume.jsx
import React from "react";
import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative">
      {/* Glow accent */}
      <div className="absolute -top-16 right-0 w-48 h-48 bg-gold opacity-[0.06] blur-3xl rounded-full pointer-events-none"></div>

      <h3 className="text-3xl font-heading font-bold text-dark-temple dark:text-gold text-center mb-6">
        Resume
      </h3>

      <p className="text-center max-w-2xl mx-auto text-brown/80 dark:text-beige/70 mb-10">
        Download my latest resume or preview it directly on the site.
      </p>

      {/* ---------- RESUME THUMBNAIL CARD ---------- */}
      <div className="flex justify-center mb-10">
        <a
          href="/resume/Ramprasad_Resume.pdf"
          target="_blank"
          className="
            group 
            w-[280px] h-[380px] 
            rounded-xl overflow-hidden 
            border border-gold/30 
            shadow-lg bg-white/90 dark:bg-dark-temple/80 
            hover:shadow-2xl hover:scale-[1.02]
            transition-all duration-300 relative
          "
        >
          {/* Thumbnail */}
          <img
            src="/resume/resume-thumb.png"
            alt="Resume Thumbnail"
            className="w-full h-full object-cover group-hover:brightness-110 transition"
          />

          {/* Overlay on hover */}
          <div
            className="
              absolute inset-0 bg-black/40 opacity-0 
              group-hover:opacity-100 transition 
              flex items-center justify-center
            "
          >
            <button className="px-4 py-2 rounded-md bg-gold text-dark-temple font-semibold shadow">
              View Resume
            </button>
          </div>
        </a>
      </div>

      {/* ---------- DOWNLOAD BUTTON ---------- */}
      <div className="flex justify-center mb-14">
        <a
          href="/resume/Ramprasad_Resume.pdf"
          download
          className="px-6 py-3 bg-gold text-dark-temple font-semibold rounded-lg flex items-center gap-2 hover:brightness-110 transition shadow-md"
        >
          <FiDownload />
          Download Resume (PDF)
        </a>
      </div>

      {/* ---------- EMBEDDED RESUME PREVIEW ---------- */}
      {/* <div className="w-full h-[700px] bg-white dark:bg-dark-temple/60 border border-gold/20 rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="/resume/Ramprasad_Resume.pdf"
          className="w-full h-full"
          title="Resume Preview"
        />
      </div> */}
    </section>
  );
}