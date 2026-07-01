import Link from 'next/link'
import { client } from '@/sanity/client'

export default async function HeroSection() {
  const ayarlar = await client.fetch(`*[_type == "ayarlar"][0]`)

  const title = ayarlar?.heroTitle || 'TROYA RUN CLUB'
  const subtitle = ayarlar?.heroSubtitle || 'Çanakkale\'nin efsanevi topraklarında koşuyoruz. Rekabet değil tutku, bireysel başarı değil aile — birlikte daha uzağa.'

  return (
    <div className="relative min-h-[640px] md:min-h-[720px] overflow-hidden bg-dark flex items-center justify-center">
      {/* Background: Diagonal Gradient + Greek Pattern Texture Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#1B2A4A] z-0">
        <div 
          className="absolute inset-0 opacity-[0.05] z-10 pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M0 0h60v60H0zm4 4v52h52V4zm8 8h24v8H20v24h24V20h-8v-8h16v40H12z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Soft bottom vignette overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />
      </div>

      <div className="relative z-30 px-6 md:px-12 pb-16 pt-32 max-w-4xl w-full text-center mx-auto">
        {/* Badge - delay: 0ms */}
        <div 
          className="inline-block text-[11px] font-semibold tracking-[3px] uppercase text-bronze-400 border border-bronze-500 px-4 py-1.5 mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          Troya Run Club — Kur. 5 Mayıs 2025
        </div>
        
        {/* Title - delay: 200ms */}
        <h1 
          className="font-oswald text-6xl md:text-8xl lg:text-[100px] leading-[0.88] tracking-wide text-cream mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
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

        {/* Subtitle - delay: 400ms */}
        <p 
          className="text-[15px] font-light text-cream/75 mt-5 leading-[1.7] max-w-xl mx-auto animate-fade-up opacity-0"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          {subtitle}
        </p>

        {/* Buttons - delay: 600ms */}
        <div 
          className="flex gap-4 mt-8 items-center justify-center animate-fade-up opacity-0"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          <Link href="/kayit" className="bg-bronze-500 hover:bg-bronze-600 text-white text-[11px] font-semibold tracking-[2px] uppercase px-8 py-3.5 transition-colors">
            Gruba Katıl
          </Link>
          <Link href="/#antrenmanlar" className="text-cream text-[11px] font-semibold tracking-[2px] uppercase px-0 py-3.5 border-b border-cream/50 hover:text-bronze-400 transition-colors">
            Programı Gör →
          </Link>
        </div>
      </div>
    </div>
  )
}
