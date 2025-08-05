import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function VirtualAssistant() {
    const virtualAssistantData = {
        title: "Virtual Assistant",
        subTitle: "Your Reliable Remote Support — Without the Local Overhead",
        dscrpt: "Virtual assistants keep your business running smoothly by handling daily administrative tasks efficiently and professionally. At Outsourze.com, our Philippines-based Virtual Assistants provide flexible support tailored to your needs — all while saving you significant costs compared to local hires.",
        whatToDoHeader: "What a Virtual Assistant Can Handle",
        whatTodos: [
            "Managing emails and calendars", 
            "Scheduling meetings and appointments",
            "Data entry and document preparation",
            "Travel arrangements and itinerary planning",
            "Customer follow-ups and basic support",
            "Research and report generation",
            "Coordinating with teams and vendors"
        ],
        whyOutSourzeTitle: "Why Outsource Virtual Assistance?",
        whyOutSourzeItems: [
            "Free up your time to focus on core business activities",
            "Access skilled multitaskers without recruitment hassle",
            "Scale support flexibly based on workload",
            "Save on salary, equipment, and office costs"
        ],
        whyOutSourzeDscrpt: "Our Virtual Assistants are trained to work with your preferred tools (G Suite, Microsoft Office, CRM platforms, etc.) and follow your processes — acting as an extension of your team.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 9, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 8, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 5, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 7, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 550, currency: "NZD" },
                "Mid Level": { cost: 750, currency: "NZD" },
                "Advanced": { cost: 1100, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 500, currency: "AUD" },
                "Mid Level": { cost: 690, currency: "AUD" },
                "Advanced": { cost: 1000, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 270, currency: "GBP" },
                "Mid Level": { cost: 380, currency: "GBP" },
                "Advanced": { cost: 550, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 460, currency: "CAD" },
                "Mid Level": { cost: 620, currency: "CAD" },
                "Advanced": { cost: 900, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 700, currency: "NZD" },
                "Mid Level": { cost: 900, currency: "NZD" },
                "Advanced": { cost: 1300, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 650, currency: "AUD" },
                "Mid Level": { cost: 820, currency: "AUD" },
                "Advanced": { cost: 1200, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 350, currency: "GBP" },
                "Mid Level": { cost: 450, currency: "GBP" },
                "Advanced": { cost: 650, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 580, currency: "CAD" },
                "Mid Level": { cost: 720, currency: "CAD" },
                "Advanced": { cost: 1050, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 3500, highest: 4500 },
          outsourze: 550,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 4000, highest: 5000 },
          outsourze: 500,
          estimatedSaving: 88
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 1800, highest: 2500 },
          outsourze: 270,
          estimatedSaving: 87,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 3000, highest: 4000 },
          outsourze: 460,
          estimatedSaving: 85,
        }],
        disclaimer: "Virtual assistant outsourcing is perfect for entrepreneurs and businesses wanting efficient, professional admin support without the cost and complexity of local hires."
    }

    return (
        <ServiceContext.Provider value={virtualAssistantData}>
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
