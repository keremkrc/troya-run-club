import type { Metadata } from "next";
import { client } from "@/sanity/client";
import BasarilarClient from "./BasarilarClient";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Başarılar",
  description:
    "Troya Run Club üyelerinin yarış ve etkinlik sonuçları. Tamamlanan maraton, yarı maraton ve parkur koşularındaki başarılarımız.",
};

export const revalidate = 60;

const QUERY = `*[_type == "basari"] | order(tarih desc) {
  _id,
  etkinlikAdi,
  tarih,
  konum,
  kategori,
  fotograf,
  sonuclar[] {
    uyeAdi,
    binisSuresi,
    genelSiralama,
    yasGrubuSiralamasi
  }
}`;

export default async function BasarilarPage() {
  const basarilar = await client.fetch(QUERY);

  return (
    <>
      {/* Hero Header */}
      <div className="relative bg-dark pt-32 pb-16 px-6 overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          {[10, 25, 50, 75, 90].map((l) => (
            <div
              key={l}
              className="absolute top-0 bottom-0 w-px bg-bronze-400"
              style={{ left: `${l}%` }}
            />
          ))}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">
                SONUÇLAR & DERECELER
              </p>
              <h1 className="font-oswald font-bold text-6xl md:text-8xl uppercase tracking-tight text-cream leading-[0.88]">
                BAŞARILAR
              </h1>
            </div>
            <div className="flex items-center gap-3 pb-2">
              <Trophy size={32} className="text-bronze-400" />
              <p className="text-muted text-sm max-w-xs leading-relaxed">
                Kulüp üyelerimizin katıldığı yarış ve etkinliklerdeki dereceler.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-dark py-16 px-6 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {basarilar.length > 0 && (
            <p className="text-muted text-xs tracking-[0.4em] uppercase mb-8">
              {basarilar.length} etkinlik — Bir karta tıklayarak sonuçları görebilirsiniz
            </p>
          )}
          <BasarilarClient basarilar={basarilar} />
        </div>
      </section>
    </>
  );
}
