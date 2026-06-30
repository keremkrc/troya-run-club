import Link from "next/link";
import { MapPin, Clock, Users } from "lucide-react";
import { events } from "@/data/events";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", { day: "2-digit", month: "short" });
}

const typeBadge: Record<string, { label: string; className: string }> = {
  haftalık: { label: "HAFTALIK", className: "bg-dark text-bronze-400" },
  özel: { label: "ÖZEL", className: "bg-bronze-500 text-white" },
  yarış: { label: "YARIŞ", className: "bg-amber-500 text-navy-900" },
};

export default function EventsSection() {
  const upcomingEvents = events.filter((e) => !e.isPast).slice(0, 4);

  return (
    <section id="etkinlikler" className="bg-stone py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-cream/50 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">TAKVİM</p>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-cream">
              YAKLAŞAN ETKİNLİKLER
            </h2>
          </div>
          <Link
            href="/etkinlikler"
            className="text-xs tracking-[0.25em] uppercase text-bronze-400 hover:text-bronze-400 flex items-center gap-2 transition-colors font-semibold self-start md:self-auto"
          >
            TÜM TAKVİM <span>→</span>
          </Link>
        </div>

        <div className="border-t border-white/10">
          {upcomingEvents.map((event, idx) => {
            const badge = typeBadge[event.type];
            const isFull = event.participants >= event.maxParticipants;
            return (
              <div
                key={event.id}
                className={`flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/10 gap-4 group -mx-6 px-6 transition-colors cursor-pointer ${
                  idx === 0 ? "bg-bronze-500/5 hover:bg-bronze-500/10" : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-cream font-oswald font-bold text-sm tracking-[0.2em] uppercase w-16 shrink-0 mt-1">
                    {formatDate(event.date)}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-oswald font-bold text-xl uppercase tracking-tight text-cream group-hover:text-bronze-400 transition-colors">
                        {event.title}
                      </h3>
                      {badge && (
                        <span className={`text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 ${badge.className}`}>
                          {badge.label}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-bronze-400" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-bronze-400" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={12} className="text-bronze-400" />
                        {event.participants}
                        <span className="text-cream/40">/ {event.maxParticipants}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 ml-[88px] md:ml-0">
                  <button
                    type="button"
                    disabled={isFull}
                    id={`event-join-${event.id}`}
                    className="font-oswald font-semibold text-xs tracking-[0.25em] uppercase px-6 py-2.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-bronze-500 text-white hover:bg-bronze-600"
                  >
                    {isFull ? "DOLU" : "KATIL"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
