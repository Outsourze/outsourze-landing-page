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
    icon: <Facebook className="brand-text-orange w-10"/>
}, {
    url: "https://www.instagram.com/outsourzeglobal",
    alt: "instagram",
    icon: <Intagram className="brand-text-orange w-10"/>
}, {
    url: "www.tiktok.com/@outsourzeglobal",
    alt: "tiktok",
    icon: <Tiktok className="brand-text-orange w-10"/>
}, {
    url: "",
    alt: "linkedin",
    icon: <LinkedIn className="brand-text-orange w-10"/>
}]

export const contactInfo = [{
    alt: "call",
    icon: <CallIcon className="w-6"/>,
    text: "PH 12345678 | NZ 12345678 | AU 12345678UK | UK 12345678 | CAN 12345678"
}, {
    alt: "email",
    icon: <EmailIcon className="w-6"/>,
    text: "hello@outsourze.com"
}, {
    alt: "location",
    icon: <LocationIcon className="w-6"/>,
    text: "Outsourze Inc Knightsbridge Level 2, 392 B. Valdez Street, Poblacion, Makati,Metro Manila, Philippines, 1201"
}, {
    alt: "globe",
    icon: <WebsiteIcon className="w-6"/>,
    text: "www.outsourze.com"
}]

const Footer = () => {
    return (
        <div className="brand-bg-offwhite py-4">
            <div className="py-4 max-w-7xl m-auto">
                <div className="footer-getstarted-banner-bg relative overflow-hidden rounded-4xl py-14 px-16 mb-15">
                  {/* Background image */}
                  <Image
                    className="absolute right-0 bottom-[-80%] z-0 brightness-150 blur-2xl"
                    src={bubblePng}
                    alt="Background"
                    style={{ transform: "rotate(34.48deg)" }}
                  />
                    {/* Blue overlay */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20 z-0 mix-blend-multiply"></div>
                
                  {/* Foreground content */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <h2 className="text-white font-semibold text-[4.6rem] font-jakarta">
                      Ready to work with us?
                    </h2>
                    
                    <Button 
                      url={"/contact-us"}
                      style={"text-white text-sm gap-8 px-8 py-4"} 
                      text={"Get Started"} 
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="flex flex-col gap-5 max-w-[34rem]">
                        <OutsouzedLogo className="w-56"/>
               
                        <p className="text-[15px]">Outsourze is a remote staffing and outsourcing solutions company based in the Philippines. We help businesses scale by providing skilled, cost-effective talent across customer support, sales, admin, marketing, and more. Our goal is to simplify outsourcing—so you can focus on what matters most.</p>
                        <div className="flex items-center gap-7">
          
                            {socialMedia.map((social, index) => (
                                <Link href={social.url}>
                                    {social.icon}
                                </Link>
                            ))}
             
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[30rem]">
                        <h3 className="font-semibold text-[20px]">Contact</h3>
                        <div className="flex flex-col gap-3">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div>
                                        {info.icon}
                                    </div>
                                    <p className="text-[15px] font-medium">{info.text}</p>
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