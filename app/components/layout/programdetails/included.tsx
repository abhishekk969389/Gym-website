"use client";

import React from "react";
import { Program, gymData } from "@/data";
import { motion } from "framer-motion";
import * as FontAwesome from "react-icons/fa";
import { IconType } from "react-icons";

export default function ProgramIncluded({ program }: { program: Program }) {
    if (!program || !program.details) return null;

    const { whatsIncluded } = program.details;
    const layout = gymData.homePrograms.programDetailsLayout;

    return (
        <div className="flex flex-col gap-8 w-full mt-10 md:mt-16">
            <h3 className="text-2xl font-black uppercase text-[#0a0e14]">{layout.includedTitle}</h3>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-gray-200 border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
                {whatsIncluded.map((item, idx) => {
                    const Icon = FontAwesome[item.icon as keyof typeof FontAwesome] as IconType;
                    return (
                        <div 
                            key={idx}
                            className="bg-white flex flex-col items-center justify-center p-6 sm:p-8 text-center group hover:bg-[#fafafa] transition-colors"
                        >
                            <div className="mb-4 flex items-center justify-center">
                                {Icon && <Icon className="text-[#E5192C] text-[32px] sm:text-[36px]" />}
                            </div>
                            <span className="text-[#1a2130] font-semibold text-[14px] leading-tight max-w-[120px]">{item.text}</span>
                        </div >
                    );
                })}
            </motion.div>
        </div>
    );
}
