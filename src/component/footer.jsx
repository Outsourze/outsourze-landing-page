import Image from "next/image";
import Link from "next/link";
import { contactInfo, socialMedia } from "@/api/data";
import Button from "./ui/button";


const Footer = () => {
    return (
        <div className="brand-bg-offwhite py-4">
            <div className="py-4 max-w-7xl m-auto">
                <div className="footer-getstarted-banner-bg relative overflow-hidden rounded-4xl py-14 px-16 mb-15">
                  {/* Background image */}
                  <Image
                    className="absolute right-0 bottom-[-80%] z-0 brightness-150 blur-2xl"
                    src={require("@/assets/images/bubble-bg.png")}
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
                      style={"text-white text-sm gap-8 px-8 py-4"} 
                      text={"Get Started"} 
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="flex flex-col gap-5 max-w-[34rem]">
                        <Image 
                            className="w-56" 
                            src={require("@/assets/logo/Outsourze Logo.svg")} 
                            alt="Outsourze logo"
                        />
                        <p className="text-[15px]">Outsourze is a remote staffing and outsourcing solutions company based in the Philippines. We help businesses scale by providing skilled, cost-effective talent across customer support, sales, admin, marketing, and more. Our goal is to simplify outsourcing—so you can focus on what matters most.</p>
                        <div className="flex items-center gap-7">
                            {socialMedia.map((social, index) => (
                                <Link href={social.url}>
                                    <Image 
                                        key={index}
                                        className="w-10" 
                                        src={social.icon} 
                                        alt={social.alt}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[30rem]">
                        <h3 className="font-semibold text-[20px]">Contact</h3>
                        <div className="flex flex-col gap-3">
                            {contactInfo.map((info, index) => (
                                <div className="flex items-start gap-3">
                                    <Image 
                                        key={index}
                                        className="w-6" 
                                        src={info.icon} 
                                        alt={info.alt}
                                    />
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