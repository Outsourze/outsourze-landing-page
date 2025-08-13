import { ServiceContext } from "@/context/services/services-utils";
import IndividualRoleBanner from "@/component/services/individual-role-component/individual-role-banner";
import IndividualRoleShowcase from "@/component/services/individual-role-component/individual-role-showcase";
import IndividualRoleWhyUs from "@/component/services/individual-role-component/individual-role-why-us";
import IndividualRolePrices from "@/component/services/individual-role-component/individual-role-prices";
import IndividualRoleCostComparison from "@/component/services/individual-role-component/individual-role-cost-comparison";
import IndividualRoleDisclaimer from "@/component/services/individual-role-component/individual-role-disclaimer";

export default function PayrollSpecialist() {
    const payrollSpecialistData = {
        title: "Payroll Specialist",
        subTitle: "Accurate, On-Time Payroll — Without the In-House Overhead",
        dscrpt: "Getting payroll right is critical to keeping your team happy and staying compliant. At Outsourze.com, our Philippines-based Payroll Specialists manage payroll processing with precision — handling local and international pay runs, taxes, and reporting, so you can focus on running your business. Reliable, professional payroll support at a fraction of the local cost.",
        whatToDoHeader: "What a Payroll Specialist Can Handle",
        whatTodos: [
            "Processing weekly, fortnightly, or monthly payroll", 
            "Calculating employee wages, deductions, and benefits",
            "Preparing and submitting tax and statutory filings (BAS, PAYE, T4, etc.)",
            "Managing leave balances and entitlements",
            "Issuing payslips and payment summaries",
            "Assisting with payroll audits and compliance",
            "Working in systems like Xero, QuickBooks, MYOB, ADP, Gusto, and others"
        ],
        whyOutSourzeTitle: "Why Outsource Payroll?",
        whyOutSourzeItems: [
            "Ensure timely and accurate payroll processing",
            "Reduce risk of compliance issues and penalties",
            "Free up internal HR or finance staff",
            "Scale payroll support as your team grows — without scaling your costs"
        ],
        whyOutSourzeDscrpt: "At Outsourze.com, our payroll professionals are trained in global payroll systems and regional tax obligations, helping businesses across NZ, AU, UK, and Canada manage payroll confidently and cost-effectively.",
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
        disclaimer: "Payroll outsourcing is ideal for companies that want dependable, compliant pay runs without hiring a full in-house payroll team."
    }

    return (
        <ServiceContext.Provider value={payrollSpecialistData}>
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
