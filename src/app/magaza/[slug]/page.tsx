"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ShoppingBag, Check } from "lucide-react";
import { useState, use } from "react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: Props) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);
  
  const resolvedParams = use(params);
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div className="bg-dark pt-28 pb-0 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-bronze-400/70 text-xs tracking-[0.3em] uppercase font-semibold py-4">
            <a href="/magaza" className="hover:text-bronze-400 transition-colors">Mağaza</a>
            {" → "}
            <span className="text-muted">{product.name}</span>
          </p>
        </div>
      </div>

      <section className="bg-dark py-12 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image / 3D Viewer */}
          <div className="relative aspect-square bg-stone border border-white/10 overflow-hidden shadow-sm rounded-3xl">
            {product.is3D && product.modelUrl ? (
              <iframe 
                src={product.modelUrl} 
                className="w-full h-full border-0"
                title={product.name}
                allow="camera; microphone; xr-spatial-tracking"
              />
            ) : (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
              />
            )}
            {product.salePrice && !product.is3D && (
              <div className="absolute top-4 left-4 bg-bronze-500 text-white font-oswald font-bold text-sm tracking-[0.1em] uppercase px-3 py-1.5 rounded-full shadow-lg">
                İNDİRİM
              </div>
            )}
          </div>

          {/* Info */}
          <div className="sticky top-24">
            <p className="text-bronze-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">{product.category}</p>
            <h1 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-cream mb-4">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-oswald font-bold text-4xl text-cream">
                {product.salePrice ?? product.price} ₺
              </span>
              {product.salePrice && (
                <span className="text-lg text-muted line-through">{product.price} ₺</span>
              )}
            </div>

            <p className="text-muted text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="font-oswald font-bold text-sm tracking-[0.2em] uppercase text-cream mb-3">BEDEN SEÇ</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border font-oswald font-semibold text-sm transition-colors ${
                      selectedSize === size
                        ? "border-bronze-400 bg-bronze-500 text-white"
                        : "border-white/20 text-cream hover:border-bronze-400 hover:text-bronze-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full flex items-center justify-center gap-3 font-oswald font-bold text-sm tracking-[0.25em] uppercase py-4 transition-all duration-300 mb-4 ${
                added 
                  ? "bg-green-500 text-white" 
                  : "bg-bronze-500 text-white hover:bg-bronze-600"
              }`}
            >
              {added ? (
                <>
                  <Check size={18} />
                  SEPETE EKLENDİ
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  SATIN AL
                </>
              )}
            </button>

            <div className="flex flex-col gap-2 mt-6">
              {["Ücretsiz kargo (500₺ üzeri)", "30 gün iade garantisi", "Türkiye'de üretilmiştir"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted">
                  <Check size={14} className="text-bronze-400 shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
