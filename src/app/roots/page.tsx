import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Roots() {
  return (
    <main className="page-wrapper" style={{ backgroundColor: 'var(--_color---whitness)', color: 'var(--_color---black)', minHeight: '100vh', overflow: 'hidden' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', textAlign: 'center' }}>
        <p className="fade-in-up tag-text" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7 }}>
          Our Foundations
        </p>
        <h1 className="fade-in-up hero-title" style={{ fontFamily: 'var(--font-prata)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 1.5rem 0', animationDelay: '0.1s' }}>
          Roots
        </h1>
        <p className="fade-in-up hero-subtitle" style={{ fontFamily: 'var(--font-bricolage)', maxWidth: '700px', margin: '0 auto', opacity: 0.8, animationDelay: '0.2s', lineHeight: '1.6' }}>
          Preserving food knowledge, traditions, memories and cultural stories through thoughtfully designed experiences and resources.
        </p>
      </section>

      {/* Pillars Section */}
      <section className="content-section" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="grid-layout">
          
          <div className="premium-card fade-in-up" style={{ backgroundColor: 'var(--_color---white)', transition: 'all 0.4s ease', animationDelay: '0.3s' }}>
            <h2 className="card-title" style={{ fontFamily: 'var(--font-prata)' }}>Heritage<br/>& Food</h2>
            <p className="card-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.8 }}>
              Preserving food knowledge, traditions, memories and cultural stories through thoughtfully designed experiences and resources.
            </p>
          </div>

          <div className="premium-card fade-in-up" style={{ backgroundColor: 'var(--_color---main)', color: 'var(--_color---whitness)', transition: 'all 0.4s ease', animationDelay: '0.4s' }}>
            <h2 className="card-title" style={{ fontFamily: 'var(--font-prata)' }}>Archives &<br/>Experiences</h2>
            <p className="card-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.9 }}>
              Projects that help people document, discover and engage with stories, traditions and knowledge that deserve to be remembered.
            </p>
          </div>

          <div className="premium-card fade-in-up" style={{ backgroundColor: 'var(--_color---white)', transition: 'all 0.4s ease', animationDelay: '0.5s' }}>
            <h2 className="card-title" style={{ fontFamily: 'var(--font-prata)' }}>Books &<br/>Resources</h2>
            <p className="card-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.8 }}>
              Curated publications and resources around culture, heritage, food and everyday knowledge.
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
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .premium-card {
          padding: 4rem 3.5rem;
          border-top: 2px solid var(--_color---main);
          border-radius: 0 0 24px 24px;
        }
        .premium-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }
        .card-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .card-text {
          font-size: 1.15rem;
          line-height: 1.7;
        }

        /* Extreme Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-section { padding: 150px 5% 60px; }
          .tag-text { font-size: 0.8rem; }
          .hero-title { margin-bottom: 1rem !important; }
          .content-section { padding-bottom: 6rem; }
          .grid-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .premium-card {
            padding: 2.5rem 2rem;
            border-radius: 0 0 20px 20px;
          }
          .card-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .card-text { font-size: 1.05rem; }
        }
      `}} />
    </main>
  );
}
