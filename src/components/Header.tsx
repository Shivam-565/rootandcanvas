'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <header ref={headerRef} data-scroll="header" data-wf--header--variant="home-page" className="header" style={{ opacity: 0 }}>
      <div className="header_balance is-left">
        <div 
          className="nav w-dropdown"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div 
            className={`nav_trigger w-dropdown-toggle ${isMenuOpen ? 'w--open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            role="button" 
            tabIndex={0}
          >
            <button data-trigger="" id="" data-button="scroll" className="u-btn blur">
              <span className="span blur-2">menu</span>
              <div className="u-icon blur-3 is-second">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-menu-main">
                  <path d="M8 14H6V12H8V14ZM14 14H12V12H14V14ZM8 8H6V6H8V8ZM14 8H12V6H14V8Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </div>
          <nav 
            className={`nav_content w-dropdown-list ${isMenuOpen ? 'w--open' : ''}`} 
            style={{ display: isMenuOpen ? 'block' : 'none' }}
          >
            <div className="nav_content-inline">
              <div className="nav_content-main">
                <nav className="nav_content-menu">
                  <Link href="/" className="u-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link href="/about" className="u-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                  <Link href="/roots" className="u-link" onClick={() => setIsMenuOpen(false)}>Roots</Link>
                  <Link href="/aware" className="u-link" onClick={() => setIsMenuOpen(false)}>Aware</Link>
                  <Link href="/canvas" className="u-link" onClick={() => setIsMenuOpen(false)}>Canvas</Link>
                  <Link href="/contact" className="u-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
              </div>
            </div>
            <div className="nav_overflow"></div>
          </nav>
        </div>
      </div>
      
      <div className="header_balance is-middle" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <a href="/" aria-current="page" className="w-inline-block w--current" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-prata)', 
            fontSize: '2rem', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase',
            margin: 0,
            fontWeight: 400
          }}>
            Root and Canvas
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-bricolage)', 
            fontSize: '0.75rem', 
            textTransform: 'none',
            letterSpacing: '0.02em',
            margin: '0.5rem 0 0 0',
            opacity: 0.8
          }}>
            Preserving what matters. Creating what's next.
          </p>
        </a>
      </div>

      <div className="header_balance is-right">
        <button className="u-btn">
          <span><span>Join the archive</span></span>
        </button>
      </div>
      <div className="header_overlay-mobile"></div>
    </header>
  );
}
