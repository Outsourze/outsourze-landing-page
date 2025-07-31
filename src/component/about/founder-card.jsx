import Image from "next/image";

const FounderCard = ({
    name,
    descrp,
    pos,
    img,
    style,
}) => {
    return (
        <div className={`${style} h-[23rem] flex justify-between rounded-xl border border-[#e6e6e6]`}>
            <div className="h-full w-[26%] overflow-hidden rounded-xl">
                <Image 
                    className="w-auto object-cover object-top"
                    src={img} 
                />
            </div>
            <div className="flex flex-col w-[74%] items-start justify-center gap-3 px-15">
                <div className="flex flex-col">
                    <h3 className="font-extrabold text-5xl font-heading">{name}</h3>
                    <h4 className="brand-text-orange font-extrabold text-2xl">{pos}</h4>
                </div>
                {descrp.split('\n').map((para, idx) => (
                  <p key={idx} className="mb-1 text-sm">{para.trim()}</p>
                ))}
            </div>
        </div>
    )
}


export default FounderCard;