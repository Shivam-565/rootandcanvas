
import type { Metadata } from "next";
import { Prata, Bricolage_Grotesque } from 'next/font/google';
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const prata = Prata({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-prata',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: "Root and Canvas",
  description: "Preserving what matters. Creating what's next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`w-mod-js w-mod-ix lenis lenis-smooth w-mod-ix3 ${prata.variable} ${bricolage.variable}`} data-wf-domain="rootandcanvas.com" data-wf-site="rootandcanvas">
      <head>
        <link href="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/css/stanza-dev.webflow.shared.5df90c395.min.css" rel="stylesheet" type="text/css" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body  className="u-body">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Script src="/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8_site=69e1cc2c4bb2c432ebac4f2b.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/Flip.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="beforeInteractive" />
        
        <Script src="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/js/webflow.schunk.36b8fb49256177c8.js" strategy="afterInteractive" />
        <Script src="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/js/webflow.schunk.1ebde7679aa0b6c9.js" strategy="afterInteractive" />
        <Script src="/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/js/webflow.ce0c3c84.0cccf04f4d23184a.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
