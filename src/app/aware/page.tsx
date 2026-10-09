import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Aware() {
  return (
    <main className="page-wrapper" style={{ backgroundColor: 'var(--_color---whitness)', color: 'var(--_color---black)', minHeight: '100vh', overflow: 'hidden' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', textAlign: 'center' }}>
        <p className="fade-in-up tag-text" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7 }}>
          Conscious Living
        </p>
        <h1 className="fade-in-up hero-title" style={{ fontFamily: 'var(--font-prata)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 1.5rem 0', animationDelay: '0.1s' }}>
          Aware
        </h1>
        <p className="fade-in-up hero-subtitle" style={{ fontFamily: 'var(--font-bricolage)', maxWidth: '700px', margin: '0 auto', opacity: 0.8, animationDelay: '0.2s', lineHeight: '1.6' }}>
          Educational resources and initiatives encouraging greater awareness of health, environment, safety, everyday systems and conscious living.
        </p>
      </section>

      {/* Large Focus Area */}
      <section className="content-section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="fade-in-up list-layout" style={{ animationDelay: '0.3s' }}>
          
          <div className="hover-row" style={{ backgroundColor: 'var(--_color---white)' }}>
            <h2 className="row-title" style={{ fontFamily: 'var(--font-prata)' }}>Learning &<br/>Awareness</h2>
            <p className="row-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.8 }}>
              Educational resources and initiatives encouraging greater awareness of health, environment, safety, everyday systems and conscious living.
            </p>
          </div>

          <div className="hover-row" style={{ backgroundColor: 'var(--_color---main)', color: 'var(--_color---whitness)' }}>
            <h2 className="row-title" style={{ fontFamily: 'var(--font-prata)' }}>Workshops &<br/>Programmes</h2>
            <p className="row-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.9 }}>
              Interactive learning experiences designed around practical knowledge, participation and meaningful action.
            </p>
          </div>

          <div className="hover-row" style={{ backgroundColor: 'var(--_color---white)' }}>
            <h2 className="row-title" style={{ fontFamily: 'var(--font-prata)' }}>Digital<br/>Resources</h2>
            <p className="row-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.8 }}>
              Accessible guides, learning materials and downloadable resources created for everyday use.
            </p>
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
        
        .list-layout {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .hover-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 4.5rem;
          border-radius: 32px;
          transition: all 0.4s ease;
          gap: 2rem;
        }
        .hover-row:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }
        .row-title {
          font-size: 2.8rem;
          margin: 0;
          flex: 1 1 300px;
          line-height: 1.1;
        }
        .row-text {
          font-size: 1.2rem;
          line-height: 1.7;
          margin: 0;
          flex: 2 1 400px;
        }

        /* Extreme Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-section { padding: 150px 5% 60px; }
          .tag-text { font-size: 0.8rem; }
          .hero-title { margin-bottom: 1rem !important; }
          .content-section { padding-bottom: 6rem; }
          
          .list-layout {
            gap: 1.5rem;
          }
          .hover-row {
            padding: 2.5rem 2rem;
            border-radius: 24px;
            flex-direction: column;
            align-items: flex-start;
          }
          .hover-row:hover {
            transform: scale(1.01);
          }
          .row-title {
            font-size: 2rem;
            flex: none;
            width: 100%;
          }
          .row-text {
            font-size: 1.05rem;
            flex: none;
            width: 100%;
          }
        }
      `}} />
    </main>
  );
}
