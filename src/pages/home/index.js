import BenefitSection from "@/component/home/home-benefits";
import FounderSection from "@/component/home/home-founder";
import HeroSection from "@/component/home/home-hero";
import HowItWorkSection from "@/component/home/home-how-work";
import ServicesSection from "@/component/home/home-service";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* hero section container */}
      <HeroSection />
      <ServicesSection />
      <HowItWorkSection />
      <BenefitSection />
      <FounderSection />
    </div>
  )
}