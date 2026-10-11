"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

const easeCustom = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handlePolicyClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <>
      <footer>
        <div className="wrap">
          <motion.div
            className="footer-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: easeCustom }}
          >
            <div className="footer-about">
              <Link
                className="brand footer-logo"
                href="#home"
                aria-label="Root and Canvas home"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/footer-logo.jpg"
                    alt="Root and Canvas arched landscape and roots icon"
                    width={125}
                    height={125}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "125px",
                      objectFit: "contain",
                    }}
                  />
                </motion.div>
              </Link>
              <p>Preserving what matters and creating what’s next.</p>
            </div>

            <div className="footer-col">
              <h4>Explore</h4>
              <Link href="#home">Home</Link>
              <Link href="#story">Our Story</Link>
              <Link href="#food">Root</Link>
              <Link href="#art">Canvas</Link>
              <Link href="#awareness">Aware</Link>
            </div>

            <div className="footer-col">
              <h4>Get in touch</h4>
              <a href="mailto:teamrootandcanvas@gmail.com">
                teamrootandcanvas@gmail.com
              </a>
            </div>

            <div className="footer-col">
              <h4>Stay connected</h4>
              <div className="socials">
                <motion.a
                  href="https://www.instagram.com/rootandcanvas/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.7 2C7.3 2 4 5.9 4 10.3c0 2.2 1.2 4.4 2.7 5.1.3.1.5 0 .5-.3.1-.4.3-1.3.4-1.6.1-.2 0-.4-.2-.6-.7-.8-1.1-2.1-1.1-3.4 0-3.3 2.5-6.3 6.6-6.3 3.6 0 6.2 2.4 6.2 5.9 0 3.7-2.1 6.4-4.8 6.4-1.5 0-2.6-1.2-2.3-2.7.4-1.8 1.2-3.8 1.2-5.1 0-1.2-.6-2.2-1.9-2.2-1.5 0-2.8 1.6-2.8 3.7 0 1.4.5 2.3.5 2.3s-1.8 7.6-2.1 8.9c-.4 1.7-.1 4.2 0 4.4.1.2.2.2.3.1.2-.2 2.2-2.7 2.5-3.8l1.3-4.9c.5.9 1.9 1.7 3.4 1.7 4.5 0 7.8-4.1 7.8-9.3C21.1 5.9 17.5 2 12.7 2z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/root-and-canvas"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Root and Canvas on LinkedIn"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </motion.a>
              </div>

              <h4 style={{ marginTop: "1.4rem" }}>The essentials</h4>
              <Link
                href="/privacy"
                onClick={(e) => handlePolicyClick(e, "Privacy Policy")}
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>

          <div className="legal">
            <span>© 2026 Root and Canvas. All rights reserved.</span>
            <span>Made with care, rooted in meaning.</span>
          </div>
        </div>
      </footer>

      {/* Accessible Policy Modal with AnimatePresence */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={() => setModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ duration: 0.26, ease: easeCustom }}
            >
              <div className="modal-header">
                <div>
                  <h3 id="modal-title">{modalTitle}</h3>
                  <span className="modal-subtitle">Effective: 11 October 2026 • Ranchi, India</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close dialog"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <PrivacyPolicyContent isModal={true} />
              </div>
              <div className="modal-footer">
                <Link
                  href="/privacy"
                  className="modal-fullpage-link"
                  onClick={() => setModalOpen(false)}
                >
                  Open Dedicated Page ↗
                </Link>
                <motion.button
                  type="button"
                  className="btn primary"
                  onClick={() => setModalOpen(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
