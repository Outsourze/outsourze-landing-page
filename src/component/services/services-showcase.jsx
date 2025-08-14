import SectionTitle from "../ui/section-title";
import ServiceShowcaseCard from "./service-showcase-card";
import { useMediaQuery } from "@/utility/useMediaQuery";

// services images desktop
import customerSupportIcon from "@/assets/images/our-services/customer-support.webp";
import hrRecruitmentIcon from "@/assets/images/our-services/hr-recruitment.webp";
import financeAccountingIcon from "@/assets/images/our-services/finance-accounting.webp";
import salesLeadLogo from "@/assets/images/our-services/sales-lead-generation.webp";
import adminLogo from "@/assets/images/our-services/administration.webp";
import marketingLogo from "@/assets/images/our-services/marketing-creative.webp";

// services images mobile
import customerSupportIconM from "@/assets/images/our-services/customer-support-m.webp";
import hrRecruitmentIconM from "@/assets/images/our-services/hr-recruitment-m.webp";
import financeAccountingIconM from "@/assets/images/our-services/finance-accounting-m.webp";
import salesLeadLogoM from "@/assets/images/our-services/sales-lead-generation-m.webp";
import adminLogoM from "@/assets/images/our-services/administration-m.webp";
import marketingLogoM from "@/assets/images/our-services/marketing-creative-m.webp";

const showcaseData = [
  {
    img: { desktop: customerSupportIcon, mobile: customerSupportIconM },
    title: "Customer Support",
    text: "Creating smooth, reliable customer service experiences.",
    url: "/customer-support",
  },
  {
    img: { desktop: hrRecruitmentIcon, mobile: hrRecruitmentIconM },
    title: "HR Recruitment",
    text: "Finding the right people, effortlessly and efficiently.",
    url: "/hr-recruitment",
  },
  {
    img: { desktop: financeAccountingIcon, mobile: financeAccountingIconM },
    title: "Finance & Accounting",
    text: "Managing numbers with clarity, accuracy, and insight.",
    url: "/finance",
  },
  {
    img: { desktop: salesLeadLogo, mobile: salesLeadLogoM },
    title: "Sales & Lead Generation",
    text: "Turning interest into action through strategic outreach.",
    url: "/sale-generation",
  },
  {
    img: { desktop: adminLogo, mobile: adminLogoM },
    title: "Administration",
    text: "Keeping operations organized, efficient, and smooth.",
    url: "/administration",
  },
  {
    img: { desktop: marketingLogo, mobile: marketingLogoM },
    title: "Marketing & Creative",
    text: "Bringing ideas to life through creative strategy.",
    url: "/marketing",
  },
];

const ServicesShowcaseSection = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div
      className="max-w-7xl w-full m-auto flex flex-col 
      xl:px-0 
      lg:px-20 lg:gap-5
      md:px-20 md:mt-8 md:gap-1
      max-md:px-5 max-md:py-0 max-md:gap-1"
    >
      <SectionTitle
        bannerTitle="Our Services"
        dscrpt="Flexible outsourcing solutions tailored to your business goals — from startups to global teams."
      />
      <div className="flex flex-wrap justify-between">
        {showcaseData.map((data, index) => (
          <ServiceShowcaseCard
            key={index}
            url={`/services/${data.url}`}
            img={isMobile ? data.img.mobile : data.img.desktop}
            text={data.text}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcaseSection;
