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
            className={`${style} inline-flex items-center gap-2 brand-bg-orange py-3 px-5 rounded-full font-bold duration-300`}
        >
            {text} 
            <FaArrowRight size={18} aria-hidden="true" focusable="false"/>
        </Link> 
    )
}

export default Button;

export const ButtonPlain = ({
    text,
    style,
    url
}) => {
    return (
        <Link 
          href={url}
          className={`${style} inline-flex items-center gap-2 brand-bg-orange py-3 px-5 rounded-full`}
        >
          {text}
          <span className="sr-only"> about Michael Scott, Co-Founder</span>
        </Link>
    )
}