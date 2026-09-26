"use client";

import React from "react";
import { Program, gymData } from "@/data";
import { motion } from "framer-motion";
import * as FontAwesome from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

export default function ProgramBenefits({ program }: { program: Program }) {
    if (!program || !program.details) return null;

    const { keyBenefits, targetAudience } = program.details;
    const layout = gymData.homePrograms.programDetailsLayout;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full mt-12 md:mt-16"
        >
            {/* Three Columns: Benefits, Target Audience, CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
                {/* Key Benefits */}
                <div className="flex flex-col gap-6 lg:border-r border-gray-200 lg:pr-8">
                    <div>
                        <h3 className="text-xl sm:text-[22px] font-black text-[#0a0e14] mb-3 tracking-tight">{layout.benefitsTitle}</h3>
                        <div className="w-10 h-[3px] bg-[#E5192C]"></div>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                        {keyBenefits.map((benefit, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <div className="w-5 h-5 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0 mt-0.5">
                                    <FontAwesome.FaCheck className="text-white text-[11px]" />
                                </div>
                                <span className="text-gray-500 text-[15px] leading-snug">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Who Is This Program For */}
                <div className="flex flex-col gap-6 lg:border-r border-gray-200 lg:pr-8">
                    <div>
                        <h3 className="text-xl sm:text-[22px] font-black text-[#0a0e14] mb-3 tracking-tight">{layout.audienceTitle}</h3>
                        <div className="w-10 h-[3px] bg-[#E5192C]"></div>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                        {targetAudience.map((target, idx) => {
                            const Icon = FontAwesome[target.icon as keyof typeof FontAwesome] as IconType;
                            return (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    {Icon && <Icon className="text-[#E5192C] text-[18px] shrink-0 mt-0.5" />}
                                    <span className="text-gray-500 text-[15px] leading-snug">{target.text}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Ready to get started box */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#0a0e14] rounded-xl p-8 flex flex-col gap-5 relative overflow-hidden group shadow-xl h-full"
                >
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#E5192C] opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <FaCalendarAlt className="text-[#E5192C] text-[40px] mb-1 relative z-10" />
                    <h3 className="text-white text-[26px] font-black tracking-tight relative z-10 leading-none">{layout.cta.title}</h3>
                    <p className="text-gray-300 text-[15px] leading-relaxed mb-1 relative z-10">
                        {layout.cta.description}
                    </p>
                    
                    <Link 
                        href={layout.cta.buttonLink}
                        className="bg-[#E5192C] text-white px-6 py-3.5 rounded text-center font-bold text-[15px] hover:bg-white hover:text-[#0a0e14] transition-colors relative z-10 flex items-center justify-center gap-2 mt-auto"
                    >
                        {layout.cta.buttonText}
                        <FaArrowRight className="text-sm" />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}
