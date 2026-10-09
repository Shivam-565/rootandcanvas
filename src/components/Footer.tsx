import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'var(--_color---whitness)', 
      color: 'var(--_color---black)',
      padding: '4rem 5% 2rem',
      borderTop: '1px solid rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem'
      }}>
        
        {/* Artistic Tagline & Logo Area */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-prata)', 
            fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
            fontWeight: 400,
            letterSpacing: '0.02em',
            margin: '0 0 1rem 0'
          }}>
            Root and Canvas
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-bricolage)', 
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            opacity: 0.6
          }}>
            Preserving what matters. Creating what&apos;s next.
          </p>
        </div>

        {/* Minimal Links */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem',
          fontFamily: 'var(--font-bricolage)',
          fontSize: '0.85rem',
          letterSpacing: '0.05em'
        }}>
          <a href="mailto:hello@rootandcanvas.com" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', opacity: 0.8, transition: 'opacity 0.2s' }} className="footer-link">
            Email
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s' }} className="footer-link">
            Instagram
          </a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s' }} className="footer-link">
            Journal
          </a>
        </div>

        {/* Copyright */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(0,0,0,0.05)',
          fontFamily: 'var(--font-bricolage)',
          fontSize: '0.75rem',
          opacity: 0.5,
          marginTop: '1rem'
        }}>
          <span>© {new Date().getFullYear()} Root & Canvas. All rights reserved.</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Designed with intention</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .footer-link:hover {
          opacity: 1 !important;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      `}} />
    </footer>
  );
}
