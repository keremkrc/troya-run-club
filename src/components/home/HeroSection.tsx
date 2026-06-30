import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'

export default async function HeroSection() {
  const ayarlar = await client.fetch(`*[_type == "ayarlar"][0]`)

  const title = ayarlar?.heroTitle || 'TROYA RUN CLUB'
  const subtitle = ayarlar?.heroSubtitle || 'Çanakkale\'nin efsanevi topraklarında koşuyoruz. Rekabet değil tutku, bireysel başarı değil aile — birlikte daha uzağa.'
  const bgImageUrl = ayarlar?.heroImage ? urlForImage(ayarlar.heroImage)?.url() : '/hero-background.png'

  return (
    <div className="relative min-h-[580px] overflow-hidden bg-dark flex items-end">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark z-0" />
        <Image
          src={bgImageUrl as string}
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-50 z-10"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
      </div>

      <div className="absolute right-10 top-10 pointer-events-none z-20 hidden lg:block">
        <Image src="/logo-main.png" alt="" width={300} height={300} className="opacity-10 object-contain" />
      </div>

      <div className="relative z-30 px-6 md:px-12 pb-16 max-w-3xl">
        <div className="inline-block text-[11px] font-semibold tracking-[3px] uppercase text-bronze-400 border border-bronze-400/35 px-4 py-1.5 mb-6">
          Çanakkale Run Club — Kur. 5 Mayıs 2025
        </div>
        
        <h1 className="font-oswald text-6xl md:text-8xl lg:text-[100px] leading-[0.88] tracking-wide text-cream mb-6">
          {title.split('[').map((part: string, i: number) => {
            if (part.includes(']')) {
              const [highlight, rest] = part.split(']')
              return (
                <span key={i}>
                  <span className="text-bronze-400">{highlight}</span>
                  {rest}
                </span>
              )
            }
            return <span key={i}>{part}</span>
          })}
        </h1>

        <p className="text-[15px] font-light text-cream/75 mt-5 leading-[1.7] max-w-md">
          {subtitle}
        </p>

        <div className="flex gap-4 mt-8 items-center">
          <Link href="/kayit" className="bg-bronze-500 hover:bg-bronze-600 text-white text-[11px] font-semibold tracking-[2px] uppercase px-8 py-3.5 transition-colors">
            Gruba Katıl
          </Link>
          <Link href="/#antrenmanlar" className="text-cream text-[11px] font-semibold tracking-[2px] uppercase px-0 py-3.5 border-b border-cream/50 hover:text-bronze-400 transition-colors">
            Antrenmanları Gör →
          </Link>
        </div>
      </div>
    </div>
  )
}
