import SpecificBannerSection from "@/component/services/specific-service-component/service-specific-banner";
import SpecificServicesSection from "@/component/services/specific-service-component/service-specific-section";

import { ServiceContext } from "@/context/services/services-utils";

import AD1 from "@/assets/icon/specific-services/administration/Virtual Assistant.svg";
import AD2 from "@/assets/icon/specific-services/administration/Executive Assistant.svg";
import AD3 from "@/assets/icon/specific-services/administration/Data Entry Specialist.svg";
import AD4 from "@/assets/icon/specific-services/administration/Encoder.svg";
import AD5 from "@/assets/icon/specific-services/administration/Personal Assistant.svg";
import ADImage from "@/assets/images/specific-service/Administration.webp";
import SEO from "@/utility/useSeo";

export default function Administration() {
  const admin = {
    style: "",
    data: [{
      logo: <AD1 className="brand-text-orange w-15 h-auto"/>,
      title: "Virtual Assistant",
      dscrpt: "Provides remote administrative support for scheduling, communication, and task management to keep operations running smoothly.",
      url: "/services/administration/virtual-assistant",
    }, {
      logo: <AD2 className="brand-text-orange w-15 h-auto"/>,
      title: "Executive Assistant",
      dscrpt: "Supports high-level executives with calendar management, coordination, and confidential tasks.",
      url: "/services/administration/executive-assistant",
    }, {
      logo: <AD3 className="brand-text-orange w-15 h-auto"/>,
      title: "Data Entry Specialist",
      dscrpt: "Inputs and organizes data with accuracy and speed, maintaining the integrity of critical information.",
      url: "/services/administration/data-entry-specialist",
    }, {
      logo: <AD4 className="brand-text-orange w-15 h-auto"/>,
      title: "Encoder",
      dscrpt: "Processes and records data efficiently, ensuring up-to-date and error-free documentation.",
      url: "/services/administration/encoder",
    }, {
      logo: <AD5 className="brand-text-orange w-15 h-auto"/>,
      title: "Personal Assistant",
      dscrpt: "Assists with both personal and professional tasks, from errands to executive scheduling, with reliability and discretion.",
      url: "/services/administration/personal-assistant",
    }]
  } 

  return (
    <>
      <SEO
        title="Remote Administrative Support | Outsourze"
        description="Keep your operations running smoothly with skilled virtual assistants, data entry, and executive support from Outsourze's offshore admin teams."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/administration`}
      />
      <ServiceContext.Provider value={admin}>
      <div className="flex w-full flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* Services section container */}
        <SpecificBannerSection 
          title={"Administration"}
          dscrpt={"The unsung heroes of every operation. They manage schedules, systems, and tasks to keep everything running smoothly."}
          img={ADImage}
        />
        <SpecificServicesSection />
      </div>
    </ServiceContext.Provider>
    </>
  )
}