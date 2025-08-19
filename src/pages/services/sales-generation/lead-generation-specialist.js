import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function LeadGenerationSpecialist() {
    const leadGenerationSpecialistData = {
        title: "Lead Generation Specialist",
        subTitle: "Fuel Your Sales Pipeline — Without the High Local Costs",
        dscrpt: "Consistent, qualified leads are the lifeblood of sales success. At Outsourze.com, our Philippines-based Lead Generation Specialists help you identify, research, and connect with your ideal prospects — delivering a steady flow of potential customers at a fraction of local hiring costs.",
        whatToDoHeader: "What a Lead Generation Specialist Can Handle",
        whatTodos: [
            "Researching target markets and ideal customer profiles", 
            "Finding and verifying contact information (emails, phone numbers)",
            "Managing CRM data and updating prospect lists",
            "Conducting outreach via cold email or LinkedIn (optional)",
            "Scheduling appointments or demos for sales teams",
            "Supporting campaign tracking and reporting",
        ],
        whyOutSourzeTitle: "Why Outsource Lead Generation?",
        whyOutSourzeItems: [
            "Scale lead generation efforts quickly without expanding your team",
            "Improve sales efficiency with qualified, pre-screened prospects",
            "Save on recruitment, salaries, and training costs",
            "Free up your sales reps to focus on closing deals"
        ],
        whyOutSourzeDscrpt: "Outsourze.com provides trained lead generation professionals experienced in tools like LinkedIn Sales Navigator, ZoomInfo, Hunter.io, and CRMs such as Salesforce, HubSpot, or Pipedrive.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 10, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 9, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 5, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 8, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 600, currency: "NZD" },
                "Mid Level": { cost: 800, currency: "NZD" },
                "Advanced": { cost: 1200, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 550, currency: "AUD" },
                "Mid Level": { cost: 730, currency: "AUD" },
                "Advanced": { cost: 1100, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 300, currency: "GBP" },
                "Mid Level": { cost: 400, currency: "GBP" },
                "Advanced": { cost: 600, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 500, currency: "CAD" },
                "Mid Level": { cost: 670, currency: "CAD" },
                "Advanced": { cost: 1000, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 800, currency: "NZD" },
                "Mid Level": { cost: 1000, currency: "NZD" },
                "Advanced": { cost: 1400, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 730, currency: "AUD" },
                "Mid Level": { cost: 920, currency: "AUD" },
                "Advanced": { cost: 1280, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 400, currency: "GBP" },
                "Mid Level": { cost: 520, currency: "GBP" },
                "Advanced": { cost: 700, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 670, currency: "CAD" },
                "Mid Level": { cost: 850, currency: "CAD" },
                "Advanced": { cost: 1150, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 4000, highest: 5000 },
          outsourze: 600,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 4500, highest: 5500 },
          outsourze: 550,
          estimatedSaving: 88
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2000, highest: 2500 },
          outsourze: 300,
          estimatedSaving: 85,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 3500, highest: 4500 },
          outsourze: 500,
          estimatedSaving: 85,
        }],
        disclaimer: "Lead generation outsourcing is ideal for sales teams looking to ramp up pipeline growth without the cost or hassle of local hires."
    }   

    return (
      <>
        <SEO
          title="Lead Generation Outsourcing Specialist | Outsourze"
          description="Scale your sales pipeline with outsourced lead generation specialists from Outsourze. Drive qualified leads affordably and consistently."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/sales-generation/lead-generation-specialist`}
        />
        <ServiceContext.Provider value={leadGenerationSpecialistData}>
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
