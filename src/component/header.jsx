import Link from 'next/link';
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { ServicesMenuData } from "@/api/data";
import WhiteButton from "./ui/white-btn";
import OutsouzedLogo from "@/assets/logo/Outsourze Logo.svg";


const ServicesMenu = () => {
  return (
    <div className="relative">
      {/* Arrow shadow */}
      <div
        className="absolute top-[1.7rem] right-12 w-0 h-0 z-0
          border-l-[12px] border-r-[12px] border-b-[18px]
          border-transparent border-b-[rgba(223,223,223,0.15)]"
      />

      {/* Arrow (main triangle) */}
      <div
        className="absolute top-8 right-12 w-0 h-0 z-10
          border-l-[12px] border-r-[12px] border-b-[18px]
          border-transparent border-b-[var(--background)]"
      />

      {/* Dropdown */}
      <div className="w-[45rem] h-[20rem] absolute right-0 top-12 bg-[var(--background)] shadow-menu rounded-3xl p-8 ">
        <div className="flex flex-wrap gap-3 justify-center items-center w-full h-full">
            {ServicesMenuData.map((menuData, index) => (
                <Link key={index} href={menuData.url} className="flex items-start gap-2 w-[49%] p-4 cursor-pointer">
                    {menuData.icon}
                    <div className="flex flex-col">
                        <p className=" font-bold">{menuData.text}</p>
                        <p className="text-sm">{menuData.subText}</p>
                    </div>
                    <FaArrowRight size={18} className="brand-text-orange"/>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};


const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handleOpenServicesDropDown = () => {
      setIsServicesOpen((prev) => !prev);
    }

    return (
        <div className="fixed py-4 top-0 left-0 right-0 w-full z-50 bg-[var(--background)]">
            <div className="py-4 flex items-center justify-between max-w-7xl m-auto">
                <Link href={"/home"}>
                  <OutsouzedLogo className="w-56"/>
                </Link>
                
        
                <div className="flex items-center gap-9">
                    <Link className="text-[var(--color-gray)] font-cta" href="/home">Home</Link>
                     {/* Dropdown wrapper */}
                    <div className="relative">
                      <button
                        onClick={handleOpenServicesDropDown}
                        className={`font-cta flex items-center transition-colors cursor-pointer ${
                          isServicesOpen ? "text-[var(--color-black)]" : "text-[var(--color-gray)]"
                        }`}
                      >
                        Services
                        <MdKeyboardArrowDown size={22} />
                      </button>
                      {isServicesOpen && <ServicesMenu />}
                    </div>
                    <Link className="text-[var(--color-gray)] font-cta" href="/about">About</Link>
                    <WhiteButton 
                      text={"Contact Us"}
                      url={"/contact-us"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;