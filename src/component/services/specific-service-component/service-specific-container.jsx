import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import SpecificServiceCard from "./specific-service-card";

const SpecificServiceContainer = () => {
  const services = useContext(ServiceContext);

  const maxCols = 3;
  const total = services.data.length;
  const lastRowStartIndex = Math.floor((total - 1) / maxCols) * maxCols;
  const lastRowCount = total - lastRowStartIndex;

  return (
    <div className="grid grid-cols-6 gap-5 items-stretch w-full">
      {services.data.map((service, index) => {
        let colSpanClass = "col-span-2"; // default for 3 boxes (2+2+2 = 6 columns)

        if (index >= lastRowStartIndex) {
          if (lastRowCount === 1) colSpanClass = "col-span-6"; // single box takes full width
          else if (lastRowCount === 2) colSpanClass = "col-span-3"; // two boxes split 50/50
        }

        return (
          <div key={index} className={`${colSpanClass} flex`}>
            <SpecificServiceCard
              title={service.title}
              dscrpt={service.dscrpt}
              logo={service.logo}
              url={service.url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SpecificServiceContainer;
