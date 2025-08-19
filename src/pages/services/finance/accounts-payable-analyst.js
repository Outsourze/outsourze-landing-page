import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";
import SEO from "@/utility/useSeo";

export default function AccountsPayableSpecialist() {
    const accountsPayableSpecialistData = {
        title: "Accounts Payable Specialist",
        subTitle: "Accurate and Efficient Invoice & Payment Management — Without the Full-Time Cost",
        dscrpt: "Managing accounts payable is crucial to maintaining healthy supplier relationships and cash flow. At Outsourze.com, our Philippines-based Accounts Payable Specialists handle your invoice processing, vendor payments, and reconciliations with accuracy and speed — helping you save time and reduce costs.",
        whatToDoHeader: "What an Accounts Payable Specialist Can Handle",
        whatTodos: [
            "Processing vendor invoices and purchase orders", 
            "Matching invoices to purchase orders and delivery receipts",
            "Scheduling and processing payments on time",
            "Reconciling supplier statements and resolving discrepancies",
            "Maintaining accurate accounts payable records",
            "Coordinating with vendors and internal teams on payment status",
            "Assisting with month-end closing and reporting"
        ],
        whyOutSourzeTitle: "Why Outsource Accounts Payable?",
        whyOutSourzeItems: [
            "Improve payment accuracy and timeliness",
            "Reduce errors and avoid late payment penalties",
            "Free up your finance team for higher-value tasks",
            "Scale support cost-effectively as your business grows"
        ],
        whyOutSourzeDscrpt: "Outsourze.com connects you with trained AP professionals experienced with Xero, QuickBooks, MYOB, SAP, and other accounting platforms — delivering reliable service tailored to your systems.",
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
          localCost: { lowest: 5000, highest: 6500 },
          outsourze: 700,
          estimatedSaving: 89,
        }, {
          role: "Australia",
          currency: "AUD",
          currencySign: "$",
          localCost: { lowest: 5500, highest: 7000 },
          outsourze: 650,
          estimatedSaving: 90
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
          localCost: { lowest: 4500, highest: 6000 },
          outsourze: 580,
          estimatedSaving: 88,
        }],
        disclaimer: "Accounts payable outsourcing is perfect for businesses wanting accurate and timely vendor payments — without the cost of full-time local finance staff."
    }

    return (
      <>
        <SEO
          title="Accounts Payable Outsourced Services | Outsourze"
          description="Streamline bill handling and payments with Outsourze's remote AP analysts. Accurate processing and vendor relationships—without the overhead."
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/finance/accounts-payable-analyst`}
        />
        <ServiceContext.Provider value={accountsPayableSpecialistData}>
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
