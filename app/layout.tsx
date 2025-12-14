import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MacroLift - La nutrition pour ceux qui soulèvent",
  description: "Scanne ta bouffe, on calcule tes macros. L'app de nutrition faite pour la prise de masse, pas pour maigrir. Simple, direct, efficace.",
  keywords: ["nutrition", "musculation", "macros", "prise de masse", "tracking", "IA"],
  authors: [{ name: "MacroLift" }],
  openGraph: {
    title: "MacroLift - La nutrition pour ceux qui soulèvent",
    description: "Scanne ta bouffe, on calcule tes macros. Simple, direct, efficace.",
    url: "https://macrolift.app",
    siteName: "MacroLift",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacroLift - La nutrition pour ceux qui soulèvent",
    description: "Scanne ta bouffe, on calcule tes macros. Simple, direct, efficace.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
