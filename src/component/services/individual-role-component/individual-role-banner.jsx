import Image from "next/image";
import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import maskCircle from "@/assets/images/Mask Circle.png";

const IndividualRoleBanner = () => {
    const services = useContext(ServiceContext);
    
    return (
        <div className="max-w-7xl m-auto flex flex-col">
            <div className="relative overflow-hidden brand-bg-orange rounded-4xl p-13 flex flex-col gap-5">
                <Image 
                    className="absolute inset-0 object-cover"
                    src={maskCircle}
                />  
                <h1 className="text-7xl text-[4.2rem] text-white font-heading font-extrabold mt-32 max-w-[70%]">{services.title}</h1>
                <h3 className="font-extrabold text-2xl">{services.subTitle}</h3>
                <p className="text-lg font-medium">{services.dscrpt}</p>
            </div>
        </div>
    )
}

export default IndividualRoleBanner;