import SpecificServiceContainer from "./service-specific-container";
import SpecificSectionHeader from "./services-specific-section-header";


const SpecificServicesSection = () => {
    return (
        <div className="max-w-7xl w-full m-auto flex-col flex pb-10
        xl:px-0 
        lg:px-20 lg:gap-10 
        md:px-20 md:mt-8 md:gap-6
        max-md:px-5 max-md:py-5 max-md:gap-4">
            <SpecificSectionHeader  />
            <SpecificServiceContainer />
        </div>
    )
}

export default SpecificServicesSection;