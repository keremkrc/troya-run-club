"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/basarilar", label: "Başarılar" },
  { href: "/leaderboard", label: "Liderlik" },
  { href: "/magaza", label: "Mağaza" },
  { href: "/#sss", label: "SSS" },
  { href: "/kayit", label: "Katıl" },
];

const INSTAGRAM_URL = "https://instagram.com/troyaruncanakkale";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-700/80 backdrop-blur-md shadow-[0_4px_30px_rgba(13,27,62,0.4)] py-3"
          : "bg-transparent py-5"
      }`}
      aria-label="Ana navigasyon"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Troya Run Club - Ana Sayfa">
          <div className="relative w-12 h-12 shrink-0 group-hover:scale-110 transition-transform">
            <Image
              src="/troya_run_logo_transparent.png"
              alt="Troya Run Club Logo"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <span className="hidden sm:block font-oswald font-bold text-xl tracking-[0.2em] uppercase text-white group-hover:text-bronze-400 transition-colors">
            Troya Run Club
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.label === "Katıl" ? (
              <Link
                key={link.href}
                href={link.href}
                className="font-oswald font-semibold text-sm tracking-[0.2em] uppercase bg-bronze-500 text-white px-5 py-2 hover:bg-bronze-600 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-oswald font-semibold text-sm tracking-[0.2em] uppercase text-white/80 hover:text-bronze-400 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Instagram Icon */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram'da Troya Run Club"
            className="text-white/70 hover:text-bronze-400 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Mobile: Instagram + Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram'da Troya Run Club"
            className="text-white/70 hover:text-bronze-400 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <button
            className="text-white p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-700 border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-oswald font-semibold text-sm tracking-[0.2em] uppercase text-white/80 hover:text-bronze-400 py-3 border-b border-white/10 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
