import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const ServicesMenuData = [{
    url: "",
    icon: require("@/assets/icon/customer-support.png"),
    text: "Customer Support",
    subText: "Support that cares"
}, {
    url: "",
    icon: require("@/assets/icon/sales-lead.png"),
    text: "Sale & Lead Generation",
    subText: "Sales that convert"
}, {
    url: "",
    icon: require("@/assets/icon/hr-recruitment.png"),
    text: "HR Recruitment",
    subText: "Hiring made easy"
}, {
    url: "",
    icon: require("@/assets/icon/admin.png"),
    text: "Administration",
    subText: "Operations run smoothly"
}, {
    url: "",
    icon: require("@/assets/icon/finance-accounting.png"),
    text: "Finance & Accounting",
    subText: "Number done right"
}, {
    url: "",
    icon: require("@/assets/icon/marketing.png"),
    text: "Marketing & Creative",
    subText: "Creativity that sells"
}]

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
            {ServicesMenuData.map((menuData) => (
                <div className="flex items-start gap-2 w-[49%] p-4 cursor-pointer">
                    <Image 
                        className="w-10 brand-bg-orange"
                        src={menuData.icon}
                    />
                    <div className="flex flex-col">
                        <p className=" font-bold">{menuData.text}</p>
                        <p className="text-sm">{menuData.subText}</p>
                    </div>
                    <FaArrowRight size={18} className="brand-text-orange"/>
                </div>
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
        <div className="sticky py-4 max-w-7xl m-auto">
            <div className="py-4 flex items-center justify-between">
                <Image 
                    className="w-56" 
                    src={require("@/assets/logo/Outsourze Logo.svg")} 
                    alt="Outsourze logo"
                />
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
                    <Link 
                        className="font-cta py-3 px-4 border border-[var(--border-black)] rounded-[50px] text-[var(--primary-text-color)]"
                        href="/contact-us"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;