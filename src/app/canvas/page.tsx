import Header from '@/components/Header';

export default function Canvas() {
  return (
    <main style={{ backgroundColor: '#2C3E30', color: '#F5EFE6', minHeight: '100vh' }}>
      <Header />
      <div style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h1 style={{ fontFamily: 'var(--font-prata)', fontSize: '3rem', marginBottom: '2rem' }}>Canvas</h1>
        
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Art & Photography</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Original artwork, photography and visual work presented through prints and other creative formats.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Designed Products</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Thoughtfully designed everyday products inspired by art, culture, stories and ideas.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Books & Stationery</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Books, journals, planners, postcards, bookmarks, calendars and other creative paper goods.
          </p>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1rem', lineHeight: '1.6', opacity: 0.7, marginTop: '1rem' }}>
            <em>Product categories should remain flexible so additional products can be added later.</em>
          </p>
        </section>
      </div>
    </main>
  );
}
