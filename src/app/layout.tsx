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
  title: "Root & Canvas — Preserving what matters. Creating what’s next.",
  description:
    "Root & Canvas brings together food, art and awareness through thoughtful products, resources and experiences.",
  keywords: [
    "Root and Canvas",
    "culinary heritage",
    "food stories",
    "artistic creation",
    "mindful living",
    "thoughtful experiences",
  ],
  authors: [{ name: "Muskan Priya" }],
  creator: "Root & Canvas",
  openGraph: {
    title: "Root & Canvas — Preserving what matters. Creating what’s next.",
    description:
      "Root & Canvas brings together food, art and awareness through thoughtful products, resources and experiences.",
    url: "https://rootandcanvas.com",
    siteName: "Root & Canvas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Root & Canvas — Preserving what matters. Creating what’s next.",
    description:
      "Root & Canvas brings together food, art and awareness through thoughtful products, resources and experiences.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#173d2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${prata.variable}`}>
      <body>{children}</body>
    </html>
  );
}
