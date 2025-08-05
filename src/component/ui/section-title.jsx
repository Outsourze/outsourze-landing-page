import BrandLabel from "./brand-label";

const SectionTitle = ({
    bannerTitle,
    dscrpt,
    style
}) => {
    return (
      <div className={`${style} flex items-center justify-start gap-10`}>
          <BrandLabel style={"text-[1.8rem] py-4 px-7 font-semibold"} text={bannerTitle}/>
          <p className="font-semibold text-xl">
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