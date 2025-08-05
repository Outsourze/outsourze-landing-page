import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function Telemarketer() {
    const telemarketerDa = {
        title: "Telemarketer",
        subTitle: "Effective Outbound Calling — Boost Sales & Engagement Without Local Hiring Costs",
        dscrpt: "Telemarketing requires skilled communication, persistence, and the ability to engage prospects professionally. At Outsourze.com, our Philippines-based Telemarketers conduct targeted outbound calls to promote your products or services, generate leads, and support your sales funnel — all at a fraction of local expenses.",
        whatToDoHeader: "What a Telemarketer Can Handle",
        whatTodos: [
            "Making outbound calls to prospects and existing customers", 
            "Promoting products, services, or events",
            "Gathering customer feedback and survey responses",
            "Qualifying leads and scheduling appointments",
            "Managing call scripts and objection handling",
            "Maintaining accurate records and CRM updates",
        ],
        whyOutSourzeTitle: "Why Outsource Telemarketing?",
        whyOutSourzeItems: [
            "Quickly scale outbound calling campaigns",
            "Access trained professionals with excellent phone skills",
            "Reduce recruitment and operational costs",
            "Focus your internal teams on closing and strategy"
        ],
        whyOutSourzeDscrpt: "Outsourze.com telemarketers are trained to follow your scripts, represent your brand professionally, and use your CRM or calling platforms effectively.",
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
          localCost: { lowest: 4500, highest: 5500 },
          outsourze: 650,
          estimatedSaving: 88,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6000 },
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
          localCost: { lowest: 4000, highest: 5000 },
          outsourze: 550,
          estimatedSaving: 89,
        }],
        disclaimer: "Telemarketing outsourcing is great for businesses wanting professional, high-volume outbound calling support without the costs of local hires."
    }   

    return (
        <ServiceContext.Provider value={telemarketerDa}>
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
