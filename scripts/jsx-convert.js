const fs = require('fs');

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
    // Remove complex inline styles entirely so GSAP can take over, 
    // except for standard ones if needed.
    .replace(/style="[^"]*"/gi, '');
}

const headerHtml = fs.readFileSync('header.txt', 'utf-8');
const heroHtml = fs.readFileSync('hero.txt', 'utf-8'); // the hero.txt was truncated, but we'll use what we have, or re-extract properly.

fs.mkdirSync('./src/components', { recursive: true });

const headerTsx = `
'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    // Initial GSAP animation for header
    gsap.to(headerRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    ${htmlToJSX(headerHtml)}
  );
}
`;

fs.writeFileSync('./src/components/Header.tsx', headerTsx);
console.log('Created Header.tsx');
