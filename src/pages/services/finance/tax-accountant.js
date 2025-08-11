import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function TaxAccountant() {
    const taxAccountantData = {
        title: "Tax Accountant",
        subTitle: "Expert Tax Compliance and Strategy — Without the Premium Price Tag",
        dscrpt: "Managing tax obligations is a critical (and often costly) part of running a business. At Outsourze.com, our Philippines-based Tax Accountants offer expert support across compliance, reporting, and planning — helping you stay compliant, minimize tax liabilities, and avoid costly errors. All the professionalism you expect locally, at a significantly lower cost.",
        whatToDoHeader: "What a Tax Accountant Can Handle",
        whatTodos: [
            "Preparing and filing tax returns (personal, business, GST/VAT, etc.)", 
            "Ensuring compliance with local and international tax regulations",
            "Reconciling tax accounts and calculating liabilities",
            "Preparing BAS, PAYE, or other statutory reports (depending on region)",
            "Assisting with tax planning and strategy",
            "Coordinating with your local accountant or CFO",
            "Responding to tax authority inquiries or audit support requests"
        ],
        whyOutSourzeTitle: "Why Outsource Tax Accounting?",
        whyOutSourzeItems: [
            "Access qualified accountants with global tax experience",
            "Scale support during tax season or key filing periods",
            "Save significantly on salary, software, and compliance overhead",
            "Ensure accuracy and avoid late penalties or errors"
        ],
        whyOutSourzeDscrpt: "Outsourze.com connects you with highly trained professionals familiar with NZ, AU, UK, and Canadian tax systems. Whether you need full-cycle tax support or overflow assistance, we tailor the solution to fit your compliance needs.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 15, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 14, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 8, currency: "GBP" },
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
                "Entry Level": { cost: 850, currency: "NZD" },
                "Mid Level": { cost: 1200, currency: "NZD" },
                "Advanced": { cost: 1800, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 790, currency: "AUD" },
                "Mid Level": { cost: 1100, currency: "AUD" },
                "Advanced": { cost: 1600, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 450, currency: "GBP" },
                "Mid Level": { cost: 650, currency: "GBP" },
                "Advanced": { cost: 900, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 700, currency: "CAD" },
                "Mid Level": { cost: 950, currency: "CAD" },
                "Advanced": { cost: 1400, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1100, currency: "NZD" },
                "Mid Level": { cost: 1450, currency: "NZD" },
                "Advanced": { cost: 2000, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1000, currency: "AUD" },
                "Mid Level": { cost: 1300, currency: "AUD" },
                "Advanced": { cost: 1800, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 580, currency: "GBP" },
                "Mid Level": { cost: 750, currency: "GBP" },
                "Advanced": { cost: 1000, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 880, currency: "CAD" },
                "Mid Level": { cost: 1150, currency: "CAD" },
                "Advanced": { cost: 1600, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 6500, highest: 8500 },
          outsourze: 850,
          estimatedSaving: 90,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 7000, highest: 9000 },
          outsourze: 790,
          estimatedSaving: 91
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 3500, highest: 4500 },
          outsourze: 450,
          estimatedSaving: 89,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 6000, highest: 8000 },
          outsourze: 700,
          estimatedSaving: 88,
        }],
        disclaimer: "Outsourcing tax accounting is ideal for firms and businesses who want certified expertise, compliance confidence, and year-round tax support — without the cost of a full-time hire."
    }

    return (
        <ServiceContext.Provider value={taxAccountantData}>
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
