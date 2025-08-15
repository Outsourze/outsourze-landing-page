import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ContactDetailCard = ({
    title,
    subtitle,
    text,
    url,
    isFullWidth
}) => {
    return (
        <Link
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-8 py-5 flex items-center bg-black rounded-xl justify-between
            lg:w-1/3
            md:w-[49%] ${isFullWidth && "md:w-full"}
            max-md:w-full`}
        >
            <div>
                <h3 className="font-heading font-extrabold brand-text-orange
                xl:text-2xl
                lg:text-xl
                md:text-xl
                max-md:text-lg">{title}</h3>
                <h5 className="brand-text-orange font-bold">{subtitle}</h5>
                <p className="text-sm text-white">{text}</p>
            </div>
            <div className="brand-bg-orange rounded-full p-4">
                <MdArrowOutward size={20} aria-hidden="true" focusable="false" />
            </div>
        </Link>
    )
}

export default ContactDetailCard;