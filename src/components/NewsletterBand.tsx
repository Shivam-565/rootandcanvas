"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const easeCustom = [0.16, 1, 0.3, 1] as const;

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    // Simulate swift modern feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setMessage("Thank you for your interest! You’re connected with Root & Canvas.");
      setEmail("");
    }, 400);
  };

  return (
    <section className="cta-band" id="community">
      <div className="wrap inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeCustom }}
        >
          <span className="eyebrow" style={{ color: "var(--peach)" }}>
            Join the Circle
          </span>
          <h2>A slow note in your inbox. When it matters.</h2>
          <p>
            Stories of forgotten culinary heritage, creative prompts, and
            mindful notes on living with purpose. No noise, just warmth.
          </p>
        </motion.div>

        <motion.div
          className="signup"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.18, ease: easeCustom }}
        >
          <h3>Stay in touch</h3>
          <p>Be the first to explore seasonal offerings and thoughtful journals.</p>
          <form id="signupForm" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Your email address"
              required
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Joining..." : "Subscribe"}
            </motion.button>
          </form>

          <AnimatePresence mode="wait">
            {message && (
              <motion.div
                key={message}
                id="formMessage"
                className={`form-message ${isSuccess ? "form-success" : ""}`}
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: 8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.3, ease: easeCustom }}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
