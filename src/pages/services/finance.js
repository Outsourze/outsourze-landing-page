import SpecificBannerSection from "@/component/services/specific-service-component/service-specific-banner";
import SpecificServicesSection from "@/component/services/specific-service-component/service-specific-section";

import { ServiceContext } from "@/context/services/services-utils";

import FA1 from "@/assets/icon/specific-services/finance-accounting/Bookkeeper.svg";
import FA2 from "@/assets/icon/specific-services/finance-accounting/Tax Accountant.svg";
import FA3 from "@/assets/icon/specific-services/finance-accounting/Payroll.svg";
import FA4 from "@/assets/icon/specific-services/finance-accounting/Financial Analyst.svg";
import FA5 from "@/assets/icon/specific-services/finance-accounting/Accounts Payable.svg";
import FAImage from "@/assets/images/specific-service/Finance & Accounting.webp";
import SEO from "@/utility/useSeo";

export default function FinanceAccounting() {
  const financeAccounting = {
    style: "",
    data: [{
      logo: <FA1 className="brand-text-orange w-15 h-auto"/>,
      title: "Bookkeeper",
      dscrpt: "Maintains accurate financial records by tracking income, expenses, and transactions. Ensures books are up to date and compliant for smooth reporting.",
      url: "/services/finance/book-keeper",
    }, {
      logo: <FA2 className="brand-text-orange w-15 h-auto"/>,
      title: "Tax Accountant",
      dscrpt: "Prepares and files tax documents while ensuring compliance with regulations. Helps businesses minimize liabilities and maximize deductions.",
      url: "/services/finance/tax-accountant",
    }, {
      logo: <FA3 className="brand-text-orange w-15 h-auto"/>,
      title: "Payroll Specialist",
      dscrpt: "Processes employee wages, benefits, and deductions accurately and on time. Ensures payroll is compliant and employees are paid correctly.",
      url: "/services/finance/payroll-specialist",
    }, {
      logo: <FA4 className="brand-text-orange w-15 h-auto"/>,
      title: "Financial Analyst",
      dscrpt: "Analyzes financial data to identify trends, risks, and opportunities. Provides actionable insights to support strategic business decisions.",
      url: "/services/finance/financial-analyst",
    }, {
      logo: <FA5 className="brand-text-orange w-15 h-auto"/>,
      title: "Accounts Payable Specialist",
      dscrpt: "Manages outgoing payments, vendor invoices, and expense tracking. Ensures timely and accurate disbursement of company funds.",
      url: "/services/finance/accounts-payable-analyst",
    }]
  } 

  return (
    <>
      <SEO
        title="Finance & Accounting Outsourcing | Outsourze"
        description="Manage finances stress-free with Outsourze's remote accounting solutions. Bookkeeping, payroll, tax, and analysis—all handled accurately and affordably."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/finance`}
      />
      <ServiceContext.Provider value={financeAccounting}>
        <div className="flex w-full flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
          {/* Services section container */}
          <SpecificBannerSection 
            title={"Finance & Accounting"}
            dscrpt={"Every number tells a story. From reports to reconciliations, this team ensures accuracy, compliance, and financial clarity."}
            img={FAImage}
          />
          <SpecificServicesSection />
        </div>
      </ServiceContext.Provider>
    </>
  )
}