import Link from "next/link";

const SpecificServiceCard = ({
    url,
    title,
    dscrpt,
    logo
}) => {
    return (
        <Link href={url} className={`h-full w-full card-bg-slight-black rounded-3xl py-7 px-5 text-white flex-col flex gap-3 `}>
            {logo}
            <h3 className="font-heading 
            md:text-[1.7rem] md:leading-7
            max-md:text-[1.3rem] max-md:leading-5">{title}</h3>
            <p className="text-sm text-[#FFFFFFB2]">{dscrpt}</p>
        </Link>
    )
}

export default SpecificServiceCard;