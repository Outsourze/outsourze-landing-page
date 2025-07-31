import BannerSection from "@/component/contact-us/contact-banner"
import ContactDetailSection from "@/component/contact-us/contact-detail"
import FaqSection from "@/component/contact-us/contact-faq"
import ContactFormSection from "@/component/contact-us/contact-form"

export default function Contact() {
  return (
    <div className="flex flex-col gap-20">
      {/* Contact section container */}
      <BannerSection />
      <ContactDetailSection />
      <ContactFormSection />
      <FaqSection />
    </div>
  )
}