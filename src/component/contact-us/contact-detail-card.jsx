import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ContactDetailCard = ({
    title,
    subtitle,
    text,
    url
}) => {
    return (
        <Link href={url} className="w-1/3 px-8 py-5 flex items-center bg-black rounded-xl justify-between">
            <div>
                <h3 className="font-heading font-extrabold text-2xl brand-text-orange">{title}</h3>
                <h5 className="brand-text-orange font-bold">{subtitle}</h5>
                <p className="text-sm text-white">{text}</p>
            </div>
            <div className="brand-bg-orange rounded-full p-4">
                <MdArrowOutward size={20}/>
            </div>
        </Link>
    )
}

export default ContactDetailCard;