"use client";


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import { site, NavbarData, SectionProps } from "@/data";

const ICON_MAP: Record<string, IconType> = {
  FaArrowRight,
};

const navbarData: NavbarData = site.navbar;

export default function Navbar({ data: propData, className }: SectionProps<NavbarData> = {}) {
    const data = propData || site.navbar;
  const pathname = usePathname();
  const ButtonIcon = ICON_MAP[navbarData.button.icon] || FaArrowRight;

  return (
    <nav className="w-full bg-[#0a0e14] text-white py-3 sm:py-4 border-b border-gray-800/40">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-main.png"
            alt={navbarData.logoAlt}
            width={300}
            height={80}
            className="w-auto h-14 sm:h-16 lg:h-[72px] object-contain"
            priority
          />
        </Link>

        {/* Middle: Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 ml-auto mr-4 lg:mr-6 xl:mr-9">
          {navbarData.links.map((link) => {
            // @ts-ignore
            const hasSubLinks = link.subLinks && link.subLinks.length > 0;
            const isActive = pathname === link.url || (hasSubLinks && 
              // @ts-ignore
              link.subLinks.some((sub: any) => pathname === sub.url || pathname === sub.url.split('#')[0])
            );
            
            return (
              <div key={link.id} className="relative group">
                {hasSubLinks ? (
                  <button
                    className={`relative font-medium tracking-wide transition-colors text-sm xl:text-base flex items-center gap-1.5 cursor-default ${
                      isActive ? "text-[#c40d2e]" : "text-gray-100 hover:text-[#c40d2e]"
                    }`}
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#c40d2e]"></span>
                    )}
                  </button>
                ) : (
                  <Link
                    href={link.url}
                    className={`relative font-medium tracking-wide transition-colors text-sm xl:text-base flex items-center gap-1.5 ${
                      isActive ? "text-[#c40d2e]" : "text-gray-100 hover:text-[#c40d2e]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#c40d2e]"></span>
                    )}
                  </Link>
                )}
                
                {hasSubLinks && (
                  <div className="absolute top-full left-0 pt-6 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#0a0e14] shadow-2xl rounded-b-md border-t-2 border-[#E5192C] border border-t-0 border-gray-800/60 overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="py-2">
                        {/* @ts-ignore */}
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.url}
                            className="block px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-[#E5192C] hover:bg-gray-800/50 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-7 shrink-0">
          {/* Separator */}
          <div className="hidden sm:block w-[1px] h-8 bg-gray-700/60 shrink-0"></div>

          {/* Action Button */}
          <Link
            href={navbarData.button.url}
            className="hidden sm:flex items-center gap-2 bg-[#E5192C] hover:bg-red-700 text-white px-5 sm:px-5 py-2.5 sm:py-3 rounded-full transition-colors text-sm xl:text-base"
          >
            <span>{navbarData.button.label}</span>
            <ButtonIcon className="text-sm" />
          </Link>

          {/* Separator */}
          <div className="hidden sm:block w-[1px] h-8 bg-gray-700/60 shrink-0"></div>

          {/* Hamburger Menu */}
          <button className="text-white hover:text-[#c40d2e] transition-colors p-1">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
