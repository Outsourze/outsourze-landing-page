import BannerSection from "@/component/contact-us/contact-banner"
import ContactDetailSection from "@/component/contact-us/contact-detail"
import FaqSection from "@/component/contact-us/contact-faq"
import ContactFormSection from "@/component/contact-us/contact-form"

export default function Contact() {
  return (
    <div className="flex flex-col
    lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
      {/* Contact section container */}
      <BannerSection />
      <ContactDetailSection />
      <ContactFormSection />
      <FaqSection />
    </div>
  )
}