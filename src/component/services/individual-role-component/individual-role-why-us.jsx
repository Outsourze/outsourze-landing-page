import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import circle1 from "@/assets/images/c1.png";
import circle2 from "@/assets/images/c2.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const IndividualRoleWhyUs = () => {
    const services = useContext(ServiceContext);
    
    return (
        <div className="max-w-7xl m-auto flex flex-col">
            <div className="flex flex-col gap-10 w-full relative footer-getstarted-banner-bg rounded-3xl px-7 py-10 text-white overflow-hidden">
                <h2 className="text-5xl brand-text-orange font-heading font-extrabold">{services.whyOutSourzeTitle}</h2>
                <div className="flex flex-wrap gap-y-2 gap-x-5 px-5">
                    {services.whyOutSourzeItems.map((data, index) => (
                        <div key={index} className="w-[48%] flex items-center gap-2 bg-white px-6 py-5 rounded-2xl">
                            <div className="p-2 rounded-full brand-bg-orange text-white">
                                <FaCheck size={20}/>
                            </div>
                            <p className="font-extrabold text-black text-2xl">{data}</p>
                        </div>
                    ))}
                </div>
                <p className="text-2xl">{services.whyOutSourzeDscrpt}</p>
                <Image className="absolute bottom-0 left-0 h-[25rem] w-auto opacity-80" src={circle1} alt="circle1"/>
                <Image className="absolute top-0 right-0 h-[25rem] w-auto opacity-80" src={circle2} alt="circle2"/>
            </div>
        </div>
    )
}

export default IndividualRoleWhyUs;




