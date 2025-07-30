import Image from "next/image";

const BenefitCard = ({
    icon,
    text
}) => {
    return (
        <div className="bg-black rounded-2xl p-6 flex flex-col items-start justify-end min-h-80 w-full relative overflow-hidden">
          <Image
            className="w-14 h-auto text-[var(--brand-orange)] absolute top-5 right-5"
            src={icon}
            alt={text}
          />
          <h3 className="text-white font-extrabold text-xl mt-4">{text}</h3>
        </div>
    )
}

export default BenefitCard;