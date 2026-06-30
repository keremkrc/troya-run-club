import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
};

export default function KvkkPage() {
  return (
    <>
      <div className="bg-navy-700 pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-oswald font-bold text-4xl uppercase tracking-tight text-white">
            KVKK AYDINLATMA METNİ
          </h1>
        </div>
      </div>
      <section className="bg-cream py-12 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm text-navy-700/70 space-y-4">
          <p className="text-sm leading-relaxed">
            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca
            Troya Run Club tarafından üyelerimizin kişisel verilerinin işlenmesi hakkında
            bilgilendirme amacıyla hazırlanmıştır.
          </p>
          <h2 className="font-oswald font-bold text-xl text-navy-700 mt-6">1. Veri Sorumlusu</h2>
          <p className="text-sm leading-relaxed">
            Troya Run Club, Çanakkale, Türkiye adresinde faaliyet gösteren koşu kulübüdür.
          </p>
          <h2 className="font-oswald font-bold text-xl text-navy-700 mt-6">2. İşlenen Kişisel Veriler</h2>
          <p className="text-sm leading-relaxed">
            Ad-soyad, e-posta adresi, telefon numarası ve etkinliklerde çekilen fotoğraf/videolar.
          </p>
          <h2 className="font-oswald font-bold text-xl text-navy-700 mt-6">3. Amaç</h2>
          <p className="text-sm leading-relaxed">
            Etkinlik kaydı yönetimi, üye iletişimi, sosyal medya paylaşımı ve kulüp organizasyonu.
          </p>
          <h2 className="font-oswald font-bold text-xl text-navy-700 mt-6">4. Haklarınız</h2>
          <p className="text-sm leading-relaxed">
            KVKK kapsamında verilerinize erişim, düzeltme, silme ve işlemeye itiraz haklarına
            sahipsiniz. Talepleriniz için: <a href="mailto:info@troyarunclub.com" className="text-bronze-500 underline">info@troyarunclub.com</a>
          </p>
          <p className="text-xs text-navy-700/40 mt-8">* Bu sayfa örnek/placeholder içerik içermektedir.</p>
        </div>
      </section>
    </>
  );
}
