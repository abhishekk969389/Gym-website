"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaAngleRight } from 'react-icons/fa';
import { site } from "@/data";
import { motion } from 'framer-motion';
import { containerVariants, itemVariantsLeft } from '@/app/utils/animations';

type SubBannerKey = keyof typeof site.subBanners;

interface SubBannerProps {
  bannerKey: SubBannerKey;
  customTitlePart1?: string;
  customTitlePart2?: string;
  customBreadcrumbs?: { id: number; label: string; url: string }[];
}

const subBannersData = site.subBanners;

const SubBanner = ({ bannerKey, customTitlePart1, customTitlePart2, customBreadcrumbs }: SubBannerProps) => {
  const data = subBannersData[bannerKey];

  if (!data) return null;

  const titlePart1 = customTitlePart1 || data.titlePart1;
  const titlePart2 = customTitlePart2 || data.titlePart2;
  const breadcrumbs = customBreadcrumbs || data.breadcrumbs;

  return (
    <section className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] flex items-center bg-[#0d1117] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={data.backgroundImage}
          alt={`${titlePart1} ${titlePart2}`}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay so background blends smoothly */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/25 to-transparent z-10" />
      </div>

      {/* Main Container */}
      <motion.div 
        className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-20 flex justify-start items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        
        {/* Semi-Transparent Rectangle Box (Holding Content + Red Slash Inside) */}
        <motion.div 
          className="relative w-full sm:w-[580px] md:w-[720px] bg-black/30 backdrop-blur-[1px] border py-10 sm:py-14 pl-8 sm:pl-12 pr-16 sm:pr-24 flex flex-col items-start justify-center text-left"
          variants={itemVariantsLeft}
        >
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black text-white tracking-tight leading-none mb-4">
            {titlePart1} <span className="text-[#E5192C]">{titlePart2}</span>
          </h1>

          {/* Breadcrumb Links */}
          <div className="flex items-center gap-2 text-[15px] sm:text-[17px] font-semibold tracking-wide">
            <FaHome className="text-[#E5192C] text-[20px] mb-[2px]" />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.id}>
                <Link
                  href={crumb.url}
                  className={`transition-colors duration-200 ${
                    index === breadcrumbs.length - 1
                      ? 'text-[#E5192C]'
                      : 'text-white/90 hover:text-[#E5192C]'
                  }`}
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <FaAngleRight className="text-gray-400 text-[16px] mx-0.5" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Red Slanted Accent - Box ke ANDAR, Right side aur Bottom par */}
          <div className="absolute right-6 sm:right-5 bottom-4 sm:bottom-1 w-[13px] sm:w-[18px] h-[65px] sm:h-[80px] bg-[#E5192C] -skew-x-[25deg] shadow-lg shadow-red-600/30" />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default SubBanner;