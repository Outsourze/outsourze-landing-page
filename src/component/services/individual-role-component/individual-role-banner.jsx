import Image from "next/image";
import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import maskCircle from "@/assets/images/Mask Circle.png";
import maskCircleTablet from "@/assets/images/Mask Circle tablet.png";
import { useMediaQuery } from '@/utility/useMediaQuery';


const IndividualRoleBanner = () => {
    const services = useContext(ServiceContext);
    const isTabletBelow = useMediaQuery("(min-width: 200px) and (max-width: 1023px)");

    return (
        <div className="max-w-7xl w-full m-auto flex flex-col
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="relative overflow-hidden brand-bg-orange rounded-4xl flex flex-col 
            xl:gap-5 xl:p-13 
            lg:gap-3 lg:p-9
            md:gap-3 md:p-9
            max-md:gap-3 max-md:p-8">
                <Image 
                    className="absolute inset-0 object-cover"
                    src={isTabletBelow ? maskCircleTablet :maskCircle}
                />  
                <h1 className="text-white font-heading font-extrabold .
                xl:max-w-[70%] xl:text-[4.2rem] xl:leading-16 xl:mt-32 
                lg:max-w-[80%] lg:text-[3rem] lg:leading-12 lg:mt-24
                md:max-w-[70%] md:text-[2rem] md:leading-10 md:mt-24
                max-md:max-w-[70%] max-md:text-[1.8rem] max-md:leading-8 max-md:mt-20
                max-sm:max-w-full max-sm:text-[1.6rem] max-sm:leading-6 max-sm:mt-16">{services.title}</h1>
                <h3 className="font-extrabold 
                xl:text-2xl lg:text-xl md:text-lg max-md:text-base max-sm:text-sm">{services.subTitle}</h3>
                <p className="font-medium 
                xl:text-lg lg:text-base md:text-base max-md:text-sm max-sm:text-xs">{services.dscrpt}</p>
            </div>
        </div>
    )
}

export default IndividualRoleBanner;