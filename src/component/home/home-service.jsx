// services section

import { ServicesCardData, ServicesPitchCardData } from "@/api/data";
import ServicesCard from "./service-card";
import WhiteButton from "../ui/white-btn";
import ServicesPitchCard from "./services-pitch-card";
import SectionTitle from "../ui/section-title";

const ServicesSection = () => {
    
    return (
        <div>
            <div className="max-w-7xl m-auto flex flex-col gap-10">
                <SectionTitle 
                    bannerTitle={"Our Services"} 
                    dscrpt={"Flexible outsourcing solutions tailored to your business goals —<br/> from startups to global teams."}
                />
       
                <div className="flex items-stretch gap-6 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-1/2">
                    {/* iterating box */}
                        {ServicesCardData.slice(0, 4).map((data, index) => (
                          <ServicesCard 
                            key={index} 
                            icon={data.icon} 
                            text={data.text}
                            url={data.url}
                          />
                        ))}
                    </div>
                    <div className="w-1/2 flex flex-col justify-between gap-6">
                        <div className="flex flex-col gap-5 items-start p-4">
                            <h2 className="font-semibold text-4xl font-heading">Scale Your Business with Expert Remote Talent</h2>
                            <p>We’re a team of 100+ skilled professionals based in Manila, ready to power your growth with tailored outsourcing solutions.</p>
                            <WhiteButton 
                                text={"Explore Services"}
                                url={"/services"}
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {/* iterating box */}
                            {ServicesCardData.slice(4, 6).map((data, index) => (
                              <ServicesCard 
                                key={index} 
                                icon={data.icon} 
                                text={data.text}
                                url={data.url}
                              />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {ServicesPitchCardData.map((data, index) => (
                        <ServicesPitchCard 
                            key={index}
                            text={data.question}
                            subText={data.subText}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;