// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { FiMail, FiSend, FiArrowUpRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// EmailJS Configuration (from existing ContactForm.jsx)
const EMAILJS_SERVICE_ID = "service_ahvezm8";
const EMAILJS_TEMPLATE_ID = "template_0rrzlha";
const EMAILJS_PUBLIC_KEY = "BJm4QGJh7IPt-_Ppb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.project || "Audit Request via codekashi.dev",
      message: formData.message,
      to_email: "ramprasadgoud34@gmail.com",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", project: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const contactLinks = [
    {
      icon: FaTelegram,
      label: "Telegram",
      value: "@Ramprasad4121",
      href: "https://t.me/ramprasad4121",
    },
    {
      icon: FaTwitter,
      label: "X (Twitter)",
      value: "@0xramprasad",
      href: "https://x.com/0xramprasad",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Ramprasad4121",
      href: "https://github.com/Ramprasad4121",
    },
    {
      icon: FiMail,
      label: "Email",
      value: "ramprasadgoud34@gmail.com",
      href: "mailto:ramprasadgoud34@gmail.com",
    },
  ];

  return (
    <div className="section">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl">
          Interested in a security audit or have questions? Let's discuss your project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Request An Audit</h2>
          
          {status === "success" ? (
            <div className="p-8 border-2 border-black text-center">
              <FiCheck className="mx-auto text-4xl mb-4 text-green-600" />
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600">I'll get back to you within 24-48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-4 py-3 border ${errors.name ? "border-red-400" : "border-gray-300"} focus:border-black focus:outline-none transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border ${errors.email ? "border-red-400" : "border-gray-300"} focus:border-black focus:outline-none transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  id="project"
                  value={formData.project}
                  onChange={(e) => handleChange("project", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="Your protocol/project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full px-4 py-3 border ${errors.message ? "border-red-400" : "border-gray-300"} focus:border-black focus:outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project and audit needs..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 font-medium transition-colors ${
                  status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "idle" && (
                  <>
                    Send Message <FiSend />
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "error" && "Failed — Try Again"}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Links */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Direct Contact</h2>
          <p className="text-gray-600 mb-8">
            Prefer to reach out directly? Connect with me on any of these platforms.
          </p>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-gray-200 hover:border-gray-400 transition-colors group"
              >
                <link.icon className="text-2xl text-gray-400 group-hover:text-black transition-colors flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-500">{link.label}</div>
                  <div className="font-medium truncate">{link.value}</div>
                </div>
                <FiArrowUpRight className="text-gray-400 group-hover:text-black transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
