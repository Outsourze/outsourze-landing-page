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
       <div className="max-w-7xl m-auto flex flex-col">
            <div className="flex flex-col items-start gap-5 w-full">
                {/* header | controller of the table */}
                <h3 className="font-heading font-semibold text-4xl mb-5">Prices</h3>
                <ul className="flex items-center justify-start bg-black text-white gap-10 rounded-full">
                    {controllerData.map((data, index) => (
                        <li 
                            onClick={() => handleNav(index)}
                            key={index} 
                            className={`${activePriceTab === index && "brand-bg-orange rounded-full"} py-5 px-6 cursor-pointer`}
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
                              className={`py-8 px-5 font-semibold text-xl ${index === 0 ? "text-left" : "text-center"}`}
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
                                  className={`py-6 px-5 ${j === 0 ? "text-left" : "text-center"}`}
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