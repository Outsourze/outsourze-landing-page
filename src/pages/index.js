import BenefitSection from "@/component/home/home-benefits";
import FounderSection from "@/component/home/home-founder";
import HeroSection from "@/component/home/home-hero";
import HowItWorkSection from "@/component/home/home-how-work";
import ServicesSection from "@/component/home/home-service";
import SEO from "@/utility/useSeo";


export default function Home() {
  return (
    <>
    <SEO
       title="Outsourze | Hire Skilled Overseas Talent at Lower Cost"
       description="Scale your business with top offshore professionals from the Philippines. Save up to 70% on labor costs while maintaining quality and efficiency."
       url={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
    />
    <div className="flex flex-col 
    lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
      {/* hero section container */}
      <HeroSection />
      <ServicesSection />
      <HowItWorkSection />
      <BenefitSection />
      <FounderSection />
    </div>
    </>
    
  )
}