import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function VideoEditor() {
    const videoEditorData = {
        title: "Video Editor",
        subTitle: "Professional Video Editing — Without Local Salary Overheads",
        dscrpt: "Engaging, polished videos are essential for marketing, training, and communications. At Outsourze.com, our Philippines-based Video Editors provide expert editing services — helping you create compelling video content while saving on costly local hires.",
        whatToDoHeader: "What a Video Editor Can Handle",
        whatTodos: [
            "Editing raw footage into finished videos for various platforms", 
            "Adding transitions, effects, and audio enhancements",
            "Color correction and sound editing",
            "Formatting videos for social media, websites, or presentations",
            "Collaborating with creative and marketing teams",
            "Managing video projects from intake to delivery",
        ],
        whyOutSourzeTitle: "Why Outsource Video Editing?",
        whyOutSourzeItems: [
            "Access skilled editors with technical expertise",
            "Scale video production without hiring full-time locally",
            "Reduce recruitment, software, and hardware costs",
            "Benefit from fast turnaround and professional quality"
        ],
        whyOutSourzeDscrpt: "Our Video Editors are proficient with Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and other industry-standard editing software.",
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
                "Entry Level": { cost: 900, currency: "NZD" },
                "Mid Level": { cost: 1200, currency: "NZD" },
                "Advanced": { cost: 1700, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 850, currency: "AUD" },
                "Mid Level": { cost: 1100, currency: "AUD" },
                "Advanced": { cost: 1550, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 450, currency: "GBP" },
                "Mid Level": { cost: 600, currency: "GBP" },
                "Advanced": { cost: 850, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 750, currency: "CAD" },
                "Mid Level": { cost: 1000, currency: "CAD" },
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
                "Mid Level": { cost: 1400, currency: "NZD" },
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
                "Entry Level": { cost: 500, currency: "GBP" },
                "Mid Level": { cost: 720, currency: "GBP" },
                "Advanced": { cost: 1100, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 900, currency: "CAD" },
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
          localCost: { lowest: 5500, highest: 7500 },
          outsourze: 900,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 6000, highest: 7800 },
          outsourze: 850,
          estimatedSaving: 86
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2800, highest: 3700 },
          outsourze: 450,
          estimatedSaving: 85,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 4800, highest: 6500 },
          outsourze: 750,
          estimatedSaving: 85,
        }],
        disclaimer: "Video editing outsourcing is ideal for businesses wanting expert, professional video content without the local salary premium."
    }   

    return (
        <ServiceContext.Provider value={videoEditorData}>
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
