import Link from "next/link";

const WhiteButton = ({
    text,
    url
}) => {
    return (
        <Link 
            className="font-cta py-3 px-4 border border-[var(--border-black)] rounded-[50px] text-[var(--primary-text-color)]"
            href={url}
        >
            {text}
        </Link>
    )
}

export default WhiteButton;