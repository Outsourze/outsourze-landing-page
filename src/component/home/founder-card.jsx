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
        <div className={`${style} h-72 w-[47%] flex gap-2 rounded-xl border border-[#e6e6e6]`}>
            <div className="h-full w-[45%] overflow-hidden rounded-xl">
                <Image 
                    className="w-auto object-cover object-top"
                    src={img} 
                />
            </div>
            <div className="flex flex-col w-[55%] items-start justify-center gap-3 px-5">
                <div className="flex flex-col">
                    <h3 className="font-extrabold text-2xl font-heading">{name}</h3>
                    <h4 className="brand-text-orange font-bold">{pos}</h4>
                </div>
                
                <p className="text-sm">{descrp}</p>
                <ButtonPlain 
                    style={"font-cta text-sm"}
                    text={"Read More"}
                />
            </div>
        </div>
    )
}


export default FounderCard;