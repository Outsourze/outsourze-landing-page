import BannerSection from "@/component/about/about-banner";
import CompanyAboutSection from "@/component/about/about-company";
import FounderSection from "@/component/about/about-founder";

export default function About() {
  return (
    <div className="flex flex-col gap-20">
      {/* about section container */}
      <BannerSection />
      <CompanyAboutSection />
      <FounderSection />
    </div>
  )
}