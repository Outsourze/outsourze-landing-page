import FaqCard from "./faq-card";

const faqData = [{
    question: "What Services Can I Outsource?",
    answer: "If a task doesn’t require face-to-face interaction, chances are you can outsource it. Think: customer support, digital marketing, bookkeeping, social media management, content writing, data entry, graphic design, and more."
}, {
    question: "What is Outsourcing?",
    answer: "Outsourcing is the practice of partnering with professionals outside your company to handle tasks that would traditionally be done in-house. Instead of hiring an employee yourself, athird-party provider—like us—manages the recruitment, onboarding, and oversight of skilled offshore staff for you. The result? High-quality work at a significantly lower cost."
}, {
    question: "Will I Lose Control of My Business If I Outsource?",
    answer: "Not at all. In fact, outsourcing gives you more control. You decide which tasks to delegate and retain oversight without being bogged down in the day-to-day. With the right partner, you stay in the driver’s seat while freeing up valuable time and resources."
}, {
    question: "Can Small or Medium-Sized Businesses Outsource?",
    answer: "Absolutely. Outsourcing isn’t just for big corporations—it’s a game-changer for small and medium-sized businesses. Whether you need a virtual assistant, a graphic designer, a bookkeeper, or a social media manager, there’s a flexible, scalable solution for your business."
}, {
    question: "Is All the Work Done Online? How Do We Share Projects?",
    answer: "Yes—most of our work is web-based. Communication, file sharing, project updates—it all happens securely online. You’ll have easy access to your team, just like you would with in-house employees."
}, {
    question: "How Do You Keep My Information Confidential?",
    answer: "Your confidentiality is our priority. Every project begins with a signed Non-Disclosure Agreement (NDA), ensuring your data and intellectual property are protected. We’ve built robust security systems to safeguard your information, and we never share your work without explicit permission."
}, {
    question: "How Can Outsourcing Help My Business?",
    answer: "Outsourcing isn't just about saving money—it’s about working smarter. By offloading time-consuming or repetitive tasks to your offshore team, your local staff can focus on what matters most: growing your business. It’s a win-win for productivity and morale."
}, {
    question: "How Do I Communicate With My Remote Team?",
    answer: "We make communication simple and seamless. Depending on your preferences, your team can connect with you via email, Slack, Zoom, Teams, or your existing systems. We ensure your team is accessible and responsive during your business hours, wherever possible"
}, {
    question: "Will There Be a Language or Cultural Barrier?",
    answer: "We carefully vet our talent to ensure they have strong communication skills and a professional attitude. Most of our team members are fluent in English and are trained to adapt to your preferred communication style, brand tone, and workflows."
}, {
    question: "Can I Scale My Outsourced Team Up or Down?",
    answer: "Yes, flexibility is one of the biggest advantages of outsourcing. Need to scale fast? We can help. Want to start small and grow gradually? That works too. We’ll build a solution that fits your pace and priorities."
}, {
    question: "What’s the First Step If I Want to Start Outsourcing?",
    answer: "Just get in touch. We’ll discuss your needs, identify the roles you’d like to outsource, and recommend a tailored solution. From there, we handle recruitment, onboarding, and setup—so you can focus on running your business."
}]

const FaqSection = () => {
    return (
        <div className="max-w-7xl m-auto">
            <div className="bg-black px-8 py-12 font-semibold rounded-[1.7rem] flex flex-col gap-10">
                <div className="flex flex-col gap-5 w-3/5">
                    <h2 className="text-5xl font-jakarta brand-text-orange">Outsourze  FAQs</h2>
                    <p className="font-jakarta text-white font-medium text-[1rem]">As a trusted remote staffing partner, we’re committed to providing clear answers and helpful guidance to make outsourcing simple, smart, and successful for every client.</p>
                </div>
                <div className="flex flex-wrap gap-6">
                    {faqData.map((data, index) => (
                        <FaqCard 
                            key={index}
                            answer={data.answer}
                            question={data.question}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqSection;