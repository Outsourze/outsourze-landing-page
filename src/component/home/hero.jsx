// hero section

import Button from "../ui/button";
import Image from "next/image";


const HeroSection = () => {
    return (
        <div className="brand-bg-offwhite">
            <div className="max-w-7xl py-20 m-auto flex items-center gap-20 justify-between">
               <div className="flex flex-col gap-5 items-start w-1/2">
                    <h1 className="text-7xl font-extrabold font-heading text-shadow-heading mb-5">Outsource <br /> Smarter.<br /> Grow Faster.</h1>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">At OUTSOURZE, we help businesses scale through high-quality, cost-effective staffing solutions based in the Philippines.</p>
                        <p className="font-bold">
                          Flexible. Affordable. Results-driven.<br />
                          Serving the Globe to offer tailored outsourcing solutions.
                        </p>
                    </div>
                    <Button text={"Continue"}/>
               </div>
               <div className="flex flex-col items-center w-1/2 gap-5 px-7">
                    <div className="flex items-stretch gap-5">
                      {/* Left side (orange box) */}
                      <div className="w-[54%] brand-bg-orange px-10 flex flex-col justify-center rounded-[2.50rem] relative">
                        {/* arrow icon | logo */}
                        <div className="rounded-full absolute top-[-5%] left-[-10%] bg-black border-white border-6 p-5">
                            <Image className="w-12" src={require("@/assets/icon/trending-up.png")}/>
                        </div>
                        {/* text content */}
                        <div className="ml-5">
                            <h3 className="text-7xl font-bold font-jakarta mb-2">100+</h3>
                            <p className="font-semibold">
                              Skilled professionals ready to support your business on demand.
                            </p>
                        </div>
                      </div>

                      {/* Right side (image column) */}
                      <div className="flex flex-col w-[46%] gap-2">
                        <div className="relative">
                          <Image
                            className="rounded-[1.25rem] w-full mix-blend-multiply"
                            src={require("@/assets/images/hero-2.webp")}
                          />
                          <div className="absolute inset-0 bg-orange-500 opacity-30 rounded-[1.25rem] pointer-events-none" />
                        </div>
                        <div className="relative">
                          <Image
                            className="rounded-[1.25rem] w-full mix-blend-multiply"
                            src={require("@/assets/images/hero-1.webp")}
                          />
                          <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-[1.25rem] pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black px-10 py-5 overflow-hidden rounded-3xl">
                      {/* Background image */}
                      <Image
                        className="absolute left-[-27%] bottom-[-80%] z-0 filter brightness-70 backdrop-sepia-50"
                        src={require("@/assets/images/bubble-bg-hero.png")}
                        alt="Background"
                        style={{ transform: "rotate(115.48deg)" }}
                       />

                      {/* Foreground content */}
                      <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-[1px] bg-white"></div>
                          <p className="text-white font-jakarta">Outsourze</p>
                        </div>
                        <h3 className="text-white font-extrabold text-2xl w-[60%] mb-10">
                          Drive more productivity and scale smarter with top-tier offshore talent.
                        </h3>
                      </div>
                      <div className="absolute bottom-0 right-0 h-10/12 w-1/2 flex items-end justify-end gap-3 pr-1">
                        <div className="w-16 brand-bg-orange h-[30%]"></div>
                        <div className="w-16 brand-bg-orange h-[70%]"></div>
                        <div className="w-16 brand-bg-orange h-[100%]"></div>
                      </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default HeroSection;



