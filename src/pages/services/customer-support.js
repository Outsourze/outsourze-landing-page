import SpecificBannerSection from "@/component/services/specific-service-component/service-specific-banner";
import SpecificServicesSection from "@/component/services/specific-service-component/service-specific-section";

import { ServiceContext } from "@/context/services/services-utils";

import CS1 from "@/assets/icon/specific-services/costumer-support/Customer Support.svg";
import CS2 from "@/assets/icon/specific-services/costumer-support/Email Support.svg";
import CS3 from "@/assets/icon/specific-services/costumer-support/Help Desk.svg";
import CS4 from "@/assets/icon/specific-services/costumer-support/Sales Support.svg";
import CS5 from "@/assets/icon/specific-services/costumer-support/Chat Support.svg";
import CSImage from "@/assets/images/specific-service/Customer Support.png";

export default function CustomerSupport() {
  const customerService = {
      style: "",
      imgUrl: CSImage,
      data: [{
        logo: <CS1 className="brand-text-orange w-15 h-auto"/>,
        title: "Customer Support Representative",
        dscrpt: "Handles customer inquiries with professionalism and empathy, providing timely resolutions and maintaining a positive brand experience.",
        url: "",
      }, {
        logo: <CS2 className="brand-text-orange w-15 h-auto"/>,
        title: "Email Support Representative",
        dscrpt: "Responds to customer concerns via email with clear, thoughtful communication—ensuring accuracy and customer satisfaction in every interaction.",
        url: "",
      }, {
        logo: <CS3 className="brand-text-orange w-15 h-auto"/>,
        title: "Help Desk Support",
        dscrpt: "Provides technical assistance and troubleshooting, helping users resolve issues efficiently while minimizing downtime.",
        url: "",
      }, {
        logo: <CS4 className="brand-text-orange w-15 h-auto"/>,
        title: "Sales Support Representative",
        dscrpt: "Assists the sales team by managing client data, preparing materials, and ensuring a smooth pre- and post-sale process.",
        url: "",
      }, {
        logo: <CS5 className="brand-text-orange w-15 h-auto"/>,
        title: "Chat Support",
        dscrpt: "Engages with customers in real-time via chat, delivering quick, helpful responses that enhance user satisfaction and retention.",
        url: "",
      }]
  } 

  return (
    <ServiceContext.Provider value={customerService}>
      <div className="flex flex-col gap-20">
        {/* Services section container */}
        <SpecificBannerSection 
          title={"Customer Support"}
          dscrpt={"Behind every great experience is a reliable support team. They resolve issues, build trust, and keep customers coming back."}
          img={CSImage}
        />
        <SpecificServicesSection />
      </div>
    </ServiceContext.Provider>
  )
}