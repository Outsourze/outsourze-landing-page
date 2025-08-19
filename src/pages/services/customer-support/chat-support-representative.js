import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function ChatSupportRepresentative() {
    const chatSupportData = {
        title: "Chat Support Representative",
        subTitle: "Fast, Friendly, Real-Time Support — Without the Full-Time Cost",
        dscrpt: "Live chat is one of the most effective customer service channels, offering instant responses and higher satisfaction. At Outsourze.com, our Philippines-based Chat Support Representatives help your business engage visitors, resolve issues, and close sales — all while significantly reducing overhead compared to local hires.",
        whatToDoHeader: "What a Chat Support Rep Can Handle",
        whatTodos: [
            "Responding to customer queries in real time", 
            "Escalating complex or unresolved chats",
            "Assisting with product questions and recommendations",
            "Capturing leads and booking appointments",
            "Troubleshooting simple technical issues",
            "Maintaining chat logs and customer records",
            "Helping customers navigate your website or portal"
        ],
        whyOutSourzeTitle: "Why Outsource Chat Support?",
        whyOutSourzeItems: [
            "Provide instant help 24/7 without adding in-house staff",
            "Increase conversions and reduce abandoned carts",
            "Keep your response time competitive",
            "Reduce cost-per-resolution compared to phone support"
        ],
        whyOutSourzeDscrpt: "Outsourze.com provides experienced live chat agents trained in multitasking, tone control, and real-time communication — all tailored to your brand voice and standards.",
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
          localCost: { lowest: 4500, highest: 6500 },
          outsourze: 650,
          estimatedSaving: 89,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 600,
          estimatedSaving: 90
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2500, highest: 3200 },
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
        disclaimer: "Sales Support outsourcing is ideal for businesses looking to streamline operations, boost team efficiency, and grow sales without growing overhead."
    }

    return (
      <>
        <SEO
          title="Live Chat Support Outsourcing | Outsourze"
          description="Engage customers in real time with Outsourze's chat support representatives. Deliver instant assistance, increase retention, and enhance satisfaction affordably."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/customer-support/chat-support-representative`}
        />
        <ServiceContext.Provider value={chatSupportData}>
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
