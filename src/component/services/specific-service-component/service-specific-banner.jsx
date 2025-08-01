// this banner is for specific service (eg: hr department, customer service, etc)
import Image from "next/image";

const SpecificBannerSection = ({
    img,
    title,
    dscrpt
}) => {
    return (
        <div className="max-w-7xl m-auto flex flex-col">
            <div className="relative overflow-hidden">
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={img}
                  alt={title}
                />    
                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay pointer-events-none" />
                <div className="brand-bg-orange absolute top-1 right-1 px-9 py-6 rounded-2xl min-w-[27%] text-center">
                    <h1 className="font-extrabold text-2xl text-white">{title}</h1>
                </div>
            </div>
            <div className="text-center py-10 flex flex-col gap-8 items-center">
                <h1 className="font-black text-5xl font-heading">{title}</h1>
                <p className="text-[1.7rem] leading-8 w-[75%]">{dscrpt}</p>
            </div>
        </div>
    )
}

export default SpecificBannerSection;