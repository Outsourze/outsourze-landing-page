import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import BrandLabel from "@/component/ui/brand-label";
import { FaCheck } from "react-icons/fa6";

const IndividualRoleShowcase = () => {
    const services = useContext(ServiceContext);

    return (
        <div className="max-w-7xl m-auto flex flex-col">
            <div className="flex flex-col items-start gap-5 w-full ">
                <BrandLabel style="text-3xl " text={services.whatToDoHeader} />
                <div className="flex flex-wrap justify-between gap-7">
                    {services.whatTodos.map((data, index) => (
                        <div key={index} className="w-[48%] flex items-center gap-2">
                            <div className="p-1 rounded-full brand-bg-orange text-white">
                                <FaCheck size={12}/>
                            </div>
                            <p className="font-bold">{data}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IndividualRoleShowcase;
