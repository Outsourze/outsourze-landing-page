import CustomerSupportIcon from "@/assets/icon/services-nav/Customer Support.svg";
import SalesLeadIcon from "@/assets/icon/services-nav/Sales & Lead Generation.svg";
import HrRecruitmentIcon from "@/assets/icon/services-nav/HR & Recruitment.svg";
import AdminIcon from "@/assets/icon/services-nav/Administration.svg";
import FinanceAccountingIcon from "@/assets/icon/services-nav/Finance & Accounting.svg";
import MarketingIcon from "@/assets/icon/services-nav/Marketing & Design.svg";

// nav services
export const ServicesMenuData = [
  {
    url: "/services/customer-support",
    icon: <CustomerSupportIcon className="w-10 brand-text-orange h-auto" />,
    text: "Customer Support",
    subText: "Support that cares"
  },
  {
    url: "/services/sale-generation",
    icon: <SalesLeadIcon className="w-10 brand-text-orange h-auto" />,
    text: "Sales & Lead Generation",
    subText: "Sales that convert"
  },
  {
    url: "/services/hr-recruitment",
    icon: <HrRecruitmentIcon className="w-10 brand-text-orange h-auto" />,
    text: "HR Recruitment",
    subText: "Hiring made easy"
  },
  {
    url: "/services/administration",
    icon: <AdminIcon className="w-10 brand-text-orange h-auto" />,
    text: "Administration",
    subText: "Operations run smoothly"
  },
  {
    url: "/services/finance",
    icon: <FinanceAccountingIcon className="w-10 brand-text-orange h-auto" />,
    text: "Finance & Accounting",
    subText: "Numbers done right"
  },
  {
    url: "/services/marketing",
    icon: <MarketingIcon className="w-10 brand-text-orange h-auto" />,
    text: "Marketing & Creative",
    subText: "Creativity that sells"
  }
];

// home services card data
export const ServicesCardData = [
  {
    url: "/services/customer-support",
    icon: <CustomerSupportIcon className="w-[4.5rem] h-auto brand-text-orange" />,
    text: "Customer Support"
  },
  {
    url: "/services/hr-recruitment",
    icon: <HrRecruitmentIcon className="w-[4.5rem] h-auto brand-text-orange" />,
    text: "HR Recruitment"
  },
  {
    url: "/services/finance",
    icon: <FinanceAccountingIcon className="w-[4.5rem] h-auto brand-text-orange" />,
    text: "Finance & Accounting"
  },
  {
    url: "/services/sale-generation",
    icon: <SalesLeadIcon className="w-[4.5rem] h-auto brand-text-orange" />,
    text: "Sales & Lead Generation"
  },
  {
    url: "/services/administration",
    icon: <AdminIcon className="w-[4.5rem] h-auto brand-text-orange" />,
    text: "Administration"
  },
  {
    url: "/services/marketing",
    icon: <MarketingIcon className="w-[4.5rem] h-auto brand-text-orange" />,
    text: "Marketing & Creative"
  }
];

// service pitch data
export const ServicesPitchCardData = [
  {
    url: "",
    question: "Why Choose Outsourze.com?",
    subText: (
      <>
        <div className="mb-4">
          <span className="font-medium">Lower Costs, Higher Returns</span>
          <p className="text-sm">
            {`With our team based in the Philippines, you access world-class talent at a fraction of the local cost—boosting your margins without compromising quality.`}
          </p>
        </div>

        <div className="mb-4">
          <span className="font-medium">Client-First Approach</span>
          <p className="text-sm">
            {`We listen, adapt, and partner with you to build flexible staffing models aligned with your short- and long-term goals.`}
          </p>
        </div>

        <div className="mb-4">
          <span className="font-medium">Tailored Global Talent</span>
          <p className="text-sm">
            {`We handpick professionals who meet international standards, ensuring your team can hit the ground running.`}
          </p>
        </div>

        <div>
          <span className="font-medium">Agile & Scalable</span>
          <p className="text-sm">
            {`From startups to enterprises, we offer adaptable solutions that grow with your business.`}
          </p>
        </div>
      </>
    )
  },
  {
    url: "",
    question: "Ready to Beat High Staff Costs?",
    subText: (
      <>
        <p className="mb-4 text-sm">
          {`Face it—labor costs are rising fast, and recruitment takes time. Staffing can eat up to 60% of your profits. We help you take control by delivering skilled remote staff quickly and affordably.`}
        </p>
        <p className="text-sm">
          {`Outsourcing isn't just for large corporations anymore—it's your next competitive edge.`}
        </p>
      </>
    )
  },
  {
    url: "",
    question: "What Sets Us Apart",
    subText: (
      <>
        <ul className="list-disc pl-5 mb-4 text-white text-sm">
          <li>{`Lowest Rates in the Industry`}</li>
          <li>{`Long-Term Client Partnerships`}</li>
          <li>{`On-Time, On-Budget Delivery`}</li>
          <li>{`Proactive, Responsive Communication`}</li>
        </ul>

        <p className="text-white text-sm">
          {`Let's build your dream team—without the overhead.`}
        </p>
      </>
    )
  }
];
