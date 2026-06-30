import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ShoppingBag, Check } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return { title: product.name, description: product.description };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <div className="bg-navy-700 pt-28 pb-0 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-bronze-400/70 text-xs tracking-[0.3em] uppercase font-semibold py-4">
            <a href="/magaza" className="hover:text-bronze-300 transition-colors">Mağaza</a>
            {" → "}
            <span className="text-white/60">{product.name}</span>
          </p>
        </div>
      </div>

      <section className="bg-cream py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-square bg-white border border-navy-700/10 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {product.salePrice && (
              <div className="absolute top-4 left-4 bg-bronze-500 text-white font-oswald font-bold text-sm tracking-[0.1em] uppercase px-3 py-1.5">
                İNDİRİM
              </div>
            )}
          </div>

          {/* Info */}
          <div className="sticky top-24">
            <p className="text-bronze-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">{product.category}</p>
            <h1 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-navy-700 mb-4">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-oswald font-bold text-4xl text-navy-700">
                {product.salePrice ?? product.price} ₺
              </span>
              {product.salePrice && (
                <span className="text-lg text-navy-700/40 line-through">{product.price} ₺</span>
              )}
            </div>

            <p className="text-navy-700/65 text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="font-oswald font-bold text-sm tracking-[0.2em] uppercase text-navy-700 mb-3">BEDEN SEÇ</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    id={`size-${size}`}
                    className="w-12 h-12 border border-navy-700/20 text-navy-700 font-oswald font-semibold text-sm hover:border-bronze-500 hover:bg-bronze-500 hover:text-white transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              id="add-to-cart"
              className="w-full flex items-center justify-center gap-3 bg-bronze-500 text-white font-oswald font-bold text-sm tracking-[0.25em] uppercase py-4 hover:bg-navy-700 transition-colors mb-4"
            >
              <ShoppingBag size={18} />
              SATIN AL
            </button>

            <div className="flex flex-col gap-2 mt-6">
              {["Ücretsiz kargo (500₺ üzeri)", "30 gün iade garantisi", "Türkiye'de üretilmiştir"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-navy-700/60">
                  <Check size={14} className="text-bronze-500 shrink-0" />
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
