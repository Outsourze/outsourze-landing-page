import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function FinancialAnalyst() {
    const financialAnalystData = {
        title: "Financial Analyst",
        subTitle: "Insightful Financial Analysis — Without the Corporate Price Tag",
        dscrpt: "Data-driven decision making is key to business success. At Outsourze.com, our Philippines-based Financial Analysts provide expert analysis, forecasting, and reporting — helping you make smarter strategic decisions while saving significantly on local hiring costs.",
        whatToDoHeader: "What a Financial Analyst Can Handle",
        whatTodos: [
            "Preparing financial reports and dashboards", 
            "Budgeting, forecasting, and variance analysis",
            "Cash flow management and scenario modeling",
            "Analyzing business performance metrics",
            "Supporting strategic planning and investment decisions",
            "Conducting market and competitor financial research",
            "Collaborating with finance, sales, and executive teams"
        ],
        whyOutSourzeTitle: "Why Outsource Financial Analysis?",
        whyOutSourzeItems: [
            "Access skilled analysts without expanding your headcount",
            "Get timely, accurate insights to guide growth",
            "Reduce costs compared to hiring locally or using consultants",
            "Scale analytical support as your business evolves"
        ],
        whyOutSourzeDscrpt: "Outsourze.com connects you with professionals trained in Excel, Power BI, Tableau, and financial software — delivering analysis tailored to your needs.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 16, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 14, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 9, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 13, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 900, currency: "NZD" },
                "Mid Level": { cost: 1300, currency: "NZD" },
                "Advanced": { cost: 1900, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 820, currency: "AUD" },
                "Mid Level": { cost: 1150, currency: "AUD" },
                "Advanced": { cost: 1700, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 500, currency: "GBP" },
                "Mid Level": { cost: 750, currency: "GBP" },
                "Advanced": { cost: 1100, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 720, currency: "CAD" },
                "Mid Level": { cost: 1050, currency: "CAD" },
                "Advanced": { cost: 1500, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1200, currency: "NZD" },
                "Mid Level": { cost: 1600, currency: "NZD" },
                "Advanced": { cost: 2200, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1100, currency: "AUD" },
                "Mid Level": { cost: 1450, currency: "AUD" },
                "Advanced": { cost: 2000, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 650, currency: "GBP" },
                "Mid Level": { cost: 900, currency: "GBP" },
                "Advanced": { cost: 1300, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 970, currency: "CAD" },
                "Mid Level": { cost: 1300, currency: "CAD" },
                "Advanced": { cost: 1800, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 7000, highest: 9000 },
          outsourze: 900,
          estimatedSaving: 87,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 7500, highest: 9500 },
          outsourze: 820,
          estimatedSaving: 89
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 3500, highest: 4500 },
          outsourze: 500,
          estimatedSaving: 86,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 6000, highest: 7500 },
          outsourze: 720,
          estimatedSaving: 88,
        }],
        disclaimer: "Financial analyst outsourcing is perfect for companies seeking detailed insights and forecasts without the cost of senior local hires or expensive consultants."
    }

    return (
        <ServiceContext.Provider value={financialAnalystData}>
            <div className="flex flex-col gap-20">
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
