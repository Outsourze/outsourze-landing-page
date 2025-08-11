import SectionTitle from "@/component/ui/section-title";
import { ServiceContext } from "@/context/services/services-utils";
import { useContext } from "react";

const IndividualRoleCostComparison = () => {
    const services = useContext(ServiceContext);

    return (
        <div className="max-w-7xl w-full m-auto flex flex-col
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="flex flex-col items-start gap-5 w-full">
                <SectionTitle 
                    bannerTitle={"Cost Comparison"}
                    dscrpt={"Hiring in the Philippines vs Locally"}
                />

                <div className="flex flex-wrap gap-4">
                    {services.costComparison.map((data, index) => (
                        <div className=" bg-black text-white rounded-2xl flex flex-col gap-3
                        lg:w-[49%] lg:px-6 lg:py-8
                        md:w-[48%] md:px-4 md:py-6
                        max-md:w-full max-md:px-4 max-md:py-6
                        max-sm:px-3 max-sm:py-5" key={index}>
                            <h4 className="font-bold font-heading brand-text-orange
                            lg:text-3xl 
                            md:text-2xl
                            max-md:text-xl">{data.role}</h4>
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col gap-3
                                lg:text-base
                                md:text-sm
                                max-md:text-xs">
                                    <p>Local Cost:</p>
                                    <p>Outsourze Cost:</p>
                                    <p>Estimated Savings:</p>
                                </div>
                                <div className="flex flex-col gap-3 text-sm max-md:text-xs">
                                    <p>{`${data.currencySign + data.localCost.lowest} - ${data.currencySign + data.localCost.highest}`} {data.currency}/month</p>
                                    <p>{`${data.currencySign + data.outsourze}/month`}</p>
                                    <p>Up to {data.estimatedSaving}%</p>
                                </div>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    )
}



export default IndividualRoleCostComparison;