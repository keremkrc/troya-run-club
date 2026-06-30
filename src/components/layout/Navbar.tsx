"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/leaderboard", label: "Liderlik" },
  { href: "/magaza", label: "Mağaza" },
  { href: "/#sss", label: "SSS" },
  { href: "/kayit", label: "Katıl" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-700 shadow-[0_4px_30px_rgba(13,27,62,0.4)] py-3"
          : "bg-transparent py-5"
      }`}
      aria-label="Ana navigasyon"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Troya Run Club - Ana Sayfa">
          <span className="w-10 h-10 rounded-full bg-bronze-500 flex items-center justify-center text-white font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
            🏛️
          </span>
          <span className="hidden sm:block font-oswald font-bold text-xl tracking-[0.2em] uppercase text-white group-hover:text-bronze-300 transition-colors">
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
                className="font-oswald font-semibold text-sm tracking-[0.2em] uppercase bg-bronze-500 text-white px-5 py-2 hover:bg-bronze-400 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-oswald font-semibold text-sm tracking-[0.2em] uppercase text-white/80 hover:text-bronze-300 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-1 ml-2">
            <button type="button" className="text-[11px] font-bold tracking-[0.15em] uppercase text-white px-1" aria-label="Türkçe">TR</button>
            <span className="text-white/30">|</span>
            <button type="button" className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 hover:text-white/70 px-1 transition-colors" aria-label="English">EN</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              className="font-oswald font-semibold text-sm tracking-[0.2em] uppercase text-white/80 hover:text-bronze-300 py-3 border-b border-white/10 transition-colors"
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
