import FounderCard from "./founder-card";
import Michael from "@/assets/images/michael.webp";
import Liam from "@/assets/images/liam.webp";
import David from "@/assets/images/david.webp";
import Paul from "@/assets/images/paul.webp";

const founderData = [{
    name: "Michael Scott",
    pos: "CO- FOUNDER",
    descrp: "is a seasoned international professional with a unique blend of academic excellence and cross-sector experience.",
    img: Michael
}, {
    name: "Liam Cullen",
    pos: "CO- FOUNDER",
    descrp: "is a seasoned international leader with over 15 years of experience managing complex organizations across the UK, China, and the Middle East.",
    img: Liam
}, {
    name: "David Scott",
    pos: "CO- FOUNDER",
    descrp: "is a seasoned executive with over 15 years of experience in elite sport academy management and international community development across the UK, Australia, Papua New Guinea, and the Philippines.",
    img: David
}, {
    name: "Paul Saunders",
    pos: "CO- FOUNDER",
    descrp: "has over 9 years of experience in the BPO industry, having first moved to the Philippines in 2016 to establish an outsourced processing centre for his Australian visa services company.",
    img: Paul
}];

const FounderSection = () => {
    return (
        <div>
            <div className="max-w-7xl m-auto flex flex-col items-start gap-5
            xl:px-0 lg:px-20 md:px-20 max-md:px-5 max-md:gap-0">
                <h2 className="brand-text-orange font-extrabold text-5xl font-heading max-md:text-2xl">Meet Our Founders</h2>
                <div className="mt-5 flex flex-wrap gap-10 justify-center border-t-black border-t pt-5">
                    {founderData.map((data, index) => (
                        <FounderCard
                            img={data.img}
                            name={data.name}
                            pos={data.pos} 
                            descrp={data.descrp}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FounderSection;