import { useState } from "react";
import { RxEnterFullScreen } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
// 
const ServicesPitchCard = ({
    text,
    subText
}) => {
    const [isShow, setIsShow] = useState(false);

    const handleCloseSeemore = () => {
        setIsShow((prev) => !prev);
    }

    return (
        <div className="bg-black rounded-2xl flex flex-col items-start justify-between w-1/3 overflow-hidden">
            <div className="brand-bg-orange w-full px-7 pt-4 pb-3">
                <h3 className="text-xl font-semibold font-heading">{text}</h3>
            </div>
            <div className="px-7 py-5">
                {/* animate using framer motion */}
                 <AnimatePresence initial={false} mode="wait">
                    {isShow ? (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-white text-[0.9375rem] mb-12"
                        >
                            {subText}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-white text-[0.9375rem] mb-12 overflow-hidden"
                            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
                        >
                            {subText}
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="flex items-center gap-3 justify-end cursor-pointer" onClick={handleCloseSeemore}>
                    <p className="text-white text-[0.9375rem] font-cta">{isShow ? "See Less" : "See more"}</p>
                    <RxEnterFullScreen className="brand-text-orange text-[0.9375rem]"/>
                </div>
            </div>
        </div>
    )
}

export default ServicesPitchCard;