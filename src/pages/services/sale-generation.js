import SpecificBannerSection from "@/component/services/specific-service-component/service-specific-banner";
import SpecificServicesSection from "@/component/services/specific-service-component/service-specific-section";

import { ServiceContext } from "@/context/services/services-utils";

import SL1 from "@/assets/icon/specific-services/sale-lead-generation/Lead Generation.svg";
import SL2 from "@/assets/icon/specific-services/sale-lead-generation/Telesales.svg";
import SL3 from "@/assets/icon/specific-services/sale-lead-generation/Outbound Sales.svg";
import SL4 from "@/assets/icon/specific-services/sale-lead-generation/Telemarketer.svg";
import SL5 from "@/assets/icon/specific-services/sale-lead-generation/Sales_Business Development.svg";
import SLImage from "@/assets/images/specific-service/Sales & Lead Generation.png";

export default function SaleGeneration() {
  const salesGeneration = {
    style: "",
    data: [{
      logo: <SL1 className="brand-text-orange w-15 h-auto"/>,
      title: "Lead Generation Specialist",
      dscrpt: "Identifies and qualifies potential customers to fill your sales pipeline and drive business growth.",
      url: "",
    }, {
      logo: <SL2 className="brand-text-orange w-15 h-auto"/>,
      title: "Telesales Specialist",
      dscrpt: "Makes outbound calls to engage leads, promote offerings, and close sales with confidence and clarity.",
      url: "",
    }, {
      logo: <SL3 className="brand-text-orange w-15 h-auto"/>,
      title: "Outbound Sales Agent",
      dscrpt: "Initiates contact with prospects to pitch products, overcome objections, and convert leads into loyal clients.",
      url: "",
    }, {
      logo: <SL4 className="brand-text-orange w-15 h-auto"/>,
      title: "Telemarketer",
      dscrpt: "Delivers scripted sales messages via phone, gathering interest and generating leads for follow-up.",
      url: "",
    }, {
      logo: <SL5 className="brand-text-orange w-15 h-auto"/>,
      title: "Sales/Business Development Specialist",
      dscrpt: "Builds client relationships, uncovers opportunities, and drives revenue through strategic outreach and negotiation.",
      url: "",
    }]
  } 

  return (
    <ServiceContext.Provider value={salesGeneration}>
      <div className="flex flex-col gap-20">
        {/* Services section container */}
        <SpecificBannerSection 
          title={"Sales & Lead Generation"}
          dscrpt={"Sales starts with connection. This team sparks interest, nurtures leads, and helps drive consistent business growth."}
          img={SLImage}
        />
        <SpecificServicesSection />
      </div>
    </ServiceContext.Provider>
  )
}