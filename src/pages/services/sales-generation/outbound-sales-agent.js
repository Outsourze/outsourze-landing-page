import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function OutboundSalesAgent() {
    const outboundSalesAgentData = {
        title: "Outbound Sales Agent",
        subTitle: "Proactive Sales Outreach — Maximize Revenue Without Local Hiring Costs",
        dscrpt: "Generating new business through outbound calls requires persistence, skill, and a customer-first approach. At Outsourze.com, our Philippines-based Outbound Sales Agents proactively engage prospects, qualify leads, and close deals — helping you expand your customer base while saving on expensive local salaries.",
        whatToDoHeader: "What an Outbound Sales Agent Can Handle",
        whatTodos: [
            "Conducting outbound calls to cold and warm leads", 
            "Qualifying prospects based on your criteria",
            "Presenting your products or services persuasively",
            "Handling objections and negotiating terms",
            "Booking appointments or closing sales",
            "Updating CRM and maintaining accurate call records",
            "Collaborating with sales teams for smooth handoffs",
        ],
        whyOutSourzeTitle: "Why Outsource Outbound Sales?",
        whyOutSourzeItems: [
            "Scale your sales outreach rapidly without increasing overhead",
            "Access trained sales pros experienced in various industries",
            "Reduce recruitment and onboarding costs",
            "Focus your internal team on closing and account management"
        ],
        whyOutSourzeDscrpt: "Our agents are trained to represent your brand professionally and use your sales processes and tools — ensuring consistent and effective sales conversations.",
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
                "Entry Level": { cost: 720, currency: "NZD" },
                "Mid Level": { cost: 950, currency: "NZD" },
                "Advanced": { cost: 1400, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 690, currency: "AUD" },
                "Mid Level": { cost: 870, currency: "AUD" },
                "Advanced": { cost: 1250, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 360, currency: "GBP" },
                "Mid Level": { cost: 480, currency: "GBP" },
                "Advanced": { cost: 700, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 600, currency: "CAD" },
                "Mid Level": { cost: 790, currency: "CAD" },
                "Advanced": { cost: 1150, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 950, currency: "NZD" },
                "Mid Level": { cost: 1200, currency: "NZD" },
                "Advanced": { cost: 1700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 870, currency: "AUD" },
                "Mid Level": { cost: 1100, currency: "AUD" },
                "Advanced": { cost: 1550, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 480, currency: "GBP" },
                "Mid Level": { cost: 620, currency: "GBP" },
                "Advanced": { cost: 850, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 790, currency: "CAD" },
                "Mid Level": { cost: 1000, currency: "CAD" },
                "Advanced": { cost: 1350, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 4500, highest: 6000 },
          outsourze: 720,
          estimatedSaving: 87,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 690,
          estimatedSaving: 89
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2500, highest: 3200 },
          outsourze: 360,
          estimatedSaving: 86,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 4500, highest: 6000 },
          outsourze: 600,
          estimatedSaving: 87,
        }],
        disclaimer: "Outbound sales outsourcing is ideal for companies seeking to boost lead generation and revenue growth cost-effectively, without local recruitment challenges."
    }   

    return (
      <>
        <SEO
          title="Outsourced Outbound Sales Agents | Outsourze"
          description="Reach new markets through Outsourze's outbound sales agents. Professional prospecting and outreach to generate actionable leads."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/sales-generation/outbound-sales-agent`}
        />
        <ServiceContext.Provider value={outboundSalesAgentData}>
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
