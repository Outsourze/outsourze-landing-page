import { useState } from "react";
import { RxEnterFullScreen } from "react-icons/rx";
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
                <div className={`${isShow ? "" : "line-clamp-2 overflow-hidden"} text-white text-[0.9375rem] mb-12 `}>
                    {subText}
                </div>
                <div className="flex items-center gap-3 justify-end cursor-pointer" onClick={handleCloseSeemore}>
                    <p className="text-white text-[0.9375rem] font-cta">{isShow ? "See Less" : "See more"}</p>
                    <RxEnterFullScreen className="brand-text-orange text-[0.9375rem]"/>
                </div>
            </div>
        </div>
    )
}

export default ServicesPitchCard;