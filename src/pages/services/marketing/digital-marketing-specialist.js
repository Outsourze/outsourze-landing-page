import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function DigitalMarketingSpecialist() {
    const digitalMarketingSpecialistData = {
        title: "Digital Marketing Specialist",
        subTitle: "Drive Growth and Engagement — Without the Local Hiring Costs",
        dscrpt: "Effective digital marketing is key to reaching your audience and driving sales. At Outsourze.com, our Philippines-based Digital Marketing Specialists design and execute targeted campaigns across multiple channels — delivering measurable results while saving you significant costs compared to local hires.",
        whatToDoHeader: "What a Digital Marketing Specialist Can Handle",
        whatTodos: [
            "Planning and managing digital marketing campaigns", 
            "SEO and SEM strategy and execution",
            "Managing social media advertising and content",
            "Email marketing campaigns and automation",
            "Analyzing campaign performance and optimizing results",
            "Coordinating with design and content teams",
            "Using marketing analytics tools to report insights"
        ],
        whyOutSourzeTitle: "Why Outsource Digital Marketing?",
        whyOutSourzeItems: [
            "Access skilled professionals experienced with latest tools and trends",
            "Scale marketing efforts without expanding your local team",
            "Reduce recruitment, training, and software expenses",
            "Maintain consistent branding and message across channels"
        ],
        whyOutSourzeDscrpt: "Our specialists are proficient with Google Ads, Facebook Ads Manager, Google Analytics, HubSpot, Mailchimp, and other key platforms.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 16, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 15, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 8, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 14, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1000, currency: "NZD" },
                "Mid Level": { cost: 1400, currency: "NZD" },
                "Advanced": { cost: 2000, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 950, currency: "AUD" },
                "Mid Level": { cost: 1300, currency: "AUD" },
                "Advanced": { cost: 1800, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 520, currency: "GBP" },
                "Mid Level": { cost: 720, currency: "GBP" },
                "Advanced": { cost: 1000, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 880, currency: "CAD" },
                "Mid Level": { cost: 1150, currency: "CAD" },
                "Advanced": { cost: 1600, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1200, currency: "NZD" },
                "Mid Level": { cost: 1600, currency: "NZD" },
                "Advanced": { cost: 2300, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1100, currency: "AUD" },
                "Mid Level": { cost: 1450, currency: "AUD" },
                "Advanced": { cost: 2100, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 600, currency: "GBP" },
                "Mid Level": { cost: 850, currency: "GBP" },
                "Advanced": { cost: 1200, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 1000, currency: "CAD" },
                "Mid Level": { cost: 1350, currency: "CAD" },
                "Advanced": { cost: 1800, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 6000, highest: 8000 },
          outsourze: 1000,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 6500, highest: 8500 },
          outsourze: 950,
          estimatedSaving: 85
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 3000, highest: 3800 },
          outsourze: 520,
          estimatedSaving: 85,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7500 },
          outsourze: 880,
          estimatedSaving: 85,
        }],
        disclaimer: "Digital marketing outsourcing is ideal for businesses wanting expert campaign management and growth — without the costs of local hires."
    }

    return (
        <ServiceContext.Provider value={digitalMarketingSpecialistData}>
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
