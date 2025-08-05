import { ServiceContext } from "@/context/services/services-utils";
import { useContext } from "react";

const IndividualRoleDisclaimer = () => {
    const services = useContext(ServiceContext);
    
    return (
        <div className="min-w-7xl m-auto bg-black py-6 px-5 rounded-3xl font-bold">
            <h5 className="brand-text-orange italic text-center">{services.disclaimer}</h5>
        </div>
    )
}

export default IndividualRoleDisclaimer;