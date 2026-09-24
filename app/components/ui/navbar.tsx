"use client";


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import { gymData, NavbarData } from "@/data";

const ICON_MAP: Record<string, IconType> = {
  FaArrowRight,
};

interface NavbarProps {
  data?: NavbarData;
}

export default function Navbar({ data = gymData.navbar }: NavbarProps) {
  const pathname = usePathname();
  const ButtonIcon = ICON_MAP[data.button.icon] || FaArrowRight;

  return (
    <nav className="w-full bg-[#0a0e14] text-white py-3 sm:py-4 border-b border-gray-800/40">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-main.png"
            alt={data.logoAlt}
            width={300}
            height={80}
            className="w-auto h-14 sm:h-16 lg:h-[72px] object-contain"
            priority
          />
        </Link>

        {/* Middle: Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 ml-auto mr-4 lg:mr-6 xl:mr-9">
          {data.links.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative font-medium tracking-wide transition-colors text-sm xl:text-base ${
                  isActive ? "text-[#c40d2e]" : "text-gray-100 hover:text-[#c40d2e]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#c40d2e]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-7 shrink-0">
          {/* Separator */}
          <div className="hidden sm:block w-[1px] h-8 bg-gray-700/60 shrink-0"></div>

          {/* Action Button */}
          <Link
            href={data.button.url}
            className="hidden sm:flex items-center gap-2 bg-[#E5192C] hover:bg-red-700 text-white px-5 sm:px-5 py-2.5 sm:py-3 rounded-full transition-colors text-sm xl:text-base"
          >
            <span>{data.button.label}</span>
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
