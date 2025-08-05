import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function ExecutiveAssistant() {
    const executiveAssistantData = {
        title: "Executive Assistant",
        subTitle: "Professional Executive Support — Without the Full-Time Local Cost",
        dscrpt: "Busy executives need reliable, skilled assistants to manage complex schedules, communications, and projects. At Outsourze.com, our Philippines-based Executive Assistants provide top-level administrative and strategic support — helping you stay organized and focused while saving on costly local hires.",
        whatToDoHeader: "What an Executive Assistant Can Handle",
        whatTodos: [
            "Managing complex calendars and appointments", 
            "Coordinating meetings, travel, and events",
            "Drafting correspondence and reports",
            "Handling confidential and sensitive information",
            "Liaising with internal teams and external stakeholders",
            "Project coordination and follow-up",
            "Supporting decision-making with research and briefings"
        ],
        whyOutSourzeTitle: "Why Outsource Executive Assistance?",
        whyOutSourzeItems: [
            "Access highly skilled, discreet professionals",
            "Scale support without the overhead of full-time local staff",
            "Increase executive productivity and time management",
            "Reduce recruitment, training, and operational costs"
        ],
        whyOutSourzeDscrpt: "Our Executive Assistants are trained to use your systems and act as a trusted extension of your leadership team.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 14, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 13, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 7, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 12, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 800, currency: "NZD" },
                "Mid Level": { cost: 1150, currency: "NZD" },
                "Advanced": { cost: 1700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 750, currency: "AUD" },
                "Mid Level": { cost: 1050, currency: "AUD" },
                "Advanced": { cost: 1550, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 420, currency: "GBP" },
                "Mid Level": { cost: 600, currency: "GBP" },
                "Advanced": { cost: 850, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 680, currency: "CAD" },
                "Mid Level": { cost: 950, currency: "CAD" },
                "Advanced": { cost: 1350, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1000, currency: "NZD" },
                "Mid Level": { cost: 1350, currency: "NZD" },
                "Advanced": { cost: 1900, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 900, currency: "AUD" },
                "Mid Level": { cost: 1250, currency: "AUD" },
                "Advanced": { cost: 1700, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 500, currency: "GBP" },
                "Mid Level": { cost: 720, currency: "GBP" },
                "Advanced": { cost: 1100, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 850, currency: "CAD" },
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
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 800,
          estimatedSaving: 87,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7000 },
          outsourze: 750,
          estimatedSaving: 86
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2500, highest: 3200 },
          outsourze: 420,
          estimatedSaving: 85,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 4500, highest: 6000 },
          outsourze: 680,
          estimatedSaving: 85,
        }],
        disclaimer: "Executive assistant outsourcing is ideal for busy leaders seeking reliable, efficient support without local salary burdens."
    }

    return (
        <ServiceContext.Provider value={executiveAssistantData}>
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
