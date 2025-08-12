import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from '@/utility/useMediaQuery';

const HiddenContent = ({
    text,
    dscrpt
}) => {
    return (
        <div className="relative flex flex-col justify-start h-full md:pr-3 max-md:pr-0">
            <h3 className="brand-text-orange font-heading font-semibold leading-6 mb-10 text-xl md:text-xl max-md:text-base">{text}</h3>
            <p className="text-white text-sm md:text-sm max-md:text-xs">{dscrpt}</p> 
        </div>
    )
}

const BenefitCard = ({
    icon,
    text,
    dscrpt
}) => {
    const [isHover, setIsHover] = useState(false);
      const isTablet = useMediaQuery("(min-width: 365px) and (max-width: 1023px)");

    const handleClick = () => {
        if (isTablet) {
            setIsHover((prev) => !prev);
        }
    };

    return (
        <div 
            onMouseEnter={() => !isTablet && setIsHover(true)}
            onMouseLeave={() => !isTablet && setIsHover(false)}
            onClick={handleClick}
            className="bg-black rounded-2xl p-6 flex flex-col items-start justify-end w-full relative overflow-hidden
            xl:min-h-[19rem] lg:min-h-64 lg:w-[24%] md:min-h-60 md:w-[31%] max-md:w-[47%] max-md:min-h-48"
        >
            <AnimatePresence mode="wait">
                {isHover ? (
                    <motion.div
                        key="hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="h-full"
                    >
                        <HiddenContent 
                            text={text}
                            dscrpt={dscrpt}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className=""
                    >
                        {icon}
                        <h3 className="text-white font-extrabold mt-4 text-xl md:text-xl max-md:text-base">{text}</h3>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default BenefitCard;