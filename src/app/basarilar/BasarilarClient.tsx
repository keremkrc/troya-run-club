"use client";

import { useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/image";
import {
  X,
  MapPin,
  Calendar,
  Trophy,
  ChevronRight,
  Medal,
  Timer,
  Users,
} from "lucide-react";

interface Sonuc {
  uyeAdi: string;
  binisSuresi: string;
  genelSiralama?: number;
  yasGrubuSiralamasi?: string;
}

interface Basari {
  _id: string;
  etkinlikAdi: string;
  tarih: string;
  konum: string;
  kategori: string;
  fotograf?: { asset: { _ref: string } };
  sonuclar?: Sonuc[];
}

const KATEGORI_LABEL: Record<string, string> = {
  "ultra-maraton": "Ultra Maraton",
  maraton: "Maraton (42K)",
  "yari-maraton": "Yarı Maraton (21K)",
  "15k": "15K",
  "10k": "10K",
  "5k": "5K",
  parkur: "Parkur Koşusu",
  diger: "Diğer",
};

const KATEGORI_COLOR: Record<string, string> = {
  "ultra-maraton": "bg-purple-900/60 text-purple-300 border-purple-700/40",
  maraton: "bg-bronze-500/20 text-bronze-300 border-bronze-500/40",
  "yari-maraton": "bg-navy-700/60 text-blue-300 border-blue-700/40",
  "15k": "bg-teal-900/40 text-teal-300 border-teal-700/40",
  "10k": "bg-green-900/40 text-green-300 border-green-700/40",
  "5k": "bg-cyan-900/40 text-cyan-300 border-cyan-700/40",
  parkur: "bg-amber-900/40 text-amber-300 border-amber-700/40",
  diger: "bg-stone/40 text-cream/60 border-white/10",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="text-yellow-400 font-bold">🥇 1.</span>;
  if (rank === 2) return <span className="text-slate-300 font-bold">🥈 2.</span>;
  if (rank === 3) return <span className="text-amber-600 font-bold">🥉 3.</span>;
  return <span className="text-muted">{rank}.</span>;
}

export default function BasarilarClient({ basarilar }: { basarilar: Basari[] }) {
  const [selected, setSelected] = useState<Basari | null>(null);

  return (
    <>
      {/* ── Cards Grid ── */}
      {basarilar.length === 0 ? (
        <div className="text-center py-24 text-muted">
          <Trophy size={48} className="mx-auto mb-4 text-bronze-400/30" />
          <p className="text-sm tracking-widest uppercase">
            Henüz başarı eklenmedi
          </p>
          <p className="text-xs mt-2 text-muted/50">
            Sanity Studio'dan etkinlik sonuçları eklenince burada görünecek.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {basarilar.map((b) => {
            const imgBuilder = b.fotograf ? urlForImage(b.fotograf) : null;
            const imgUrl = imgBuilder
              ? imgBuilder.width(600).height(400).url()
              : null;
            const kategoriColor =
              KATEGORI_COLOR[b.kategori] ?? KATEGORI_COLOR["diger"];
            const kategoriLabel =
              KATEGORI_LABEL[b.kategori] ?? b.kategori;

            return (
              <button
                key={b._id}
                onClick={() => setSelected(b)}
                className="group text-left bg-mid/60 border border-white/10 rounded-2xl overflow-hidden hover:border-bronze-500/40 hover:shadow-[0_0_40px_rgba(232,101,10,0.15)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400"
              >
                {/* Image */}
                <div className="relative h-[250px] w-full bg-navy-900 overflow-hidden">
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt={b.etkinlikAdi}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-900 to-[#1B2A4A]">
                      <Trophy size={40} className="text-bronze-400/30" />
                    </div>
                  )}
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Kategori badge */}
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full border ${kategoriColor}`}
                  >
                    {kategoriLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-oswald font-bold text-xl uppercase text-cream leading-tight group-hover:text-bronze-400 transition-colors line-clamp-2">
                    {b.etkinlikAdi}
                  </h3>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Calendar size={12} className="text-bronze-400 shrink-0" />
                      {formatDate(b.tarih)}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <MapPin size={12} className="text-bronze-400 shrink-0" />
                      {b.konum}
                    </div>
                    {b.sonuclar && b.sonuclar.length > 0 && (
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Users size={12} className="text-bronze-400 shrink-0" />
                        {b.sonuclar.length} üye tamamladı
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/10">
                    <span className="text-bronze-400 text-xs font-semibold tracking-widest uppercase">
                      Sonuçları Gör
                    </span>
                    <ChevronRight
                      size={16}
                      className="text-bronze-400 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* ── Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.etkinlikAdi} sonuçları`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* Panel */}
          <div className="relative bg-[#0E0E0E] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-6 border-b border-white/10 shrink-0">
              <div>
                <span
                  className={`text-[10px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full border ${
                    KATEGORI_COLOR[selected.kategori] ?? KATEGORI_COLOR["diger"]
                  }`}
                >
                  {KATEGORI_LABEL[selected.kategori] ?? selected.kategori}
                </span>
                <h2 className="font-oswald font-bold text-2xl uppercase text-cream mt-3 leading-tight">
                  {selected.etkinlikAdi}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} className="text-bronze-400" />
                    {formatDate(selected.tarih)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-bronze-400" />
                    {selected.konum}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Kapat"
                className="shrink-0 p-2 text-muted hover:text-cream hover:bg-white/5 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-y-auto flex-1">
              {!selected.sonuclar || selected.sonuclar.length === 0 ? (
                <div className="text-center py-16 text-muted">
                  <Medal size={36} className="mx-auto mb-3 text-bronze-400/30" />
                  <p className="text-sm">Bu etkinlik için sonuç eklenmemiş.</p>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-[#0E0E0E] border-b border-white/10">
                    <tr>
                      <th className="text-left text-[10px] font-bold tracking-[0.3em] uppercase text-muted py-3 px-6">
                        Sıra
                      </th>
                      <th className="text-left text-[10px] font-bold tracking-[0.3em] uppercase text-muted py-3 px-4">
                        Üye
                      </th>
                      <th className="text-left text-[10px] font-bold tracking-[0.3em] uppercase text-muted py-3 px-4">
                        <span className="flex items-center gap-1.5">
                          <Timer size={11} />
                          Süre
                        </span>
                      </th>
                      <th className="text-left text-[10px] font-bold tracking-[0.3em] uppercase text-muted py-3 px-4 hidden sm:table-cell">
                        Yaş Grubu
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...selected.sonuclar]
                      .sort((a, b) =>
                        (a.genelSiralama ?? 9999) - (b.genelSiralama ?? 9999)
                      )
                      .map((s, i) => (
                        <tr
                          key={i}
                          className={`border-b border-white/5 hover:bg-white/[0.03] transition-colors ${
                            i % 2 === 0 ? "" : "bg-white/[0.015]"
                          }`}
                        >
                          <td className="py-4 px-6 font-semibold">
                            {s.genelSiralama ? (
                              <RankBadge rank={s.genelSiralama} />
                            ) : (
                              <span className="text-muted">—</span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-cream font-medium">
                            {s.uyeAdi}
                          </td>
                          <td className="py-4 px-4 font-mono text-bronze-400 font-semibold">
                            {s.binisSuresi}
                          </td>
                          <td className="py-4 px-4 text-muted text-xs hidden sm:table-cell">
                            {s.yasGrubuSiralamasi ?? "—"}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 border-t border-white/10 flex items-center justify-between">
              <p className="text-muted text-xs">
                {selected.sonuclar?.length ?? 0} koşucu
              </p>
              <button
                onClick={() => setSelected(null)}
                className="text-xs font-semibold tracking-widest uppercase text-bronze-400 hover:text-bronze-300 transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
