// this banner is for specific service (eg: hr department, customer service, etc)
import Image from "next/image";

const SpecificBannerSection = ({
    img,
    title,
    dscrpt
}) => {
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col 
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="relative overflow-hidden
              xl:rounded-[0.5rem] 
              lg:rounded-[0.4rem] 
              md:rounded-[0.3rem] 
              max-md:rounded-[0.2rem] ">
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={img}
                  alt={title}
                  placeholder="blur"
                  priority={true}
                />    
                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay pointer-events-none" />
                <div className="brand-bg-orange absolute right-1 text-center
                xl:min-w-[27%] xl:px-9 xl:py-6
                lg:min-w-[27%] lg:px-7 lg:py-5 lg:top-1 lg:rounded-2xl 
                md:min-w-[27%] md:px-5 md:py-4 md:top-0 md:rounded-xl
                max-md:min-w-[27%] max-md:px-3 max-md:py-4 max-md:top-0 max-md:rounded-lg
                max-sm:px-0 max-sm:py-3 max-sm:rounded-bl-md
                max-[32rem]:py-[0.6rem]">
                    <h1 className="font-extrabold text-white
                    xl:text-2xl
                    lg:text-xl
                    md:text-sm
                    max-md:text-xs
                    max-[32rem]:text-[0.6rem]
                    max-[27rem]:text-[0.5rem]
                    max-[24rem]:text-[0.3rem]">{title}</h1>
                </div>
            </div>
            <div className="text-center py-10 flex flex-col items-center
            lg:gap-8 md:gap-5 max-md:gap-3">
                <h1 className="font-black font-heading
                xl:text-5xl
                lg:text-4xl
                md:text-3xl
                max-md:text-2xl">{title}</h1>
                <p className="w-[75%]
                xl:text-[1.7rem]
                lg:text-[1.4rem] lg:leading-8
                md:text-[1.2rem] md:leading-6
                max-md:text-base max-md:leading-4">{dscrpt}</p>
            </div>
        </div>
    )
}

export default SpecificBannerSection;