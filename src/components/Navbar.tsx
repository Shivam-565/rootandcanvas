"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);

      const sections = ["home", "story", "offerings", "food", "art", "awareness", "difference", "founder"];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            if (sectionId === "food") setActiveSection("food");
            else if (sectionId === "art") setActiveSection("art");
            else if (sectionId === "awareness") setActiveSection("awareness");
            else if (sectionId === "offerings") setActiveSection("offerings");
            else if (sectionId === "story") setActiveSection("story");
            else if (sectionId === "home") setActiveSection("home");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      className={`topbar-wrapper ${scrolled ? "is-scrolled" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`nav-bar ${scrolled ? "nav-floating" : "nav-docked"}`}
        aria-label="Main Navigation"
      >
        <div className="nav-inner">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              className="brand wordmark"
              href="#home"
              aria-label="Root and Canvas home"
              onClick={closeMenu}
            >
              <Image
                className="wordmark-img"
                src="/images/logo-wordmark.png"
                alt="Root and Canvas"
                width={220}
                height={58}
                priority
                style={{ width: "auto", height: "auto", maxHeight: scrolled ? "44px" : "54px" }}
              />
            </Link>
          </motion.div>

          {/* Desktop navigation links */}
          <div className="navlinks">
            {[
              { id: "home", label: "Home", href: "#home" },
              { id: "story", label: "Our Story", href: "#story" },
              { id: "food", label: "Root", href: "#food" },
              { id: "art", label: "Canvas", href: "#art" },
              { id: "awareness", label: "Aware", href: "#awareness" },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.div
                  key={link.id}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="nav-actions">
            <motion.div
              className="desktop-cta-wrapper"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link className="navcta btn-explore" href="#offerings">
                Explore
              </Link>
            </motion.div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer inside floating container */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-nav-drawer open"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-nav-inner">
                <Link href="#home" onClick={closeMenu}>
                  Home
                </Link>
                <Link href="#story" onClick={closeMenu}>
                  Our Story
                </Link>
                <Link href="#food" onClick={closeMenu}>
                  Root
                </Link>
                <Link href="#art" onClick={closeMenu}>
                  Canvas
                </Link>
                <Link href="#awareness" onClick={closeMenu}>
                  Aware
                </Link>
                <Link
                  href="#offerings"
                  className="mobile-explore-btn"
                  onClick={closeMenu}
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
