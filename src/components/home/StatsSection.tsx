import { Users, Calendar, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "350+",
    label: "Aktif Üye",
    description: "Her seviyeden koşucu büyük ailemizin parçası",
    color: "text-bronze-500",
  },
  {
    icon: Calendar,
    value: "2×",
    label: "Haftalık Buluşma",
    description: "Çarşamba akşamı ve Cumartesi sabahı buluşuyoruz",
    color: "text-bronze-500",
  },
  {
    icon: Trophy,
    value: "2023",
    label: "Kuruluş Yılı",
    description: "Çanakkale'nin koşucu topluluğu olarak büyüyoruz",
    color: "text-bronze-500",
  },
];

export default function StatsSection() {
  return (
    <section id="biz-kimiz" className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-navy-700/50 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">BİZ KİMİZ</p>
          <h2 className="font-oswald font-bold text-4xl md:text-6xl uppercase tracking-tight text-navy-700 leading-tight">
            KOŞUCULAR TARAFINDAN,
            <br />
            <span className="text-bronze-500">KOŞUCULAR İÇİN.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-700/10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-cream p-10 flex flex-col gap-4 group hover:bg-navy-700 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-bronze-500/10 flex items-center justify-center group-hover:bg-bronze-500/20 transition-colors">
                  <Icon size={22} className="text-bronze-500" />
                </div>
                <div>
                  <span className="text-navy-700/40 text-[10px] tracking-[0.4em] uppercase font-semibold group-hover:text-white/40 transition-colors">
                    {stat.label.toUpperCase()}
                  </span>
                  <h3 className="font-oswald font-bold text-4xl text-navy-700 group-hover:text-bronze-400 transition-colors mt-1">
                    {stat.value}
                  </h3>
                </div>
                <p className="text-navy-700/60 text-sm leading-relaxed flex-1 group-hover:text-white/60 transition-colors">
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
