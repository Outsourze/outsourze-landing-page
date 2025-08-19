import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function SalesSupportRepresentative() {
    const helpDeskSupportData = {
        title: "Sales Support Representative",
        subTitle: "Scalable, Skilled Sales Support — Without the In-House Costs",
        dscrpt: "Behind every successful sales team is strong operational support. Our Philippines-based Sales Support Representatives help your team close more deals by taking care of the admin, follow-ups, and coordination — so your salespeople can focus on selling. With Outsourze.com, you get reliable support staff without the high costs of local hires.",
        whatToDoHeader: "What a Sales Support Rep Can Handle",
        whatTodos: [
            "Managing CRM data entry and updates", 
            "Scheduling sales calls and meetings",
            "Preparing proposals, quotes, and follow-up emails",
            "Assisting with lead generation and qualification",
            "Coordinating with internal teams (logistics, finance, etc.)",
            "Handling post-sale customer onboarding and documentation",
            "Monitoring pipeline activity and reporting"
        ],
        whyOutSourzeTitle: "Why Outsource Sales Support?",
        whyOutSourzeItems: [
            "Keep your sales team focused on high-value activities",
            "Speed up your sales cycle with better coordination",
            "Support multiple reps without growing your local headcount",
            "Save on salaries, software licenses, and office space"
        ],
        whyOutSourzeDscrpt: "At Outsourze.com, our trained Sales Support Reps integrate into your systems and workflows, helping your team stay productive, organized, and results-driven.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 11, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 10, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 6, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 9, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 650, currency: "NZD" },
                "Mid Level": { cost: 900, currency: "NZD" },
                "Advanced": { cost: 1300, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 600, currency: "AUD" },
                "Mid Level": { cost: 820, currency: "AUD" },
                "Advanced": { cost: 1150, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 350, currency: "GBP" },
                "Mid Level": { cost: 450, currency: "GBP" },
                "Advanced": { cost: 650, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 550, currency: "CAD" },
                "Mid Level": { cost: 720, currency: "CAD" },
                "Advanced": { cost: 1050, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 900, currency: "NZD" },
                "Mid Level": { cost: 1100, currency: "NZD" },
                "Advanced": { cost: 1500, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 820, currency: "AUD" },
                "Mid Level": { cost: 1000, currency: "AUD" },
                "Advanced": { cost: 1350, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 450, currency: "GBP" },
                "Mid Level": { cost: 550, currency: "GBP" },
                "Advanced": { cost: 800, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 720, currency: "CAD" },
                "Mid Level": { cost: 900, currency: "CAD" },
                "Advanced": { cost: 1250, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 4500, highest: 6500 },
          outsourze: 650,
          estimatedSaving: 90,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 600,
          estimatedSaving: 89
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2500, highest: 3200 },
          outsourze: 350,
          estimatedSaving: 88,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 4000, highest: 5500 },
          outsourze: 550,
          estimatedSaving: 88,
        }],
        disclaimer: "Sales Support outsourcing is ideal for businesses looking to streamline operations, boost team efficiency, and grow sales without growing overhead."
    }

    return (
      <>
        <SEO
          title="Outsourced Sales Support Representatives | Outsourze"
          description="Strengthen your sales process with Outsourze's remote sales support representatives. From lead nurturing to client assistance, we help boost conversions."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/customer-support/sales-support-representative`}
        />
        <ServiceContext.Provider value={helpDeskSupportData}>
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
