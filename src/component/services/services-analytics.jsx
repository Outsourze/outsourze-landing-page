import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button";

const analyticStats = [{
    number: "100+",
    text: "Skilled professionals  ready to support your business on demand."
}, {
    number: "24/7",
    text: "Operational Support Because your business doesn’t stop — neither do we."
}, {
    number: "50+",
    text: "Across industries like sales, admin, design, and support."
}, {
    number: "70+",
    text: "Save Up to 70% on Labor Costs"
}]

const AnalyticSection = () => {
    return (
        <div className="max-w-7xl m-auto flex 
        xl:px-0 
        lg:px-20 lg:py-14 lg:flex-row lg:justify-evenly lg:gap-0
        md:px-20 md:py-10 md:flex-col md:gap-10
        max-md:px-5 max-md:py-5 max-md:flex-col max-md:gap-5">
            <div className="flex flex-wrap 
            xl:gap-10 
            lg:gap-5 lg:w-[40%] lg:justify-start
            md:gap-5 md:w-full md:justify-between
            max-md:gap-5 max-md:w-full max-md:justify-between">
                {analyticStats.map((stats, index) => (
                    <div key={index} className="w-[45%] flex flex-col gap-3">
                        <h4 className="font-semibold font-jakarta text-6xl max-sm:text-4xl">{stats.number}</h4>
                        <p className="text-[#00000099] text-sm max-sm:text-xs">{stats.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3 
            lg:w-[40%] lg:text-left lg:items-start
            md:w-full md:text-center md:items-center
            max-md:w-full max-md:text-center max-md:items-center">
                <h4 className="font-medium text-6xl max-sm:text-4xl">Commitments</h4>
                <p className="font-medium text-[#00000099] m-2 leading-8 max-sm:text-sm max-sm:leading-5">We’re committed to working hand-in-hand with you to understand your business goals and build a dedicated team that helps you grow—efficiently and effectively.</p>
                <Button 
                    style={"text-white hover:bg-black hover:text-orange-500"}
                    text={"View Cost Comparison"}
                    url={"/case-study"}
                />
            </div>  
        </div>
    )
}

export default AnalyticSection;