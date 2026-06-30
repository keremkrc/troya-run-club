import type { Metadata } from "next";
import { Trophy, TrendingUp } from "lucide-react";
import { leaderboard } from "@/data/leaderboard";

export const metadata: Metadata = {
  title: "Liderlik Tablosu",
  description: "Troya Run Club aylık koşu mesafesi ve katılım sıralaması.",
};

export default function LeaderboardPage() {
  return (
    <>
      <div className="bg-navy-700 pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {[10, 30, 50, 70, 90].map((l) => (
            <div key={l} className="absolute top-0 bottom-0 w-px bg-bronze-400" style={{ left: `${l}%` }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">SIRALAMALAR</p>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight text-white">
            LİDERLİK TABLOSU
          </h1>
          <p className="text-white/60 mt-4 max-w-xl">Haziran 2026 · Aylık Mesafe Sıralaması</p>
        </div>
      </div>

      <section className="bg-cream py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top 3 */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {leaderboard.slice(0, 3).map((entry, i) => {
              const medals = ["🥇", "🥈", "🥉"];
              const bg = i === 0 ? "bg-bronze-500 text-white" : i === 1 ? "bg-navy-700 text-white" : "bg-cream border border-navy-700/10";
              return (
                <div key={entry.rank} className={`${bg} p-6 text-center flex flex-col items-center gap-3`}>
                  <span className="text-3xl">{medals[i]}</span>
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center font-oswald font-bold text-lg">
                    {entry.avatar}
                  </div>
                  <div>
                    <p className="font-oswald font-bold text-lg uppercase tracking-tight">{entry.name}</p>
                    <p className="text-sm opacity-75 font-semibold">{entry.distance} km</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Table */}
          <div className="bg-white border border-navy-700/10 overflow-hidden">
            <div className="grid grid-cols-[48px_1fr_100px_80px_100px] text-[10px] tracking-[0.3em] uppercase font-bold text-navy-700/40 bg-navy-700/3 px-6 py-3 border-b border-navy-700/10">
              <span>#</span>
              <span>Koşucu</span>
              <span className="text-right">Mesafe</span>
              <span className="text-right">Koşu</span>
              <span className="text-right">Ort. Tempo</span>
            </div>
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                className={`grid grid-cols-[48px_1fr_100px_80px_100px] px-6 py-4 border-b border-navy-700/5 items-center hover:bg-bronze-500/5 transition-colors ${
                  entry.rank <= 3 ? "bg-bronze-500/5" : ""
                }`}
              >
                <span className="font-oswald font-bold text-lg text-navy-700/40">
                  {entry.rank}
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy-700 flex items-center justify-center text-white font-oswald font-bold text-xs shrink-0">
                    {entry.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">{entry.name}</p>
                    {entry.badge && (
                      <p className="text-bronze-500 text-xs">{entry.badge}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-oswald font-bold text-navy-700">{entry.distance}</span>
                  <span className="text-navy-700/40 text-xs ml-1">km</span>
                </div>
                <div className="text-right">
                  <span className="font-oswald font-bold text-navy-700">{entry.runs}</span>
                  <span className="text-navy-700/40 text-xs ml-1">koşu</span>
                </div>
                <div className="text-right flex items-center justify-end gap-1">
                  <TrendingUp size={12} className="text-bronze-400" />
                  <span className="font-oswald text-navy-700">{entry.avgPace}</span>
                  <span className="text-navy-700/40 text-xs">/km</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-navy-700/40 text-xs text-center mt-6 tracking-wide">
            * Mock veri · Gerçek veriler yakında Strava entegrasyonu ile güncellenecektir
          </p>
        </div>
      </section>
    </>
  );
}
