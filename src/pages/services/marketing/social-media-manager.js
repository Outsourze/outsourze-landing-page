import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function SocialMediaManager() {
    const socialMediaManagerData = {
        title: "Social Media Manager",
        subTitle: "Engage and Grow Your Audience — Without Local Hiring Costs",
        dscrpt: "Social media is essential for brand visibility, engagement, and customer connection. At Outsourze.com, our Philippines-based Social Media Managers create and execute effective social strategies — delivering consistent content and community management at a fraction of local expenses.",
        whatToDoHeader: "What a Social Media Manager Can Handle",
        whatTodos: [
            "Developing and implementing social media strategies", 
            "Creating and scheduling engaging content across platforms",
            "Managing community interactions and responding to comments",
            "Monitoring social media metrics and reporting insights",
            "Coordinating with marketing and design teams",
            "Staying updated on social media trends and tools",
        ],
        whyOutSourzeTitle: "Why Outsource Social Media Management?",
        whyOutSourzeItems: [
            "Access skilled professionals with platform expertise",
            "Scale your social presence without expanding local staff",
            "Reduce recruitment, software, and training costs",
            "Maintain consistent brand voice and timely responses"
        ],
        whyOutSourzeDscrpt: "Our Social Media Managers are proficient with tools like Hootsuite, Buffer, Facebook Business Manager, Instagram, LinkedIn, Twitter, and TikTok.",
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
                "Entry Level": { cost: 850, currency: "NZD" },
                "Mid Level": { cost: 1200, currency: "NZD" },
                "Advanced": { cost: 1700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 790, currency: "AUD" },
                "Mid Level": { cost: 1100, currency: "AUD" },
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
                "Entry Level": { cost: 520, currency: "GBP" },
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
          outsourze: 850,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7000 },
          outsourze: 790,
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
        disclaimer: "Social media management outsourcing is perfect for businesses wanting consistent, expert online engagement — without local hire costs."
    }   

    return (
        <ServiceContext.Provider value={socialMediaManagerData}>
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
