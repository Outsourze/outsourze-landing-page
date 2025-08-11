import { BiSolidRightArrow } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const whatWeBelivedData = [
    "Transparency matters. No hidden fees. No jargon. Just straight answers and honest support.",
    "Relationships first. We’re not just building teams—we’re building long-term partnerships.",
    "Global talent, local mindset. Your remote team understands your market, your tone, and your goals.",
    "Efficiency is everything. We streamline hiring, cut overheads, and deliver consistent results."
]


const CompanyAboutSection = () => {
    return (
        <div className="brand-bg-offwhite">
            <div className="flex flex-col items-start max-w-7xl m-auto
            xl:gap-20 xl:px-0
            lg:px-20 lg:gap-10 lg:py-10
            md:px-20 md:gap-5 md:py-5
            max-md:px-5 max-md:gap-3 max-md:py-0">
                {/* FIRST SECTION (OFFSHORE TEAM) */}
                <div className="flex
                lg:flex-row lg:gap-0 lg:items-start
                md:flex-col md:gap-5 md:items-center
                max-md:flex-col max-md:gap-3 max-md:items-center">
                    <h2 className="font-heading font-extrabold 
                    lg:w-1/2 lg:text-[3.2rem] lg:text-left lg:leading-12
                    md:w-2/3 md:text-4xl md:font-semibold md:text-center md:leading-8
                    max-md:w-2/3 max-md:text-2xl max-md:font-extrabold max-md:text-center max-md:leading-5">Your Offshore Team, Made Simple</h2>
                    <div className="
                    lg:w-1/2 lg:text-left md:w-full md:text-center max-md:text-center max-md:w-full max-md:text-sm max-sm:text-xs max-sm:leading-4">
                        <p>At <span className="brand-text-orange font-bold">OUTSOURZE</span>, we help businesses do more with less—without compromising on quality. Whether you're a small business looking to scale or an established company seeking to streamline operations, our offshore staffing solutions give you access to top-tier global talent at a fraction of the local cost. </p>
                        <br />
                        <p>We take the complexity out of outsourcing by handling everything for you—from recruitment and onboarding to management and quality control—so you can stay focused on what you do best: <span className="brand-text-orange font-bold">growing your business.</span></p> 
                    </div>
                </div>
                {/* SECOND SECTION (WHO WE ARE) */}
                <div className="flex items-start justify-between gap-10
                lg:flex-row md:flex-col max-md:flex-col">
                    <div className="
                    lg:w-2/5 lg:text-left md:text-center max-md:text-center">
                        <h3 className="font-medium
                        lg:text-[2.70rem] md:text-3xl max-md:text-2xl max-md:font-bold">Who We Are</h3>
                        <p className="xl:text-[1rem] lg:text-sm max-md:text-sm max-sm:text-xs">OUTSOURZE is a Hong Kong–registered company built on the belief that businesses everywhere should have access to skilled, affordable talent—without borders, red tape, or inflated agency fees. We work with a wide network of vetted professionals across key industries including administration, customer service, marketing, tech, and design. Our leadership team brings years of experience in business process outsourcing (BPO), human resources, and remote team management. We’ve seen first hand how lean, remote teams can transform operations and save money in the process—and we’re here to help you experience that transformation too.</p>
                    </div>
                    <div className=" bg-black rounded-3xl py-10 px-8
                    lg:w-[52%]">
                        <h3 className="text-white font-medium text-2xl mb-5">What We Believe</h3>
                        <div className="flex flex-col gap-4">
                            {whatWeBelivedData.map((data) => (
                                <div className="flex items-center gap-5">
                                    <BiSolidRightArrow className="brand-text-orange"/>
                                    <p className="text-white text-sm">{data}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 3RD SECTION (PITCH ABOUT) */}
                <div className="flex items-stretch gap-4
                lg:flex-nowrap 
                md:flex-wrap md:justify-between
                max-md:flex-wrap">
                    <div className="flex flex-col p-7 bg-black rounded-3xl gap-5 
                    xl:pr-14 lg:pr-7 lg:w-[25%] md:w-[40%] max-md:w-full">
                        <h3 className="brand-text-orange font-medium text-3xl">Our Mission</h3>
                        <p className="text-white">To make outsourcing simple, smart, and accessible for businesses of every size.</p>
                        <div className="flex items-end w-full h-28 gap-1 max-md:justify-end">
                            {[...Array(8)].map((_, index) => (
                                <div 
                                    className={
                                        `${index === 0 ? "h-[30%]" : "" } 
                                        ${index === 1 ? "h-[45%]" : "" } 
                                        ${index === 2 ? "h-[60%]" : "" } 
                                        ${index === 3 ? "h-[70%]" : "" } 
                                        ${index === 4 ? "h-[90%] brand-bg-orange" : "" } 
                                        ${index === 5 ? "h-[50%]" : "" } 
                                        ${index === 6 ? "h-[40%]" : "" } 
                                        ${index === 7 ? "h-[50%]" : "" } 
                                        w-7 bg-white rounded-4xl`}
                                    key={index}></div>
                            ))}
                        </div>
                    </div>
                    <div className="px-10 py-7 bg-black rounded-3xl
                    lg:w-[40%] md:w-[57%] max-md:w-full">
                        <h3 className="brand-text-orange font-medium text-3xl mb-5">Why Choose Us?</h3>
                        <ul className="list-disc list-inside space-y-4 text-sm text-white">
                            <li className="">Personalized service: We take the time to understand your business before matching you with talent.</li>
                            <li className="">End-to-end management: From sourcing to supervision, we handle it all- so you don’t have to.</li>
                            <li className="">Scalable solutions: Whether you need one virtual assistant or a full offshore department, we’ve got you covered.</li>
                            <li className="">Local focus, global reach: We specialize in supporting clients globally.</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-black rounded-3xl flex flex-col gap-5
                    lg:w-[35%] md:w-full max-md:w-full">
                        <h3 className="brand-text-orange font-medium text-3xl">Let's Build Your Dream Team</h3>
                        <p className="text-sm text-white">Outsourcing doesn’t have to be complicated. With OUTSOURZE, you get a seamless, supported, and scalable experience—so you can reduce costs, boost productivity, and stay competitive in today’s fast-moving market.</p>
                        <p className="brand-text-orange font-medium font-cta">Ready to get started?</p>
                        <Link 
                            href={"/contact-us"} 
                            className="text-white flex items-center gap-5 border border-white rounded-3xl py-1 px-4 ml-auto duration-300
                            hover:border-orange-500 hover:text-orange-500"
                        >
                            <p>Contact Us</p> 
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default CompanyAboutSection;