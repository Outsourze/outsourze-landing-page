import CostComparisonSection from "@/component/case-study/case-study-cost-compare";
import IntroductionSection from "@/component/case-study/case-study-introduction";
import SEO from "@/utility/useSeo";

export default function CaseStudy() {
  return (
    <>
      <SEO
        title="Outsourze Case Study | See How Businesses Save 70% on Staffing"
        description="Explore how companies cut staffing costs by up to 70% with Outsourze while scaling teams and maintaining high-quality service."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/case-study`}
      />
      <div className="flex flex-col
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* Case study section container */}
        <IntroductionSection />
        <CostComparisonSection />
      </div>
    </>
  )
}