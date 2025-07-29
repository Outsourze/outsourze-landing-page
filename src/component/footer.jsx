import Image from "next/image";
import Link from "next/link";

const socialMedia = [{
    url: "",
    alt: "facebook",
    icon: require("@/assets/icon/facebook.png")
}, {
    url: "",
    alt: "instagram",
    icon: require("@/assets/icon/instagram.png")
}, {
    url: "",
    alt: "tiktok",
    icon: require("@/assets/icon/tiktok.png")
}, {
    url: "",
    alt: "linkedin",
    icon: require("@/assets/icon/linkedin.png")
}]

const contactInfo = [{
    alt: "call",
    icon: require("@/assets/icon/call.png"),
    text: "PH 12345678 | NZ 12345678 | AU 12345678UK | UK 12345678 | CAN 12345678"
}, {
    alt: "email",
    icon: require("@/assets/icon/email.png"),
    text: "hello@outsourze.com"
}, {
    alt: "location",
    icon: require("@/assets/icon/location.png"),
    text: "Outsourze Inc Knightsbridge Level 2, 392 B. Valdez Street, Poblacion, Makati,Metro Manila, Philippines, 1201"
}, {
    alt: "globe",
    icon: require("@/assets/icon/globe.png"),
    text: "www.outsourze.com"
}]

const Footer = () => {
    return (
        <div className="bg-[var(--off-white)] py-4">
            <div className="py-4 max-w-7xl m-auto">
                <div className="flex items-center justify-between ">
                    <div className="flex flex-col gap-5 max-w-xl">
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
                    <div className="flex flex-col gap-4 max-w-lg">
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