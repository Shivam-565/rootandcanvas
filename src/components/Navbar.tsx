"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detach and float when scrolled past 30px
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);

      // Dynamic active section detection
      const sections = ["home", "story", "offerings", "food", "art", "awareness", "difference", "founder", "community"];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            // Map sub-anchors to main nav links
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
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`topbar-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      {/* Floating / Docked navigation container */}
      <nav
        className={`nav-bar ${scrolled ? "nav-floating" : "nav-docked"}`}
        aria-label="Main Navigation"
      >
        <div className="nav-inner">
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

          {/* Desktop navigation links */}
          <div className="navlinks">
            <Link
              href="#home"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="#story"
              className={`nav-link ${activeSection === "story" ? "active" : ""}`}
            >
              Our Story
            </Link>
            <Link
              href="#food"
              className={`nav-link ${activeSection === "food" ? "active" : ""}`}
            >
              Root
            </Link>
            <Link
              href="#art"
              className={`nav-link ${activeSection === "art" ? "active" : ""}`}
            >
              Canvas
            </Link>
            <Link
              href="#awareness"
              className={`nav-link ${activeSection === "awareness" ? "active" : ""}`}
            >
              Aware
            </Link>
          </div>

          <div className="nav-actions">
            <Link className="navcta btn-explore" href="#offerings">
              Explore
            </Link>

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
        <div
          className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-nav-inner">
            <Link href="#home" onClick={closeMenu}>
              Home
            </Link>
            <Link href="#story" onClick={closeMenu}>
              Our Story
            </Link>
            <Link href="#food" onClick={closeMenu}>
              Root (Food)
            </Link>
            <Link href="#art" onClick={closeMenu}>
              Canvas (Art)
            </Link>
            <Link href="#awareness" onClick={closeMenu}>
              Aware (Awareness)
            </Link>
            <Link
              href="#offerings"
              className="mobile-explore-btn"
              onClick={closeMenu}
            >
              Explore Offerings
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
