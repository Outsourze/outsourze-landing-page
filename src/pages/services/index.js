
import BannerSection from "@/component/services/services-banner";
import AnalyticSection from "@/component/services/services-analytics";
import ServicesShowcaseSection from "@/component/services/services-showcase";

export default function Services() {
  return (
    <div className="flex flex-col
    lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* Services section container */}
        <BannerSection />
        <AnalyticSection />
        <ServicesShowcaseSection />
    </div>
  )
}