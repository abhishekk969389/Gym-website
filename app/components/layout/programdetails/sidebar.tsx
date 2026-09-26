"use client";

import React from "react";
import Image from "next/image";
import { Program } from "@/data";
import { motion } from "framer-motion";

export default function ProgramSidebar({ program }: { program: Program }) {
    if (!program || !program.details) return null;

    const sidebar = program.details.sidebar;

    return (
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[500px] xl:w-[540px] shrink-0 flex flex-col"
        >
            <div className="relative w-full h-[550px] sm:h-[600px] lg:h-full rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-black flex-1">
                <Image
                    src={sidebar.image}
                    alt={program.title}
                    fill
                    className="object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/40 to-transparent"></div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute bottom-10 left-8 sm:left-10 right-8 sm:right-10 z-10 flex items-stretch gap-4 sm:gap-5"
                >
                    <motion.div 
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="w-[4px] sm:w-[5px] bg-[#E5192C] shrink-0 origin-bottom"
                    ></motion.div>
                    <div className="flex flex-col py-1">
                        <h2 className="text-white text-[38px] sm:text-[46px] font-black uppercase leading-[1] tracking-tighter mb-3">
                            {sidebar.textPart1}<br />
                            <span className="text-[#E5192C]">{sidebar.textPart2}</span>
                        </h2>
                        <p className="text-white text-[13px] sm:text-[14px] tracking-[0.1em] uppercase font-bold">
                            {sidebar.subText}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
