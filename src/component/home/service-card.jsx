import Link from "next/link";

const ServicesCard = ({
    icon,
    text,
    url
}) => {
    return (
        <Link href={url} className="card-bg-slight-black rounded-2xl p-6 flex flex-col items-start justify-end w-full cursor-pointer
        xl:min-h-64 lg:min-h-52 md:min-h-56 max-md:min-h-40">
          {icon}
          <h3 className="text-white font-extrabold  mt-4
          xl:text-2xl lg:text-xl md:text-2xl max-md:text-lg">{text}</h3>
        </Link>
    )
}

export default ServicesCard;