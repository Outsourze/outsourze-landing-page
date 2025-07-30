import BrandLabel from "../ui/brand-label";
import BenefitCard from "./benefits-card";

const benefitsData = [{
    icon: require("@/assets/icon/benefit-1.png"),
    text: "Save Up to 70% on Labor Costs"
}, {
    icon: require("@/assets/icon/benefit-2.png"),
    text: "No Overhead, No Hassle"
}, {
    icon: require("@/assets/icon/benefit-3.png"),
    text: "Scale on Demand"
}, {
    icon: require("@/assets/icon/benefit-4.png"),
    text: "24/7 Productivity"
}, {
    icon: require("@/assets/icon/benefit-5.png"),
    text: "Built for Businesses"
}]

const BenefitSection = () => {
    return (
        <div>
            <div className="max-w-7xl m-auto flex flex-col items-start gap-10">
                <div className="flex items-center justify-start gap-10">
                    <BrandLabel style={"text-4xl py-5 px-7 font-semibold"} text={"Benefits of Outsourcing"}/>
                    <p className="font-semibold">Flexible outsourcing solutions tailored to your business goals — <br/>from startups to global teams.</p>
                </div>
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