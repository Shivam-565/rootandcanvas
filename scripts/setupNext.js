const fs = require('fs');
const path = require('path');

const clonedHtmlPath = '../cloned-website/stanzza.design/index.html';
let html = fs.readFileSync(clonedHtmlPath, 'utf-8');

// Fix asset paths
html = html.replace(/\.\.\//g, '/');

// Extract head and body
const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
const bodyMatch = html.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);

const head = headMatch ? headMatch[1] : '';
const bodyAttrs = bodyMatch ? bodyMatch[1] : '';
const body = bodyMatch ? bodyMatch[2] : '';

// Find all script tags in body
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let scripts = [];
let bodyWithoutScripts = body;
let match;

while ((match = scriptRegex.exec(body)) !== null) {
  scripts.push(match[0]);
  bodyWithoutScripts = bodyWithoutScripts.replace(match[0], '');
}

// Write app/layout.tsx
const layoutCode = `
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stanzza Clone",
  description: "Perfect Clone of Stanzza Awards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-mod-js w-mod-ix lenis lenis-smooth lenis-stopped w-mod-ix3" data-wf-domain="stanzza.design" data-wf-page="69e1cc2e4bb2c432ebac4f79" data-wf-site="69e1cc2c4bb2c432ebac4f2b">
      <head>
        <link href="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/css/stanza-dev.webflow.shared.5df90c395.min.css" rel="stylesheet" type="text/css" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body ${bodyAttrs.replace(/class=/g, 'className=')}>
        {children}
        <Script src="/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8_site=69e1cc2c4bb2c432ebac4f2b.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/js/webflow.schunk.36b8fb49256177c8.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/js/webflow.schunk.1ebde7679aa0b6c9.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/js/webflow.ce0c3c84.0cccf04f4d23184a.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/Flip.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
`;

fs.writeFileSync('./src/app/layout.tsx', layoutCode);

// Write app/page.tsx
const pageCode = `
'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Inject all the inline scripts extracted from the body
    ${scripts.map(s => {
      // If it's an inline script, extract the content
      const inlineMatch = s.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
      if (inlineMatch && inlineMatch[1].trim() !== '') {
        return `
        try {
          const script = document.createElement('script');
          script.innerHTML = \`${inlineMatch[1].replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
          document.body.appendChild(script);
        } catch (e) {
          console.error(e);
        }`;
      }
      return '';
    }).join('\n')}
  }, []);

  return (
    <main dangerouslySetInnerHTML={{ __html: \`${bodyWithoutScripts.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`;

fs.writeFileSync('./src/app/page.tsx', pageCode);

// Write globals.css
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
let styles = '';
let sMatch;
while ((sMatch = styleRegex.exec(html)) !== null) {
  styles += sMatch[1] + '\n';
}
fs.writeFileSync('./src/app/globals.css', styles);

console.log('Next.js setup complete!');
