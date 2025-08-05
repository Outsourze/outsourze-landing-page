import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function EmailSupportRepresentative() {
    const emailSupportData = {
        title: "Email Support Representative",
        subTitle: "Professional, Prompt, and Polished Email Support — Without the High Overhead",
        dscrpt: "Email remains a vital channel for customer service, especially for businesses that value detailed, trackable, and professional communication. At Outsourze.com, our Philippines-based Email Support Representatives ensure every customer interaction reflects your brand — with quick turnarounds and expert service, all at a fraction of local costs.",
        whatToDoHeader: "What an Email Support Rep Can Handle",
        whatTodos: [
            "Responding to customer inquiries and complaints", 
            "Providing product or service information",
            "Resolving account and billing issues",
            "Escalating technical or complex issues",
            "Handling order questions, returns, and exchanges",
            "Maintaining detailed records of interactions",
        ],
        whyOutSourzeTitle: "Why Outsource Email Support?",
        whyOutSourzeItems: [
            "Scale efficiently during peak periods",
            "Ensure response SLAs without expanding your in-house team",
            "Maintain 24/7 or weekend response coverage",
            "Save on salary, equipment, and office costs"
        ],
        whyOutSourzeDscrpt: "Outsourze.com provides skilled professionals trained to communicate clearly, follow templates, and use your systems — all under your direction and standards.",
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
        disclaimer: "Email support is ideal for businesses that want consistency, professionalism, and cost control — all in one channel."
    }

    return (
        <ServiceContext.Provider value={emailSupportData}>
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
