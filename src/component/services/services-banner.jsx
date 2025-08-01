import Image from "next/image";
import OurServices from "@/assets/images/our-services-banner.png";
import goArrow from "@/assets/icon/go-arrow.png";

const BannerSection = () => {
    return (
        <div className="min-w-7xl m-auto flex flex-col">
            <div className="relative overflow-hidden">
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={OurServices}
                  alt="About"
                />    
                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay rounded-[3.5rem] pointer-events-none" />
                <Image 
                    className="absolute top-12 right-14 w-24"
                    src={goArrow}
                />
                <h1 className="font-black text-7xl font-heading absolute bottom-6 left-7">Our <br /> Services</h1>
            </div>
        </div>
    )
}

export default BannerSection;