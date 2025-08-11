import ContactDetailCard from "./contact-detail-card";

const ContactDetailData = [{
    title: "You can email us here",
    text: "hello@outsourze.com",
    url: "",
    subtitle: null
}, {
    title: "Book a Free Consultation",
    text: null,
    url: "https://calendly.com/paul-outsourze/30min",
    subtitle: null
}, {
    title: "Head Office",
    subtitle: "Outsourze Inc",
    text: "Knightsbridge Level 2, 392 B. Valdez Street, Poblacion, Makati,Metro Manila, Philippines, 1201",
    url: ""
}]


const ContactDetailSection = () => {
    return (
        <div className="max-w-7xl w-full m-auto
        xl:px-0
        lg:px-20
        md:px-20
        max-md:px-5">
            <div className="flex gap-2 items-stretch
            lg:flex-nowrap lg:justify-start
            md:flex-wrap md:justify-between
            max-md:flex-wrap max-md:justify-start">
                {ContactDetailData.map((data, index) => (
                    <ContactDetailCard 
                        key={index}
                        subtitle={data.subtitle}
                        text={data.text}
                        title={data.title}
                        url={data.url}
                        isFullWidth={index === 2}
                    />
                ))}
            </div>
        </div>
    )
}

export default ContactDetailSection;