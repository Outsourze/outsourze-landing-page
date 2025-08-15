import Button from "../ui/button";
import bubblePng from "@/assets/images/bubble-bg.webp";
import Image from "next/image";

const GetStarted = () => {
    return (
        <div className="footer-getstarted-banner-bg relative overflow-hidden rounded-4xl py-14 
       lg:mb-15 lg:px-16 md:mb-5 md:px-8 max-md:mb-5 max-md:px-5 max-md:py-8 max-md:rounded-2xl">
         {/* Background image */}
         <Image
           className="absolute right-0 bottom-[-80%] z-0 brightness-150 blur-2xl"
           src={bubblePng}
           alt="bubble"
           style={{ transform: "rotate(34.48deg)" }}
         />
           {/* Blue overlay */}
           <div className="absolute inset-0 bg-blue-500 opacity-20 z-0 mix-blend-multiply"></div>
       
         {/* Foreground content */}
         <div className="relative z-10 flex items-center justify-between w-full
         max-sm:gap-5">
           <h2 className="text-white font-semibold  font-jakarta
           xl:text-[4.6rem] lg:text-5xl md:text-4xl max-md:text-3xl max-sm:text-xl">
             Ready to work with us?
           </h2>
           
           <Button 
             url={"/contact-us"}
             style={"text-white text-sm gap-8 px-8 py-4 max-md:px-3 max-md:py-2 max-sm:gap-0 max-sm:whitespace-nowrap"} 
             text={"Get Started"} 
           />
         </div>
       </div>
    )
}

export default GetStarted;