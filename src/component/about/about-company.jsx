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
            <div className="flex flex-col gap-20 items-start max-w-7xl py-10 m-auto">
                {/* FIRST SECTION (OFFSHORE TEAM) */}
                <div className="flex items-start">
                    <h2 className="w-1/2 font-heading font-extrabold text-[3.2rem] leading-12">Your Offshore Team, Made Simple</h2>
                    <div className="w-1/2">
                        <p>At <span className="brand-text-orange font-bold">OUTSOURZE</span>, we help businesses do more with less—without compromising on quality. Whether you're a small business looking to scale or an established company seeking to streamline operations, our offshore staffing solutions give you access to top-tier global talent at a fraction of the local cost. </p>
                        <br />
                        <p>We take the complexity out of outsourcing by handling everything for you—from recruitment and onboarding to management and quality control—so you can stay focused on what you do best: <span className="brand-text-orange font-bold">growing your business.</span></p> 
                    </div>
                </div>
                {/* SECOND SECTION (WHO WE ARE) */}
                <div className="flex items-start justify-between gap-10">
                    <div className="w-2/5">
                        <h3 className="text-[2.70rem] font-medium">Who We Are</h3>
                        <p>OUTSOURZE is a Hong Kong–registered company built on the belief that businesses everywhere should have access to skilled, affordable talent—without borders, red tape, or inflated agency fees. We work with a wide network of vetted professionals across key industries including administration, customer service, marketing, tech, and design. Our leadership team brings years of experience in business process outsourcing (BPO), human resources, and remote team management. We’ve seen first hand how lean, remote teams can transform operations and save money in the process—and we’re here to help you experience that transformation too.</p>
                    </div>
                    <div className="w-[52%] bg-black rounded-3xl py-10 px-8">
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
                <div className="flex items-stretch gap-4">
                    <div className="flex flex-col p-7 pr-14 bg-black rounded-3xl gap-5 w-[25%]">
                        <h3 className="brand-text-orange font-medium text-3xl">Our Mission</h3>
                        <p className="text-white">To make outsourcing simple, smart, and accessible for businesses of every size.</p>
                        <div className="flex items-end w-full h-28 gap-1">
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
                    <div className="px-10 py-7 w-[40%] bg-black rounded-3xl">
                        <h3 className="brand-text-orange font-medium text-3xl mb-5">Why Choose Us?</h3>
                        <ul className="list-disc list-inside space-y-4 text-sm text-white">
                            <li className="">Personalized service: We take the time to understand your business before matching you with talent.</li>
                            <li className="">End-to-end management: From sourcing to supervision, we handle it all- so you don’t have to.</li>
                            <li className="">Scalable solutions: Whether you need one virtual assistant or a full offshore department, we’ve got you covered.</li>
                            <li className="">Local focus, global reach: We specialize in supporting clients globally.</li>
                        </ul>
                    </div>
                    <div className="p-6 w-[35%] bg-black rounded-3xl flex flex-col gap-5">
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