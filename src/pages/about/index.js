import BannerSection from "@/component/about/about-banner";
import CompanyAboutSection from "@/component/about/about-company";
import FounderSection from "@/component/about/about-founder";

export default function About() {
  return (
    <div className="flex flex-col 
    lg:gap-20 md:gap-10 max-md:gap-3">
      {/* about section container */}
      <BannerSection />
      <CompanyAboutSection />
      <FounderSection />
    </div>
  )
}