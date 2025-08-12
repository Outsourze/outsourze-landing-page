// services section

import { ServicesCardData, ServicesPitchCardData } from "@/pages/api/data";
import ServicesCard from "./service-card";
import WhiteButton from "../ui/white-btn";
import ServicesPitchCard from "./services-pitch-card";
import SectionTitle from "../ui/section-title";

const ServicesSection = () => {
    
    return (
        <div>
            <div className="max-w-7xl m-auto flex flex-col gap-10
            xl:px-0 
            lg:px-20 
            md:px-20
            max-md:px-5 max-md:gap-5">
                <SectionTitle 
                    bannerTitle={"Our Services"} 
                    dscrpt={"Flexible outsourcing solutions tailored to your business goals —<br/> from startups to global teams."}
                />
       
                <div className="flex items-stretch gap-6 
                lg:flex-row md:flex-col-reverse max-md:flex-col-reverse max-md:gap-3">
                    <div className="grid grid-cols-1 gap-6
                    lg:w-1/2 md:w-full md:grid-cols-2 max-md:w-full max-md:grid-cols-2 max-md:gap-3">
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
                    <div className="flex flex-col justify-between gap-6
                    lg:w-1/2 md:w-full max-md:w-full max-md:gap-3">
                        <div className="flex flex-col gap-5 items-start
                        xl:p-4 lg:p-2 md:p-2 max-md:p-2 max-md:text-center max-md:items-center">
                            <h2 className="font-semibold font-heading
                            xl:text-4xl lg:text-2xl md:text-4xl max-md:text-2xl max-md:font-extrabold">Scale Your Business with Expert Remote Talent</h2>
                            <p className="max-md:leading-5">We’re a team of 100+ skilled professionals based in Manila, ready to power your growth with tailored outsourcing solutions.</p>
                            <WhiteButton 
                                text={"Explore Services"}
                                url={"/services"}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-6 w-full 
                        md:grid-cols-2 max-md:grid-cols-2 max-md:gap-3">
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
                <div className="flex items-start gap-4
                lg:flex-row md:flex-col max-md:flex-col max-md:mt-5">
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