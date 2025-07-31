import SectionTitle from "../ui/section-title";
import ServiceShowcaseCard from "./service-showcase-card";

const showcaseData = [{
    img: require("@/assets/images/our-services/customer-support.png"),
    title: "Customer Support",
    text: "Creating smooth, reliable customer service experiences.",
    url: ""
}, {
    img: require("@/assets/images/our-services/hr-recruitment.png"),
    title: "HR Recruitment",
    text: "Finding the right people, effortlessly and efficiently.",
    url: ""
}, {
    img: require("@/assets/images/our-services/finance-accounting.png"),
    title: "Finance & Accounting",
    text: "Managing numbers with clarity, accuracy, and insight.",
    url: ""
}, {
    img: require("@/assets/images/our-services/sales-lead-generation.png"),
    title: "Sales & Lead Generation",
    text: "Turning interest into action through strategic outreach.",
    url: ""
}, {
    img: require("@/assets/images/our-services/administration.png"),
    title: "Administration",
    text: "Keeping operations organized, efficient, and smooth.",
    url: ""
}, {
    img: require("@/assets/images/our-services/marketing-creative.png"),
    title: "Marketing & Creative",
    text: "Bringing ideas to life through creative strategy.",
    url: ""
}]

const ServicesShowcaseSection = () => {
    return (
        <div className="max-w-7xl m-auto flex flex-col gap-5">
            <SectionTitle bannerTitle={"Our Services"} dscrpt={"Flexible outsourcing solutions tailored to your business goals — from startups to global teams."}/>
            <div className="flex flex-wrap justify-between">
                {showcaseData.map((data, index) => (
                    <ServiceShowcaseCard 
                        img={data.img}
                        text={data.text}
                        title={data.title}
                        key={index}
                    />
                ))}
            </div>

        </div>
    )
}

export default ServicesShowcaseSection;