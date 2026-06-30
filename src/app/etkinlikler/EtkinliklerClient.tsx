"use client";

import { useState } from "react";
import { MapPin, Clock, Users, Filter } from "lucide-react";

type Filter = "hepsi" | "yaklaşan" | "geçmiş";

function formatDate(dateStr: string) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const typeBadge: Record<string, { label: string; className: string }> = {
  haftalik: { label: "HAFTALIK", className: "bg-dark text-bronze-400" },
  ozel: { label: "ÖZEL", className: "bg-bronze-500 text-white" },
};

function EventCard({ event }: { event: any }) {
  const badge = event.category ? typeBadge[event.category] : null;
  const isPast = new Date(event.date) < new Date();
  const isFull = event.capacity && event.capacity > 0 ? false : false; // Assuming capacity check logic if needed

  return (
    <div className="bg-stone border border-white/10 p-6 hover:border-bronze-400 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-oswald font-bold text-xl uppercase tracking-tight text-cream group-hover:text-bronze-400 transition-colors">
              {event.title}
            </h3>
            {badge && (
              <span className={`text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 ${badge.className}`}>
                {badge.label}
              </span>
            )}
          </div>
          <p className="text-bronze-400 text-xs font-semibold tracking-[0.1em]">{formatDate(event.date)}</p>
        </div>
        {isPast && (
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 bg-white/10 text-muted shrink-0">
            GEÇMİŞ
          </span>
        )}
      </div>

      <p className="text-muted text-sm leading-relaxed mb-5">{event.description}</p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-5">
        {event.location && (
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-bronze-400" />
            {event.location}
          </span>
        )}
        {event.time && (
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-bronze-400" />
            {event.time}
          </span>
        )}
        {event.capacity && (
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-bronze-400" />
            Kapasite: {event.capacity}
          </span>
        )}
      </div>

      {!isPast && (
        <button
          type="button"
          disabled={isFull}
          id={`event-card-join-${event._id}`}
          className="font-oswald font-semibold text-xs tracking-[0.25em] uppercase px-6 py-2.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-bronze-500 text-white hover:bg-bronze-600 w-full"
        >
          {isFull ? "KAPASİTE DOLU" : "ETKİNLİĞE KATIL"}
        </button>
      )}
    </div>
  );
}

export default function EtkinliklerClient({ initialEvents }: { initialEvents: any[] }) {
  const [filter, setFilter] = useState<Filter>("yaklaşan");

  const filtered = initialEvents.filter((e) => {
    const isPast = new Date(e.date) < new Date();
    if (filter === "hepsi") return true;
    if (filter === "yaklaşan") return !isPast;
    return isPast;
  });

  return (
    <>
      <div className="bg-dark pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {[10, 30, 50, 70, 90].map((l) => (
            <div key={l} className="absolute top-0 bottom-0 w-px bg-bronze-400" style={{ left: `${l}%` }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">TAKVİM</p>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight text-white">
            ETKİNLİKLER
          </h1>
        </div>
      </div>

      <section className="bg-mid py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex items-center gap-3 mb-10">
            <Filter size={16} className="text-bronze-400" />
            {(["yaklaşan", "geçmiş", "hepsi"] as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                id={`filter-${f}`}
                className={`font-oswald font-semibold text-xs tracking-[0.2em] uppercase px-4 py-2 transition-colors ${
                  filter === f
                    ? "bg-bronze-500 text-white"
                    : "bg-stone text-cream border border-white/10 hover:border-bronze-400"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
            {filtered.length === 0 && (
              <p className="text-muted text-sm col-span-2 py-12 text-center">
                Bu filtrede etkinlik bulunamadı.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
