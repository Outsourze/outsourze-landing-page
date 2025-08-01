import SpecificServiceContainer from "./service-specific-container";
import SpecificSectionHeader from "./services-specific-section-header";


const SpecificServicesSection = () => {
    return (
        <div className="max-w-7xl m-auto flex-col flex gap-10 pb-10">
            <SpecificSectionHeader  />
            <SpecificServiceContainer />
        </div>
    )
}

export default SpecificServicesSection;