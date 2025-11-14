// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiTwitter, FiGithub, FiCopy, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ramprasadgoud34@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 relative">
      
      {/* Soft gold glow */}
      <div className="absolute -top-28 right-0 w-64 h-64 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-6"
      >
        Contact
      </motion.h2>

      {/* Subtitle */}
      <p className="text-center text-brown/80 dark:text-beige/70 max-w-xl mx-auto mb-14">
        Whether you’re hiring for a security audit, smart contract engineering role,
        or long-term collaboration — I’d love to connect.  
        I respond fastest through email or X.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* EMAIL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md text-center"
        >
          <FiMail className="text-gold text-3xl mx-auto mb-3" />
          <h3 className="font-heading font-semibold text-dark-temple dark:text-gold mb-1">
            Email
          </h3>
          <p className="text-sm text-brown/80 dark:text-beige/80 mb-3">
            {email}
          </p>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 mx-auto px-4 py-2 text-sm border border-gold rounded-full text-gold hover:bg-gold/10 transition"
          >
            {copied ? (
              <>
                <FiCheckCircle /> Copied
              </>
            ) : (
              <>
                <FiCopy /> Copy Email
              </>
            )}
          </button>
        </motion.div>

        {/* X PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md text-center"
        >
          <FiTwitter className="text-gold text-3xl mx-auto mb-3" />
          <h3 className="font-heading font-semibold text-dark-temple dark:text-gold mb-1">
            X (Twitter)
          </h3>
          <p className="text-sm text-brown/80 dark:text-beige/80 mb-3">
            @0xramprasad
          </p>

          <a
            href="https://x.com/0xramprasad"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gold rounded-full text-gold hover:bg-gold/10 transition"
          >
            Visit Profile <FiArrowUpRight />
          </a>
        </motion.div>

        {/* GITHUB */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md text-center"
        >
          <FiGithub className="text-gold text-3xl mx-auto mb-3" />
          <h3 className="font-heading font-semibold text-dark-temple dark:text-gold mb-1">
            GitHub
          </h3>
          <p className="text-sm text-brown/80 dark:text-beige/80 mb-3">
            github.com/Ramprasad4121
          </p>

          <a
            href="https://github.com/Ramprasad4121"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gold rounded-full text-gold hover:bg-gold/10 transition"
          >
            View GitHub <FiArrowUpRight />
          </a>
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mt-14 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#resume"
          className="px-6 py-3 rounded-full bg-gold text-dark-temple font-semibold hover:brightness-110 transition shadow-md"
        >
          View Resume
        </a>

        <a
          href="#audits"
          className="px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold/10 transition"
        >
          View Audits
        </a>
      </motion.div>
    </section>
  );
}