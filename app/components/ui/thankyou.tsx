"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { site, SectionProps, ThankYouSecData } from '@/data';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, itemVariantsLeft, itemVariantsRight } from '@/app/utils/animations';

export default function ThankYou({ data, className }: SectionProps<ThankYouSecData> = {}) {
  const resolvedData = data || site.thankYouSec;

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e14] -mb-8 sm:-mb-10 md:-mb-12 lg:-mb-14">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={resolvedData.backgroundImage} 
          alt={`${resolvedData.titlePart1} ${resolvedData.titlePart2}`}
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/60 to-transparent z-10" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full md:-mt-2 lg:-mt-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 bg-[#E5192C] blur-[30px] opacity-40 rounded-full"></div>
          <FaCheckCircle className="relative text-[#E5192C] text-7xl sm:text-8xl md:text-9xl drop-shadow-[0_0_15px_rgba(229,25,44,0.5)]" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-lg mb-4">
          {resolvedData.titlePart1} <span className="text-[#E5192C]">{resolvedData.titlePart2}</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-gray-300 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 drop-shadow-md leading-relaxed">
          {resolvedData.descriptionLine1}<br className="hidden sm:block" />
          {resolvedData.descriptionLine2}
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link 
            href={resolvedData.buttonLink}
            className="group flex items-center gap-3 bg-[#E5192C] hover:bg-red-700 text-white text-lg font-bold px-10 py-4 rounded transition-all duration-300 shadow-[0_4px_20px_rgba(229,25,44,0.4)] hover:shadow-[0_6px_25px_rgba(229,25,44,0.6)] hover:-translate-y-1"
          >
            {resolvedData.buttonText}
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
