import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function SalesBusinessDevelopmentSpecialist() {
    const salesBusinessDevelopmentSpecialistData = {
        title: "Sales / Business Development Specialist",
        subTitle: "Grow Your Business Faster — Without the Local Hiring Premium",
        dscrpt: "Driving new business requires strategic outreach, relationship building, and consistent follow-up. At Outsourze.com, our Philippines-based Sales and Business Development Specialists combine sales savvy with professionalism to help you identify opportunities, nurture leads, and close deals — all while saving significantly compared to local hiring.",
        whatToDoHeader: "What a Sales/Business Development Specialist Can Handle",
        whatTodos: [
            "Prospecting and qualifying new business opportunities", 
            "Building and maintaining client relationships",
            "Conducting market research and competitive analysis",
            "Preparing and delivering sales presentations and proposals",
            "Negotiating contracts and closing deals",
            "Managing CRM data and sales pipelines",
            "Collaborating closely with marketing and product teams",
        ],
        whyOutSourzeTitle: "Why Outsource Sales / Business Development?",
        whyOutSourzeItems: [
            "Access experienced sales pros without the high local salaries",
            "Scale outreach and pipeline generation flexibly",
            "Free your senior sales team to focus on closing and strategy",
            "Reduce recruitment, training, and operational costs"
        ],
        whyOutSourzeDscrpt: "Our specialists are trained in your sales processes and tools — representing your brand professionally while delivering measurable growth.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 15, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 14, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 8, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 13, currency: "CAD" },
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
                "Advanced": { cost: 1800, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 790, currency: "AUD" },
                "Mid Level": { cost: 1100, currency: "AUD" },
                "Advanced": { cost: 1600, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 450, currency: "GBP" },
                "Mid Level": { cost: 650, currency: "GBP" },
                "Advanced": { cost: 900, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 700, currency: "CAD" },
                "Mid Level": { cost: 950, currency: "CAD" },
                "Advanced": { cost: 1400, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1100, currency: "NZD" },
                "Mid Level": { cost: 1450, currency: "NZD" },
                "Advanced": { cost: 2000, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1000, currency: "AUD" },
                "Mid Level": { cost: 1300, currency: "AUD" },
                "Advanced": { cost: 1800, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 580, currency: "GBP" },
                "Mid Level": { cost: 750, currency: "GBP" },
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
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 6000, highest: 8000 },
          outsourze: 850,
          estimatedSaving: 88,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 6500, highest: 8500 },
          outsourze: 790,
          estimatedSaving: 90
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 3000, highest: 3800 },
          outsourze: 450,
          estimatedSaving: 88,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7500 },
          outsourze: 700,
          estimatedSaving: 89,
        }],
        disclaimer: "Outsourcing sales and business development is ideal for businesses looking to grow pipeline and revenue cost-effectively without local hiring hassles."
    }   

    return (
      <>
        <SEO
          title="Sales & Business Development Outsourcing | Outsourze"
          description="Accelerate growth with Outsourze's remote business development specialists. Expert sales strategy, expansions, and partnerships made affordable."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/sale-business-development-specialist`}
        />
        <ServiceContext.Provider value={salesBusinessDevelopmentSpecialistData}>
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
      </>
    )
}
