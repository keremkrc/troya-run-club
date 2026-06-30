import Link from "next/link";
import Image from "next/image";
import { Share2, Mail, MapPin } from "lucide-react";

const footerLinks = {
  kulüp: [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/etkinlikler", label: "Etkinlikler" },
    { href: "/galeri", label: "Galeri" },
    { href: "/kayit", label: "Bize Katıl" },
  ],
  kaynaklar: [
    { href: "/leaderboard", label: "Liderlik Tablosu" },
    { href: "/magaza", label: "Mağaza" },
    { href: "/#sss", label: "SSS" },
  ],
  yasal: [
    { href: "/kvkk", label: "KVKK Aydınlatma" },
    { href: "/gizlilik", label: "Gizlilik Politikası" },
    { href: "/cerez", label: "Çerez Politikası" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-bronze-400 shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Troya Run Club Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <p className="font-oswald font-bold text-xl tracking-[0.2em] uppercase text-white">
                Troya Run Club
              </p>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-5 max-w-xs">
              Çanakkale&apos;de kurulan bir koşucu topluluğu. Her tempo, her mesafe, herkesin hareketi.
            </p>
            <div className="flex items-center gap-2 text-muted text-sm mb-2">
              <MapPin size={14} className="text-bronze-400 shrink-0" />
              <span>Çanakkale, Türkiye</span>
            </div>
            <div className="flex items-center gap-2 text-muted text-sm">
              <Mail size={14} className="text-bronze-400 shrink-0" />
              <a href="mailto:hello@troyarunclub.com" className="hover:text-white transition-colors">
                hello@troyarunclub.com
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-bronze-400 text-[10px] tracking-[0.35em] uppercase font-semibold mb-5">TROYA RUN</p>
            <ul className="space-y-3">
              {footerLinks.kulüp.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted text-sm hover:text-bronze-400 transition-colors tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-bronze-400 text-[10px] tracking-[0.35em] uppercase font-semibold mb-5">KAYNAKLAR</p>
            <ul className="space-y-3">
              {footerLinks.kaynaklar.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted text-sm hover:text-bronze-400 transition-colors tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <p className="text-bronze-400 text-[10px] tracking-[0.35em] uppercase font-semibold mb-5">BAĞLANTI</p>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="https://instagram.com/troyarunclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted text-sm hover:text-bronze-400 transition-colors"
                >
                  <svg
                    className="w-3.5 h-3.5 text-bronze-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://strava.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-sm hover:text-bronze-400 transition-colors"
                >
                  Strava
                </a>
              </li>
            </ul>

            <p className="text-bronze-400 text-[10px] tracking-[0.35em] uppercase font-semibold mb-5">YASAL</p>
            <ul className="space-y-3">
              {footerLinks.yasal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted text-sm hover:text-bronze-400 transition-colors tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-xs tracking-widest uppercase">
          <p>© {year} Troya Run Club. Tüm hakları saklıdır.</p>
          <p className="text-bronze-400/60">Koş · Fethet · Birlikte Ol</p>
        </div>
      </div>
    </footer>
  );
}
