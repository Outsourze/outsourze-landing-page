import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function GraphicDesigner() {
    const graphicDesignerData = {
        title: "Graphic Designer",
        subTitle: "Creative Visual Solutions — Without the High Local Costs",
        dscrpt: "Strong visual design is key to branding, marketing, and communications. At Outsourze.com, our Philippines-based Graphic Designers deliver eye-catching, professional designs tailored to your needs — all at a fraction of local hiring costs.",
        whatToDoHeader: "What a Graphic Designer Can Handle",
        whatTodos: [
            "Creating logos, branding materials, and visual identities", 
            "Designing marketing collateral (brochures, flyers, banners)",
            "Developing social media graphics and web assets",
            "Editing photos and images for marketing and presentations",
            "Collaborating with marketing teams on campaign visuals",
            "Producing layouts for print and digital publications",
        ],
        whyOutSourzeTitle: "Why Outsource Graphic Design?",
        whyOutSourzeItems: [
            "Access skilled designers with a range of styles and specialties",
            "Scale design support without hiring full-time locally",
            "Reduce recruitment, software, and equipment expenses",
            "Benefit from fast turnaround and collaborative communication"
        ],
        whyOutSourzeDscrpt: "Our designers are proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign), Canva, Figma, and other popular design tools.",
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
                "Entry Level": { cost: 480, currency: "GBP" },
                "Mid Level": { cost: 650, currency: "GBP" },
                "Advanced": { cost: 900, currency: "GBP" },
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
                "Entry Level": { cost: 580, currency: "GBP" },
                "Mid Level": { cost: 750, currency: "GBP" },
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
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 900,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7000 },
          outsourze: 850,
          estimatedSaving: 87
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 2500, highest: 3200 },
          outsourze: 480,
          estimatedSaving: 85,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 4500, highest: 6000 },
          outsourze: 750,
          estimatedSaving: 85,
        }],
        disclaimer: "Graphic design outsourcing is perfect for businesses needing consistent, high-quality creative output — without the local salary overhead."
    }   

    return (
        <ServiceContext.Provider value={graphicDesignerData}>
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
