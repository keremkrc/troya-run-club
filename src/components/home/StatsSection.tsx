import { Users, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const stats = [
  {
    icon: Users,
    value: "60+",
    label: "Aktif Üye",
    description: "Her seviyeden koşucu ile her antrenmanda omuz omuza.",
  },
  {
    icon: MessageCircle,
    value: "500+",
    label: "WhatsApp Üyesi",
    description: "Haberleşme, etkinlik duyuruları ve koşu sohbetleri için büyük topluluk.",
  },
  {
    icon: FaInstagram,
    value: "5.000+",
    label: "Instagram Takipçisi",
    description: "Efsanevi koşu anlarımızı paylaştığımız dinamik sosyal medya ailemiz.",
  },
];

export default function StatsSection() {
  return (
    <section id="biz-kimiz" className="bg-mid py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-cream/50 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">BİZ KİMİZ</p>
          <h2 className="font-oswald font-bold text-4xl md:text-6xl uppercase tracking-tight text-cream leading-tight">
            KOŞUCULAR TARAFINDAN,
            <br />
            <span className="text-bronze-400">KOŞUCULAR İÇİN.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-stone/20 border border-white/5 p-10 flex flex-col gap-4 group hover:bg-dark hover:border-bronze-500/30 hover:shadow-[0_0_30px_rgba(232,101,10,0.15)] transition-all duration-500 rounded-2xl"
              >
                {/* Logo colors: Navy background (#0D1B3E / navy-700 or #040A14 / navy-900) + Orange/Bronze text/icon/border */}
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-bronze-500/20 flex items-center justify-center group-hover:bg-bronze-500 group-hover:text-navy-950 group-hover:border-bronze-500 transition-all duration-300">
                  <Icon size={22} className="text-bronze-400 group-hover:text-navy-950 transition-colors" />
                </div>
                <div>
                  <span className="text-cream/40 text-[10px] tracking-[0.4em] uppercase font-semibold group-hover:text-muted transition-colors">
                    {stat.label.toUpperCase()}
                  </span>
                  <h3 className="font-oswald font-bold text-4xl text-cream group-hover:text-bronze-400 transition-colors mt-1">
                    {stat.value}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1 group-hover:text-cream/70 transition-colors">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
