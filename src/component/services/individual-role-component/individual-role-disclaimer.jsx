import { ServiceContext } from "@/context/services/services-utils";
import { useContext } from "react";

const IndividualRoleDisclaimer = () => {
    const services = useContext(ServiceContext);
    
    return (
        <div className="max-w-7xl w-full m-auto 
            xl:px-0 
            lg:px-20
            md:px-20 md:mt-8 
            max-md:px-5 max-md:py-0">
            <div className="bg-black px-5 rounded-3xl">
                <h5 className="brand-text-orange italic text-center font-bold
                lg:text-base lg:py-6 
                md:text-sm md:py-4
                max-md:text-sm max-md:py-3">{services.disclaimer}</h5>
            </div>
        </div>
    )
}

export default IndividualRoleDisclaimer;