import Header from '@/components/Header';

export default function Aware() {
  return (
    <main style={{ backgroundColor: '#2C3E30', color: '#F5EFE6', minHeight: '100vh' }}>
      <Header />
      <div style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h1 style={{ fontFamily: 'var(--font-prata)', fontSize: '3rem', marginBottom: '2rem' }}>Aware</h1>
        
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Learning & Awareness</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Educational resources and initiatives encouraging greater awareness of health, environment, safety, everyday systems and conscious living.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Workshops & Programmes</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Interactive learning experiences designed around practical knowledge, participation and meaningful action.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Digital Resources</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Accessible guides, learning materials and downloadable resources created for everyday use.
          </p>
        </section>
      </div>
    </main>
  );
}
