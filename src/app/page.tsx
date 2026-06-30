import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import EventsSection from "@/components/home/EventsSection";
import ShopShowcase from "@/components/home/ShopShowcase";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Troya Run Club — Çanakkale'nin koşucu topluluğu. Tarihin izinde koş, efsanenin parçası ol.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <EventsSection />
      <ShopShowcase />
      <FaqSection />
    </>
  );
}
