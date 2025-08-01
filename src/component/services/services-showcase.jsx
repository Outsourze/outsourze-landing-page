import SectionTitle from "../ui/section-title";
import ServiceShowcaseCard from "./service-showcase-card";
import customerSupportIcon from "@/assets/images/our-services/customer-support.png";
import hrRecruitmentIcon from "@/assets/images/our-services/hr-recruitment.png";
import financeAccountingIcon from "@/assets/images/our-services/finance-accounting.png";
import salesLeadLogo from "@/assets/images/our-services/sales-lead-generation.png";
import adminLogo from "@/assets/images/our-services/administration.png";
import marketingLogo from "@/assets/images/our-services/marketing-creative.png";

const showcaseData = [{
    img: customerSupportIcon,
    title: "Customer Support",
    text: "Creating smooth, reliable customer service experiences.",
    url: "customer-support"
}, {
    img: hrRecruitmentIcon,
    title: "HR Recruitment",
    text: "Finding the right people, effortlessly and efficiently.",
    url: ""
}, {
    img: financeAccountingIcon,
    title: "Finance & Accounting",
    text: "Managing numbers with clarity, accuracy, and insight.",
    url: ""
}, {
    img: salesLeadLogo,
    title: "Sales & Lead Generation",
    text: "Turning interest into action through strategic outreach.",
    url: ""
}, {
    img: adminLogo,
    title: "Administration",
    text: "Keeping operations organized, efficient, and smooth.",
    url: ""
}, {
    img: marketingLogo,
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
                        url={`/services/${data.url}`}
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