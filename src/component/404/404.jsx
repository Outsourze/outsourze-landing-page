import Image from "next/image";
import notFoundmessage from "@/assets/images/404-message.png";
import notFoundDino from "@/assets/images/404-dino.png";

const NotFoundSection = () => {
    return (
        <div className="max-w-7xl m-auto bg-black relative min-h-[40rem] rounded-3xl overflow-hidden">
            <div className="absolute right-[30%] top-[30%]">
              <div className="relative">
                <Image
                  className="h-[13rem] w-auto"
                  src={notFoundmessage}
                  alt="404"
                />
                <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="brand-text-orange text-4xl font-extrabold">404</h2>
                  <p className="brand-text-orange">We couldn't find that page.</p>
                </div>
              </div>
            </div>
            <Image className="absolute bottom-0 left-0 h-[20rem] w-auto" src={notFoundDino}/>
        </div>
    )
}

export default NotFoundSection;