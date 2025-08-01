
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
        <div className="max-w-7xl m-auto flex flex-col gap-6">
            <SectionTitle 
                style={"!justify-between"}
                bannerTitle={"Cost Comparison"} 
                dscrpt={"See how much you can save by outsourcing top talent without compromising quality."}
            />
            <div className="py-10 flex flex-col gap-8">
              <div className="flex justify-evenly gap-32">
                {Object.keys(caseStudyData).map(c => (
                  <button 
                    className={`${country === c ? "brand-text-orange border-b-2 border-[var(--color-brand-orange)] font-semibold" : ""} text-2xl cursor-pointer`} 
                    key={c} 
                    onClick={() => setCountry(c)}
                  >{c}</button>
                ))}
              </div>
            
              <table className="w-full rounded-2xl table-fixed outline overflow-hidden">
                <thead className="brand-bg-orange">
                  <tr>
                    <th className="py-8 px-5 font-semibold text-xl text-left">ROLE</th>
                    <th className="py-8 px-5 font-semibold text-xl text-center">
                      <span className="inline-block text-left">
                        LOCAL HIRE <br />
                        <span className="text-base">(Approx.)</span>
                      </span>
                    </th>
                    <th className="py-8 px-5 font-semibold text-xl text-center">
                      <span className="inline-block text-left">
                        OUTSOURCED <br />
                        <span className="">Via OUTSOURZED</span>
                      </span>
                    </th>
                    <th className="py-8 px-5 font-semibold text-xl text-right">ESTIMATED SAVINGS</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudyData[country].map((row, i) => {
                      const { prefix, suffix } = currencyFormats[country] || {};

                      return (
                        <tr key={i} className="border-b">
                          <td className="py-8 px-5 font-semibold">{row.role}</td>
                          <td className="py-8 px-5 text-center">
                            {prefix}{row.local.toLocaleString()}{suffix}
                          </td>
                          <td className="py-8 px-5 text-center">
                            {prefix}{row.outsourced.toLocaleString()}{suffix}
                          </td>
                          <td className="py-8 px-5 text-center">{row.savings}</td>
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