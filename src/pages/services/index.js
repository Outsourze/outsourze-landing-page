
import BannerSection from "@/component/services/services-banner";
import AnalyticSection from "@/component/services/services-analytics";
import ServicesShowcaseSection from "@/component/services/services-showcase";
import SEO from "@/utility/useSeo";

export default function Services() {
  return (
    <>
      <SEO
        title="Outsourcing Services | Customer Support, Marketing, HR & More"
        description="Discover Outsourze's full range of outsourcing services, including customer support, HR recruitment, marketing, accounting, and administration—tailored to your needs."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/services`}
      />
      <div className="flex flex-col
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* Services section container */}
        <BannerSection />
        <AnalyticSection />
        <ServicesShowcaseSection />
      </div>
    </>
  )
}