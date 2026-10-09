import Header from '@/components/Header';

export default function Contact() {
  return (
    <main style={{ backgroundColor: '#2C3E30', color: '#F5EFE6', minHeight: '100vh' }}>
      <Header />
      <div style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h1 style={{ fontFamily: 'var(--font-prata)', fontSize: '3rem', marginBottom: '2rem' }}>Contact Us</h1>
        
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9, marginBottom: '2rem' }}>
            For collaborations, enquiries, partnerships, products and general questions, connect with us.
          </p>
          
          <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
            <strong>Phone:</strong> <br/>
            <strong>Email:</strong> teamrootandcanvas@gmail.com<br/>
            <strong>Office:</strong> Ranchi, Jharkhand
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Social</h2>
          <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
            <strong>Instagram:</strong> <br/>
            <strong>LinkedIn:</strong> <br/>
            <strong>Other:</strong> 
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '2rem', marginBottom: '1rem' }}>Contact Form</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-bricolage)', maxWidth: '500px' }}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Name
              <input type="text" style={{ padding: '0.8rem', marginTop: '0.5rem', border: '1px solid #F5EFE6', backgroundColor: 'transparent', color: '#F5EFE6' }} required />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Email
              <input type="email" style={{ padding: '0.8rem', marginTop: '0.5rem', border: '1px solid #F5EFE6', backgroundColor: 'transparent', color: '#F5EFE6' }} required />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Phone (optional)
              <input type="tel" style={{ padding: '0.8rem', marginTop: '0.5rem', border: '1px solid #F5EFE6', backgroundColor: 'transparent', color: '#F5EFE6' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Subject / Enquiry Type
              <input type="text" style={{ padding: '0.8rem', marginTop: '0.5rem', border: '1px solid #F5EFE6', backgroundColor: 'transparent', color: '#F5EFE6' }} required />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Message
              <textarea rows={5} style={{ padding: '0.8rem', marginTop: '0.5rem', border: '1px solid #F5EFE6', backgroundColor: 'transparent', color: '#F5EFE6' }} required></textarea>
            </label>
            <button type="submit" style={{ padding: '1rem 2rem', backgroundColor: '#F5EFE6', color: '#2C3E30', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1rem' }}>
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
