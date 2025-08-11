import CostComparisonSection from "@/component/case-study/case-study-cost-compare";
import IntroductionSection from "@/component/case-study/case-study-introduction";

export default function CaseStudy() {
  return (
    <div className="flex flex-col
    lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* Case study section container */}
        <IntroductionSection />
        <CostComparisonSection />
    </div>
  )
}