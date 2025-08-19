import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function PersonalAssistant() {
    const personalAssistantData = {
        title: "Personal Assistant",
        subTitle: "Dedicated Personal Support — Without the Local Salary Premium",
        dscrpt: "Personal assistants help busy professionals manage daily tasks, schedules, and communications with efficiency and discretion. At Outsourze.com, our Philippines-based Personal Assistants provide reliable, proactive support — helping you stay organized and focused while saving significantly compared to local hires.",
        whatToDoHeader: "What a Personal Assistant Can Handle",
        whatTodos: [
            "Managing calendars and appointments", 
            "Handling personal and professional correspondence",
            "Booking travel and managing itineraries",
            "Organizing documents and files",
            "Coordinating with family, staff, or vendors as needed",
            "Running errands and managing personal tasks remotely",
            "Assisting with research and event planning"
        ],
        whyOutSourzeTitle: "Why Outsource Personal Assistance?",
        whyOutSourzeItems: [
            "Access skilled, trustworthy assistants without high local costs",
            "Free up your time for high-value activities",
            "Scale support flexibly based on your needs",
            "Maintain confidentiality and professionalism"
        ],
        whyOutSourzeDscrpt: "Our Personal Assistants are trained to work with your preferred tools and processes, providing seamless support tailored to your lifestyle and work requirements.",
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
                "Mid Level": { cost: 1350, currency: "NZD" },
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
          localCost: { lowest: 4500, highest: 5500 },
          outsourze: 700,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5000, highest: 6000 },
          outsourze: 650,
          estimatedSaving: 87
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2500, highest: 3200 },
          outsourze: 350,
          estimatedSaving: 86,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 4000, highest: 5000 },
          outsourze: 580,
          estimatedSaving: 85,
        }],
        disclaimer: "Personal assistant outsourcing is perfect for busy professionals wanting reliable, flexible, and discreet support — without the costs and complexities of local hires."
    }

    return (
      <>
        <SEO
          title="Remote Personal Assistant Services | Outsourze"
          description="Simplify your life with Outsourze's personal assistant services. Daily task support, personal coordination, and efficient assistance—without the overhead."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/administration/personal-assistant`}
        />
        <ServiceContext.Provider value={personalAssistantData}>
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
