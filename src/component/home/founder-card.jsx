import Image from "next/image";
import { ButtonPlain } from "../ui/button";

const FounderCard = ({
    name,
    descrp,
    pos,
    img,
    style,
}) => {
    return (
        <div className={`${style} flex gap-2 rounded-xl border border-[#e6e6e6]
        xl:h-72 lg:w-[47%] lg:h-60 md:h-60 max-md:flex-col max-md:items-center max-md:gap-5 max-md:py-5`}>
            <div className="h-full overflow-hidden rounded-xl
            lg:w-[45%] md:w-[31%] max-md:w-1/2">
                <Image 
                    alt="founder-img"
                    className="w-auto object-cover "
                    src={img} 
                />
            </div>
            <div className="flex flex-col w-[55%] items-start justify-center gap-3 px-5
            max-md:w-full">
                <div className="flex flex-col max-md:w-full max-md:text-center">
                    <h3 className="font-extrabold text-2xl font-heading">{name}</h3>
                    <h4 className="brand-text-orange font-bold">{pos}</h4>
                </div>
                
                <p className="text-sm 
                xl:line-clamp-none lg:line-clamp-3 max-md:text-center">{descrp}</p>
                <ButtonPlain 
                    url={"/about"}
                    style={"font-cta text-sm max-md:m-auto"}
                    text={"Read More"}
                />
            </div>
        </div>
    )
}


export default FounderCard;