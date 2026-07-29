import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Armenian } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const body = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const armenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-armenian",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Gevorg ∞ Iren",
  description: "Wedding invitation",
  openGraph: {
    type: "website",
    siteName: "Gevorg ∞ Iren",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 800,
        alt: "Gevorg ∞ Iren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hy"
      className={`${body.variable} ${armenian.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
