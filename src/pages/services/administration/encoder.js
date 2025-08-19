import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function Encoder() {
    const encoderData = {
        title: "Encoder",
        subTitle: "Accurate and Efficient Data Encoding — Without the Local Costs",
        dscrpt: "Timely and precise data encoding is vital for smooth business operations. At Outsourze.com, our Philippines-based Encoders specialize in entering and updating information into your systems quickly and error-free — helping you save significantly compared to local hires.",
        whatToDoHeader: "What an Encoder Can Handle",
        whatTodos: [
            "Entering and updating data into databases, spreadsheets, or software systems", 
            "Verifying data accuracy and completeness",
            "Organizing and formatting data for reporting or analysis",
            "Processing transactions, invoices, or records as required",
            "Supporting administrative or operational teams with data tasks",
        ],
        whyOutSourzeTitle: "Why Outsource Encoding?",
        whyOutSourzeItems: [
            "Improve data accuracy and processing speed",
            "Free internal teams to focus on core activities",
            "Scale encoding support flexibly and cost-effectively",
            "Lower recruitment, training, and infrastructure expenses"
        ],
        whyOutSourzeDscrpt: "Our Encoders are proficient with MS Excel, Google Sheets, and various data management platforms, ensuring reliable and consistent service.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 8, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 7, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 4, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 6, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 500, currency: "NZD" },
                "Mid Level": { cost: 650, currency: "NZD" },
                "Advanced": { cost: 900, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 460, currency: "AUD" },
                "Mid Level": { cost: 600, currency: "AUD" },
                "Advanced": { cost: 820, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 250, currency: "GBP" },
                "Mid Level": { cost: 350, currency: "GBP" },
                "Advanced": { cost: 450, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 420, currency: "CAD" },
                "Mid Level": { cost: 580, currency: "CAD" },
                "Advanced": { cost: 720, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 650, currency: "NZD" },
                "Mid Level": { cost: 850, currency: "NZD" },
                "Advanced": { cost: 1100, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 600, currency: "AUD" },
                "Mid Level": { cost: 750, currency: "AUD" },
                "Advanced": { cost: 1000, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 350, currency: "GBP" },
                "Mid Level": { cost: 450, currency: "GBP" },
                "Advanced": { cost: 650, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 580, currency: "CAD" },
                "Mid Level": { cost: 720, currency: "CAD" },
                "Advanced": { cost: 900, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 3000, highest: 4000 },
          outsourze: 500,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 3500, highest: 4500 },
          outsourze: 460,
          estimatedSaving: 87
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 1500, highest: 2000 },
          outsourze: 250,
          estimatedSaving: 87,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 2500, highest: 3500 },
          outsourze: 420,
          estimatedSaving: 85,
        }],
        disclaimer: "Encoding outsourcing is ideal for businesses seeking reliable, timely, and accurate data input support — without the cost of local hires."
    }

    return (
      <>  
        <SEO
          title="Outsourced Encoding Services | Outsourze"
          description="Get accurate document and data encoding services from Outsourze's remote professionals. Fast and reliable, so you can focus on growing your business."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/administration/encoder`}
        />
        <ServiceContext.Provider value={encoderData}>
            <div className="flex w-full flex-col 
            lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
                <IndividualRoleBanner />
                <IndividualRoleShowcase />
                <IndividualRoleWhyUs />
                <IndividualRolePrices />
                <IndividualRoleCostComparison />
                <IndividualRoleDisclaimer />
            </div>
        </ServiceContext.Provider>
      </>
    )
}
