"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/IHk2lr906avDAPVAJ7z3c7?s=cl&p=i&mlu=2";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Grubuna Katıl"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 group"
    >
      <FaWhatsapp size={24} className="shrink-0" />
      <span className="hidden sm:inline font-oswald font-semibold text-sm tracking-wide uppercase">
        Gruba Katıl
      </span>
    </a>
  );
}
