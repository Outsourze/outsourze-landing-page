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
        <div className="max-w-7xl m-auto flex py-14 justify-evenly">
            <div className="flex flex-wrap w-[40%] gap-10">
                {analyticStats.map((stats, index) => (
                    <div key={index} className="w-[45%] flex flex-col gap-3">
                        <h4 className="font-semibold font-jakarta text-6xl">{stats.number}</h4>
                        <p className="text-[#00000099] text-sm">{stats.text}</p>
                    </div>
                ))}
            </div>
            <div className="w-[40%] flex flex-col gap-3 items-start">
                <h4 className="font-medium text-6xl">Commitments</h4>
                <p className="font-medium text-[#00000099] m-2 leading-8">We’re committed to working hand-in-hand with you to understand your business goals and build a dedicated team that helps you grow—efficiently and effectively.</p>
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