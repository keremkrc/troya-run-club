"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export default function ShopShowcase() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + products.length) % products.length);
  const next = () => setCurrent((c) => (c + 1) % products.length);

  return (
    <section id="magaza" className="bg-cream py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-navy-700/50 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">MAĞAZA</p>
          <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-navy-700">
            TROYA KOLEKSİYONU
          </h2>
        </div>

        <div className="relative h-[520px] md:h-[560px]">
          {products.map((product, idx) => {
            const offset = idx - current;
            const isCenter = offset === 0;
            const isLeft = offset === -1 || (current === 0 && idx === products.length - 1);
            const isRight = offset === 1 || (current === products.length - 1 && idx === 0);

            let transform = "translateX(calc(-50% + 150%)) scale(0.8)";
            let opacity = 0;
            let zIndex = 10;
            let blur = "blur(6px)";
            let pointerEvents: "auto" | "none" = "none";

            if (isCenter) {
              transform = "translateX(-50%) scale(1)";
              opacity = 1;
              zIndex = 20;
              blur = "blur(0)";
              pointerEvents = "auto";
            } else if (isLeft) {
              transform = "translateX(calc(-50% - 72%)) scale(0.8)";
              opacity = 0.5;
              blur = "blur(4px)";
              pointerEvents = "auto";
            } else if (isRight) {
              transform = "translateX(calc(-50% + 72%)) scale(0.8)";
              opacity = 0.5;
              blur = "blur(4px)";
              pointerEvents = "auto";
            }

            return (
              <button
                key={product.slug}
                type="button"
                onClick={() => !isCenter && setCurrent(idx)}
                className="absolute top-0 left-1/2 w-[88%] sm:w-[70%] md:w-[420px] h-full transition-all duration-500 ease-out text-left"
                style={{ transform, opacity, zIndex, filter: blur, pointerEvents }}
                aria-label={product.name}
                aria-current={isCenter}
              >
                <div className="h-full flex flex-col bg-white border border-navy-700/10 shadow-lg">
                  <div className="relative flex-1 bg-navy-50 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 88vw, 420px"
                      priority={isCenter}
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3 items-center text-center">
                    <h3 className="font-oswald font-bold text-lg uppercase tracking-tight text-navy-700">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-3">
                      <span className="font-oswald font-bold text-2xl text-navy-700">
                        {product.salePrice ?? product.price} ₺
                      </span>
                      {product.salePrice && (
                        <span className="text-sm text-navy-700/40 line-through">{product.price} ₺</span>
                      )}
                    </div>
                    {isCenter && (
                      <Link
                        href={`/magaza/${product.slug}`}
                        id={`shop-btn-${product.slug}`}
                        className="mt-1 bg-bronze-500 text-white font-oswald font-semibold text-xs tracking-[0.25em] uppercase px-8 py-3 hover:bg-navy-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        SATIN AL
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Önceki ürün"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white border border-navy-700/10 text-navy-700 hover:bg-bronze-500 hover:text-white hover:border-bronze-500 transition-colors shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Sonraki ürün"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white border border-navy-700/10 text-navy-700 hover:bg-bronze-500 hover:text-white hover:border-bronze-500 transition-colors shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {products.map((p, idx) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`${p.name} ürününe git`}
              className={`h-1.5 transition-all rounded-full ${
                idx === current ? "w-8 bg-bronze-500" : "w-4 bg-navy-700/20 hover:bg-navy-700/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/magaza"
            id="shop-all-products"
            className="font-oswald font-semibold text-sm tracking-[0.25em] uppercase text-bronze-500 hover:text-bronze-600 transition-colors"
          >
            TÜM ÜRÜNLERİ GÖR →
          </Link>
        </div>
      </div>
    </section>
  );
}
