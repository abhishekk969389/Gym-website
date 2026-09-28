"use client";


import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaArrowRight, FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { site, NavbarData, SectionProps } from "@/data";

const ICON_MAP: Record<string, IconType> = {
  FaArrowRight,
};

const CONTACT_ICON_MAP: Record<string, IconType> = {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
};

const navbarData: NavbarData = site.navbar;

export default function Navbar({ data: propData, className }: SectionProps<NavbarData> = {}) {
  const data = propData || site.navbar;
  const pathname = usePathname();
  const ButtonIcon = ICON_MAP[navbarData.button.icon] || FaArrowRight;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  return (
    <>
    <nav className="w-full bg-[#0a0e14] text-white py-3 sm:py-4 border-b border-gray-800/40">
      <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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
        <div className="hidden lg:flex items-center gap-4 lg:gap-3 xl:gap-6 2xl:gap-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 xl:static xl:translate-x-0 xl:left-auto xl:ml-auto mr-4 lg:mr-0 xl:mr-9 z-10">
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
                    className={`relative font-medium tracking-wide transition-colors text-sm lg:text-[15px] xl:text-base flex items-center gap-1.5 cursor-default ${isActive ? "text-[#c40d2e]" : "text-gray-100 hover:text-[#c40d2e]"
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
                    className={`relative font-medium tracking-wide transition-colors text-sm lg:text-[15px] xl:text-base flex items-center gap-1.5 ${isActive ? "text-[#c40d2e]" : "text-gray-100 hover:text-[#c40d2e]"
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
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-3 xl:gap-7 shrink-0">
          {/* Separator */}
          <div className="hidden sm:block w-[1px] h-8 bg-gray-700/60 shrink-0"></div>

          {/* Action Button */}
          <Link
            href={navbarData.button.url}
            className="hidden sm:flex items-center gap-2 bg-[#E5192C] hover:bg-red-700 text-white px-5 sm:px-5 py-2.5 sm:py-3 lg:px-4 lg:py-2 xl:px-5 xl:py-3 rounded-full transition-colors text-sm lg:text-[13px] xl:text-base"
          >
            <span>{navbarData.button.label}</span>
            <ButtonIcon className="text-sm" />
          </Link>

          {/* Separator */}
          <div className="hidden sm:block w-[1px] h-8 bg-gray-700/60 shrink-0"></div>

          {/* Hamburger Menu */}
          <button 
            className="text-white hover:text-[#c40d2e] cursor-pointer transition-colors p-1"
            onClick={() => {
              if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              } else {
                setIsSidebarOpen(!isSidebarOpen);
              }
            }}
          >
            {(isMobileMenuOpen || isSidebarOpen) ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0e14] border-t border-gray-800/60 shadow-2xl z-50 max-h-[calc(100vh-100px)] overflow-y-auto lg:hidden">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navbarData.links.map((link) => {
              // @ts-ignore
              const hasSubLinks = link.subLinks && link.subLinks.length > 0;
              const isActive = pathname === link.url || (hasSubLinks && 
                // @ts-ignore
                link.subLinks.some((sub: any) => pathname === sub.url || pathname === sub.url.split('#')[0])
              );
              const isDropdownOpen = openDropdownId === link.id;
              
              return (
                <div key={link.id} className="flex flex-col border-b border-gray-800/40 last:border-0">
                  {hasSubLinks ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => toggleDropdown(link.id)}
                        className={`flex items-center justify-between font-semibold py-3 w-full text-left transition-colors ${isActive ? "text-[#E5192C]" : "text-gray-100 hover:text-white"}`}
                      >
                        {link.label}
                        <FaChevronDown className={`text-sm transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#E5192C]" : "text-gray-400"}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="flex flex-col pl-4 border-l-2 border-[#E5192C]/30 space-y-1 mb-2 mt-1">
                          {/* @ts-ignore */}
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.url}
                              className={`py-2 text-sm transition-colors ${pathname === sub.url ? "text-[#E5192C] font-medium" : "text-gray-400 hover:text-white"}`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.url}
                      className={`font-semibold py-3 transition-colors ${isActive ? "text-[#E5192C]" : "text-gray-100 hover:text-white"}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
            
            <div className="pt-4 pb-2 mt-2">
              <Link
                href={navbarData.button.url}
                className="flex items-center justify-center gap-2 bg-[#E5192C] text-white px-5 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                <span>{navbarData.button.label}</span>
                <ButtonIcon className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>

    {/* Desktop Sidebar Overlay */}
    <div 
      className={`fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setIsSidebarOpen(false)}
    />

    {/* Desktop Sidebar Panel */}
    <div 
      className={`fixed top-0 right-0 h-full w-[380px] max-w-[90vw] bg-white z-[1000] shadow-2xl transform transition-transform duration-400 ease-in-out overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <Link href="/" onClick={() => setIsSidebarOpen(false)}>
          <Image
            src={navbarData.sidebar.logo}
            alt={navbarData.logoAlt}
            width={250}
            height={80}
            className="w-auto h-12 object-contain"
          />
        </Link>
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="w-9 h-9 cursor-pointer rounded-full bg-[#E5192C] flex items-center justify-center text-white hover:bg-red-700 transition-colors"
        >
          <FaXmark className="text-lg" />
        </button>
      </div>

      {/* About Us */}
      <div className="px-6 py-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-[#111820] mb-3">{navbarData.sidebar.aboutTitle}</h3>
        <p className="text-sm sm:text-sm md:text-base text-gray-500 leading-relaxed">
          {navbarData.sidebar.aboutDescription}
        </p>
      </div>

      {/* Contact Information */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-[#111820] mb-5">{navbarData.sidebar.contactTitle}</h3>
        <div className="flex flex-col gap-5">
          {navbarData.sidebar.contactItems.map((item, index) => {
            const ContactIcon = CONTACT_ICON_MAP[item.icon];
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  {ContactIcon && <ContactIcon className="text-[#E5192C] text-lg" />}
                </div>
                <div>
                  <h4 className="font-bold text-[#111820] text-[15px] mb-0.5">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
