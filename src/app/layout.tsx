import type { Metadata, Viewport } from "next";
import { DM_Sans, Prata } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Root and Canvas — Preserving what matters. Creating what’s next.",
  description:
    "Root and Canvas brings together food, art and awareness through thoughtful products, resources and experiences.",
  keywords: [
    "Root and Canvas",
    "culinary heritage",
    "food stories",
    "artistic creation",
    "mindful living",
    "thoughtful experiences",
  ],
  authors: [{ name: "Muskan Priya" }],
  creator: "Root and Canvas",
  openGraph: {
    title: "Root and Canvas — Preserving what matters. Creating what’s next.",
    description:
      "Root and Canvas brings together food, art and awareness through thoughtful products, resources and experiences.",
    url: "https://rootandcanvas.com",
    siteName: "Root and Canvas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Root and Canvas — Preserving what matters. Creating what’s next.",
    description:
      "Root and Canvas brings together food, art and awareness through thoughtful products, resources and experiences.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#173d2e",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Root and Canvas",
  url: "https://rootandcanvas.com",
  sameAs: [
    "https://www.instagram.com/rootandcanvas/",
    "https://www.linkedin.com/company/root-and-canvas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${prata.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
