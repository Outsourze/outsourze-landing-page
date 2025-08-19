import Image from "next/image";
import notFoundmessage from "@/assets/images/404-message.webp";
import notFoundDino from "@/assets/images/404-dino.webp";

const NotFoundSection = () => {
    return (
      <div className="max-w-7xl m-auto w-full xl:px-0 
          lg:px-20
          md:px-20 md:mt-8
          max-md:px-5 max-md:py-5">
        <div className=" bg-black relative 
        lg:min-h-[40rem] md:min-h-[30rem] max-md:min-h-[25rem] max-sm:min-h-[20rem] lg:rounded-3xl md:rounded-2xl max-md:rounded-lg overflow-hidden">
            <div className="absolute 
            xl:right-[30%] xl:top-[30%]
            lg:right-[15%] lg:top-[20%]
            md:right-[15%] md:top-[15%]
            max-md:right-[10%] max-md:top-[10%]
            max-sm:right-[5%] max-sm:top-[8%]">
              <div className="relative">
                <Image
                  className="w-auto
                  xl:h-[13rem]
                  lg:h-[10rem]
                  md:h-[8rem]
                  max-md:h-[7rem]"
                  src={notFoundmessage}
                  alt="404"
                />
                <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="brand-text-orange text-4xl font-extrabold">404</h2>
                  <p className="brand-text-orange xl:text-base lg:text-xs max-md:text-[9px]">We couldn't find that page.</p>
                </div>
              </div>
            </div>
            <Image 
              alt="404dino"
              className="absolute bottom-0 left-0 w-auto 
              xl:h-[20rem] lg:h-[17rem] md:h-[14rem] max-md:h-[8rem]" 
              src={notFoundDino}
            />
        </div>
      </div>
    )
}

export default NotFoundSection;