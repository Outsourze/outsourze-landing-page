import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import BrandLabel from "@/component/ui/brand-label";
import { FaCheck } from "react-icons/fa6";

const IndividualRoleShowcase = () => {
    const services = useContext(ServiceContext);

    return (
        <div className="max-w-7xl w-full m-auto flex flex-col
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="flex flex-col items-start gap-5 w-full ">
                <BrandLabel style="lg:text-3xl md:text-lg max-md:text-base max-sm:text-sm" text={services.whatToDoHeader} />
                <div className="flex flex-wrap justify-between 
                xl:gap-7 
                lg:gap-6 
                md:gap-5 md:flex-row
                max-md:gap-4 max-md:flex-col">
                    {services.whatTodos.map((data, index) => (
                        <div key={index} className="flex items-center gap-2
                        md:w-[48%] 
                        max-md:w-full">
                            <div className="p-1 rounded-full brand-bg-orange text-white">
                                <FaCheck size={12}/>
                            </div>
                            <p className="font-bold md:text-base max-sm:text-sm">{data}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IndividualRoleShowcase;
