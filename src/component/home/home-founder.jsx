import FounderCard from "./founder-card";

const founderData = [{
    name: "Michael Scott",
    pos: "CO- FOUNDER",
    descrp: "is a seasoned international professional with a unique blend of academic excellence and cross-sector experience.",
    img: require("@/assets/images/michael.png")
}, {
    name: "Liam Cullen",
    pos: "CO- FOUNDER",
    descrp: "is a seasoned international leader with over 15 years of experience managing complex organizations across the UK, China, and the Middle East.",
    img: require("@/assets/images/liam.png")
}, {
    name: "David Scott",
    pos: "CO- FOUNDER",
    descrp: "is a seasoned executive with over 15 years of experience in elite sport academy management and international community development across the UK, Australia, Papua New Guinea, and the Philippines.",
    img: require("@/assets/images/david.png")
}, {
    name: "Paul Saunders",
    pos: "CO- FOUNDER",
    descrp: "has over 9 years of experience in the BPO industry, having first moved to the Philippines in 2016 to establish an outsourced processing centre for his Australian visa services company.",
    img: require("@/assets/images/paul.png")
}];

const FounderSection = () => {
    return (
        <div>
            <div className="max-w-7xl m-auto flex flex-col items-start gap-10">
                <h2 className="brand-text-orange font-extrabold text-5xl font-heading">Meet Our Founders</h2>
                <hr />
                <div className="mt-5 flex flex-wrap gap-10 justify-center">
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