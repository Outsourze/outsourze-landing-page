import Image from "next/image";
import OurServices from "@/assets/images/our-services-banner.webp";
import goArrow from "@/assets/icon/go-arrow.png";

const BannerSection = () => {
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col 
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="relative overflow-hidden 
            xl:rounded-[3rem] 
            lg:rounded-[2.5rem] 
            md:rounded-2xl
            max-md:rounded-lg">
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={OurServices}
                  alt="our services"
                  placeholder="blur"
                  priority={true}
                />    
                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay pointer-events-none"/>
                <Image 
                    alt="go arrow"
                    className="absolute 
                    xl:w-24 xl:top-12 xl:right-14 
                    lg:w-20 lg:top-8 lg:right-10
                    md:w-12 md:top-6 md:right-8
                    max-md:w-10 max-md:top-4 max-md:right-5
                    max-[32rem]:w-8
                    max-[27rem]:w-7"
                    src={goArrow}
                    placeholder="blur"
                />
                <h1 className="font-black font-heading absolute leading-none
                xl:text-7xl xl:bottom-6 xl:left-7
                lg:text-[3.3rem] lg:bottom-5 lg:left-4
                md:text-4xl md:bottom-3 md:left-2
                max-md:text-3xl max-md:bottom-2 max-md:left-1
                max-[32rem]:text-[1.6rem]
                max-[27rem]:text-[1.3rem]">Our <br /> Services</h1>
            </div>
        </div>
    )
}

export default BannerSection;