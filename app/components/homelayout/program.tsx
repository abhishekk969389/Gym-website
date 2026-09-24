"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/utils/animations";
import { gymData } from "@/data";
import { 
    FaDumbbell, 
    FaFire, 
    FaPersonRunning, 
    FaWeightHanging, 
    FaUsers, 
    FaArrowRight 
} from "react-icons/fa6";
import { IconType } from "react-icons";

const ICON_MAP: Record<string, IconType> = {
    FaDumbbell,
    FaFire,
    FaPersonRunning,
    FaWeightHanging,
    FaUsers,
    FaArrowRight
};

interface HomeProgramsProps {
    isProgramPage?: boolean;
}

export default function HomePrograms({ isProgramPage = false }: HomeProgramsProps) {
    const data = gymData.homePrograms;

    return (
        <section className={`${isProgramPage ? "bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14" : "bg-[#0a0e14] mt-8 sm:mt-10 md:mt-12 lg:mt-14"} relative overflow-hidden`}>
            <div className={`relative z-10 ${isProgramPage ? "" : "py-8 sm:py-10 md:py-12 lg:py-14"} max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8`}>
                
                {/* Header Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col items-center justify-center mb-6"
                >
                    {/* Tag */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-1">
                        <div className="w-16 sm:w-20 h-[1px] bg-[#E5192C]"></div>
                        <span className={`${isProgramPage ? "text-black" : "text-gray-300"} tracking-[0.3em] text-xs sm:text-sm font-medium uppercase`}>
                            {data.tag}
                        </span>
                        <div className="w-16 sm:w-20 h-[1px] bg-[#E5192C]"></div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2 variants={itemVariants} className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2 tracking-tighter">
                        <span className={isProgramPage ? "text-black" : "text-white"}>{data.titleLine1} </span>
                        <span className="text-[#E5192C]">{data.titleLine2}</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p variants={itemVariants} className={`${isProgramPage ? "text-gray-600" : "text-white"} text-center text-sm sm:text-base max-w-lg mx-auto leading-relaxed`}>
                        {data.subtitle}
                    </motion.p>
                </motion.div>

                {/* Programs Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {data.programs.map((program, index) => {
                        const Icon = ICON_MAP[program.icon];
                        return (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className={`relative overflow-hidden ${isProgramPage ? "bg-white border-gray-200 hover:border-gray-300" : "bg-black border-gray-700 hover:border-gray-500"} border flex flex-col h-[240px] sm:h-[260px] group transition-colors duration-300`}
                            >
                                {/* Background Image (Right Side) */}
                                <div className="absolute right-0 top-0 bottom-0 w-[65%] z-0">
                                    <Image
                                        src={program.bgImage}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Overlay (Left Side with Skewed Cut) */}
                                <div 
                                    className={`absolute left-0 top-0 bottom-0 z-10 w-[65%] ${isProgramPage ? "bg-white shadow-[10px_0_15px_-5px_rgba(0,0,0,0.1)]" : "bg-[#080808]"}`}
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}
                                >
                                    <div className="relative w-[90%] h-full p-4 lg:p-5 flex flex-col">
                                        {/* Top Row: Number & Icon */}
                                        <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                            <span 
                                                className="text-4xl sm:text-5xl font-black text-transparent"
                                                style={{ WebkitTextStroke: isProgramPage ? '1px rgba(0,0,0,0.3)' : '1px rgba(255,255,255,0.7)' }}
                                            >
                                                {program.number}
                                            </span>
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0 shadow-lg">
                                                {Icon && <Icon className="text-white text-lg" />}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-1">
                                            <h3 className={`${isProgramPage ? "text-[#0d1624]" : "text-white"} text-base lg:text-lg font-black mb-1 whitespace-nowrap overflow-hidden text-ellipsis`}>
                                                {program.title}
                                            </h3>
                                            <p className={`${isProgramPage ? "text-gray-600" : "text-gray-300"} text-xs sm:text-[13px] md:text-[15px] leading-snug mb-3 pr-2`}>
                                                {program.description}
                                            </p>

                                            {/* Link */}
                                            <Link 
                                                href={program.url} 
                                                className={`inline-flex items-center gap-2 ${isProgramPage ? "text-[#E5192C] hover:text-black" : "text-white hover:text-gray-300"} text-[13px] font-bold group/link transition-colors mt-auto`}
                                            >
                                                {data.learnMoreText}
                                                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isProgramPage ? "border-[#E5192C] group-hover/link:bg-[#E5192C]" : "border-white group-hover/link:bg-white"}`}>
                                                    <FaArrowRight className={`text-[12px] transition-colors ${isProgramPage ? "text-[#E5192C] group-hover/link:text-white" : "text-white group-hover/link:text-black"}`} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Button */}
                {!isProgramPage && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex justify-center"
                    >
                        <div className="flex items-center">
                            <div className="w-16 sm:w-24 h-[1px] bg-white/80"></div>
                        <Link 
                            href={data.button.url}
                            className="mx-4 flex items-center gap-3 bg-[#E5192C] text-white px-6  py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 group"
                        >
                            <span className="font-semibold tracking-wider text-sm sm:text-base">
                                {data.button.label}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-[#E5192C] transition-colors">
                                <FaArrowRight className="text-white text-[14px]" />
                            </div>
                        </Link>
                        <div className="w-16 sm:w-24 h-[1px] bg-white/80"></div>
                    </div>
                </motion.div>
                )}

            </div>
        </section>
    );
}
