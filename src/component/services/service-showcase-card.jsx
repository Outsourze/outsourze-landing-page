import Image from "next/image";
import Link from "next/link";
import BrandLabel from "../ui/brand-label";
import { MdArrowOutward } from "react-icons/md";

const ServiceShowcaseCard = ({
    img,
    title,
    text,
    url
}) => {
    return (
        <Link href={url} className="flex-col flex 
        lg:w-[31%] lg:gap-5
        md:w-[45%] md:py-5 md:gap-3
        max-md:w-full max-md:py-3 max-md:gap-2">
            <div className="relative">
                <div className="relative">
                    {/* Soft orange overlay */}
                    <Image src={img} alt="services" className="object-cover w-full h-full contrast-70"/>
                    <div className="absolute inset-0 bg-orange-500/43 mix-blend-overlay pointer-events-none" />
                </div>
                
                <div className="bg-black absolute right-4 bottom-0 rounded-full
                xl:p-5 lg:p-4 md:p-4">
                    <MdArrowOutward className="text-white 
                    xl:w-12 xl:h-12
                    lg:w-[1.9rem] lg:h-[1.9rem]
                    md:w-8 md:h-8" />
                </div>
            </div>
            <BrandLabel 
                text={title}  
                style={"font-semibold text-xl md:inline-flex md:self-start md:text-xl max-md:text-lg max-md:py-1 max-md:text-center"}
            />
            <p className="font-semibold
            lg:text-xl 
            md:text-lg md:leading-5
            max-md:text-base max-md:text-center">{text}</p>
        </Link>
    )
}

export default ServiceShowcaseCard;