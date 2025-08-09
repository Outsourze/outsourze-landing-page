import BrandLabel from "./brand-label";

const SectionTitle = ({
    bannerTitle,
    dscrpt,
    style
}) => {
    return (
      <div className={`${style} flex items-center justify-start gap-10 max-md:gap-3 max-md:justify-between`}>
          <BrandLabel 
            style={
              "py-4 px-7 font-semibold xl:text-[1.8rem] lg:text-2xl md:text-lg max-md:text-sm max-md:px-4 max-md:py-2"
            } text={bannerTitle}/>
          <p className="font-semibold 
          lg:text-xl md:text-sm max-md:text-[10px]">
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