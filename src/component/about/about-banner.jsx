import Image from "next/image";
import AboutBanner from "@/assets/images/about-banner.png";

const BannerSection = () => {
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col
          xl:px-0 
          lg:px-20
          md:px-20 
          max-md:px-5 max-md:py-5">
            <div className="bg-black w-full h-full relative
            xl:rounded-[3.8rem] xl:p-9
            lg:rounded-[3rem] lg:p-6
            md:rounded-4xl md:p-4
            max-md:rounded-2xl max-md:p-4"> 
              <div className="relative w-full h-full overflow-hidden
              xl:rounded-[3rem] 
              lg:rounded-[2.5rem] 
              md:rounded-2xl
              max-md:rounded-lg">
                {/* Apply contrast directly to the image */}
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={AboutBanner}
                  alt="About"
                />    

                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay  pointer-events-none
                xl:rounded-[3rem] lg:rounded-[2.5rem] md:rounded-2xl max-md:rounded-lg" />
              </div>
              <h1 className="brand-text-orange font-black font-heading absolute leading-none 
              xl:text-[9rem] xl:leading-56 xl:bottom-[-0.1em] xl:tracking-normal
              lg:text-8xl lg:bottom-6 lg:tracking-wider
              md:text-[4.3rem] md:left-9 md:bottom-4
              max-md:text-[3.9rem] max-md:left-5 max-md:bottom-3
              max-sm:text-[3.5rem]
              max-[32rem]:text-[2.8rem]
              max-[27rem]:text-[2.5rem]
              max-[24rem]:text-[2.2rem]">ABOUT US</h1>
            </div>
        </div>
    )
}

export default BannerSection;