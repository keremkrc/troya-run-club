import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-700"
      aria-label="Hero bölümü"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        role="img"
        aria-label="Çanakkale kıyısında koşucular"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-700/80 via-navy-700/50 to-navy-700/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-700/60 via-transparent to-transparent" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
        {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((left) => (
          <div
            key={left}
            className="absolute top-0 bottom-0 w-px bg-bronze-400"
            style={{ left: `${left}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <p className="text-bronze-300/80 text-xs tracking-[0.6em] uppercase mb-6 font-medium">
          TOPLULUK · HAREKET · ZAFER
        </p>

        <h1 className="font-oswald font-bold uppercase leading-[0.9] mb-8">
          <span className="block text-[clamp(3rem,14vw,10rem)] text-white tracking-tight drop-shadow-2xl">
            TROYA
          </span>
          <span className="block text-[clamp(2rem,9vw,6.5rem)] text-bronze-400 tracking-[0.15em] drop-shadow-2xl">
            RUN CLUB
          </span>
        </h1>

        <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10 tracking-wide">
          Çanakkale&apos;nin efsanevi topraklarında, tarihin izinde koş.
          <br />
          <span className="text-bronze-300">Sadece bir koşu değil — bir miras.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/etkinlikler"
            id="hero-cta-events"
            className="group inline-flex items-center justify-center gap-2 bg-bronze-500 text-white font-oswald font-semibold text-sm tracking-[0.25em] uppercase px-10 py-4 hover:bg-bronze-400 transition-colors"
          >
            ETKİNLİKLERİ GÖR
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/kayit"
            id="hero-cta-join"
            className="inline-flex items-center justify-center border border-white/40 text-white font-oswald font-semibold text-sm tracking-[0.25em] uppercase px-10 py-4 hover:border-bronze-400 hover:text-bronze-300 transition-colors"
          >
            ARAMIZA KATIL
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.4em] uppercase" aria-hidden="true">
          <span className="animate-bounce">↓</span>
          <span>Kaydır</span>
        </div>
      </div>
    </section>
  );
}
