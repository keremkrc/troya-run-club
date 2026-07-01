"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { CheckCircle, Send } from "lucide-react";

const experienceLevels = [
  "Yeni Başlayan (Hiç koşmadım)",
  "Başlangıç (0–5 km)",
  "Orta (5–10 km)",
  "İleri (10–21 km)",
  "Deneyimli (Yarı/Tam maraton)",
];

export default function KayitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", level: "", message: "", kvkk: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.level || !form.kvkk) {
      setError("Lütfen tüm zorunlu alanları doldurun ve KVKK onayını işaretleyin.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    if (!formspreeKey) {
      // Fallback for development if key is not set: simulate successful submission
      console.log("Formspree key not set in .env.local, simulating success:", form);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          "Ad Soyad": form.name,
          "E-posta": form.email,
          "Telefon": form.phone,
          "Deneyim Seviyesi": form.level,
          "Mesaj": form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Başvuru gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.");
      }
    } catch (err) {
      setError("Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setError(null);
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <div className="bg-dark pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {[10, 30, 50, 70, 90].map((l) => (
            <div key={l} className="absolute top-0 bottom-0 w-px bg-bronze-400" style={{ left: `${l}%` }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-bronze-400/80 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">ÜYELİK</p>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight text-white">BİZE KATIL</h1>
        </div>
      </div>

      <section className="bg-dark py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <CheckCircle size={64} className="text-bronze-400 mx-auto mb-6" />
              <h2 className="font-oswald font-bold text-4xl uppercase text-cream mb-4">Başvurun Alındı!</h2>
              <p className="text-muted leading-relaxed">
                Merhaba <strong>{form.name}</strong>! Başvurunu aldık. En kısa sürede{" "}
                <strong>{form.email}</strong> adresine dönüş yapacağız. Aramıza hoş geldin! 🏛️
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="bg-stone border border-white/10 p-8">
                <h2 className="font-oswald font-bold text-2xl uppercase text-cream mb-6">Üyelik Formu</h2>

                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="name" className="block text-[10px] font-bold tracking-[0.3em] uppercase text-muted mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınızı girin"
                    className="w-full border border-white/15 bg-dark px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-bronze-400 transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className="block text-[10px] font-bold tracking-[0.3em] uppercase text-muted mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ornek@email.com"
                    className="w-full border border-white/15 bg-dark px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-bronze-400 transition-colors text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="mb-5">
                  <label htmlFor="phone" className="block text-[10px] font-bold tracking-[0.3em] uppercase text-muted mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="05XX XXX XX XX"
                    className="w-full border border-white/15 bg-dark px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-bronze-400 transition-colors text-sm"
                  />
                </div>

                {/* Level */}
                <div className="mb-5">
                  <label htmlFor="level" className="block text-[10px] font-bold tracking-[0.3em] uppercase text-muted mb-2">
                    Deneyim Seviyesi *
                  </label>
                  <select
                    id="level"
                    name="level"
                    required
                    value={form.level}
                    onChange={handleChange}
                    className="w-full border border-white/15 bg-dark px-4 py-3 text-cream focus:outline-none focus:border-bronze-400 transition-colors text-sm appearance-none"
                  >
                    <option value="" disabled>Seçiniz...</option>
                    {experienceLevels.map((lvl) => (
                      <option key={lvl} value={lvl}>{lvl}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[10px] font-bold tracking-[0.3em] uppercase text-muted mb-2">
                    Bize Bir Şey Söyle (Opsiyonel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Kendini tanıt, beklentilerini paylaş..."
                    className="w-full border border-white/15 bg-dark px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-bronze-400 transition-colors text-sm resize-none"
                  />
                </div>

                {/* KVKK */}
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id="kvkk"
                      name="kvkk"
                      required
                      checked={form.kvkk}
                      onChange={handleChange}
                      className="mt-0.5 accent-bronze-500"
                    />
                    <span className="text-sm text-muted leading-relaxed">
                      <a href="/kvkk" className="text-bronze-400 hover:text-bronze-600 underline">KVKK Aydınlatma Metni</a>&apos;ni okudum ve kabul ediyorum. *
                    </span>
                  </label>
                </div>

                {error && (
                  <p className="text-red-500 text-xs font-semibold mb-4">{error}</p>
                )}

                <button
                  type="submit"
                  id="submit-registration"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-bronze-500 text-white font-oswald font-bold text-sm tracking-[0.25em] uppercase py-4 hover:bg-bronze-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {isSubmitting ? "GÖNDERİLİYOR..." : "BAŞVURUYU GÖNDER"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
