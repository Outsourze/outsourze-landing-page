import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function Bookkeeper() {
    const bookkeeperData = {
        title: "Bookkeeper",
        subTitle: "Accurate, Reliable Financial Support — Without the Big Overhead",
        dscrpt: "Staying on top of your finances is critical — but hiring a full-time in-house bookkeeper can be costly. At Outsourze.com, our Philippines-based Bookkeepers help you manage your numbers with precision and professionalism. Whether you're a startup, agency, or growing business, we deliver the financial support you need, at a fraction of the local cost.",
        whatToDoHeader: "What a Bookkeeper Can Handle",
        whatTodos: [
            "Managing accounts payable and receivable", 
            "Reconciling bank and credit card transactions",
            "Processing invoices and payments",
            "Assisting with payroll preparation",
            "Generating basic financial reports (P&L, cash flow, balance sheet)",
            "Maintaining accurate records in Xero, QuickBooks, MYOB, or your preferred software",
            "Coordinating with your accountant or finance team"
        ],
        whyOutSourzeTitle: "Why Outsource Bookkeeping?",
        whyOutSourzeItems: [
            "Save up to 80-90% on financial admin costs",
            "Free up internal resources for higher-value financial strategy",
            "Ensure accuracy and timeliness in your books",
            "Scale support as your business grows"
        ],
        whyOutSourzeDscrpt: "Our Bookkeepers are trained in international accounting tools and standards. They work under your supervision or in collaboration with your finance partner, ensuring your books are always audit- and tax-ready.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 13, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 12, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 7, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 11, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 750, currency: "NZD" },
                "Mid Level": { cost: 1000, currency: "NZD" },
                "Advanced": { cost: 1500, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 690, currency: "AUD" },
                "Mid Level": { cost: 920, currency: "AUD" },
                "Advanced": { cost: 1350, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 390, currency: "GBP" },
                "Mid Level": { cost: 520, currency: "GBP" },
                "Advanced": { cost: 750, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 620, currency: "CAD" },
                "Mid Level": { cost: 800, currency: "CAD" },
                "Advanced": { cost: 1200, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 980, currency: "NZD" },
                "Mid Level": { cost: 1250, currency: "NZD" },
                "Advanced": { cost: 1700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 900, currency: "AUD" },
                "Mid Level": { cost: 1150, currency: "AUD" },
                "Advanced": { cost: 1550, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 500, currency: "GBP" },
                "Mid Level": { cost: 650, currency: "GBP" },
                "Advanced": { cost: 850, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 750, currency: "CAD" },
                "Mid Level": { cost: 970, currency: "CAD" },
                "Advanced": { cost: 1350, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7000 },
          outsourze: 750,
          estimatedSaving: 89,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 6000, highest: 7500 },
          outsourze: 690,
          estimatedSaving: 90
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2800, highest: 3500 },
          outsourze: 390,
          estimatedSaving: 89,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 620,
          estimatedSaving: 88,
        }],
        disclaimer: "Bookkeeping outsourcing is ideal for businesses that want accurate financials, better cash flow visibility, and full-time-quality work — without full-time costs."
    }

    return (
        <ServiceContext.Provider value={bookkeeperData}>
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
