import SpecificBannerSection from "@/component/services/specific-service-component/service-specific-banner";
import SpecificServicesSection from "@/component/services/specific-service-component/service-specific-section";

import { ServiceContext } from "@/context/services/services-utils";

import CS1 from "@/assets/icon/specific-services/costumer-support/Customer Support.svg";
import CS2 from "@/assets/icon/specific-services/costumer-support/Email Support.svg";
import CS3 from "@/assets/icon/specific-services/costumer-support/Help Desk.svg";
import CS4 from "@/assets/icon/specific-services/costumer-support/Sales Support.svg";
import CS5 from "@/assets/icon/specific-services/costumer-support/Chat Support.svg";
import CSImage from "@/assets/images/specific-service/Customer Support.webp";
import SEO from "@/utility/useSeo";

export default function CustomerSupport() {
  const customerService = {
      style: "",
      imgUrl: CSImage,
      data: [{
        logo: <CS1 className="brand-text-orange w-15 h-auto"/>,
        title: "Customer Support Representative",
        dscrpt: "Handles customer inquiries with professionalism and empathy, providing timely resolutions and maintaining a positive brand experience.",
        url: "/services/customer-support/customer-service-representative",
      }, {
        logo: <CS2 className="brand-text-orange w-15 h-auto"/>,
        title: "Email Support Representative",
        dscrpt: "Responds to customer concerns via email with clear, thoughtful communication—ensuring accuracy and customer satisfaction in every interaction.",
        url: "/services/customer-support/email-support-representative",
      }, {
        logo: <CS3 className="brand-text-orange w-15 h-auto"/>,
        title: "Help Desk Support",
        dscrpt: "Provides technical assistance and troubleshooting, helping users resolve issues efficiently while minimizing downtime.",
        url: "/services/customer-support/help-desk-support-representative",
      }, {
        logo: <CS4 className="brand-text-orange w-15 h-auto"/>,
        title: "Sales Support Representative",
        dscrpt: "Assists the sales team by managing client data, preparing materials, and ensuring a smooth pre- and post-sale process.",
        url: "/services/customer-support/sales-support-representative",
      }, {
        logo: <CS5 className="brand-text-orange w-15 h-auto"/>,
        title: "Chat Support",
        dscrpt: "Engages with customers in real-time via chat, delivering quick, helpful responses that enhance user satisfaction and retention.",
        url: "/services/customer-support/chat-support-representative",
      }]
  } 

  return (
    <>
      <SEO
        title="Customer Support Outsourcing | Outsourze"
        description="Provide dependable support with trained remote teams from Outsourze. Improve customer experience, response times, and satisfaction rates affordably."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/customer-support`}
      />
      <ServiceContext.Provider value={customerService}>
        <div className="flex w-full flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
          {/* Services section container */}
          <SpecificBannerSection 
            title={"Customer Support"}
            dscrpt={"Behind every great experience is a reliable support team. They resolve issues, build trust, and keep customers coming back."}
            img={CSImage}
          />
          <SpecificServicesSection />
        </div>
      </ServiceContext.Provider>
    </>
  )
}