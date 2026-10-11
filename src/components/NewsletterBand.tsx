"use client";

import React, { useState } from "react";

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
        <div>
          <span className="eyebrow" style={{ color: "var(--peach)" }}>
            Join the Circle
          </span>
          <h2>A slow note in your inbox. When it matters.</h2>
          <p>
            Stories of forgotten culinary heritage, creative prompts, and
            mindful notes on living with purpose. No noise, just warmth.
          </p>
        </div>

        <div className="signup">
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Subscribe"}
            </button>
          </form>
          <div
            id="formMessage"
            className={`form-message ${isSuccess ? "form-success" : ""}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </div>
        </div>
      </div>
    </section>
  );
}
