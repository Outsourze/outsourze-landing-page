import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function MotionGraphicsArtist() {
    const motionGraphicsArtistData = {
        title: "Motion Graphics Artist",
        subTitle: "Dynamic Motion Graphics and Animation — Without Local Salary Overheads",
        dscrpt: "Captivate your audience with stunning motion graphics and animations. At Outsourze.com, our Philippines-based Motion Graphics Artists bring your visuals to life — delivering professional, eye-catching content while saving you significant costs compared to local hires.",
        whatToDoHeader: "What a Motion Graphics Artist Can Handle",
        whatTodos: [
            "Creating animated graphics for videos, presentations, and social media", 
            "Designing visual effects and transitions",
            "Developing 2D and 3D animations",
            "Collaborating with video editors and marketing teams",
            "Formatting animations for various platforms and formats",
            "Managing projects from concept to final delivery",
        ],
        whyOutSourzeTitle: "Why Outsource Motion Graphics?",
        whyOutSourzeItems: [
            "Access talented creatives with technical animation skills",
            "Scale production without the expense of local staff",
            "Reduce recruitment, software, and hardware expenses",
            "Benefit from timely delivery and professional quality"
        ],
        whyOutSourzeDscrpt: "Our Motion Graphics Artists are proficient with Adobe After Effects, Cinema 4D, Blender, and other industry-standard animation tools.",
        priceComparison: [
          {
            type: "Hourly Freelancer",
            columns: ["Role", "Hourly Rate"],
            data: [
              {
                Role: "New Zealand",
                "Hourly Rate": { cost: 18, currency: "NZD" },
              },
              {
                Role: "Australia",
                "Hourly Rate": { cost: 17, currency: "AUD" },
              },
              {
                Role: "UK",
                "Hourly Rate": { cost: 9, currency: "GBP" },
              },
              {
                Role: "Canada",
                "Hourly Rate": { cost: 15, currency: "CAD" },
              },
            ],
          },
          {
            type: "Full Time - Work From Home",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1100, currency: "NZD" },
                "Mid Level": { cost: 1500, currency: "NZD" },
                "Advanced": { cost: 2100, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1100, currency: "AUD" },
                "Mid Level": { cost: 1350, currency: "AUD" },
                "Advanced": { cost: 1900, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 550, currency: "GBP" },
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
          {
            type: "Full Time - Office Based",
            columns: ["Role", "Entry Level", "Mid Level", "Advanced"],
            data: [
              {
                "Role": "New Zealand",
                "Entry Level": { cost: 1300, currency: "NZD" },
                "Mid Level": { cost: 1700, currency: "NZD" },
                "Advanced": { cost: 2400, currency: "NZD" },
              },
              {
                "Role": "Australia",
                "Entry Level": { cost: 1200, currency: "AUD" },
                "Mid Level": { cost: 1550, currency: "AUD" },
                "Advanced": { cost: 2200, currency: "AUD" },
              },
              {
                "Role": "UK",
                "Entry Level": { cost: 650, currency: "GBP" },
                "Mid Level": { cost: 900, currency: "GBP" },
                "Advanced": { cost: 1300, currency: "GBP" },
              },
              {
                "Role": "Canada",
                "Entry Level": { cost: 1050, currency: "CAD" },
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
          localCost: { lowest: 6000, highest: 8500 },
          outsourze: 1100,
          estimatedSaving: 85,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 6500, highest: 9000 },
          outsourze: 1000,
          estimatedSaving: 85
        }, {
          role: "United Kingdom",
          currency: "GBP",
          currencySign: "£",
          localCost: { lowest: 3000, highest: 4200 },
          outsourze: 550,
          estimatedSaving: 85,
        }, {
          role: "Canada",
          currency: "CAD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7800 },
          outsourze: 900,
          estimatedSaving: 85,
        }],
        disclaimer: "Motion graphics outsourcing is ideal for businesses wanting professional animated content without local salary overheads."
    }   

    return (
      <>
        <SEO
          title="Motion Graphics Outsourcing | Outsourze"
          description="Elevate your content with creative motion graphics from Outsourze's remote artists—dynamic animations without the premium cost."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/marketing/motion-graphics-artist`}
        />
        <ServiceContext.Provider value={motionGraphicsArtistData}>
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
