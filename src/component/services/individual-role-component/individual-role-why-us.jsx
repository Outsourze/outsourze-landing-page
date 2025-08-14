import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import circle1 from "@/assets/images/c1.webp";
import circle2 from "@/assets/images/c2.webp";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const IndividualRoleWhyUs = () => {
    const services = useContext(ServiceContext);
    
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="flex flex-col gap-10 w-full relative footer-getstarted-banner-bg rounded-3xl text-white overflow-hidden
            lg:px-7 lg:py-10
            md:px-5 md:py-7
            max-md:px-3 max-md:py-7">
                <h2 className="brand-text-orange font-heading font-extrabold
                lg:text-5xl
                md:text-3xl md:text-left
                max-md:text-2xl max-md:text-center
                max-sm:text-3xl">{services.whyOutSourzeTitle}</h2>
                <div className="flex gap-x-5 
                lg:flex-wrap lg:flex-row lg:gap-y-2
                md:flex-col md:gap-y-5 md:px-5
                max-md:flex-col max-md:gap-y-5 max-md:px-2">
                    {services.whyOutSourzeItems.map((data, index) => (
                        <div key={index} className="flex items-center gap-2 bg-white px-6 py-5 rounded-2xl
                        lg:w-[48%] 
                        md:w-full
                        max-md:w-full">
                            <div className="p-2 rounded-full brand-bg-orange text-white">
                                <FaCheck size={20}/>
                            </div>
                            <p className="font-extrabold text-black 
                            lg:text-2xl
                            md:text-xl
                            max-md:text-lg
                            max-sm:text-sm">{data}</p>
                        </div>
                    ))}
                </div>
                <p className="
                lg:text-2xl 
                md:text-lg md:text-left
                max-md:text-sm max-md:text-center">{services.whyOutSourzeDscrpt}</p>
                <Image className="absolute bottom-0 left-0 w-auto opacity-80 
                lg:h-[25rem] md:h-[15rem] max-md:h-[10rem]" src={circle1} alt="circle1"/>
                <Image className="absolute top-0 right-0 w-auto opacity-80 
                lg:h-[25rem] md:h-[15rem] max-md:h-[10rem]" src={circle2} alt="circle2"/>
            </div>
        </div>
    )
}

export default IndividualRoleWhyUs;




