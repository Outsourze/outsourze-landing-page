import Link from 'next/link';
import OutsouzedLogo from "@/assets/logo/Outsourze Logo.svg";
import DesktopNav from './nav/destop-nav';
import TabletNav from './nav/tablet-nav';
import { useEffect, useState } from 'react';
import MobileNav from './nav/mobile-nav';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);
    updateMatch();
    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  console.log({isTablet});
  

    return (
        <div className="fixed lg:py-4 md:py-2 max-md:py-0 top-0 left-0 right-0 w-full z-50 bg-[var(--background)]">
            <div className="py-4 flex items-center justify-between max-w-7xl m-auto 
            xl:px-0 lg:px-20 md:px-20 max-md:px-5 relative">
                <Link href={"/home"}>
                  <OutsouzedLogo className="lg:w-52 md:w-36 max-md:w-36"/>
                </Link>
                {isDesktop && <DesktopNav />}
                {isTablet && <TabletNav />}
                {isMobile && <MobileNav />}
            </div>
        </div>
    )
}

export default Header;