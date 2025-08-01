import BenefitCard from "./benefits-card";
import SectionTitle from "../ui/section-title";
import Benefit1 from "@/assets/icon/benefit-outsourcing/benefit-1.svg";
import Benefit2 from "@/assets/icon/benefit-outsourcing/benefit-2.svg";
import Benefit3 from "@/assets/icon/benefit-outsourcing/benefit-3.svg";
import Benefit4 from "@/assets/icon/benefit-outsourcing/benefit-4.svg";
import Benefit5 from "@/assets/icon/benefit-outsourcing/benefit-5.svg";

const benefitsData = [{
    icon: <Benefit1 className="w-14 h-auto brand-text-orange absolute top-5 right-5"/>,
    text: "Save Up to 70% on Labor Costs"
}, {
    icon: <Benefit2 className="w-14 h-auto brand-text-orange absolute top-5 right-5"/>,
    text: "No Overhead, No Hassle"
}, {
    icon: <Benefit3 className="w-14 h-auto brand-text-orange absolute top-5 right-5"/>,
    text: "Scale on Demand"
}, {
    icon: <Benefit4 className="w-14 h-auto brand-text-orange absolute top-5 right-5"/>,
    text: "24/7 Productivity"
}, {
    icon: <Benefit5 className="w-14 h-auto brand-text-orange absolute top-5 right-5" />,
    text: "Built for Businesses"
}]

const BenefitSection = () => {
    return (
        <div>
            <div className="max-w-7xl m-auto flex flex-col items-start gap-10">
                <SectionTitle 
                    bannerTitle={"Benefits of Outsourcing"}
                    dscrpt={"Flexible outsourcing solutions tailored to your business goals — <br/>from startups to global teams."}
                />
                <div className="flex gap-5">
                    {benefitsData.map((data, index) => (
                        <BenefitCard 
                            key={index}
                            icon={data.icon}
                            text={data.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitSection;