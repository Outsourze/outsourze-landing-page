import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
                        <h3 className="text-white font-extrabold text-xl mt-4">{text}</h3>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default BenefitCard;