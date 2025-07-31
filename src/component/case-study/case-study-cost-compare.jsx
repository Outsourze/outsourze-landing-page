
import SectionTitle from "../ui/section-title";

const CostComparisonSection = () => {
    return (
        <div className="min-w-7xl m-auto flex flex-col gap-6">
            <SectionTitle 
                style={"!justify-between"}
                bannerTitle={"Cost Comparison"} 
                dscrpt={"See how much you can save by outsourcing top talent without compromising quality."}
            />
        </div>
    )
}

export default CostComparisonSection;