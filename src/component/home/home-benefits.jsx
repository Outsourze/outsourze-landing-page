import BenefitCard from "./benefits-card";
import SectionTitle from "../ui/section-title";
import Benefit1 from "@/assets/icon/benefit-outsourcing/benefit-1.svg";
import Benefit2 from "@/assets/icon/benefit-outsourcing/benefit-2.svg";
import Benefit3 from "@/assets/icon/benefit-outsourcing/benefit-3.svg";
import Benefit4 from "@/assets/icon/benefit-outsourcing/benefit-4.svg";
import Benefit5 from "@/assets/icon/benefit-outsourcing/benefit-5.svg";

const benefitsData = [{
    icon: <Benefit1 
        className="w-14 h-auto brand-text-orange absolute top-5 right-5
        md:w-14 max-md:w-12"/>,
    text: "Save Up to 70% on Labor Costs",
    dscrpt: (
        <>
            Our vetted offshore teams deliver top-tier support, admin, and back-office services at a fraction of what you'd pay locally —<span className="brand-text-orange">often saving you thousands per month.</span> 
        </>
    )
}, {
    icon: <Benefit2 
        className="w-14 h-auto brand-text-orange absolute top-5 right-5
        md:w-14 max-md:w-12"/>,
    text: "No Overhead, No Hassle",
    dscrpt: (
        <>
            We handle recruitment, HR, training, and infrastructure. That means <span className="brand-text-orange">no office space, no payroll headaches</span>, and no long-term commitments.
        </>
    )
}, {
    icon: <Benefit3 
        className="w-14 h-auto brand-text-orange absolute top-5 right-5
        md:w-14 max-md:w-12"/>,
    text: "Scale on Demand",
    dscrpt: (
        <>
            Need 1 staff today and 10 next month? No problem. Outsourze lets you scale effortlessly — whether you're growing fast or trimming down.
        </>
    )
}, {
    icon: <Benefit4 
        className="w-14 h-auto brand-text-orange absolute top-5 right-5
        md:w-14 max-md:w-12"/>,
    text: "24/7 Productivity",
    dscrpt: (
        <>
            With global time zone coverage, your business can keep moving while you sleep — ideal for customer service, data processing, or lead gen. whether you're growing fast or trimming down.
        </>
    )
}, {
    icon: <Benefit5 
        className="w-14 h-auto brand-text-orange absolute top-5 right-5
        md:w-14 max-md:w-12" />,
    text: "Built for Businesses",
    dscrpt: (
        <>
            We understand your market, compliance expectations, and communication style — and we hire remote professionals trained to meet your standards.
        </>
    )
}]

const BenefitSection = () => {
    return (
        <div>
            <div className="max-w-7xl m-auto flex flex-col items-start gap-10
            xl:px-0 lg:px-20 md:px-20 max-md:px-5">
                <SectionTitle 
                    bannerTitle={"Benefits of Outsourcing"}
                    dscrpt={"Flexible outsourcing solutions tailored to your business goals — <br/>from startups to global teams."}
                />
                <div className="flex 
                lg:flex-nowrap 
                md:flex-wrap md:gap-5
                max-md:flex-wrap max-md:justify-between max-md:gap-4">
                    {benefitsData.map((data, index) => (
                        <BenefitCard 
                            key={index}
                            icon={data.icon}
                            text={data.text}
                            dscrpt={data.dscrpt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitSection;