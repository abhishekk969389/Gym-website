"use client";

import React from "react";
import { Program, gymData } from "@/data";
import { motion } from "framer-motion";
import * as FontAwesome from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

export default function ProgramContent({ program }: { program: Program }) {
    if (!program || !program.details) return null;

    const { infoCards, overview, keyBenefits, targetAudience } = program.details;
    const layout = gymData.homePrograms.programDetailsLayout;

    const titleParts = program.title.split(" ");
    const titleFirst = titleParts[0];
    const titleRest = titleParts.slice(1).join(" ");

    return (
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-7 sm:gap-8"
        >
            {/* Header Section */}
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[2px] bg-[#E5192C]"></div>
                    <span className="text-[#0a0e14] font-bold tracking-[0.2em] uppercase text-sm">
                        {layout.headerTitle}
                    </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-3 mt-2 tracking-tighter text-gray-900">
                    {titleFirst} <span className="text-[#E5192C]">{titleRest}</span>
                </h2>
                <p className="text-gray-500 text-base mt-2 sm:text-lg leading-relaxed max-w-3xl">
                    {program.description}
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 py-2">
                {infoCards.map((info, idx) => {
                    const Icon = FontAwesome[info.icon as keyof typeof FontAwesome] as IconType;
                    return (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`flex items-center gap-3 sm:gap-4 ${idx !== infoCards.length - 1 ? 'md:border-r md:border-gray-100' : ''} px-2 sm:px-4 first:pl-0`}
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0">
                                {Icon && <Icon className="text-white text-lg sm:text-xl" />}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#0a0e14] font-black text-[15px] sm:text-[17px] tracking-tight leading-tight mb-1">{info.label}</span>
                                <span className="text-gray-500 font-medium text-xs sm:text-[14px] leading-none">{info.value}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Program Overview */}
            <div className="flex flex-col gap-5 mt-2">
                <h3 className="text-2xl font-black uppercase text-[#0a0e14]">{layout.overviewTitle}</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                    {overview.text}
                </p>
                <div className="bg-[#f8f9fa] rounded-xl p-6 sm:p-8 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                        {overview.list.map((item, idx) => {
                            const Icon = FontAwesome[item.icon as keyof typeof FontAwesome] as IconType;
                            return (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                                    className="flex items-center gap-4 sm:gap-5"
                                >
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E5192C] shadow-sm flex items-center justify-center shrink-0">
                                        {Icon && <Icon className="text-white text-[15px] sm:text-base" />}
                                    </div>
                                    <span className="text-[#3a4454] font-medium text-[15px] sm:text-[16px]">{item.text}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            
        </motion.div>
    );
}
