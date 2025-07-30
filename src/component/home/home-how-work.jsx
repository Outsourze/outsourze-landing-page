// how to work section

const howItWorkData = [{
    number: "01",
    title: "We identify your needs",
    subTitle: "for example, if it's a VA, customer service team, or full operations support."
}, {
    number: "02",
    title: "We match you with top offshore talent ",
    subTitle: "all vetted and managed by us."
}, {
    number: "03",
    title: "You save time, money, and stress",
    subTitle: "while staying fully in control."
}]

const HowItWorkSection = () => {
    return (
            <div className="">
                <div className="max-w-7xl py-10 m-auto flex items-center gap-20 justify-between">
                    <div className="w-[30%] flex flex-col gap-8">
                        <h2 className="font-medium text-6xl">How It Works</h2>
                        <p>We keep outsourcing simple. First, we understand your needs—whether it's a virtual assistant, customer support, or full operations support. Then, we match you with top-tier offshore talent, fully vetted and managed by our team. With Outsourze, you save time, reduce costs, and stay in control while we handle the rest.</p>
                    </div>
                    <div className="w-[60%] flex flex-col gap-5">
                        {howItWorkData.map((data, index) => (
                            <div key={index} className="flex items-center gap-5">
                                <div className="brand-bg-orange rounded-2xl w-25 h-25 flex items-center justify-center overflow-hidden">
                                  <p className="text-[5rem] font-medium relative bottom-[-15px] font-jakarta text-transparent bg-gradient-to-b from-black to-[#ff9047] bg-clip-text tracking-[-0.01em]">
                                    {data.number}
                                  </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl">{data.title}</h3>
                                    <p className="">{data.subTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default HowItWorkSection;