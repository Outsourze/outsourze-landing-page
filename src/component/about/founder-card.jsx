import Image from "next/image";

const FounderCard = ({
    name,
    descrp,
    pos,
    img,
    style,
}) => {
    return (
        <div className={`${style}  flex justify-between rounded-xl border border-[#e6e6e6] 
        xl:h-[23rem]
        lg:h-auto lg:items-center
        md:auto md:items-start md:relative
        max-md:flex-col max-md:items-center max-md:py-2 
        `}>
            <div className="w-[26%] overflow-hidden rounded-xl
            lg:h-full lg:mb-0
            md:h-52 md:mb-24
            max-md:w-2/5 ">
                <Image 
                    alt="founded-img"
                    className="w-auto object-cover object-top"
                    src={img} 
                />
            </div>
            <div className="flex flex-col items-start justify-center gap-3 
            lg:py-0 
            md:py-5 md:px-15 md:w-[74%] 
            max-md:py-5 max-md:px-5 max-md:w-full max-md:items-center max-md:text-center">
                <div className="flex flex-col
                lg:static
                md:absolute md:left-3 md:bottom-5">
                    <h3 className="font-extrabold font-heading
                    xl:text-5xl lg:text-4xl md:text-2xl max-md:text-2xl">{name}</h3>
                    <h4 className="brand-text-orange font-extrabold 
                    xl:text-2xl lg:text-xl md:text-lg max-md:text-sm">{pos}</h4>
                </div>
                {descrp.split('\n').map((para, idx) => (
                  <p key={idx} className="mb-1 
                  xl:leading-5
                  lg:text-sm lg:leading-4
                  md:text-xs md:leading-3
                  max-md:text-xs max-md:font-semibold">{para.trim()}</p>
                ))}
            </div>
        </div>
    )
}


export default FounderCard;