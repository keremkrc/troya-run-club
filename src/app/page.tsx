import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TrainingSection from "@/components/home/TrainingSection";
import EventsSection from "@/components/home/EventsSection";
import ShopShowcase from "@/components/home/ShopShowcase";
import FaqSection from "@/components/home/FaqSection";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Troya Run Club — Çanakkale'nin koşucu topluluğu. Tarihin izinde koş, efsanenin parçası ol.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal>
        <TrainingSection />
      </ScrollReveal>
      <ScrollReveal>
        <EventsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ShopShowcase />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>
    </>
  );
}
