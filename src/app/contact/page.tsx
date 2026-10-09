import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main className="page-wrapper" style={{ backgroundColor: 'var(--_color---whitness)', color: 'var(--_color---black)', minHeight: '100vh', overflow: 'hidden' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', textAlign: 'center' }}>
        <p className="fade-in-up tag-text" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7 }}>
          Let's connect
        </p>
        <h1 className="fade-in-up hero-title" style={{ fontFamily: 'var(--font-prata)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 1.5rem 0', animationDelay: '0.1s' }}>
          Contact Us
        </h1>
        <p className="fade-in-up hero-subtitle" style={{ fontFamily: 'var(--font-bricolage)', maxWidth: '700px', margin: '0 auto', opacity: 0.8, animationDelay: '0.2s', lineHeight: '1.6' }}>
          For collaborations, enquiries, partnerships, products and general questions, connect with us.
        </p>
      </section>

      {/* Two Column Layout: Info and Form */}
      <section className="content-section" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="grid-layout">
          
          {/* Info Side */}
          <div className="fade-in-up info-side" style={{ animationDelay: '0.3s' }}>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-prata)' }}>Get in Touch</h2>
            <div className="info-list" style={{ fontFamily: 'var(--font-bricolage)' }}>
              
              <div className="info-item">
                <p className="info-label">Email</p>
                <p className="info-value">teamrootandcanvas@gmail.com</p>
              </div>

              <div className="info-item">
                <p className="info-label">Office</p>
                <p className="info-value">Ranchi, Jharkhand</p>
              </div>

              <div className="info-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <p className="info-label">Social</p>
                <div className="social-links">
                  <a href="#" className="hover-link">Instagram</a>
                  <a href="#" className="hover-link">LinkedIn</a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Side */}
          <div className="fade-in-up form-side" style={{ animationDelay: '0.4s', backgroundColor: 'var(--_color---main)', color: 'var(--_color---whitness)' }}>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-prata)' }}>Contact Form</h2>
            <form className="contact-form" style={{ fontFamily: 'var(--font-bricolage)' }}>
              <div className="form-row">
                <input type="text" placeholder="Name" className="form-input" required />
                <input type="email" placeholder="Email" className="form-input" required />
              </div>
              <input type="tel" placeholder="Phone (optional)" className="form-input" />
              <input type="text" placeholder="Subject / Enquiry Type" className="form-input" required />
              <textarea rows={5} placeholder="Message" className="form-input" required></textarea>
              <button type="submit" className="submit-btn" style={{ backgroundColor: 'var(--_color---whitness)', color: 'var(--_color---main)' }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Premium Typography & Spacing */
        .hero-section { padding: 220px 5% 100px; }
        .tag-text { font-size: 0.9rem; margin-bottom: 1rem; }
        .hero-title { font-size: clamp(4rem, 10vw, 8rem); }
        .hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.35rem); }
        .content-section { padding: 5%; padding-bottom: 10rem; }
        
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 5rem;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 3rem;
          line-height: 1.1;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          border-bottom: 1px solid rgba(44, 62, 48, 0.1);
          padding-bottom: 2rem;
        }
        .info-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.6;
          margin-bottom: 0.5rem;
        }
        .info-value {
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 1.5;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
          font-size: 1.4rem;
          font-weight: 500;
        }
        .hover-link {
          color: inherit;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        .hover-link:hover {
          opacity: 0.6;
        }

        .form-side {
          padding: 4rem;
          border-radius: 32px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .form-input {
          padding: 1.2rem;
          border: 1px solid rgba(245, 239, 230, 0.2);
          background-color: transparent;
          color: var(--_color---whitness);
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .form-input::placeholder {
          color: rgba(245, 239, 230, 0.6);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--_color---whitness);
          background-color: rgba(245, 239, 230, 0.05);
        }
        .submit-btn {
          padding: 1.2rem 2.5rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 500;
          margin-top: 1rem;
          transition: all 0.3s ease;
          align-self: flex-start;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* Extreme Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-section { padding: 150px 5% 60px; }
          .tag-text { font-size: 0.8rem; }
          .hero-title { margin-bottom: 1rem !important; }
          .content-section { padding-bottom: 6rem; }
          
          .grid-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .section-title {
            font-size: 2.2rem;
            margin-bottom: 2rem;
          }
          .info-list {
            gap: 1.5rem;
          }
          .info-item {
            padding-bottom: 1.5rem;
          }
          .info-value, .social-links {
            font-size: 1.2rem;
          }
          .form-side {
            padding: 2.5rem 2rem;
            border-radius: 24px;
            margin: 0 -1rem; /* Full bleed on small mobile */
          }
          .contact-form {
            gap: 1rem;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .form-input {
            padding: 1rem;
            font-size: 0.95rem;
          }
          .submit-btn {
            width: 100%;
            padding: 1.2rem;
            margin-top: 0.5rem;
          }
        }
      `}} />
    </main>
  );
}
