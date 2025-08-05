import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function ContentWriter() {
    const contentWriterData = {
        title: "Content Writer",
        subTitle: "Engaging, Clear, and SEO-Friendly Content — Without the Local Hiring Premium",
        dscrpt: "High-quality content drives traffic, builds brand authority, and converts readers into customers. At Outsourze.com, our Philippines-based Content Writers craft well-researched, compelling content tailored to your audience — all while saving you significant costs compared to local hires.",
        whatToDoHeader: "What a Content Writer Can Handle",
        whatTodos: [
            "Writing blog posts, articles, and website copy", 
            "Creating product descriptions and marketing materials",
            "Producing SEO-optimized content to improve search rankings",
            "Researching industry topics and trends",
            "Editing and proofreading for clarity and style",
            "Collaborating with marketing and SEO teams",
        ],
        whyOutSourzeTitle: "Why Outsource Content Writing?",
        whyOutSourzeItems: [
            "Access skilled writers experienced in diverse industries",
            "Scale content production without expanding local staff",
            "Reduce recruitment, training, and editing costs",
            "Maintain consistent brand voice and quality"
        ],
        whyOutSourzeDscrpt: "Our Content Writers are proficient with SEO tools and content management systems (CMS) like WordPress.",
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
                "Entry Level": { cost: 700, currency: "NZD" },
                "Mid Level": { cost: 950, currency: "NZD" },
                "Advanced": { cost: 1350, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 650, currency: "AUD" },
                "Mid Level": { cost: 870, currency: "AUD" },
                "Advanced": { cost: 1200, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 350, currency: "GBP" },
                "Mid Level": { cost: 480, currency: "GBP" },
                "Advanced": { cost: 650, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 580, currency: "CAD" },
                "Mid Level": { cost: 790, currency: "CAD" },
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
                "Mid Level": { cost: 1150, currency: "NZD" },
                "Advanced": { cost: 1600, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 820, currency: "AUD" },
                "Mid Level": { cost: 1050, currency: "AUD" },
                "Advanced": { cost: 1400, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 450, currency: "GBP" },
                "Mid Level": { cost: 550, currency: "GBP" },
                "Advanced": { cost: 750, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 720, currency: "CAD" },
                "Mid Level": { cost: 900, currency: "CAD" },
                "Advanced": { cost: 1300, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 4000, highest: 5500 },
          outsourze: 700,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 4500, highest: 5800 },
          outsourze: 650,
          estimatedSaving: 87
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2000, highest: 2700 },
          outsourze: 350,
          estimatedSaving: 85,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 3500, highest: 4800 },
          outsourze: 580,
          estimatedSaving: 85,
        }],
        disclaimer: "Content writing outsourcing is perfect for businesses wanting consistent, quality content without the costs and complexities of local hires."
    }

    return (
        <ServiceContext.Provider value={contentWriterData}>
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
