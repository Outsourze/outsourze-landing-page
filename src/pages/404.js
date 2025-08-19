import { usePathname } from "next/navigation";
import NotFoundSection from "@/component/404/404";
import SEO from "@/utility/useSeo";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <>
      <SEO
        title="Page Not Found | Outsourze"
        description="The page you're looking for doesn't exist or has been moved. Return to Outsourze's homepage to explore our outsourcing solutions."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
      />
      <div>
        <NotFoundSection />
      </div>
    </>
  )
}
