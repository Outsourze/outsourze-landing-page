import SpecificBannerSection from "@/component/services/specific-service-component/service-specific-banner";
import SpecificServicesSection from "@/component/services/specific-service-component/service-specific-section";

import { ServiceContext } from "@/context/services/services-utils";

import HR1 from "@/assets/icon/specific-services/hr-recruitment/Recruitment Specialist.svg";
import HR2 from "@/assets/icon/specific-services/hr-recruitment/Talent Acquisition.svg";
import HR3 from "@/assets/icon/specific-services/hr-recruitment/HR Generalist.svg";
import HR4 from "@/assets/icon/specific-services/hr-recruitment/Psychometric Testing.svg";
import HRImage from "@/assets/images/specific-service/HR Recruitment.png";

export default function HrRecruitment() {
  const hrRecruitment = {
    style: "",
    imgUrl: HRImage,
    data: [{
      logo: <HR1 className="brand-text-orange w-15 h-auto"/>,
      title: "Recruitment Specialist",
      dscrpt: "Finds and attracts top-tier talent through proactive sourcing, screening, and relationship-building. Ensures each hire aligns with company needs and culture.",
      url: "/services/hr-recruitment/recruitment-specialist",
    }, {
      logo: <HR2 className="brand-text-orange w-15 h-auto"/>,
      title: "Talent Acquisition Specialist",
      dscrpt: "Strategically partners with teams to fill roles efficiently. Focuses on employer branding, talent pipelines, and seamless candidate experiences.",
      url: "/services/hr-recruitment/talent-acquisition-specialist",
    }, {
      logo: <HR3 className="brand-text-orange w-15 h-auto"/>,
      title: "HR Generalist",
      dscrpt: "Handles a broad range of HR functions from employee relations to policy implementation. Ensures smooth operations and compliance across the organization.",
      url: "/services/hr-recruitment/hr-generalist",
    }, {
      logo: <HR4 className="brand-text-orange w-15 h-auto"/>,
      title: "Psychometric Testing",
      dscrpt: "Uses data-driven assessments to evaluate candidates’ cognitive abilities, personality, and job fit. Helps make smarter hiring decisions based on insight, not instinct.",
      url: "/services/hr-recruitment/psychometric-testing",
    }]
  } 

  return (
    <ServiceContext.Provider value={hrRecruitment}>
      <div className="flex flex-col gap-20">
        {/* Services section container */}
        <SpecificBannerSection 
          title={"HR Recruitment"}
          dscrpt={"Recruitment is more than hiring—it’s connecting the right people to the right roles. This team streamlines the process from sourcing to onboarding."}
          img={HRImage}
        />
        <SpecificServicesSection />
      </div>
    </ServiceContext.Provider>
  )
}