import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function TalentAcquisitionSpecialist() {
    const talentAcquisitionSpecialistData = {
        title: "Talent Acquisition Specialist",
        subTitle: "Strategic Talent Sourcing — Without the Corporate Price Tag",
        dscrpt: "Hiring the right people is one of the most important drivers of business success. At Outsourze.com, our Philippines-based Talent Acquisition Specialists help you attract, engage, and secure top talent — all while reducing your recruitment spend. Whether you need support with sourcing, headhunting, or full-cycle recruiting, we provide experienced professionals who can plug into your team and process seamlessly.",
        whatToDoHeader: "What a Talent Acquisition Specialist Can Handle",
        whatTodos: [
            "End-to-end recruitment for permanent, contract, or remote roles", 
            "Passive candidate sourcing and outreach (LinkedIn, referrals, etc.)",
            "Market mapping and talent intelligence",
            "Conducting screening interviews and assessments",
            "Managing candidate pipelines and talent pools",
            "Collaborating with hiring managers to define role requirements",
            "Improving employer branding and recruitment marketing"
        ],
        whyOutSourzeTitle: "Why Outsource Talent Acquisition?",
        whyOutSourzeItems: [
            "Access high-quality recruitment talent without growing your internal HR team",
            "Fill roles faster with dedicated sourcing and outreach",
            "Reduce agency fees and cost-per-hire",
            "Scale your hiring efforts without increasing headcount"
        ],
        whyOutSourzeDscrpt: "Our specialists are trained to work with your recruitment stack (ATS, CRMs, LinkedIn Recruiter, etc.) and follow your hiring standards — delivering a seamless extension of your internal talent team.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 13, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 12, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 7, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 11, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 750, currency: "NZD" },
                "Mid Level": { cost: 1000, currency: "NZD" },
                "Advanced": { cost: 1500, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 690, currency: "AUD" },
                "Mid Level": { cost: 920, currency: "AUD" },
                "Advanced": { cost: 1350, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 390, currency: "GBP" },
                "Mid Level": { cost: 520, currency: "GBP" },
                "Advanced": { cost: 750, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 620, currency: "CAD" },
                "Mid Level": { cost: 800, currency: "CAD" },
                "Advanced": { cost: 1200, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 980, currency: "NZD" },
                "Mid Level": { cost: 1250, currency: "NZD" },
                "Advanced": { cost: 1700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 900, currency: "AUD" },
                "Mid Level": { cost: 1150, currency: "AUD" },
                "Advanced": { cost: 1550, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 500, currency: "GBP" },
                "Mid Level": { cost: 650, currency: "GBP" },
                "Advanced": { cost: 850, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 750, currency: "CAD" },
                "Mid Level": { cost: 970, currency: "CAD" },
                "Advanced": { cost: 1350, currency: "CAD" },
              },
            ],
          },
        ],
        costComparison: [{
          role: "New Zealand",
          currency: "NZD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7000 },
          outsourze: 750,
          estimatedSaving: 89,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 6000, highest: 7500 },
          outsourze: 690,
          estimatedSaving: 90
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2800, highest: 3500 },
          outsourze: 390,
          estimatedSaving: 89,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 620,
          estimatedSaving: 88,
        }],
        disclaimer: "Talent acquisition outsourcing is ideal for fast-growing businesses and recruitment teams needing to scale quickly and strategically — without adding internal complexity."
    }

    return (
      <>
        <SEO
          title="Talent Acquisition Outsourcing | Outsourze"
          description="Scale hiring with Outsourze's outsourced talent acquisition specialists. Find, attract, and retain top talent without the high overhead."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/hr-recruitment/talent-acquisition-specialist`}
        />
        <ServiceContext.Provider value={talentAcquisitionSpecialistData}>
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
