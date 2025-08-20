// hero section

import Button from "../ui/button";
import Image from "next/image";
import trendingUp from "@/assets/icon/trending-up.png";
import heroOne from "@/assets/images/hero-1.webp";
import heroTwo from "@/assets/images/hero-2.webp";
import bubble from "@/assets/images/bubble-bg.webp";

const HeroSection = () => {
    return (
        <div className="brand-bg-offwhite">
            <div className="max-w-7xl py-20 m-auto flex items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10">
               <div className="flex flex-col gap-5
                lg:text-left lg:items-start lg:w-1/2
                md:text-center md:items-center md:w-full
                max-md:text-center max-md:items-center max-md:w-full">
                    <h1 className="font-extrabold font-heading text-shadow-heading mb-5
                    xl:text-7xl 
                    lg:text-6xl 
                    md:text-7xl
                    max-md:text-5xl max-md:leading-10
                    max-sm:text-[2.5rem] max-sm:leading-10">Outsource <br /> Smarter.<br /> Grow Faster.</h1>
                    <div className="flex flex-col gap-5
                    max-md:text-sm">
                        <p className="font-bold">At OUTSOURZE, we help businesses scale through high-quality, cost-effective staffing solutions based in the Philippines.</p>
                        <p className="font-bold">
                          Flexible. Affordable. Results-driven.<br />
                          Serving the Globe to offer tailored outsourcing solutions.
                        </p>
                    </div>
                    <Button 
                      url={"/contact-us"} 
                      text={"Continue"}
                      style={"hover:bg-black hover:text-orange-500"}
                    />
               </div>
               <div className="flex-col items-center w-1/2 gap-5
               xl:px-7 lg:px-0 lg:flex md:hidden max-md:hidden">
                    <div className="flex items-stretch gap-5">
                      {/* Left side (orange box) */}
                      <div className="w-[54%] brand-bg-orange flex flex-col justify-center rounded-[2.50rem] relative
                      xl:px-10 lg:pl-5">
                        {/* arrow icon | logo */}
                        <div className="rounded-full absolute top-[-5%] left-[-10%] bg-black border-white border-6 p-5">
                            <Image 
                              alt="trending-alt"
                              className="w-12" 
                              src={trendingUp}
                              placeholder="blur"
                            />
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
                            alt="hero-two"
                            className="rounded-[1.25rem] w-full mix-blend-multiply"
                            src={heroTwo}
                            placeholder="blur"
                          />
                          <div className="absolute inset-0 bg-orange-500 opacity-30 rounded-[1.25rem] pointer-events-none" />
                        </div>
                        <div className="relative">
                          <Image
                            alt="hero-one"
                            className="rounded-[1.25rem] w-full mix-blend-multiply"
                            src={heroOne}
                            placeholder="blur"
                          />
                          <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-[1.25rem] pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black px-10 py-5 overflow-hidden rounded-3xl">
                      {/* Background image */}
                      <Image
                        className="absolute left-[-27%] bottom-[-80%] z-0 filter brightness-70 backdrop-sepia-50"
                        src={bubble}
                        alt="buble"
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



