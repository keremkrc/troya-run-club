import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Target, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Troya Run Club'ın hikayesi, misyonu ve kurucuları hakkında bilgi edinin.",
};

const team = [
  { name: "Mert Yıldırım", role: "Kurucu & Kaptan", avatar: "MY" },
  { name: "Deniz Arslan", role: "Antrenman Lideri", avatar: "DA" },
  { name: "Gizem Çelik", role: "Etkinlik Koordinatörü", avatar: "GÇ" },
  { name: "Oğuz Kaya", role: "Sosyal Medya", avatar: "OK" },
];

const values = [
  {
    icon: Heart,
    title: "Topluluk",
    desc: "Koşuyu sadece spor değil, insan bağları kuran bir araç olarak görüyoruz. Çanakkale'nin her köşesinden koşucuları bir araya getiriyoruz.",
  },
  {
    icon: Target,
    title: "Kapsayıcılık",
    desc: "Yeni başlayanlardan deneyimli atletlere kadar herkes için alan var. Tempo farkı değil, birlikte olma önemli.",
  },
  {
    icon: Globe,
    title: "Çanakkale Ruhu",
    desc: "Truva'nın efsanevi cesaret ve dayanıklılık ruhunu her koşuda taşıyoruz. Şehrimizin tarihiyle özdeşleşen bir kimlik.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-dark pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {[10, 30, 50, 70, 90].map((l) => (
            <div key={l} className="absolute top-0 bottom-0 w-px bg-bronze-400" style={{ left: `${l}%` }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">KLÜBİMİZ</p>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight text-white">
            HAKKIMIZDA
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="bg-mid py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-bronze-400 text-xs tracking-[0.5em] uppercase mb-4 font-semibold">HİKAYEMİZ</p>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-cream mb-6">
              KÜÇÜK BAŞLADIK,
              <br />
              <span className="text-bronze-400">BÜYÜK HAYALLER KURDUK.</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                2023 yılında birkaç arkadaşın Çanakkale sahil yolundaki sabah koşusuyla başlayan bu yolculuk, bugün 350&apos;yi aşkın üyesiyle büyüyen bir topluluğa dönüştü.
              </p>
              <p>
                Truva&apos;nın efsanevi dayanıklılığından ilham alarak kurduğumuz Troya Run Club; yaş, tempo veya deneyim ayrımı gözetmeksizin herkese koşma sevinci yaşatmayı hedefliyor.
              </p>
              <p>
                Her çarşamba akşamı ve cumartesi sabahı, Çanakkale&apos;nin tarihi sokaklarında, kıyı yollarında ve antik rotalarda bir araya geliyor; birlikte koşuyor, birlikte büyüyoruz.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-full min-h-[400px] rounded-sm overflow-hidden">
            <Image
              src="/about-team.jpg"
              alt="Troya Run Club ekip fotoğrafı"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-bronze-400 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">DEĞERLERİMİZ</p>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-cream">
              NEDEN TROYA?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="p-8 border border-white/10 hover:border-bronze-400 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-full bg-bronze-500/10 flex items-center justify-center mb-5 group-hover:bg-bronze-500/20 transition-colors">
                    <Icon size={22} className="text-bronze-400" />
                  </div>
                  <h3 className="font-oswald font-bold text-2xl uppercase text-cream mb-3">{val.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-mid py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-bronze-400 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">EKİBİMİZ</p>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-cream">
              KURUCULAR & LİDERLER
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-24 h-24 rounded-full bg-dark flex items-center justify-center mx-auto mb-4 text-white font-oswald font-bold text-xl group-hover:bg-bronze-600 transition-colors">
                  {member.avatar}
                </div>
                <h3 className="font-oswald font-bold text-lg text-cream">{member.name}</h3>
                <p className="text-bronze-400 text-xs tracking-[0.15em] uppercase mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
