import React from "react";
import { IconType } from "react-icons";
import {
  FaDumbbell,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import { gymData, TopbarData } from "@/data";

// Map JSON icon name strings to react-icons components
const ICON_MAP: Record<string, IconType> = {
  FaDumbbell,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
};

const topbarData: TopbarData = gymData.topbar;

export default function Topbar() {
  const TaglineIcon = ICON_MAP[topbarData.taglineIcon] || FaDumbbell;
  const PhoneIcon = ICON_MAP[topbarData.phoneIcon] || FaPhone;
  const EmailIcon = ICON_MAP[topbarData.emailIcon] || FaEnvelope;
  const ClockIcon = ICON_MAP[topbarData.workingHoursIcon] || FaClock;

  return (
    <header className="w-full bg-[#0d1217] text-white text-xs sm:text-sm border-b border-gray-800/40 select-none overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between min-h-[40px] sm:min-h-[44px]">
        {/* Left Side: Slanted Red Banner bleeding to left edge */}
        <div className="relative bg-[#c40d2e] py-2 sm:py-3 flex items-center gap-2.5 sm:gap-3 font-medium tracking-wide shadow-md z-10 md:[clip-path:polygon(-100vw_0,100%_0,calc(100%-35px)_100%,-100vw_100%)] md:pr-18 lg:pr-12 xl:pr-18 shrink-0 before:content-[''] before:absolute before:bg-[#c40d2e] before:w-[100vw] before:h-full before:right-full before:top-0">
          {TaglineIcon && (
            <TaglineIcon className="text-white text-lg sm:text-xl lg:text-lg xl:text-xl shrink-0 h-6 w-6 transform" />
          )}
          <span className="whitespace-nowrap font-sans text-white tracking-tight text-xs sm:text-sm lg:text-xs xl:text-sm">
            {topbarData.tagline}
          </span>
        </div>

        {/* Right Side: Contact Info & Social Icons */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 lg:gap-3 xl:gap-6 py-2 sm:py-0 text-gray-200">
          {/* Phone */}
          <a
            href={topbarData.phoneLink}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-red-500 transition-colors group shrink-0"
          >
            {PhoneIcon && (
              <PhoneIcon className="text-[#c40d2e] text-lg sm:text-xl lg:text-lg xl:text-xl shrink-0 group-hover:scale-110 transition-transform" />
            )}
            <span className="whitespace-nowrap text-xs sm:text-sm lg:text-xs xl:text-sm tracking-wide font-medium">
              {topbarData.phone}
            </span>
          </a>

          {/* Separator */}
          <div className="hidden sm:block w-[1px] h-5 bg-gray-400 shrink-0"></div>

          {/* Email */}
          <a
            href={topbarData.emailLink}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-red-500 transition-colors group shrink-0"
          >
            {EmailIcon && (
              <EmailIcon className="text-[#c40d2e] text-lg sm:text-xl lg:text-lg xl:text-xl shrink-0 group-hover:scale-110 transition-transform" />
            )}
            <span className="whitespace-nowrap text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">
              {topbarData.email}
            </span>
          </a>

          {/* Separator */}
          <div className="hidden md:block w-[1px] h-5 bg-gray-400 shrink-0"></div>

          {/* Working Hours */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 shrink-0">
            {ClockIcon && (
              <ClockIcon className="text-[#c40d2e] text-lg sm:text-xl lg:text-lg xl:text-xl shrink-0" />
            )}
            <span className="whitespace-nowrap text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">
              {topbarData.workingHours}
            </span>
          </div>

          {/* Separator */}
          <div className="hidden xl:block w-[1px] h-5 bg-gray-400 shrink-0"></div>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {topbarData.socialLinks.map((social) => {
              const SocialIcon = ICON_MAP[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white flex items-center justify-center text-white hover:border-[#c40d2e] hover:bg-[#c40d2e] transition-all duration-200 group"
                >
                  {SocialIcon && (
                    <SocialIcon className="text-[13px] sm:text-[15px] group-hover:scale-110 transition-transform" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}