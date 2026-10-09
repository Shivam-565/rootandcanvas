import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="page-wrapper" style={{ backgroundColor: 'var(--_color---whitness)', color: 'var(--_color---black)', minHeight: '100vh', overflow: 'hidden' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', textAlign: 'center' }}>
        <h1 className="fade-in-up hero-title" style={{ fontFamily: 'var(--font-prata)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 1.5rem 0' }}>
          Preserving<br />What Matters
        </h1>
        <p className="fade-in-up hero-subtitle" style={{ fontFamily: 'var(--font-bricolage)', maxWidth: '600px', margin: '0 auto', opacity: 0.8, animationDelay: '0.2s', lineHeight: '1.6' }}>
          Root & Canvas began with a simple thought: many of the things that give life meaning are easily overlooked, forgotten or lost with time.
        </p>
      </section>

      {/* Content Grid */}
      <section className="content-section" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="grid-layout">
          
          <div className="premium-card fade-in-up" style={{ transition: 'all 0.4s ease', animationDelay: '0.3s' }}>
            <h2 className="card-title" style={{ fontFamily: 'var(--font-prata)' }}>Our Story</h2>
            <p className="card-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.8 }}>
              The initiative brings together an interest in culture, creativity, learning and conscious living, with the aim of preserving valuable ideas, stories and practices while creating new experiences and products around them.
            </p>
          </div>

          <div className="premium-card fade-in-up" style={{ backgroundColor: 'var(--_color---main)', color: 'var(--_color---whitness)', transition: 'all 0.4s ease', animationDelay: '0.4s' }}>
            <h2 className="card-title" style={{ fontFamily: 'var(--font-prata)' }}>Our Mission</h2>
            <p className="card-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.9 }}>
              To create meaningful products, experiences and resources that help people discover, preserve, learn, create and connect.
            </p>
          </div>
          
          <div className="premium-card fade-in-up" style={{ transition: 'all 0.4s ease', animationDelay: '0.5s' }}>
            <h2 className="card-title" style={{ fontFamily: 'var(--font-prata)' }}>Our Vision</h2>
            <p className="card-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.8 }}>
              To build a growing ecosystem around culture, creativity and conscious living, where things worth preserving find new expression.
            </p>
          </div>

        </div>

        {/* Team Section */}
        <div className="fade-in-up team-section" style={{ textAlign: 'center', animationDelay: '0.6s' }}>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-prata)' }}>The Team</h2>
          <div className="premium-card team-card" style={{ display: 'inline-block', textAlign: 'left', maxWidth: '600px', backgroundColor: 'var(--_color---white)', margin: '0 auto' }}>
            <h3 className="team-name" style={{ fontFamily: 'var(--font-prata)', marginBottom: '0.5rem' }}>Muskan Priya</h3>
            <p className="team-role" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '2rem' }}>Founder & CEO</p>
            <p className="card-text" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.8 }}>
              Root & Canvas is currently led by its founder, with collaborators and specialists contributing across different projects and areas of work.
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
        .hero-title { font-size: clamp(3.5rem, 8vw, 6.5rem); }
        .hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.35rem); }
        .content-section { padding: 5%; padding-bottom: 10rem; }
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-bottom: 8rem;
        }
        .premium-card {
          padding: 3.5rem;
          border: 1px solid rgba(44, 62, 48, 0.1);
          border-radius: 24px;
        }
        .premium-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }
        .card-title {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .card-text {
          font-size: 1.15rem;
          line-height: 1.7;
        }
        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 4rem;
        }
        .team-name { font-size: 2.5rem; }
        .team-role { font-size: 0.85rem; }

        /* Extreme Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-section { padding: 150px 5% 60px; }
          .hero-title { margin-bottom: 1rem !important; }
          .content-section { padding-bottom: 6rem; }
          .grid-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 5rem;
          }
          .premium-card {
            padding: 2rem;
            border-radius: 20px;
          }
          .card-title {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }
          .card-text { font-size: 1.05rem; }
          .section-title { margin-bottom: 2rem; }
          .team-card { padding: 2rem !important; }
          .team-name { font-size: 2rem; }
        }
      `}} />
    </main>
  );
}
