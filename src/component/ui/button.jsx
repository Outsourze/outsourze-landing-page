import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Button = ({
    text,
    style,
    url
}) => {

    return (
        <Link 
            href={url}
            className={`${style} inline-flex items-center gap-2 brand-bg-orange py-3 px-5 rounded-full font-bold`}
        >
            {text} 
            <FaArrowRight size={18}/>
        </Link> 
    )
}

export default Button;

export const ButtonPlain = ({
    text,
    style
}) => {
    return (
        <Link 
            href="" 
            className={`${style} inline-flex items-center gap-2 brand-bg-orange py-3 px-5 rounded-full`}
        >
            {text} 
        </Link> 
    )
}