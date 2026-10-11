import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Root & Canvas",
  description:
    "Read the Privacy Policy of Root & Canvas. Learn what personal information we collect, why we collect it, how we use and protect it, and your rights under the Digital Personal Data Protection Act, 2023 and IT Act, 2000.",
  openGraph: {
    title: "Privacy Policy | Root & Canvas",
    description:
      "Effective date: 11 October 2026. Published in compliance with DPDP Act, 2023 and IT Act, 2000.",
    url: "https://rootandcanvas.com/privacy",
    siteName: "Root & Canvas",
    type: "website",
  },
};

const sectionsList = [
  { id: "section-1", num: "01", title: "Introduction" },
  { id: "section-2", num: "02", title: "Information We Collect" },
  { id: "section-3", num: "03", title: "How We Use Your Information" },
  { id: "section-4", num: "04", title: "Sharing of Information" },
  { id: "section-5", num: "05", title: "Cookies" },
  { id: "section-6", num: "06", title: "Data Retention" },
  { id: "section-7", num: "07", title: "Your Rights" },
  { id: "section-8", num: "08", title: "Data Security" },
  { id: "section-9", num: "09", title: "Children" },
  { id: "section-10", num: "10", title: "Third-Party Links" },
  { id: "section-11", num: "11", title: "Changes to This Policy" },
  { id: "section-12", num: "12", title: "Contact & Grievance Officer" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Top Header Bar */}
      <header className="policy-topbar">
        <div className="wrap policy-topbar-inner">
          <Link href="/" className="policy-topbar-brand" aria-label="Back to Root & Canvas Home">
            <Image
              src="/images/logo-wordmark.png"
              alt="Root & Canvas"
              width={180}
              height={48}
              priority
              style={{ width: "auto", height: "38px" }}
            />
          </Link>
          <div className="policy-topbar-actions">
            <Link href="/" className="btn ghost policy-back-btn">
              ← Return Home
            </Link>
            <a
              href="mailto:teamrootandcanvas@gmail.com"
              className="btn primary policy-contact-btn"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <main className="policy-page-main">
        {/* Hero Section */}
        <section className="policy-hero-section">
          <div className="wrap">
            <div className="policy-breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span>Legal</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Privacy Policy</span>
            </div>

            <div className="policy-hero-content">
              <span className="eyebrow">Legal & Compliance</span>
              <h1 className="policy-hero-title">Privacy Policy</h1>
              <p className="policy-hero-lead">
                Root & Canvas values your trust and is committed to protecting your personal information.
                This policy outlines our transparent data practices under the Digital Personal Data
                Protection Act, 2023 and the Information Technology Act, 2000.
              </p>

              <div className="policy-quick-facts">
                <div className="fact-pill">
                  <span className="fact-label">Effective Date:</span>
                  <strong className="fact-value">11 October 2026</strong>
                </div>
                <div className="fact-pill">
                  <span className="fact-label">Jurisdiction:</span>
                  <strong className="fact-value">Ranchi, Jharkhand, India</strong>
                </div>
                <div className="fact-pill">
                  <span className="fact-label">Governing Law:</span>
                  <strong className="fact-value">DPDP Act, 2023 & IT Act, 2000</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Sticky Navigation */}
        <section className="policy-body-section">
          <div className="wrap policy-layout-grid">
            {/* Table of contents sidebar */}
            <aside className="policy-sidebar">
              <div className="policy-sidebar-card">
                <h4 className="policy-sidebar-title">Table of Contents</h4>
                <nav className="policy-nav-list" aria-label="Privacy Policy Sections">
                  {sectionsList.map((sec) => (
                    <a key={sec.id} href={`#${sec.id}`} className="policy-nav-item">
                      <span className="policy-nav-num">{sec.num}</span>
                      <span className="policy-nav-text">{sec.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="policy-sidebar-help">
                  <p className="help-heading">Have any questions?</p>
                  <p className="help-text">
                    Reach our Grievance Officer at{" "}
                    <a href="mailto:teamrootandcanvas@gmail.com">teamrootandcanvas@gmail.com</a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Policy Document */}
            <div className="policy-document-wrapper">
              <PrivacyPolicyContent isModal={false} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
