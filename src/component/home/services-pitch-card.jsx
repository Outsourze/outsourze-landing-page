import { RxEnterFullScreen } from "react-icons/rx";

const ServicesPitchCard = ({
    text,
    subText
}) => {
    return (
        <div className="card-bg-slight-black rounded-2xl flex flex-col items-start justify-end w-1/3 overflow-hidden">
            <div className="brand-bg-orange w-full px-7 pt-4 pb-3">
                <h3 className="text-xl font-semibold font-heading">{text}</h3>
            </div>
            <div className="px-7 py-5">
                <p className="text-white text-[0.9375rem] mb-12">{subText}</p>
                <div className="flex items-center gap-3 justify-end">
                    <p className="text-white text-[0.9375rem] font-cta">See more</p>
                    <RxEnterFullScreen className="brand-text-orange text-[0.9375rem]"/>
                </div>
            </div>
        </div>
    )
}

export default ServicesPitchCard;