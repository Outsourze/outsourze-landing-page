import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function DataEntrySpecialist() {
    const dataEntrySpecialistData = {
        title: "Data Entry Specialist",
        subTitle: "Fast, Accurate Data Entry — Without the Local Overhead",
        dscrpt: "Accurate data entry keeps your business organized and efficient. At Outsourze.com, our Philippines-based Data Entry Specialists provide reliable, timely input of data into your systems — all while saving you significant costs compared to local hires.",
        whatToDoHeader: "What a Data Entry Specialist Can Handle",
        whatTodos: [
            "Entering data from various sources into databases or CRM systems", 
            "Updating and maintaining records with attention to detail",
            "Verifying data accuracy and completeness",
            "Formatting and organizing spreadsheets and reports",
            "Customer follow-ups and basic support",
            "Assisting with data cleansing and quality checks",
            "Supporting administrative and operational teams"
        ],
        whyOutSourzeTitle: "Why Outsource Data Entry?",
        whyOutSourzeItems: [
            "Improve data accuracy and speed",
            "Free up internal teams for higher-value tasks",
            "Scale data entry support flexibly and cost-effectively",
            "Reduce recruitment, training, and equipment costs"
        ],
        whyOutSourzeDscrpt: "Our Data Entry Specialists are trained in MS Excel, Google Sheets, CRM platforms, and data management best practices to ensure accuracy and efficiency.",
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
        disclaimer: "Data entry outsourcing is perfect for businesses wanting reliable, accurate data processing support without the cost of local hires."
    }

    return (
        <ServiceContext.Provider value={dataEntrySpecialistData}>
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
    )
}
