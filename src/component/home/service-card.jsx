import Link from "next/link";

const ServicesCard = ({
    icon,
    text,
    url
}) => {
    return (
        <Link href={url} className="card-bg-slight-black rounded-2xl p-6 flex flex-col items-start justify-end n min-h-64 w-full cursor-pointer">
          {icon}
          <h3 className="text-white font-extrabold text-2xl mt-4">{text}</h3>
        </Link>
    )
}

export default ServicesCard;