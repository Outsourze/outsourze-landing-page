import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function UiUxDeveloper() {
    const uiUxDeveloperData = {
        title: "UI/UX Developer",
        subTitle: "User-Centered Design and Development — Without Local Hiring Expenses",
        dscrpt: "Creating seamless, engaging digital experiences requires expert UI/UX skills. At Outsourze.com, our Philippines-based UI/UX Developers craft intuitive interfaces and smooth user journeys — helping you deliver exceptional products while saving on costly local salaries.",
        whatToDoHeader: "What a UI/UX Developer Can Handle",
        whatTodos: [
            "Designing user interfaces for websites and apps", 
            "Conducting user research and usability testing",
            "Creating wireframes, prototypes, and interactive mockups",
            "Collaborating with developers to implement designs",
            "Analyzing user feedback and iterating on designs",
            "Ensuring accessibility and responsive design standards",
        ],
        whyOutSourzeTitle: "Why Outsource UI/UX Development?",
        whyOutSourzeItems: [
            "Access skilled designers with technical and creative expertise",
            "Scale design and development resources without local overhead",
            "Reduce recruitment, software, and infrastructure costs",
            "Benefit from fresh design perspectives and proven methodologies"
        ],
        whyOutSourzeDscrpt: "Our UI/UX Developers are proficient with tools like Figma, Sketch, Adobe XD, InVision, and have knowledge of HTML/CSS and front-end frameworks.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 20, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 18, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 10, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 17, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1200, currency: "NZD" },
                "Mid Level": { cost: 1700, currency: "NZD" },
                "Advanced": { cost: 2300, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1100, currency: "AUD" },
                "Mid Level": { cost: 1550, currency: "AUD" },
                "Advanced": { cost: 2100, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 600, currency: "GBP" },
                "Mid Level": { cost: 900, currency: "GBP" },
                "Advanced": { cost: 1200, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 1000, currency: "CAD" },
                "Mid Level": { cost: 1400, currency: "CAD" },
                "Advanced": { cost: 1800, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1500, currency: "NZD" },
                "Mid Level": { cost: 2000, currency: "NZD" },
                "Advanced": { cost: 2700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1350, currency: "AUD" },
                "Mid Level": { cost: 1800, currency: "AUD" },
                "Advanced": { cost: 2400, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 750, currency: "GBP" },
                "Mid Level": { cost: 1000, currency: "GBP" },
                "Advanced": { cost: 1400, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 1250, currency: "CAD" },
                "Mid Level": { cost: 1600, currency: "CAD" },
                "Advanced": { cost: 2100, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 7000, highest: 9000 },
          outsourze: 1200,
          estimatedSaving: 83,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 7500, highest: 9500 },
          outsourze: 1100,
          estimatedSaving: 85
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 3500, highest: 4500 },
          outsourze: 600,
          estimatedSaving: 83,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 6500, highest: 8500 },
          outsourze: 1000,
          estimatedSaving: 85,
        }],
        disclaimer: "UI/UX development outsourcing is ideal for companies wanting expert, user-focused design and development — without local hire costs."
    }   

    return (
        <ServiceContext.Provider value={uiUxDeveloperData}>
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
