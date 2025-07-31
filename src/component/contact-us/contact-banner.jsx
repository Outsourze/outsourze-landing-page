import Image from "next/image";

const BannerSection = () => {
    return (
        <div className="min-w-7xl m-auto flex flex-col">
            <div className="relative overflow-hidden">
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={require("@/assets/images/contact-banner.png")}
                  alt="About"
                />    
                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay rounded-[3.5rem] pointer-events-none" />

                <h1 className="font-black text-7xl font-heading absolute top-10 left-7">Get in touch!</h1>
            </div>
        </div>
    )
}

export default BannerSection;