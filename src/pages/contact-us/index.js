import BannerSection from "@/component/contact-us/contact-banner"
import ContactDetailSection from "@/component/contact-us/contact-detail"
import FaqSection from "@/component/contact-us/contact-faq"
import ContactFormSection from "@/component/contact-us/contact-form"
import SEO from "@/utility/useSeo"

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Outsourze | Book a Free Consultation Today"
        description="Get in touch with Outsourze to discuss your outsourcing needs. Fast response, tailored solutions, and expert support to help your business grow."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`}
      />
      <div className="flex flex-col
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* Contact section container */}
        <BannerSection />
        <ContactDetailSection />
        <ContactFormSection />
        <FaqSection />
      </div>
    </>
  )
}