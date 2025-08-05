import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function RecruitmentSpecialist() {
    const recruitmentSpecialistData = {
        title: "Recruitment Specialist",
        subTitle: "Streamlined Hiring Support — Without the Overhead",
        dscrpt: "Finding the right talent takes time, coordination, and attention to detail. At Outsourze.com, our Philippines-based Recruitment Specialists support your hiring process from sourcing to onboarding — helping you scale faster and smarter while keeping costs low. Whether you're a recruitment agency or a growing business, we provide the extra hands you need to build your team.",
        whatToDoHeader: "What a Recruitment Specialist Can Handle",
        whatTodos: [
            "Sourcing candidates via job boards, LinkedIn, and databases", 
            "Screening CVs and shortlisting applicants",
            "Coordinating interviews and sending confirmations",
            "Managing applicant tracking systems (ATS)",
            "Conducting initial candidate outreach and follow-ups",
            "Assisting with job ads and posting schedules",
            "Supporting onboarding and compliance processes"
        ],
        whyOutSourzeTitle: "Why Outsource Recruitment Support?",
        whyOutSourzeItems: [
            "Save hours of admin per role so you can focus on closing hires",
            "Reduce internal HR and recruiter workload",
            "Improve candidate engagement and process speed",
            "Cut back on operational hiring costs"
        ],
        whyOutSourzeDscrpt: "Outsourze.com provides trained professionals experienced in recruitment tools and platforms. They work under your direction to help you stay ahead in the war for talent — without the burden of full-time local costs.",
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
        disclaimer: "Recruitment outsourcing is ideal for agencies and businesses looking to scale hiring operations quickly and affordably — without compromising quality."
    }

    return (
        <ServiceContext.Provider value={recruitmentSpecialistData}>
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
