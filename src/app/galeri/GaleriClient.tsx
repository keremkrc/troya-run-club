"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { urlForImage } from "@/sanity/image";

export default function GaleriClient({ galleryItems }: { galleryItems: any[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevItem = () => setLightbox((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  const nextItem = () => setLightbox((i) => (i === null ? null : (i + 1) % galleryItems.length));

  const current = lightbox !== null ? galleryItems[lightbox] : null;

  return (
    <>
      <div className="bg-dark pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {[10, 30, 50, 70, 90].map((l) => (
            <div key={l} className="absolute top-0 bottom-0 w-px bg-bronze-400" style={{ left: `${l}%` }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">ANLAR</p>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight text-white">
            GALERİ
          </h1>
        </div>
      </div>

      <section className="bg-dark py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryItems.map((item, idx) => (
              <button
                key={item._id}
                type="button"
                onClick={() => openLightbox(idx)}
                id={`gallery-item-${item._id}`}
                className="relative aspect-square overflow-hidden group bg-stone/5 focus-visible:outline-2 focus-visible:outline-bronze-400"
                aria-label={`Fotoğrafı büyüt: ${item.description}`}
              >
                {item.image && (
                  <Image
                    src={urlForImage(item.image)?.url() as string}
                    alt={item.description || "Galeri Fotoğrafı"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                )}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors flex items-end p-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-oswald font-bold text-sm uppercase tracking-wide">{item.description}</p>
                    {item.date && (
                      <p className="text-bronze-400 text-xs">{new Date(item.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Fotoğraf önizleme"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Kapat"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevItem(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Önceki"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {current.image && (
              <Image
                src={urlForImage(current.image)?.url() as string}
                alt={current.description || "Galeri Fotoğrafı"}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            )}
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextItem(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Sonraki"
          >
            <ChevronRight size={36} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-oswald text-lg uppercase tracking-wide">{current.description}</p>
            {current.date && (
              <p className="text-bronze-400 text-sm">{new Date(current.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</p>
            )}
            <p className="text-muted text-xs mt-1">{lightbox + 1} / {galleryItems.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
