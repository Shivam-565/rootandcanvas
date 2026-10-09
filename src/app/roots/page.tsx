import Header from '@/components/Header';

export default function Roots() {
  return (
    <main style={{ backgroundColor: '#2C3E30', color: '#F5EFE6', minHeight: '100vh' }}>
      <Header />
      <div style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h1 style={{ fontFamily: 'var(--font-prata)', fontSize: '3rem', marginBottom: '2rem' }}>Roots</h1>
        
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Heritage & Food</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Preserving food knowledge, traditions, memories and cultural stories through thoughtfully designed experiences and resources.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Archives & Experiences</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Projects that help people document, discover and engage with stories, traditions and knowledge that deserve to be remembered.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Books & Resources</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Curated publications and resources around culture, heritage, food and everyday knowledge.
          </p>
        </section>
      </div>
    </main>
  );
}
