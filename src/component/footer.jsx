import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import Facebook from "@/assets/icon/social-media/Facebook.svg";
import Intagram from "@/assets/icon/social-media/Instagram.svg";
import Tiktok from "@/assets/icon/social-media/Tiktok.svg";
import LinkedIn from "@/assets/icon/social-media/LinkedIn.svg";

import CallIcon from "@/assets/icon/contact/Phone v1.svg";
import EmailIcon from "@/assets/icon/contact/Mail v1.svg";
import LocationIcon from "@/assets/icon/contact/Location v1.svg";
import WebsiteIcon from "@/assets/icon/contact/Website v1.svg";

import bubblePng from "@/assets/images/bubble-bg.png";
import OutsouzedLogo from "@/assets/logo/Outsourze Logo.svg";

// footer
export const socialMedia = [{
    url: "https://www.facebook.com/outsourze/",
    alt: "facebook",
    icon: <Facebook className="brand-text-orange lg:w-10 md:w-8 max-md:w-6"/>
}, {
    url: "https://www.instagram.com/outsourzeglobal",
    alt: "instagram",
    icon: <Intagram className="brand-text-orange lg:w-10 md:w-8 max-md:w-6"/>
}, {
    url: "www.tiktok.com/@outsourzeglobal",
    alt: "tiktok",
    icon: <Tiktok className="brand-text-orange lg:w-10 md:w-8 max-md:w-6"/>
}, {
    url: "",
    alt: "linkedin",
    icon: <LinkedIn className="brand-text-orange lg:w-10 md:w-8 max-md:w-6"/>
}]

export const contactInfo = [{
    alt: "call",
    icon: <CallIcon className="lg:w-6 md:w-4 max-md:w-4"/>,
    text: "PH +63 968 372 4410 | AU +61 468 928 549\nUK +44 77 6063 0126"
}, {
    alt: "email",
    icon: <EmailIcon className="lg:w-6 md:w-4 max-md:w-4"/>,
    text: "hello@outsourze.com"
}, {
    alt: "location",
    icon: <LocationIcon className="lg:w-6 md:w-4 max-md:w-4"/>,
    text: "Outsourze Inc Knightsbridge Level 2, 392 B. Valdez Street, Poblacion, Makati,Metro Manila, Philippines, 1201"
}, {
    alt: "globe",
    icon: <WebsiteIcon className="lg:w-6 md:w-4 max-md:w-4"/>,
    text: "www.outsourze.com"
}]

const Footer = () => {
    return (
        <div className="brand-bg-offwhite py-4">
            <div className="py-4 max-w-7xl m-auto 
            xl:px-0 lg:px-20 md:px-20 max-md:px-5 max-md:relative max-md:border-t border-gray-400">
                <div className="footer-getstarted-banner-bg relative overflow-hidden rounded-4xl py-14 
                lg:mb-15 lg:px-16 md:mb-5 md:px-8 max-md:mb-5 max-md:px-5 max-md:py-8 max-md:rounded-2xl">
                  {/* Background image */}
                  <Image
                    className="absolute right-0 bottom-[-80%] z-0 brightness-150 blur-2xl"
                    src={bubblePng}
                    alt="bubble"
                    style={{ transform: "rotate(34.48deg)" }}
                  />
                    {/* Blue overlay */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20 z-0 mix-blend-multiply"></div>
                
                  {/* Foreground content */}
                  <div className="relative z-10 flex items-center justify-between w-full
                  max-sm:gap-5">
                    <h2 className="text-white font-semibold  font-jakarta
                    xl:text-[4.6rem] lg:text-5xl md:text-4xl max-md:text-3xl max-sm:text-xl">
                      Ready to work with us?
                    </h2>
                    
                    <Button 
                      url={"/contact-us"}
                      style={"text-white text-sm gap-8 px-8 py-4 max-md:px-3 max-md:py-2 max-sm:gap-0 max-sm:whitespace-nowrap"} 
                      text={"Get Started"} 
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between 
                xl:gap-0 lg:gap-10 md:gap-10 max-md:gap-5 max-md:flex-col">
                    <div className="flex flex-col gap-5
                    xl:max-w-xl lg:max-w-lg">
                        <Link href={"/"}>
                          <OutsouzedLogo className="lg:w-52 md:w-36 max-md:w-36"/>
                        </Link>
               
                        <p className="xl:text-[15px] md:text-xs max-md:text-xs max-md:border-b-gray-300 max-md:border-b max-md:pb-2">Outsourze is a remote staffing and outsourcing solutions company based in the Philippines. We help businesses scale by providing skilled, cost-effective talent across customer support, sales, admin, marketing, and more. Our goal is to simplify outsourcing—so you can focus on what matters most.</p>
                        <div className="flex items-center 
                        lg:gap-7 md:gap-5 max-md:absolute max-md:bottom-0 max-md:right-5 max-md:gap-2">
                            {socialMedia.map((social, index) => (
                                <Link key={index} href={social.url}>
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[30rem]">
                        <h3 className="font-semibold brand-text-orange
                        lg:text-[20px] md:text-sm max-md:text-sm">Contact</h3>
                        <div className="flex flex-col gap-3 max-md:gap-2">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div>
                                        {info.icon}
                                    </div>
                                    <p className=" font-medium
                                    lg:text-[15px] md:text-[8px] max-md:text-[10px] whitespace-pre-line">{info.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;