import Image from "next/image";
import contactBanner from "@/assets/images/contact-banner.webp"

const BannerSection = () => {
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="relative overflow-hidden">
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={contactBanner}
                  alt="About"
                />    
                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay pointer-events-none" />

                <h1 className="font-black font-heading absolute leading-none
                xl:text-7xl xl:top-10 xl:left-7
                lg:text-[3.6rem] lg:top-8 lg:left-3
                md:text-4xl md:top-8 md:left-3
                max-md:text-4xl max-md:top-5 max-md:left-2
                max-sm:text-3xl max-sm:top-3 max-sm:left-1
                max-[32rem]:text-[1.6rem]
                max-[27rem]:text-[1.3rem]">Get in touch!</h1>
            </div>
        </div>
    )
}

export default BannerSection;