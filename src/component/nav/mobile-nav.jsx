import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { ServicesMenuData } from "@/pages/api/data";

const MobileNav = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  const handleOpenServicesDropDown = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const handleMenuNavOpen = () => {
    setIsMenuNavOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  const handleMenuClose = () => {
    setIsMenuNavOpen(false);
    setIsServicesOpen(false);
  }

  return (
    <nav aria-label="Mobile navigation" className="flex items-center gap-5">
      {/* Menu Toggle */}
      <button
        onClick={handleMenuNavOpen}
        aria-expanded={isMenuNavOpen}
        aria-controls="mobile-menu"
        className="p-1"
        aria-label={isMenuNavOpen ? "Close menu" : "Open menu"}
      >
        {isMenuNavOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>

      {/* Full menu */}
      <AnimatePresence>
        {isMenuNavOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 top-full mt-0 w-full bg-white shadow-md rounded-b-xl z-50 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/"
                  className="block font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li>
                <button
                  onClick={handleOpenServicesDropDown}
                  aria-expanded={isServicesOpen}
                  aria-controls="services-submenu"
                  className="w-full text-left font-cta font-medium flex items-center justify-between px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
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
                    <motion.ul
                      id="services-submenu"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="ml-4 flex flex-col gap-1 overflow-hidden"
                    >
                      {ServicesMenuData.map((data, index) => (
                        <li key={index} onClick={handleMenuClose}>
                          <Link
                            href={data.url}
                            className="block font-cta px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                          >
                            {data.text}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/about"
                  className="block font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/contact-us"
                  className="block font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
