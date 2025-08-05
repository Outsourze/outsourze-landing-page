import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function PsychometricTesting() {
    const psychometricTestingData = {
        title: "Psychometric Testing Support",
        subTitle: "Streamline Your Hiring with Smarter, Cost-Effective Talent Insights",
        dscrpt: "Psychometric testing plays a key role in hiring smarter — helping you assess candidates’ personality traits, cognitive abilities, and job fit before they join your team. At Outsourze.com, our Philippines-based staff can fully manage the coordination, administration, and reporting of your psychometric assessments, ensuring a smooth and scalable process at a fraction of local costs.",
        whatToDoHeader: "What Psychometric Testing Support Can Handle",
        whatTodos: [
            "Managing candidate test invitations and follow-up communication", 
            "Setting up and administering online assessments",
            "Monitoring completion rates and sending reminders",
            "Collating and formatting test results for hiring managers",
            "Integrating reports into your applicant tracking system",
            "Coordinating with third-party test providers",
            "Ensuring confidentiality and secure data handling"
        ],
        whyOutSourzeTitle: "Why Outsource Psychometric Test Admin?",
        whyOutSourzeItems: [
            "Save time for your internal HR or TA team",
            "Ensure smooth and professional candidate experiences",
            "Maintain consistent testing processes at scale",
            "Avoid the cost of hiring in-house testing coordinators"
        ],
        whyOutSourzeDscrpt: "Our staff are experienced in working with leading platforms like SHL, Hogan, Criteria, and custom assessment tools. They follow your process, timelines, and candidate communication standards — acting as a seamless extension of your recruitment operations.",
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
        disclaimer: "Psychometric testing support is ideal for recruitment teams who want consistent, candidate-friendly testing workflows — without the administrative load or high in-house costs."
    }

    return (
        <ServiceContext.Provider value={psychometricTestingData}>
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
