const fs = require('fs');
const cheerio = require('cheerio');

const body = fs.readFileSync('../cloned-website/stanzza.design/index.html', 'utf-8');
const $ = cheerio.load(body);

const heroHtml = $('section#hero').html();

function htmlToJSX(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/crossorigin=/g, 'crossOrigin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/playsinline=""/g, 'playsInline')
    .replace(/webkit-playsinline=""/g, '')
    .replace(/muted=""/g, 'muted')
    .replace(/style="[^"]*"/gi, '')
    .replace(/\.\.\//g, '/')
    .replace(/<img([^>]*[^\/])>/gi, '<img$1 />')
    .replace(/<source([^>]*[^\/])>/gi, '<source$1 />')
    .replace(/<br>/gi, '<br />')
    .replace(/<input([^>]*[^\/])>/gi, '<input$1 />');
}

const heroTsx = `
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Basic entrance animation for the hero section
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content_wrapper', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );
      
      gsap.fromTo('.image-hero',
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" data-scroll="light" className="u-section is-hero">
      ${htmlToJSX(heroHtml)}
    </section>
  );
}
`;

fs.writeFileSync('./src/components/Hero.tsx', heroTsx);
console.log('Fixed Hero.tsx');
