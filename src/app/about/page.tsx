import Header from '@/components/Header';

export default function About() {
  return (
    <main style={{ backgroundColor: '#2C3E30', color: '#F5EFE6', minHeight: '100vh' }}>
      <Header />
      <div style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h1 style={{ fontFamily: 'var(--font-prata)', fontSize: '3rem', marginBottom: '2rem' }}>About Us</h1>
        
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Our Story</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Root & Canvas began with a simple thought: many of the things that give life meaning are easily overlooked, forgotten or lost with time. 
            The initiative brings together an interest in culture, creativity, learning and conscious living, with the aim of preserving valuable ideas, stories and practices while creating new experiences and products around them.
          </p>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9, marginTop: '1rem' }}>
            Root & Canvas is designed as an evolving umbrella, allowing different projects and expressions to grow while remaining connected by one central philosophy:
            <br/><br/>
            <strong>Preserve what matters. Create what comes next.</strong>
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            To create meaningful products, experiences and resources that help people <strong>discover, preserve, learn, create and connect</strong>.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Our Vision</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            To build a growing ecosystem around <strong>culture, creativity and conscious living</strong>, where things worth preserving can find a new expression for the present and future.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Founder / Team</h2>
          <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Muskan Priya - Founder & CEO</h3>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
            Root & Canvas is currently led by its founder, with collaborators and specialists contributing across different projects and areas of work.
            <br/><br/>
            <em>Team profiles can be added as the team expands.</em>
          </p>
        </section>
      </div>
    </main>
  );
}
