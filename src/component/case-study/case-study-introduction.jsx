import Image from "next/image";
import { ButtonPlain } from "../ui/button";

const IntroductionSection = () => {
    return (
        <div className="max-w-7xl m-auto flex flex-col gap-6">
            <div className="bg-[#1E1E1F] rounded-[1.3rem] flex items-center py-20 px-15 relative overflow-hidden">
                <div className="flex flex-col gap-5">
                    <h1 className="text-white text-5xl  font-heading font-bold leading-15"><span className="brand-text-orange">Supercharge</span> Your <br />Team-Without<br /> Breaking the Bank</h1>
                    <ButtonPlain style={"self-start px-7 font-cta shadow-md outline"} text={"Get Started"}/>
                </div>
                <Image 
                    className="w-[42.2rem] absolute right-0 top-0 opacity-10"
                    src={require("@/assets/images/intro-case-banner-1.png")}
                />
                <Image 
                    className="w-[30rem] absolute right-10 bottom-0 opacity-10"
                    src={require("@/assets/images/intro-case-banner-2.png")}
                />
            </div>
            <div className="flex items-center gap-6">
                <div className="bg-[#1E1E1F] rounded-[1.3rem] text-white w-[34%] py-10 px-6 flex flex-col gap-3">
                    <h4 className="font-bold text-2xl font-heading">Skilled Professionals at Your Fingertips</h4>
                    <p>Tap into a workforce of 115+ million people, many with degrees and excellent English skills.</p>
                </div>
                <div className="bg-[#1E1E1F] rounded-[1.3rem] text-white w-[34%] py-10 px-6 flex flex-col gap-3">
                    <h4 className="font-bold text-2xl font-heading">Full Service</h4>
                    <p>We recruit, manage, and support your offshore staff — you stay focused on growing your business.</p>
                </div>
                <div className="bg-[#1E1E1F] rounded-[1.3rem] text-white w-[29%] py-10 px-6 flex flex-col gap-3">
                    <h4 className="font-bold text-5xl font-heading ">70%</h4>
                    <div className="flex gap-4">
                      {/* This wrapper will stretch with the paragraph */}
                      <div className="flex flex-col justify-stretch">
                        <div className="h-full w-0.5 brand-bg-orange" />
                      </div>
                      <p className="text-sm leading-6">
                        Save on Hiring Costs. Cut salary, infrastructure, and HR expenses significantly.
                      </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionSection;