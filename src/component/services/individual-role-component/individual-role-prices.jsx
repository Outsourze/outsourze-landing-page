import { useState } from "react";
import { useContext } from "react";
import { ServiceContext } from "@/context/services/services-utils";

const controllerData = ["Hourly Freelance Based", "Monthly Dedicated Staff - Working From Home", "Monthly Dedicated Staff - Office Based"];
const currencySymbols = { NZD: "$", AUD: "$", GBP: "£", CAD: "$" };

const IndividualRolePrices = () => {
    const services = useContext(ServiceContext);
    const [activePriceTab, setActivePriceTab] = useState(0);

    const handleNav = (index) => {
        setActivePriceTab(index)
    }

    const activeData = services.priceComparison[activePriceTab];

    return (
       <div className="max-w-7xl w-full m-auto flex flex-col
        xl:px-0 
        lg:px-20
        md:px-20 md:mt-8 
        max-md:px-5 max-md:py-5">
            <div className="flex flex-col items-start w-full
            md:gap-5
            max-md:gap-3">
                {/* header | controller of the table */}
                <h3 className="font-heading font-semibold 
                lg:text-4xl lg:mb-5
                md:text-2xl md:mb-0
                max-md:text-lg max-md:mb-0">Prices</h3>
                <ul className="flex items-center justify-start bg-black text-white rounded-full
                lg:gap-10 md:gap-0 max-md:gap-0">
                    {controllerData.map((data, index) => (
                        <li 
                            onClick={() => handleNav(index)}
                            key={index} 
                            className={`${activePriceTab === index && "brand-bg-orange rounded-full"} py-5 cursor-pointer 
                            lg:text-base lg:px-6  
                            md:text-xs md:px-4
                            max-md:text-[0.6rem] max-md:px-2
                            max-sm:text-[0.5rem]`}
                        >
                            {data}
                        </li>
                    ))}
                </ul>

                {/* body | content */}
                   <div>
                    <table className="w-full rounded-2xl table-fixed outline overflow-hidden bg-black text-white">
                      <thead className="">
                        <tr className="border-b">
                          {activeData.columns.map((col, index) => (
                            <th
                              key={index}
                              className={`font-semibold ${index === 0 ? "text-left" : "text-center"}
                              lg:py-8 lg:px-16 lg:text-xl
                              md:py-5 md:px-10 md:text-base
                              max-md:py-4 max-md:px-6 max-md:text-sm
                              max-sm:py-4 max-sm:px-6 max-sm:text-xs`}
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeData.data.map((row, i) => (
                            <tr key={i} className="border-b">
                              {activeData.columns.map((col, j) => (
                                <td
                                  key={j}
                                  className={`font-medium ${j === 0 ? "text-left" : "text-center"}
                                  lg:py-8 lg:px-16 lg:text-base
                                  md:py-5 md:px-10 md:text-sm
                                  max-md:py-4 max-md:px-6 max-md:text-xs
                                  max-sm:text-[0.6rem]`}
                                >
                                  {typeof row[col] === "object" ? (
                                    <span className="brand-bg-orange px-3 py-1 rounded-lg inline-block text-black">
                                      {currencySymbols[row[col].currency]}
                                      {row[col].cost}
                                      {activePriceTab === 0 ? "/hour" : ""}
                                    </span>
                                  ) : (
                                    row[col]
                                  )}
                                </td>
                              ))}
                            </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default IndividualRolePrices;