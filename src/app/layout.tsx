import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Troya Run Club | Çanakkale Koşu Kulübü",
    template: "%s | Troya Run Club",
  },
  description:
    "Çanakkale'nin efsanevi topraklarında koşu topluluğu. Her seviyeden koşucuya açık, haftalık grup koşuları ve özel etkinlikler.",
  keywords: ["koşu kulübü", "çanakkale", "troya run club", "grup koşusu", "maraton"],
  openGraph: {
    siteName: "Troya Run Club",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://troyarunclub.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-inter bg-cream text-navy-700 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

