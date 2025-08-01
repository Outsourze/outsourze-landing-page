
const SpecificServiceCard = ({
    url,
    title,
    dscrpt,
    logo
}) => {
    return (
        <div className={`h-full w-full card-bg-slight-black rounded-3xl py-6 px-5 text-white flex-col flex gap-3 `}>
            {logo}
            <h3 className="font-heading text-[1.7rem] leading-7">{title}</h3>
            <p className="text-sm text-[#FFFFFFB2]">{dscrpt}</p>
        </div>
    )
}

export default SpecificServiceCard;