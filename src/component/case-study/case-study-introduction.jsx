import Image from "next/image";
import { ButtonPlain } from "../ui/button";
import introCaseBanner from "@/assets/images/intro-case-banner-1.webp";
import introCaseBanner2 from "@/assets/images/intro-case-banner-2.webp";

const IntroductionSection = () => {
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col 
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 md:gap-6
        max-md:px-5 max-md:py-5 max-md:gap-3">
            <div className="bg-[#1E1E1F] rounded-[1.3rem] flex items-center relative overflow-hidden
            lg:px-15 lg:py-20
            md:px-8 md:py-14
            max-md:px-5 
            max-md:py-20
            max-sm:py-15
            max-[27rem]:py-12">
                <div className="flex flex-col gap-5">
                    <h1 className="text-white font-heading font-bold 
                    xl:text-5xl xl:leading-15
                    lg:text-[2.7rem] lg:leading-13
                    md:text-[2rem] md:leading-11
                    max-md:text-[2rem] max-md:leading-10
                    max-sm:text-[1.7rem] max-sm:leading-8
                    max-[27rem]:text-[1.5rem]">
                        <span className="brand-text-orange">Supercharge</span> Your <br className="lg:inline md:hidden max-md:inline"/>Team-Without<br /> Breaking the Bank
                    </h1>
                    <ButtonPlain 
                        style={"lg:flex md:hidden max-md:hidden self-start px-7 font-cta shadow-md outline hover:bg-black hover:text-white hover:border-none hover:outline-none duration-100"} 
                        text={"Get Started"}
                        url={"/contact-us"}
                    />
                </div>
                <Image 
                    alt="intro-banner-1"
                    className=" absolute top-0 opacity-10 
                    xl:right-0
                    lg:-right-[10%] lg:w-[42.2rem]
                    md:right-3 md:w-[22rem]
                    max-md:-right-16 max-md:w-[28rem]
                    max-[27rem]:w-[20rem]"
                    src={introCaseBanner}
                />
                <Image 
                    alt="intro-banner-2"
                    className=" absolute bottom-0 opacity-10 
                    xl:right-10
                    lg:-right-[8%] lg:w-[30rem]
                    md:right-9 md:w-[13rem]
                    max-md:-right-10 max-md:w-[20rem]
                    max-sm:-right-8 max-sm:-bottom-16
                    max-[27rem]:-bottom-5 max-[27rem]:w-[15rem] max-[27rem]:-right-10"
                    src={introCaseBanner2}
                />
            </div>
            <div className="flex items-stretch gap-6
            lg:flex-row
            md:flex-row-reverse
            max-md:flex-col max-md:gap-3">
                <div className="flex items-stretch
                xl:w-[68%]
                lg:w-[64%] lg:flex-row lg:gap-6
                md:w-[60%] md:flex-col md:gap-3
                max-md:w-full max-md:flex-col max-md:gap-3">
                    <div className="bg-[#1E1E1F] rounded-[1.3rem] text-white  px-6 flex flex-col
                    xl:py-10 
                    lg:py-6 lg:gap-3
                    md:py-3 md:gap-1
                    max-md:py-5">
                        <h4 className="font-bold font-heading
                        lg:text-2xl md:text-xl">Skilled Professionals at Your Fingertips</h4>
                        <p className="lg:text-base md:text-sm max-md:leading-4">Tap into a workforce of 115+ million people, many with degrees and excellent English skills.</p>
                    </div>
                    <div className="bg-[#1E1E1F] rounded-[1.3rem] text-white  px-6 flex flex-col 
                    xl:py-10 
                    lg:py-6 lg:gap-3
                    md:py-3 md:gap-1
                    max-md:py-5">
                        <h4 className="font-bold font-heading
                        lg:text-2xl md:text-xl">Full Service</h4>
                        <p className="lg:text-base md:text-sm  max-md:leading-4">We recruit, manage, and support your offshore staff — you stay focused on growing your business.</p>
                    </div>
                </div>
                
                <div className="bg-[#1E1E1F] rounded-[1.3rem] text-white px-6 flex flex-col gap-3
                xl:py-10 xl:w-[29%] 
                lg:py-6 lg:w-[33%]
                md:py-3 md:w-[37%]
                max-md:py-5 max-md:w-full">
                    <h4 className="font-bold font-heading 
                    lg:text-5xl
                    md:text-7xl
                    max-md:text-5xl">70%</h4>
                    <div className="flex gap-4">
                      {/* This wrapper will stretch with the paragraph */}
                      <div className="flex flex-col justify-stretch">
                        <div className="h-full w-0.5 brand-bg-orange" />
                      </div>
                      <p className="text-sm leading-6 max-md:leading-4">
                        Save on Hiring Costs. Cut salary, infrastructure, and HR expenses significantly.
                      </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionSection;