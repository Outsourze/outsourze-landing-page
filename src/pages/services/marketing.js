import SpecificBannerSection from "@/component/services/specific-service-component/service-specific-banner";
import SpecificServicesSection from "@/component/services/specific-service-component/service-specific-section";

import { ServiceContext } from "@/context/services/services-utils";

import MC1 from "@/assets/icon/specific-services/marketing-creative/Graphic Artist.svg";
import MC2 from "@/assets/icon/specific-services/marketing-creative/Social Media Manager.svg";
import MC3 from "@/assets/icon/specific-services/marketing-creative/UI_UX Developer.svg";
import MC4 from "@/assets/icon/specific-services/marketing-creative/Content Writer.svg";
import MC5 from "@/assets/icon/specific-services/marketing-creative/Copywriter.svg";
import MC6 from "@/assets/icon/specific-services/marketing-creative/Digital Merketing Specialist.svg";
import MC7 from "@/assets/icon/specific-services/marketing-creative/Video Editor.svg";
import MC8 from "@/assets/icon/specific-services/marketing-creative/Motion Graphic Artist.svg";
import MCImage from "@/assets/images/specific-service/Marketing & Creatives.png";

export default function MarketingCreative() {
  const marketingCreative = {
    style: "",
    data: [{
      logo: <MC1 className="brand-text-orange w-15 h-auto"/>,
      title: "Graphic Designer",
      dscrpt: "Creates visual assets that communicate your brand through impactful design and layout.",
      url: "",
    }, {
      logo: <MC2 className="brand-text-orange w-15 h-auto"/>,
      title: "Social Media Manager",
      dscrpt: "Plans, creates, and manages content across platforms to build brand presence and engagement.",
      url: "",
    }, {
      logo: <MC3 className="brand-text-orange w-15 h-auto"/>,
      title: "UI/UX Developer",
      dscrpt: "Designs and builds user-friendly digital experiences that are visually appealing and highly functional.",
      url: "",
    }, {
      logo: <MC4 className="brand-text-orange w-15 h-auto"/>,
      title: "Content Writer",
      dscrpt: "Crafts clear, engaging written content tailored to your audience and brand voice.",
      url: "",
    }, {
      logo: <MC5 className="brand-text-orange w-15 h-auto"/>,
      title: "Copywriter",
      dscrpt: "Writes persuasive and on-brand marketing copy that converts readers into customers.",
      url: "",
    }, {
      logo: <MC6 className="brand-text-orange w-15 h-auto"/>,
      title: "Digital Marketing Specialist",
      dscrpt: "Executes online campaigns across channels, driving traffic, conversions, and measurable growth.",
      url: "",
    }, {
      logo: <MC7 className="brand-text-orange w-15 h-auto"/>,
      title: "Video Editor",
      dscrpt: "Edits and assembles raw footage into compelling video content that informs or entertains.",
      url: "",
    }, {
      logo: <MC8 className="brand-text-orange w-15 h-auto"/>,
      title: "Motion Graphics Artist",
      dscrpt: "Brings visuals to life through animated graphics for branding, storytelling, and advertising.",
      url: "",
    }]
  } 

  return (
    <ServiceContext.Provider value={marketingCreative}>
      <div className="flex flex-col gap-20">
        {/* Services section container */}
        <SpecificBannerSection 
          title={"Marketing & Creative"}
          dscrpt={"Creativity meets strategy here. This team brings brands to life through compelling visuals, content, and campaigns."}
          img={MCImage}
        />
        <SpecificServicesSection />
      </div>
    </ServiceContext.Provider>
  )
}