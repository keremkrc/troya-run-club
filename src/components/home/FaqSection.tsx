import { faqItems } from "@/data/faq";

export default function FaqSection() {
  return (
    <section id="sss" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-navy-700/50 text-xs tracking-[0.5em] uppercase mb-3 font-semibold">SSS</p>
          <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase tracking-tight text-navy-700">
            SIK SORULAN SORULAR
          </h2>
        </div>

        <div className="border-t border-navy-700/10">
          {faqItems.map((item, idx) => (
            <details
              key={idx}
              className="group border-b border-navy-700/10"
            >
              <summary className="w-full flex items-start justify-between py-7 gap-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold tracking-tight text-base md:text-lg text-navy-700 group-open:text-bronze-600 transition-colors">
                  {item.question}
                </span>
                <span
                  className="text-bronze-500 text-2xl leading-none shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="pb-7 pr-10">
                <p className="text-navy-700/65 text-sm leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
