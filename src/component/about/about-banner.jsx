import Image from "next/image";


const BannerSection = () => {
    return (
        <div className="min-w-7xl py-8 m-auto flex flex-col">
            <div className="bg-black w-full h-full p-9 rounded-[3.8rem] relative">
              <div className="relative w-full h-full overflow-hidden rounded-[3.5rem]">
                {/* Apply contrast directly to the image */}
                <Image
                  className="object-cover w-full h-full contrast-70"
                  src={require("@/assets/images/About.png")}
                  alt="About"
                />    

                {/* Soft orange overlay */}
                <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay rounded-[3.5rem] pointer-events-none" />
              </div>
              <h1 className="brand-text-orange font-black text-[9rem] font-heading absolute bottom-[-0.1em]">ABOUT US</h1>
            </div>
        </div>
    )
}

export default BannerSection;