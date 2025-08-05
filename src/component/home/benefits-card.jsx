import { useState } from "react";

const HiddenContent = ({
    text,
    dscrpt
}) => {
    return (
        <div className="relative flex flex-col justify-start h-full pr-3">
            <h3 className="brand-text-orange font-heading font-semibold leading-6 text-xl mb-10">{text}</h3>
            <p className="text-white text-sm">{dscrpt}</p> 
        </div>
    )
}


const BenefitCard = ({
    icon,
    text,
    dscrpt
}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="bg-black rounded-2xl p-6 flex flex-col items-start justify-end min-h-[19rem] w-full relative overflow-hidden"
        >
            {isHover ? (
                <>
                    <HiddenContent 
                        text={text}
                        dscrpt={dscrpt}
                    />
                </>
            ) : (
                <>
                    {icon}
                    <h3 className="text-white font-extrabold text-xl mt-4">{text}</h3>
                </>
            )}
        </div>
    )
}

export default BenefitCard;