import React from "react";
import Link from "next/link";

interface PrivacyPolicyContentProps {
  isModal?: boolean;
}

export default function PrivacyPolicyContent({ isModal = false }: PrivacyPolicyContentProps) {
  return (
    <div className={`privacy-content ${isModal ? "privacy-content-modal" : "privacy-content-page"}`}>
      {/* Header Meta */}
      <div className="policy-meta-banner">
        <div className="policy-meta-item">
          <span className="policy-meta-label">Effective Date</span>
          <span className="policy-meta-val">11 October 2026</span>
        </div>
        <div className="policy-meta-item">
          <span className="policy-meta-label">Entity</span>
          <span className="policy-meta-val">Root & Canvas (Ranchi, Jharkhand, India)</span>
        </div>
        <div className="policy-meta-item">
          <span className="policy-meta-label">Website</span>
          <span className="policy-meta-val">
            <a href="https://www.rootandcanvas.com" target="_blank" rel="noopener noreferrer">
              www.rootandcanvas.com
            </a>
          </span>
        </div>
      </div>

      {/* 1. Introduction */}
      <section id="section-1" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">01</span>
          <h3>Introduction</h3>
        </div>
        <p>
          Root & Canvas (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), based in Ranchi, Jharkhand,
          India, operates{" "}
          <a href="https://www.rootandcanvas.com" target="_blank" rel="noopener noreferrer">
            www.rootandcanvas.com
          </a>{" "}
          (the &ldquo;Website&rdquo;). This Privacy Policy explains what personal information we collect,
          why we collect it, how we use and share it, and the rights you have over it. It is published in line
          with the Information Technology Act, 2000, the rules made under it, and the Digital Personal Data
          Protection Act, 2023.
        </p>
        <p>
          By using the Website or placing an order, you agree to this Policy. If you do not agree, please do
          not use the Website.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section id="section-2" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">02</span>
          <h3>Information We Collect</h3>
        </div>
        
        <div className="policy-subsection">
          <h4>Information you give us:</h4>
          <ul className="policy-list">
            <li>Name, email address, and phone number.</li>
            <li>Billing and shipping address.</li>
            <li>Order details and purchase history.</li>
            <li>Account login details, if you create an account.</li>
            <li>Messages, reviews, or other content you send us.</li>
          </ul>
        </div>

        <div className="policy-subsection">
          <h4>Payment information:</h4>
          <p>
            Payments are processed by third-party payment gateways. We do not collect or store your card, UPI,
            or net-banking credentials.
          </p>
        </div>

        <div className="policy-subsection">
          <h4>Information collected automatically:</h4>
          <p>
            IP address, browser and device type, pages visited, and referring website, collected through
            cookies and similar technologies.
          </p>
        </div>
      </section>

      {/* 3. How We Use Your Information */}
      <section id="section-3" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">03</span>
          <h3>How We Use Your Information</h3>
        </div>
        <p>We use your information only to:</p>
        <ul className="policy-list">
          <li>Process, ship, and deliver your orders, and handle returns and refunds.</li>
          <li>Send order confirmations, delivery updates, and respond to your queries.</li>
          <li>Manage your account.</li>
          <li>Send offers and updates, only if you have agreed. You can opt out at any time.</li>
          <li>Improve the Website and understand how it is used.</li>
          <li>Prevent fraud and keep the Website secure.</li>
          <li>Meet legal, tax, and accounting obligations.</li>
        </ul>
      </section>

      {/* 4. Sharing of Information */}
      <section id="section-4" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">04</span>
          <h3>Sharing of Information</h3>
        </div>
        <p>We do not sell your personal information. We share it only with:</p>
        <ul className="policy-list">
          <li>
            <strong>Service providers</strong> that help us run the business, such as payment gateways, courier
            and logistics partners, website hosting, email and SMS services, and analytics tools. They may use
            your data only to provide their service to us.
          </li>
          <li>
            <strong>Government or legal authorities</strong>, when required by law or a valid legal order.
          </li>
          <li>
            <strong>A successor business</strong>, if Root & Canvas is merged with or sold to another business.
          </li>
        </ul>
      </section>

      {/* 5. Cookies */}
      <section id="section-5" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">05</span>
          <h3>Cookies</h3>
        </div>
        <p>
          We use cookies to keep your cart and login working, remember your preferences, and understand how
          visitors use the Website. You can block or delete cookies in your browser settings, but parts of the
          Website may then stop working properly.
        </p>
      </section>

      {/* 6. Data Retention */}
      <section id="section-6" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">06</span>
          <h3>Data Retention</h3>
        </div>
        <p>
          We keep your personal information only for as long as needed to fulfil the purposes in this Policy or
          to comply with applicable law, including tax and accounting record requirements. After that, we
          delete or anonymise it.
        </p>
      </section>

      {/* 7. Your Rights */}
      <section id="section-7" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">07</span>
          <h3>Your Rights</h3>
        </div>
        <p>You have the right to:</p>
        <ul className="policy-list">
          <li>Access the personal information we hold about you.</li>
          <li>Correct or update inaccurate or incomplete information.</li>
          <li>Request deletion of your information, subject to legal retention requirements.</li>
          <li>Withdraw your consent at any time. This does not affect processing done before withdrawal.</li>
          <li>Nominate another person to exercise these rights on your behalf if you die or become incapacitated.</li>
          <li>Raise a grievance with us, and if it is not resolved, complain to the Data Protection Board of India.</li>
        </ul>
        <div className="policy-highlight-box">
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:teamrootandcanvas@gmail.com">teamrootandcanvas@gmail.com</a>.
          </p>
        </div>
      </section>

      {/* 8. Data Security */}
      <section id="section-8" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">08</span>
          <h3>Data Security</h3>
        </div>
        <p>
          We use reasonable security practices, including encrypted (HTTPS) connections and restricted access
          to personal data. No online system is completely secure, so we cannot guarantee absolute security.
          Please keep your account password confidential.
        </p>
      </section>

      {/* 9. Children */}
      <section id="section-9" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">09</span>
          <h3>Children</h3>
        </div>
        <p>
          The Website is not meant for anyone under 18. We do not knowingly collect personal information from
          children. If you believe a child has given us their information, contact us and we will delete it.
        </p>
      </section>

      {/* 10. Third-Party Links */}
      <section id="section-10" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">10</span>
          <h3>Third-Party Links</h3>
        </div>
        <p>
          The Website may link to other websites. We are not responsible for their privacy practices, so please
          read their policies separately.
        </p>
      </section>

      {/* 11. Changes to This Policy */}
      <section id="section-11" className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-num">11</span>
          <h3>Changes to This Policy</h3>
        </div>
        <p>
          We may update this Policy from time to time. The latest version will always be on this page, with its
          effective date at the top.
        </p>
      </section>

      {/* 12. Contact and Grievance Officer */}
      <section id="section-12" className="policy-section policy-contact-card">
        <div className="policy-section-header">
          <span className="policy-section-num">12</span>
          <h3>Contact and Grievance Officer</h3>
        </div>
        <p>
          For questions, requests, or complaints about this Policy or your personal information, contact:
        </p>
        <div className="policy-contact-details">
          <div className="policy-contact-row">
            <span className="policy-contact-label">Email:</span>
            <a href="mailto:teamrootandcanvas@gmail.com" className="policy-email-link">
              teamrootandcanvas@gmail.com
            </a>
          </div>
          <div className="policy-contact-row">
            <span className="policy-contact-label">Location:</span>
            <span>Ranchi, Jharkhand, India</span>
          </div>
        </div>
        <p className="policy-contact-note">
          We will acknowledge your request promptly and aim to resolve it within a reasonable time, and in
          any case within the period required by law.
        </p>
      </section>
    </div>
  );
}
