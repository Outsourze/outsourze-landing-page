import BrandLabel from "./brand-label";

const SectionTitle = ({
    bannerTitle,
    dscrpt
}) => {
    return (
        <div className="flex items-center justify-start gap-10">
            <BrandLabel style={"text-[2.10rem] py-5 px-7 font-semibold"} text={bannerTitle}/>
            <p className="font-semibold">
              {dscrpt.split('<br/>').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < dscrpt.split('<br/>').length - 1 && <br />}
                </span>
              ))}
            </p>
        </div>
    )
}

export default SectionTitle;