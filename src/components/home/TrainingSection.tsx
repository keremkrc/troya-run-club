import { Clock, MapPin, Users, Activity, Target } from "lucide-react";

const trainings = [
  {
    day: "PAZARTESİ",
    dayShort: "Pzt",
    type: "Social Easy Run",
    icon: Users,
    accentColor: "text-bronze-400",
    glowColor: "hover:shadow-[0_0_40px_rgba(232,101,10,0.2)]",
    borderColor: "hover:border-bronze-500/50",
    badgeBg: "bg-bronze-500",
    description: "Herkes için, her seviyeye uygun sosyal koş.",
    time: "20:00",
    location: "Hamidiye Tabyası",
    slogan: "Birlikte Koş, Birlikte Güçlen!",
    intensity: 1,
  },
  {
    day: "ÇARŞAMBA",
    dayShort: "Çrş",
    type: "Interval",
    icon: Activity,
    accentColor: "text-bronze-400",
    glowColor: "hover:shadow-[0_0_40px_rgba(232,101,10,0.25)]",
    borderColor: "hover:border-bronze-500/50",
    badgeBg: "bg-bronze-500",
    description: "Hızını geliştir, sınırlarını zorla!",
    time: "20:00",
    location: "18 Mart Atatürk Stadı",
    slogan: "Daha Hızlı, Daha Güçlü!",
    intensity: 3,
  },
  {
    day: "CUMA",
    dayShort: "Cum",
    type: "Tempo + Drill",
    icon: Target,
    accentColor: "text-bronze-400",
    glowColor: "hover:shadow-[0_0_40px_rgba(232,101,10,0.2)]",
    borderColor: "hover:border-bronze-500/50",
    badgeBg: "bg-bronze-500",
    description: "Tempo ile dayanıklılığını artır, drill ile formunu güçlendir!",
    time: "20:00",
    location: "18 Mart Atatürk Stadı",
    slogan: "Doğru Tempo, Güçlü Form!",
    intensity: 2,
  },
];

function IntensityBar({ level }: { level: number }) {
  return (
    <div className="flex items-end gap-0.5 h-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-2 rounded-sm transition-all ${
            i <= level ? "bg-bronze-400" : "bg-white/10"
          }`}
          style={{ height: `${33 * i}%` }}
        />
      ))}
    </div>
  );
}

export default function TrainingSection() {
  return (
    <section
      id="antrenmanlar"
      className="bg-dark py-24 px-6 relative overflow-hidden"
    >
      {/* Subtle geometric background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {[15, 35, 55, 75, 95].map((l) => (
          <div
            key={l}
            className="absolute top-0 bottom-0 w-px bg-white"
            style={{ left: `${l}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">
            HAFTALIK PROGRAM
          </p>
          <h2 className="font-oswald font-bold text-4xl md:text-6xl uppercase tracking-tight text-cream leading-tight">
            HAFTALIK{" "}
            <span className="text-bronze-400">ANTRENMAN</span> PROGRAMI
          </h2>
          <p className="text-muted text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Haftada 3 gün, farklı antrenman tipiyle hem hızını hem dayanıklılığını geliştir.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainings.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.day}
                className={`relative bg-mid/60 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 transition-all duration-500 group ${t.glowColor} ${t.borderColor}`}
              >
                {/* Day badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`${t.badgeBg} text-white text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full`}
                  >
                    {t.day}
                  </span>
                  <IntensityBar level={t.intensity} />
                </div>

                {/* Icon + Type */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-bronze-500/20 flex items-center justify-center group-hover:bg-bronze-500 group-hover:border-bronze-500 transition-all duration-300 shrink-0">
                    <Icon
                      size={26}
                      className="text-bronze-400 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-oswald font-bold text-2xl uppercase text-cream group-hover:text-bronze-400 transition-colors leading-tight">
                    {t.type}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed flex-1">
                  {t.description}
                </p>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Time & Location */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-cream/80">
                    <Clock size={14} className="text-bronze-400 shrink-0" />
                    <span className="font-semibold">{t.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-cream/80">
                    <MapPin size={14} className="text-bronze-400 shrink-0" />
                    <span>{t.location}</span>
                  </div>
                </div>

                {/* Slogan */}
                <div className="text-[10px] text-bronze-400/70 tracking-[0.2em] uppercase font-semibold italic border-t border-white/10 pt-4">
                  ✦ {t.slogan}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/kayit"
            className="inline-block bg-bronze-500 hover:bg-bronze-600 text-white font-oswald font-bold text-sm tracking-[0.25em] uppercase px-10 py-4 transition-colors"
          >
            Antrenmanlarımıza Katıl →
          </a>
        </div>
      </div>
    </section>
  );
}
