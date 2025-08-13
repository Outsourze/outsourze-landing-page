import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function CustomerServiceRepresentative() {
    const csrData = {
        title: "Customer Service Representative (CSR)",
        subTitle: "Friendly, Effective, and Professional Customer Support — Without the High Costs",
        dscrpt: "Customer service is the frontline of your business, shaping customer satisfaction and loyalty. Our Philippines-based Customer Service Representatives provide courteous, knowledgeable, and timely support across multiple channels — ensuring your customers feel valued and heard while saving you significant local employment expenses.",
        whatToDoHeader: "What a Customer Service Rep Can Handle",
        whatTodos: [
            "Responding to customer inquiries via phone, email, or chat", 
            "Updating customer records and databases",
            "Handling order processing and tracking",
            "Escalating complex issues to specialized teams",
            "Resolving billing and payment issues",
            "Providing product or service information",
            "Managing returns, refunds, and exchanges"
        ],
        whyOutSourzeTitle: "Why Outsource Customer Service?",
        whyOutSourzeItems: [
            "Deliver 24/7 or extended support hours without the overhead",
            "Scale your team quickly during seasonal peaks",
            "Maintain consistent quality and customer satisfaction",
            "Save on salaries, equipment, and office infrastructure"
        ],
        whyOutSourzeDscrpt: "Outsourze.com offers experienced Customer Service Representatives trained to follow your protocols, use your CRM systems, and embody your brand values — all at a fraction of local costs.",
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
                "Entry Level": { cost: 900, currency: "NZD" },
                "Mid Level": { cost: 1200, currency: "NZD" },
                "Advanced": { cost: 1700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 850, currency: "AUD" },
                "Mid Level": { cost: 1100, currency: "AUD" },
                "Advanced": { cost: 1550, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 480, currency: "GBP" },
                "Mid Level": { cost: 650, currency: "GBP" },
                "Advanced": { cost: 900, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 750, currency: "CAD" },
                "Mid Level": { cost: 1000, currency: "CAD" },
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
                "Mid Level": { cost: 1400, currency: "NZD" },
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
                "Advanced": { cost: 1100, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 900, currency: "CAD" },
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
          localCost: { lowest: 4500, highest: 6000 },
          outsourze: 650,
          estimatedSaving: 89,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6200 },
          outsourze: 600,
          estimatedSaving: 90
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2200, highest: 2800 },
          outsourze: 350,
          estimatedSaving: 87,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 4000, highest: 5500 },
          outsourze: 550,
          estimatedSaving: 89,
        }],
        disclaimer: "Customer service outsourcing is perfect for businesses looking to deliver excellent support while controlling costs and scaling quickly."
    }

    return (
        <ServiceContext.Provider value={csrData}>
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
