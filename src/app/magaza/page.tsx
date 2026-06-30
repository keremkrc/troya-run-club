import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Mağaza",
  description: "Troya Run Club koleksiyonu — premium koşu kıyafetleri ve aksesuarlar.",
};

export const revalidate = 60;

export default async function MagazaPage() {
  const products = await client.fetch(`*[_type == "urun"] | order(_createdAt desc)`);

  return (
    <>
      <div className="bg-dark pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {[10, 30, 50, 70, 90].map((l) => (
            <div key={l} className="absolute top-0 bottom-0 w-px bg-bronze-400" style={{ left: `${l}%` }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">KOLEKSİYON</p>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight text-white">MAĞAZA</h1>
        </div>
      </div>

      <section className="bg-dark py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: any) => (
              <Link
                key={product._id}
                href={`/magaza/${product._id}`}
                id={`product-${product._id}`}
                className="group bg-stone border border-white/10 hover:border-bronze-400 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square bg-stone overflow-hidden">
                  {product.image && (
                    <Image
                      src={urlForImage(product.image)?.url() as string}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  {product.salePrice && (
                    <div className="absolute top-3 left-3 bg-bronze-500 text-white font-oswald font-bold text-xs tracking-[0.1em] uppercase px-2 py-1">
                      İNDİRİM
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-oswald font-bold text-xl uppercase tracking-tight text-cream group-hover:text-bronze-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="font-oswald font-bold text-2xl text-cream">
                      {product.salePrice ?? product.price} ₺
                    </span>
                    {product.salePrice && (
                      <span className="text-sm text-muted line-through">{product.price} ₺</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
