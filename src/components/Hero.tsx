'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const finalWidth = "100svw";
    const finalHeight = isMobile ? "210svw" : "80svw";
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.image-hero',
        { width: "4svw", height: "4svw", opacity: 1, position: "relative", overflow: "hidden" },
        { width: finalWidth, height: finalHeight, duration: 1.5, ease: "power3.inOut", delay: 0.5 }
      );

      gsap.fromTo('.u-image',
        { scale: 1.25 },
        { scale: 1, duration: 1.5, ease: "power3.inOut", delay: 0.5 }
      );

      gsap.fromTo('.hero-content_wrapper', 
        { opacity: 0, y: "3%" }, 
        { opacity: 1, y: "0%", duration: 1, ease: "power3.out", delay: 1.5 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" data-scroll="light" className="u-section is-hero">
      <div className="container is-hero">
        <div className="content is-hero" style={{ position: 'relative' }}>
          <div className="image-hero">
            <img 
              data-animation="false" 
              className="u-image" 
              src="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/69ee6f783661a77a4c257694_159404928da08c0dfc3695631bfdaa51_main.avif" 
              width="Auto" 
              alt="Root and Canvas - Archival Hands" 
              loading="lazy" 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="hero-image_overlay"></div>
          </div>
          
          <div className="hero-content_wrapper" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
            <div className="hero-content">
              <div className="hero-content_main" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <h1 className="hero-main-title" style={{ fontFamily: 'var(--font-prata)', lineHeight: '1.1', fontWeight: 400, textTransform: 'none', color: '#F5EFE6', textShadow: '0px 2px 10px rgba(0,0,0,0.5)' }}>
                  Preserving what matters. Creating what’s next.
                </h1>
                <p className="hero-main-paragraph" style={{ fontFamily: 'var(--font-bricolage)', opacity: 0.9, color: '#F5EFE6', textShadow: '0px 1px 5px rgba(0,0,0,0.5)' }}>
                  Root & Canvas is a purpose-driven initiative bringing together roots, creativity and conscious living through thoughtfully created products, experiences and resources. We explore the things that make everyday life meaningful from culture and food to art, learning and awareness while creating new ways to preserve, share and experience them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-image_overlay {
          position: absolute;
          inset: 0;
          background-color: #2C3E30;
          opacity: 0.35;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 0 20px;
          margin-top: 100px;
        }
        .hero-main-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
        }
        .hero-main-paragraph {
          font-size: clamp(1rem, 1.25vw, 1.25rem);
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .hero-image_overlay {
            opacity: 0.65; /* Darker overlay for better readability on small screens */
          }
          .hero-content {
            margin-top: 180px; /* Push content down to avoid header overlap */
            padding: 0 25px;
          }
          .hero-content_main {
            gap: 1.5rem !important; /* Tighter gap on mobile */
          }
          .hero-main-title {
            font-size: 2.2rem; /* Legible but contained title */
          }
          .hero-main-paragraph {
            font-size: 1.05rem;
            line-height: 1.6;
            opacity: 0.95;
            text-shadow: 0px 2px 8px rgba(0,0,0,0.8); /* Better contrast */
          }
        }
      `}} />
    </section>
  );
}