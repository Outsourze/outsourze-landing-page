import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { ServicesMenuData } from "@/api/data";
import WhiteButton from "../ui/white-btn";

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

      {/* Dropdown + animation */}
      <motion.div
         key="content"
         initial={{ height: 0, opacity: 0 }}
         animate={{ height: "auto", opacity: 1 }}
         exit={{ height: 0, opacity: 0 }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
         className="overflow-hidden"
       >
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
      </motion.div>
    </div>
  );
};

const DesktopNav = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handleOpenServicesDropDown = () => {
      setIsServicesOpen((prev) => !prev);
    }
    return (
        <div className="flex items-center gap-9">
          <Link className="text-[var(--color-gray)] font-cta" href="/home">Home</Link>
           {/* Dropdown wrapper */}
          <div className="relative">
            <button
              onClick={handleOpenServicesDropDown}
              className={`duration-300 font-cta flex items-center transition-colors cursor-pointer ${
                isServicesOpen ? "text-[var(--color-black)]" : "text-[var(--color-gray)]"
              }`}
            >
              Services
              <MdKeyboardArrowDown size={22} />
            </button>
            <AnimatePresence initial={false}>
              {isServicesOpen && <ServicesMenu />}
            </AnimatePresence>
          </div>
          <Link className="text-[var(--color-gray)] font-cta" href="/about">About</Link>
          <WhiteButton 
            text={"Contact Us"}
            url={"/contact-us"}
          />
        </div>
    )
}

export default DesktopNav;