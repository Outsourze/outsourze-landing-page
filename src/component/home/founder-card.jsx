import Image from "next/image";
import { ButtonPlain } from "../ui/button";

const FounderCard = ({
    name,
    descrp,
    pos,
    img
}) => {
    return (
        <div className="h-72 w-[47%] flex gap-6 rounded-xl border border-[#EAEBEC]">
            <div className="h-full w-[45%] overflow-hidden rounded-xl">
                <Image 
                    className="w-auto object-cover"
                    src={img} 
                />
            </div>
            <div className="flex flex-col w-[55%] items-start justify-center gap-3">
                <div className="flex flex-col">
                    <h3 className="font-extrabold text-2xl">{name}</h3>
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