import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";
import SpecificServiceCard from "./specific-service-card";
import { useMediaQuery } from "@/utility/useMediaQuery";

const SpecificServiceContainer = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const services = useContext(ServiceContext);

  // Determine max columns based on screen size
  let maxCols;
  if (isMobile) maxCols = 1;
  else if (isTablet) maxCols = 2;
  else maxCols = 3; // default for desktop

  const total = services.data.length;
  const lastRowStartIndex = Math.floor((total - 1) / maxCols) * maxCols;
  const lastRowCount = total - lastRowStartIndex;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 items-stretch w-full">
      {services.data.map((service, index) => {
        let colSpanClass = "";
        
        if (isMobile) {
          colSpanClass = "col-span-1"; // full width on mobile
        } 
        else if (isTablet) {
          // Default for tablet (2 columns)
          colSpanClass = "md:col-span-1"; // each takes half (1+1 = 2 columns)
          
          // Handle last row for tablet
          if (index >= lastRowStartIndex) {
            if (lastRowCount === 1) colSpanClass = "md:col-span-2"; // single box takes full width
          }
        } 
        else {
          // Default for desktop (3 columns)
          colSpanClass = "lg:col-span-2"; // default for 3 boxes (2+2+2 = 6 columns)
          
          // Handle last row for desktop
          if (index >= lastRowStartIndex) {
            if (lastRowCount === 1) colSpanClass = "lg:col-span-6"; // single box takes full width
            else if (lastRowCount === 2) colSpanClass = "lg:col-span-3"; // two boxes split 50/50
          }
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