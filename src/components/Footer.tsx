"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="footer-grid">
            <div className="footer-about">
              <Link
                className="brand footer-logo"
                href="#home"
                aria-label="Root and Canvas home"
              >
                <Image
                  src="/images/footer-logo.jpg"
                  alt="Root & Canvas arched landscape and roots icon"
                  width={125}
                  height={125}
                  style={{ width: "auto", height: "auto", maxHeight: "125px", objectFit: "contain" }}
                />
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
                <a
                  href="https://www.instagram.com/rootandcanvas/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                >
                  P
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>

              <h4 style={{ marginTop: "1.4rem" }}>The essentials</h4>
              <a
                href="#privacy"
                onClick={(e) => handlePolicyClick(e, "Privacy Policy")}
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="legal">
            <span>© 2026 Root & Canvas. All rights reserved.</span>
            <span>Made with care, rooted in meaning.</span>
          </div>
        </div>
      </footer>

      {/* Accessible Policy Modal */}
      {modalOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 id="modal-title">{modalTitle}</h3>
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
              <p>
                At Root & Canvas, we believe in deep respect for your personal
                space and privacy.
              </p>
              <p>
                We do not sell, rent, or trade your personal information. Any email
                addresses collected through our circle signup are solely utilized to
                share thoughtful updates, archival stories, and early access to our
                curated resources.
              </p>
              <p>
                If you ever wish to opt out, you may do so anytime with a single
                click or by emailing us at{" "}
                <a href="mailto:teamrootandcanvas@gmail.com">
                  teamrootandcanvas@gmail.com
                </a>
                .
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn primary"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
