// src/components/ContactForm.jsx
// Contact form with EmailJS integration
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

// ============================================
// EMAILJS CONFIGURATION
// ============================================
const EMAILJS_SERVICE_ID = "service_ahvezm8";
const EMAILJS_TEMPLATE_ID = "template_0rrzlha";
const EMAILJS_PUBLIC_KEY = "BJm4QGJh7IPt-_Ppb";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

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

        // Prepare template parameters for EmailJS
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || "CodeKashi Contact Form",
            message: formData.message,
            to_email: "ramprasadgoud34@gmail.com", // Your email
        };

        try {
            // Send email via EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            console.log("Email sent successfully:", response);
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("Email send failed:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const inputClasses = (fieldName) => `
    w-full px-4 py-3 rounded-lg
    bg-white/80 dark:bg-dark-temple/80
    border ${errors[fieldName] ? "border-red-400" : "border-gold/30"}
    focus:border-gold focus:ring-2 focus:ring-gold/20
    text-dark-temple dark:text-beige
    placeholder:text-brown/40 dark:placeholder:text-beige/40
    transition-all duration-200
    outline-none
  `;

    // Check if EmailJS is configured
    const isConfigured = !EMAILJS_SERVICE_ID.includes("YOUR_");

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-white/50 dark:bg-dark-temple/50 border border-gold/20 backdrop-blur-sm"
        >
            <h3 className="text-xl font-heading font-bold text-dark-temple dark:text-gold mb-6 text-center">
                Send a Message
            </h3>

            <div className="space-y-4">
                {/* Name */}
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={inputClasses("name")}
                    />
                    {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <FiAlertCircle /> {errors.name}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className={inputClasses("email")}
                    />
                    {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <FiAlertCircle /> {errors.email}
                        </p>
                    )}
                </div>

                {/* Subject */}
                <div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject (Optional)"
                        className={inputClasses("subject")}
                    />
                </div>

                {/* Message */}
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message..."
                        rows={5}
                        className={inputClasses("message") + " resize-none"}
                    />
                    {errors.message && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <FiAlertCircle /> {errors.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                    whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                    className={`
            w-full py-3 px-6 rounded-full font-semibold
            flex items-center justify-center gap-2
            transition-all duration-200
            ${status === "success"
                            ? "bg-green-500 text-white"
                            : status === "error"
                                ? "bg-red-500 text-white"
                                : "bg-gold text-dark-temple hover:brightness-110"
                        }
            disabled:opacity-70 disabled:cursor-not-allowed
          `}
                >
                    <AnimatePresence mode="wait">
                        {status === "idle" && (
                            <motion.span
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2"
                            >
                                <FiSend /> Send Message
                            </motion.span>
                        )}
                        {status === "sending" && (
                            <motion.span
                                key="sending"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                Sending...
                            </motion.span>
                        )}
                        {status === "success" && (
                            <motion.span
                                key="success"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2"
                            >
                                <FiCheck /> Message Sent!
                            </motion.span>
                        )}
                        {status === "error" && (
                            <motion.span
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                Error - Try Again
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Configuration Notice */}
            {!isConfigured && (
                <p className="text-xs text-amber-500 text-center mt-4">
                    ⚠️ EmailJS not configured yet - see setup instructions in code
                </p>
            )}
        </motion.form>
    );
}
