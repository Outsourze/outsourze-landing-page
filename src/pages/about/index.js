import BannerSection from "@/component/about/about-banner";
import CompanyAboutSection from "@/component/about/about-company";
import FounderSection from "@/component/about/about-founder";
import SEO from "@/utility/useSeo";

export default function About() {
  return (
    <>
      <SEO
         title="About Outsourze | Simplifying Offshore Staffing"
         description="Learn how Outsourze helps companies grow with trusted, cost-effective offshore staffing solutions backed by recruitment, management, and quality support."
         url={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}
      />
      <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-3">
        {/* about section container */}
        <BannerSection />
        <CompanyAboutSection />
        <FounderSection />
      </div>
    </>
  )
}