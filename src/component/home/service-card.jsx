import Image from "next/image";

const ServicesCard = ({
    icon,
    text
}) => {
    return (
        <div className="card-bg-slight-black rounded-2xl p-6 flex flex-col items-start justify-end n min-h-64 w-full">
          <Image
            className="w-[4.5rem] h-auto text-[var(--brand-orange)]"
            src={icon}
            alt={text}
          />
          <h3 className="text-white font-extrabold text-2xl mt-4">{text}</h3>
        </div>
    )
}

export default ServicesCard;