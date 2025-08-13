import BrandLabel from "../ui/brand-label";
import SectionTitle from "../ui/section-title";
import FounderCard from "./founder-card";
import Michael from "@/assets/images/michael.png";
import Liam from "@/assets/images/liam.png";
import David from "@/assets/images/david.png";
import Paul from "@/assets/images/paul.png";

const FounderSection = () => {
    const founderData = [{
        img: Michael,
        name: "Michael Scott",
        pos: "CO- FOUNDER",
        descrp: "Is a seasoned international professional with a unique blend of academic excellence and cross-sector experience. He holds a degree in Politics, Philosophy, and Economics from the University of Oxford, a Master’s in International Oil Management from the University of Dundee, and a Master’s in International Affairs from King’s College London. He is currently a PhD candidate in International Relations at the University of Sydney, where his research focuses on grand strategy and great power competition. \n Michael began his career in finance, working on transaction deals across Southeast Asia and developing expertise in cross-border investment, deal structuring, and strategic analysis. For the past eight years, he has worked in international education across Asia, leading initiatives that span innovation, operations, and global engagement. \n Bringing together rigorous academic training and practical leadership experience across finance, energy, and education, Michael offers a global perspective and a strategic, results-driven approach to every project."
    }, {
        img: Liam,
        name: "Liam Cullen",
        pos: "CO- FOUNDER",
        descrp: "Is a seasoned international leader with over 15 years of experience managing complex organizations across the UK, China, and the Middle East. His expertise lies in strategic planning, operational efficiency, and data-driven decision-making, honed through a career leading high-performing teams in dynamic, multicultural environments. \n He has led large-scale transformation projects including digital system integrations, multi-site platform unification, and performance improvement initiatives. With a strong focus on aligning people, processes, and goals, Liam builds scalable structures, develops internal capability, and drives measurable outcomes across diverse teams. \n Liam brings clear vision, operational rigour, and the ability to lead through complexity—delivering lasting impact in both emerging and established markets."
    }, {
        img: David,
        name: "David Scott",
        pos: "CO- FOUNDER",
        descrp: "Is a seasoned executive with over 15 years of experience in elite sport academy management and international community development across the UK, Australia, Papua New Guinea, and the Philippines. He has a strong track record of working alongside multinational companies to design, fund, and deliver high-impact programs that support high-performance athlete development and broader organizational objectives. David specializes in building strategic partnerships that align corporate goals with operational execution, managing complex stakeholder relationships, and driving measurable outcomes. His deep understanding of international operations and cross-sector collaboration brings valuable insight to the outsourcing industry, particularly in strengthening strategic business operations across diverse markets."
    }, {
        img: Paul,
        name: "Paul Saunders",
        pos: "CO- FOUNDER",
        descrp: "Has over 9 years of experience in the BPO industry, having first moved to the Philippines in 2016 to establish an outsourced processing centre for his Australian visa services company. Since then, he has worked with both multinational corporations and fast-growing start-ups across New Zealand, Australia, the UK, and the Philippines — bringing with him a wealth of international experience and a sharp understanding of diverse business landscapes. Having spent nearly a decade living in the Philippines, Paul has developed a deep knowledge of the local market and what it takes to build and manage high-performing offshore teams that deliver real value to clients "
    }]

    return (
        <div className="flex flex-col gap-20 items-start max-w-7xl m-auto
        xl:px-0 xl:gap-20 
        lg:px-20 lg:gap-10 lg:py-10
        md:px-20 md:gap-5 md:py-0
        max-md:px-5 max-md:py-5 max-md:gap-5 ">
            <SectionTitle 
                bannerTitle={"Our Founders"}
                dscrpt={"Flexible outsourcing solutions tailored to your business goals from startups to global teams."}
            />
            <div className="flex flex-col gap-5 w-full">
                {founderData.map((data, index) => (
                    <FounderCard 
                        key={index}
                        img={data.img}
                        name={data.name}
                        pos={data.pos}
                        descrp={data.descrp}
                    />
                ))}
            </div>
        </div>
    )
}

export default FounderSection;