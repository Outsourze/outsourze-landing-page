import CostComparisonSection from "@/component/case-study/case-study-cost-compare";
import IntroductionSection from "@/component/case-study/case-study-introduction";

export default function CaseStudy() {
  return (
    <div className="flex flex-col gap-20">
        {/* Case study section container */}
        <IntroductionSection />
        <CostComparisonSection />
    </div>
  )
}