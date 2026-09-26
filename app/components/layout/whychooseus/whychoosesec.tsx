"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, itemVariantsLeft, itemVariantsRight } from "@/app/utils/animations";
import { site, SectionProps, WhyChooseUsData } from "@/data";
import { FaUserTie, FaStopwatch, FaCoins, FaHeartbeat } from "react-icons/fa";

const ICON_MAP: Record<string, React.ElementType> = {
  FaUserTie,
  FaStopwatch,
  FaCoins,
  FaHeartbeat,
};

export default function WhyChooseUs({ data, className }: SectionProps<WhyChooseUsData> = {}) {
    const resolvedData = data || site.whyChooseUs;

    return (
        <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-[#f8f9fa] relative overflow-hidden">
            {/* Background texture (optional, white/gray mix) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0"></div>
            
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-6"
                >
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
                        <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                        <span className="text-[#E5192C] font-bold tracking-[0.2em] uppercase text-sm md:text-base">{resolvedData.tag}</span>
                        <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                    </motion.div>
                    
                    <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900 italic">
                        <span className="text-[#1a1a1a] mr-3">{resolvedData.titleLine1}</span>
                        <span className="text-[#E5192C]">{resolvedData.titleLine2}</span>
                    </motion.h2>
                    
                    <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        {resolvedData.description}
                    </motion.p>
                </motion.div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-8 xl:gap-12 items-center">
                    
                    {/* Left Cards */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-8 lg:gap-12"
                    >
                        {resolvedData.leftCards.map((card: any) => {
                            const Icon = ICON_MAP[card.icon];
                            return (
                                <motion.div key={card.id} variants={itemVariantsLeft} className="relative ml-[20px] sm:ml-[30px] mt-[20px] sm:mt-[30px]">
                                    {/* Icon Circle */}
                                    <div className="absolute -left-[20px] -top-[25px] sm:-left-[30px] sm:-top-[35px] w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] rounded-full bg-gradient-to-br from-[#ff2a3a] to-[#d21422] shadow-[0_10px_20px_rgba(229,25,44,0.3)] flex items-center justify-center z-20 border-[5px] border-white">
                                        {Icon && <Icon className="text-white text-3xl sm:text-4xl" />}
                                    </div>
                                    
                                    {/* Card Content */}
                                    <div className="bg-white rounded-[16px] shadow-lg shadow-gray-200/60 p-5 sm:p-6 pl-[75px] sm:pl-[90px] relative z-10 min-h-[130px] flex flex-col justify-start border border-gray-100">
                                        <h3 className="text-[17px] sm:text-[18px] md:text-[22px] font-black text-[#0d1624] uppercase mb-3 whitespace-nowrap">
                                            {card.title}
                                            <div className="w-10 h-[3px] bg-[#E5192C] mt-2"></div>
                                        </h3>
                                        <p className="text-[13px] sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Center Image */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="relative mx-auto w-full max-w-[380px] lg:w-[360px] xl:w-[420px] aspect-[3/4] mt-8 mb-8 lg:mt-0 lg:mb-0"
                    >
                        {/* Red Offset Background */}
                        <div 
                            className="absolute top-[-10px] bottom-[-10px] left-[-20px] right-[-20px] bg-[#E5192C] z-0 shadow-lg" 
                            style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' }}
                        ></div>
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full z-10 border-[8px] border-white shadow-xl bg-white overflow-hidden">
                            <Image 
                                src={resolvedData.centerImage.src}
                                alt={resolvedData.centerImage.alt}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Text */}
                            <div className="absolute left-4 sm:left-6 bottom-6 sm:bottom-8 z-20 text-white font-black uppercase italic leading-none transform -skew-x-12 -rotate-2">
                                <div className="text-3xl sm:text-4xl tracking-tighter mb-1 drop-shadow-md">{resolvedData.centerImage.textLine1}</div>
                                <div className="text-3xl sm:text-4xl tracking-tighter mb-1 drop-shadow-md">{resolvedData.centerImage.textLine2}</div>
                                <div className="text-4xl sm:text-5xl tracking-tighter text-[#E5192C] relative drop-shadow-md">
                                    {resolvedData.centerImage.textLine3}
                                    <div className="absolute -bottom-2 left-0 w-[80%] h-[5px] bg-[#E5192C]"></div>
                                </div>
                            </div>
                            {/* Dark Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Right Cards */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-8 lg:gap-12"
                    >
                        {resolvedData.rightCards.map((card: any) => {
                            const Icon = ICON_MAP[card.icon];
                            return (
                                <motion.div key={card.id} variants={itemVariantsRight} className="relative ml-[20px] sm:ml-[30px] mt-[20px] sm:mt-[30px]">
                                    {/* Icon Circle */}
                                    <div className="absolute -left-[20px] -top-[25px] sm:-left-[30px] sm:-top-[35px] w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] rounded-full bg-gradient-to-br from-[#ff2a3a] to-[#d21422] shadow-[0_10px_20px_rgba(229,25,44,0.3)] flex items-center justify-center z-20 border-[5px] border-white">
                                        {Icon && <Icon className="text-white text-3xl sm:text-4xl" />}
                                    </div>
                                    
                                    {/* Card Content */}
                                    <div className="bg-white rounded-[16px] shadow-lg shadow-gray-200/60 p-5 sm:p-6 pl-[75px] sm:pl-[90px] relative z-10 min-h-[130px] flex flex-col justify-start border border-gray-100">
                                        <h3 className="text-[17px] sm:text-[18px] md:text-[22px] font-black text-[#0d1624] uppercase mb-3 whitespace-nowrap">
                                            {card.title}
                                            <div className="w-10 h-[3px] bg-[#E5192C] mt-2"></div>
                                        </h3>
                                        <p className="text-[13px] sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}



