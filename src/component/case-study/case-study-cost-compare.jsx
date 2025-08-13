
import SectionTitle from "../ui/section-title";
import { useState } from "react";

const caseStudyData = {
      "New Zealand": [
        { role: "Graphic Designer", local: 70000, outsourced: 20000, savings: "~70%" },
        { role: "Customer Support Rep (CSR)", local: 50000, outsourced: 15000, savings: "~70%" },
        { role: "Virtual Assistant", local: 45000, outsourced: 13000, savings: "~70%" },
        { role: "Bookkeeper", local: 60000, outsourced: 18000, savings: "~70%" }
      ],
      "Australia": [
        { role: "Graphic Designer", local: 65000, outsourced: 18500, savings: "~70%" },
        { role: "Customer Support Rep (CSR)", local: 46000, outsourced: 13000, savings: "~70%" },
        { role: "Virtual Assistant", local: 41000, outsourced: 12000, savings: "~70%" },
        { role: "Bookkeeper", local: 55000, outsourced: 16500, savings: "~70%" }
      ],
      "United Kingdom": [
        { role: "Graphic Designer", local: 35000, outsourced: 9500, savings: "~70%" },
        { role: "Customer Support Rep (CSR)", local: 28000, outsourced: 7800, savings: "~70%" },
        { role: "Virtual Assistant", local: 25000, outsourced: 7000, savings: "~70%" },
        { role: "Bookkeeper", local: 32000, outsourced: 9000, savings: "~70%" }
      ],
      "Canada": [
        { role: "Graphic Designer", local: 60000, outsourced: 17000, savings: "~71%" },
        { role: "Customer Support Rep (CSR)", local: 45000, outsourced: 13000, savings: "~69%" },
        { role: "Virtual Assistant", local: 40000, outsourced: 11500, savings: "~70%" },
        { role: "Bookkeeper", local: 50000, outsourced: 15000, savings: "~69%" }
      ]
    };

const currencyFormats = {
  "New Zealand": { prefix: 'NZD $', suffix: '/year' },
  "Australia": { prefix: 'AUD $', suffix: '/year' },
  "United Kingdom": { prefix: '£', suffix: '/year' },
  "Canada": { prefix: 'CAD $', suffix: '/year' },
};

const CostComparisonSection = () => {
    const [country, setCountry] = useState("New Zealand");
    
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col 
        xl:px-0 
        lg:px-20 lg:gap-6
        md:px-20 md:mt-8 md:gap-2
        max-md:px-5 max-md:py-5 max-md:gap-3">
            <SectionTitle 
                style={"!justify-between"}
                bannerTitle={"Cost Comparison"} 
                dscrpt={"See how much you can save by outsourcing top talent without compromising quality."}
            />
            <div className=" flex flex-col 
            lg:gap-8 lg:py-10
            md:gap-3 md:py-5
            max-md:gap-8 max-md:py-5">
              <div className="flex justify-evenly 
              xl:gap-32
              lg:gap-24
              md:gap-10
              max-md:gap-10
              max-sm:gap-3">
                {Object.keys(caseStudyData).map(c => (
                  <button 
                    className={`${country === c ? "brand-text-orange border-b-2 border-[var(--color-brand-orange)] font-semibold" : ""} lg:text-2xl md:text-xl max-md:text-base cursor-pointer`} 
                    key={c} 
                    onClick={() => setCountry(c)}
                  >{c}</button>
                ))}
              </div>
            
              <table className="w-full rounded-2xl table-fixed outline overflow-hidden">
                <thead className="brand-bg-orange">
                  <tr>
                    <th className="py-8 px-5 font-semibold text-left
                    lg:text-xl 
                    md:text-lg 
                    max-md:text-sm 
                    max-sm:text-xs">ROLE</th>
                    <th className="py-8 px-5 font-semibold text-center
                    lg:text-xl lg:leading-8 
                    md:text-lg md:leading-5
                    max-md:text-sm max-md:leading-4
                    max-sm:text-xs max-sm:leading-3">
                      <span className="inline-block text-left">
                        LOCAL HIRE <br />
                        <span className="text-base">(Approx.)</span>
                      </span>
                    </th>
                    <th className="py-8 px-5 font-semibold text-center
                    lg:text-xl lg:leading-8 
                    md:text-lg md:leading-5 
                    max-md:text-sm max-md:leading-4
                    max-sm:text-xs max-sm:leading-3">
                      <span className="inline-block text-left">
                        OUTSOURCED <br />
                        <span className="">Via OUTSOURZED</span>
                      </span>
                    </th>
                    <th className="py-8 px-5 font-semibold text-right
                    lg:text-xl lg:leading-8 
                    md:text-lg md:leading-5 
                    max-md:text-sm max-md:leading-4
                    max-sm:text-xs max-sm:leading-3">ESTIMATED SAVINGS</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudyData[country].map((row, i) => {
                      const { prefix, suffix } = currencyFormats[country] || {};

                      return (
                        <tr key={i} className="border-b">
                          <td className="py-8 px-5 font-semibold max-md:text-sm max-sm:text-xs">{row.role}</td>
                          <td className="py-8 px-5 text-center max-md:text-sm max-sm:text-xs">
                            {prefix}{row.local.toLocaleString()}{suffix}
                          </td>
                          <td className="py-8 px-5 text-center max-md:text-sm max-sm:text-xs">
                            {prefix}{row.outsourced.toLocaleString()}{suffix}
                          </td>
                          <td className="py-8 px-5 text-center max-md:text-sm max-sm:text-xs">{row.savings}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default CostComparisonSection;