import ContactDetailCard from "./contact-detail-card";

const ContactDetailData = [{
    title: "You can email us here",
    text: "hello@outsourze.com",
    url: "",
    subtitle: null
}, {
    title: "Book a Free Consultation",
    text: null,
    url: "",
    subtitle: null
}, {
    title: "Head Office",
    subtitle: "Outsourze Inc",
    text: "Knightsbridge Level 2, 392 B. Valdez Street, Poblacion, Makati,Metro Manila, Philippines, 1201",
    url: ""
}]


const ContactDetailSection = () => {
    return (
        <div className="max-w-7xl m-auto">
            <div className="flex gap-2 items-stretch">
                {ContactDetailData.map((data, index) => (
                    <ContactDetailCard 
                        key={index}
                        subtitle={data.subtitle}
                        text={data.text}
                        title={data.title}
                        url={data.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default ContactDetailSection;