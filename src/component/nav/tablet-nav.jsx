import { useState } from "react";
import Link from "next/link";
import WhiteButton from "../ui/white-btn";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { ServicesMenuData } from "@/api/data";

const TabletNav = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  const handleOpenServicesDropDown = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuNavOpen(false);
    setIsServicesOpen(false);
  }

  return (
    <div className="flex items-center gap-5 relative">
      {/* Contact button */}
      <WhiteButton 
        onClick={handleMenuClose} 
        text={"Contact Us"} 
        url={"/contact-us"} 
      />  
      {/* Menu toggle + dropdown */}
      <div className="relative flex items-center">
        <button
          onClick={() => {
            setIsMenuNavOpen((prev) => !prev);
            setIsServicesOpen(false);
          }}
          className="p-1"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuNavOpen}
        >
          {isMenuNavOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>

        <AnimatePresence>
          {isMenuNavOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute right-0 top-full mt-4 flex flex-col gap-2 bg-white p-4 rounded-xl shadow-md z-50 min-w-[300px]"
            >
              <Link
                onClick={handleMenuClose} 
                className="font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                href="/home"
              >
                Home
              </Link>

              <button
                onClick={handleOpenServicesDropDown}
                className="duration-300 font-cta font-medium flex items-center justify-between cursor-pointer w-full px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
              >
                Services
                <MdKeyboardArrowDown
                  size={22}
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex flex-col gap-1 ml-2"
                  >
                    {ServicesMenuData.map((data, index) => (
                      <Link
                        onClick={handleMenuClose}
                        key={index}
                        href={data.url}
                        className="block font-cta px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                      >
                        {data.text}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                onClick={handleMenuClose} 
                className="font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                href="/about"
              >
                About
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabletNav;
