import SectionTitle from "@/component/ui/section-title";
import { ServiceContext } from "@/context/services/services-utils";
import { useContext } from "react";

const IndividualRoleCostComparison = () => {
    const services = useContext(ServiceContext);

    return (
        <div className="max-w-7xl m-auto flex flex-col">
            <div className="flex flex-col items-start gap-5 w-full">
                <SectionTitle 
                    bannerTitle={"Cost Comparison"}
                    dscrpt={"Hiring in the Philippines vs Locally"}
                />

                <div className="flex flex-wrap gap-4">
                    {services.costComparison.map((data, index) => (
                        <div className="w-[49%] bg-black px-6 py-8 text-white rounded-2xl flex flex-col gap-3" key={index}>
                            <h4 className="text-3xl font-bold font-heading brand-text-orange">{data.role}</h4>
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col gap-3">
                                    <p>Local Cost:</p>
                                    <p>Outsourze Cost:</p>
                                    <p>Estimated Savings:</p>
                                </div>
                                <div className="flex flex-col gap-3 text-sm">
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