import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function HelpDeskSupportRepresentative() {
    const helpDeskSupportData = {
        title: "Help Desk Support Representative",
        subTitle: "Reliable, Responsive, and Resourceful IT Support — Without the High Costs",
        dscrpt: "When your customers or team members run into technical issues, quick and knowledgeable support is essential. Our Philippines-based Help Desk Support staff are trained to resolve problems efficiently, ensuring minimal downtime and a smooth user experience — all while helping you save significantly on local employment costs.",
        whatToDoHeader: "What a Help Desk Support Rep Can Handle",
        whatTodos: [
            "Troubleshooting hardware and software issues", 
            "Resetting passwords and managing access",
            "Installing or configuring software",
            "Responding to IT service desk tickets",
            "Providing step-by-step solutions to users",
            "Escalating complex technical problems",
            "Documenting issues and resolutions"
        ],
        whyOutSourzeTitle: "Why Outsource Help Desk Support?",
        whyOutSourzeItems: [
            "Provide round-the-clock technical assistance",
            "Reduce internal IT workload and overhead",
            "Quickly scale your support team during peak periods",
            "Maintain service level agreements (SLAs) with ease"
        ],
        whyOutSourzeDscrpt: "Outsourze.com connects you with experienced Help Desk professionals who follow your processes, use your ticketing systems, and deliver the same level of support as local hires — at a significantly reduced cost.",
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
          estimatedSaving: 88,
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
          localCost: { lowest: 2500, highest: 3000 },
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
        disclaimer: "Help Desk outsourcing is ideal for businesses that want to deliver fast, effective technical support without increasing infrastructure or headcount costs."
    }

    return (
      <>
        <SEO
          title="Help Desk Support Outsourcing | Outsourze"
          description="Scale your IT and customer help desk operations with Outsourze. Our remote support representatives handle tickets, troubleshooting, and resolutions efficiently."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/customer-support/help-desk-support-representative`}
        />
        <ServiceContext.Provider value={helpDeskSupportData}>
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
