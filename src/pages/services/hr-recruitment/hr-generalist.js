import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function HRGeneralist() {
    const hrGeneralistData = {
        title: "HR Generalist",
        subTitle: "Reliable, Day-to-Day HR Support — Without the Full-Time Cost",
        dscrpt: "Managing people and processes takes time — especially as your team grows. At Outsourze.com, our Philippines-based HR Generalists provide professional, day-to-day HR support that keeps your business compliant, your staff engaged, and your operations running smoothly — all while saving you up to 90% compared to local hires.",
        whatToDoHeader: "What an HR Generalist Can Handle",
        whatTodos: [
            "Drafting employment contracts and onboarding documents", 
            "Maintaining employee records and HRIS systems",
            "Managing timekeeping, leave, and attendance tracking",
            "Supporting payroll and benefits administration",
            "Assisting with recruitment coordination and job postings",
            "Conducting employee surveys and engagement tracking",
            "Helping with policy updates, compliance, and documentation"
        ],
        whyOutSourzeTitle: "Why Outsource HR Support?",
        whyOutSourzeItems: [
            "Get expert help without hiring a full HR department",
            "Reduce administrative burden on managers and founders",
            "Ensure HR compliance without expensive consultants",
            "Save on salaries, HR software licenses, and office costs"
        ],
        whyOutSourzeDscrpt: "Outsourze.com connects you with experienced HR professionals who can handle the operational side of HR while working seamlessly with your internal team or external advisors.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 12, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 11, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 6, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 10, currency: "CAD" },
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
                "Entry Level": { cost: 660, currency: "AUD" },
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
                "Advanced": { cost: 1600, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 870, currency: "AUD" },
                "Mid Level": { cost: 1100, currency: "AUD" },
                "Advanced": { cost: 1450, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 480, currency: "GBP" },
                "Mid Level": { cost: 620, currency: "GBP" },
                "Advanced": { cost: 820, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 790, currency: "CAD" },
                "Mid Level": { cost: 1000, currency: "CAD" },
                "Advanced": { cost: 1300, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 720,
          estimatedSaving: 89,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7000 },
          outsourze: 660,
          estimatedSaving: 90
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
        disclaimer: "Outsourcing HR support is perfect for small to mid-sized businesses that want professional HR coverage without the cost or complexity of a full in-house team."
    }

    return (
        <ServiceContext.Provider value={hrGeneralistData}>
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
