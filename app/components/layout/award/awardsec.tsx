"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUsers, FaStar, FaTrophy, FaArrowRight } from "react-icons/fa";
import { site, AwardSecData, SectionProps } from "@/data";

// @ts-ignore
const data: AwardSecData = site.awardSec;

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'FaShieldAlt': return <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6" />;
        case 'FaUsers': return <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />;
        case 'FaStar': return <FaStar className="w-5 h-5 sm:w-6 sm:h-6" />;
        case 'FaTrophy': return <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6" />;
        default: return <FaStar className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
};

export default function AwardSec({ data: propData, className }: SectionProps<AwardSecData> = {}) {
    const data = propData || site.awardSec;
    return (
        <section className="bg-white">
            {/* Top Section */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                    <span className="text-gray-900 tracking-[0.2em] text-sm font-bold uppercase">
                        {data.topSection.badge}
                    </span>
                    <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900">
                    {data.topSection.titlePart1} <span className="text-[#E5192C]">{data.topSection.titlePart2}</span>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6">
                    {data.topSection.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.topSection.features.map((feature: any, idx: number) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#E5192C] text-white flex items-center justify-center">
                                {getIcon(feature.icon)}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Section (Dark bg with Awards) */}
            <div className="relative pt-4 pb-12 mt-8 bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={data.bottomSection.bgImage}
                        alt="Awards Background"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>

                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-10 items-center">
                        
                        {/* Left Column - Intro */}
                        <div className="w-full lg:w-[25%] xl:w-[22%] shrink-0 text-white">
                            <div className="flex items-center gap-3 ">
                                <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                                <span className="tracking-[0.2em] text-sm font-bold uppercase">
                                    {data.bottomSection.badge}
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-3 tracking-tighter">
                                {data.bottomSection.title}
                            </h2>

                            <p className="text-white text-sm sm:text-sm md:text-base leading-relaxed mb-4">
                                {data.bottomSection.description}
                            </p>

                            <Link 
                                href={data.bottomSection.buttonLink}
                                className="inline-flex items-center rounded-md text-[16px] justify-center bg-[#E5192C] text-white px-6 py-3 tracking-wider text-sm transition-all hover:bg-[#c41525] group gap-2"
                            >
                                {data.bottomSection.buttonText}
                                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        {/* Right Column - Awards Grid */}
                        <div className="w-full lg:w-[75%] xl:w-[78%]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
                                {data.bottomSection.awards.map((award: any, idx: number) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                                        className="group"
                                    >
                                        <div className="text-left h-full flex flex-col justify-end">
                                            {/* Award Image Area */}
                                            <div className="relative w-full h-48 sm:h-56 lg:h-64 z-10 mb-[-10px] pointer-events-none">
                                                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                                                    <Image
                                                        src={award.image}
                                                        alt={award.title}
                                                        fill
                                                        className="object-contain object-bottom drop-shadow-2xl mix-blend-screen"
                                                    />
                                                </div>
                                            </div>
                                            
                                            {/* Award Text Area */}
                                            <div className="bg-[#F8F9FA] rounded-md p-3 flex-grow flex flex-col justify-start relative z-20 shadow-xl border-t-2 border-[#E5192C]/0 group-hover:border-[#E5192C] transition-colors duration-300">
                                                <h3 className="text-[14px] sm:text-[16px] lg:text-[13px] xl:text-[15px] font-black text-gray-900 mb-1 leading-tight tracking-tight whitespace-nowrap truncate">
                                                    {award.title}
                                                </h3>
                                                <span className="text-[#E5192C] font-bold text-[15px] sm:text-[17px] block ">
                                                    {award.year}
                                                </span>
                                                <div className="w-8 h-[2px] bg-[#E5192C] opacity-50 mb-2"></div>
                                                <p className="text-gray-500 text-[13px] sm:text-[14px] leading-snug">
                                                    {award.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
