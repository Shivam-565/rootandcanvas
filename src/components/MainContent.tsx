'use client';
import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { mainContentHtml } from './mainHtml';
import gsap from 'gsap';

export default function MainContent() {
  useEffect(() => {
    // Force Webflow to re-initialize since Next.js loads scripts asynchronously
    const timer = setTimeout(() => {
      const win = window as any;
      if (win.Webflow) {
        win.Webflow.destroy();
        win.Webflow.ready();
        win.Webflow.require('ix2').init();
      }
      // Some external scripts (like GSAP/Swiper in Webflow templates) listen for this
      document.dispatchEvent(new Event('readystatechange'));
      window.dispatchEvent(new Event('load'));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: mainContentHtml }} />
  );
}
