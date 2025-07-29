import Image from "next/image";
import Link from 'next/link';
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    return (
        <div className="sticky py-4 max-w-7xl m-auto">
            <div className="py-4 flex items-center justify-between">
                <Image 
                    className="w-56" 
                    src={require("@/assets/logo/Outsourze Logo.svg")} 
                    alt="Outsourze logo"
                />
                <div className="flex items-center gap-9">
                    <Link className="text-[var(--color-gray)] font-cta" href="/about">Home</Link>
                    <Link className="text-[var(--color-gray)] font-cta flex items-center" href="/about">
                        Services
                        <MdKeyboardArrowDown size={22}/>
                    </Link>
                    <Link className="text-[var(--color-gray)] font-cta" href="/about">About</Link>
                    <Link 
                        className="font-cta py-3 px-4 border border-[var(--border-black)] rounded-[50px] text-[var(--primary-text-color)]"
                        href="/about"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;