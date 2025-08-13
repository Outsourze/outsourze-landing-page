import Link from "next/link";

const WhiteButton = ({
    text,
    url,
    style,
    onClick
}) => {
    return (
        <Link 
            onClick={onClick}
            className={`${style} font-cta py-2 px-4 border border-[var(--border-black)] rounded-[50px] text-[var(--primary-text-color)]
            hover:bg-black hover:text-white duration-300
            max-md:py-2 max-md:px-3 max-md:text-sm`}
            href={url}
        >
            {text}
        </Link>
    )
}

export default WhiteButton;