"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gymData } from "@/data";
import { FaUsers, FaDumbbell, FaTrophy, FaGlobe } from "react-icons/fa6";

const ICON_MAP: Record<string, React.ElementType> = {
    FaUsers,
    FaDumbbell,
    FaTrophy,
    FaGlobe
};

export default function OurImpact() {
    const data = gymData.homeStats;

    return (
        <section className="bg-black relative overflow-hidden mt-8 sm:mt-10 md:mt-12 lg:mt-14  py-8  border-y border-gray-900">
            {/* Background Image on Right */}
            <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[50%] z-0">
                <Image
                    src={data.image}
                    alt="Our Impact"
                    fill
                    className="object-contain object-right lg:object-right-bottom opacity-90"
                />
                {/* Gradient to blend image into the black background */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent hidden lg:block w-[50%]"></div>
                <div className="absolute inset-0 bg-black/80 lg:hidden"></div> {/* Darken on mobile to make text readable */}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header Content */}
                <div className="max-w-2xl mb-6">
                    {/* Tag */}
                    <div className="flex items-center gap-3 mb-4 w-max">
                        <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-gray-300 tracking-[0.3em] text-xs sm:text-sm font-medium uppercase">
                            {data.tag}
                        </span>
                        <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tighter">
                        <span className="text-white">{data.titleLine1} </span>
                        <span className="text-[#E5192C]">{data.titleLine2}</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white text-sm sm:text-base max-w-lg">
                        {data.subtitle}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-8 md:gap-4 lg:gap-8">
                    {data.stats.map((stat, index) => {
                        const Icon = ICON_MAP[stat.icon];
                        return (
                            <div key={index} className="flex items-center">
                                <div className="flex items-center gap-4 sm:gap-5">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gray-700 bg-gray-900/40 flex items-center justify-center shadow-[inset_0_0_15px_rgba(229,25,44,0.05)] transition-all hover:border-[#E5192C]/50">
                                        {Icon && <Icon className="text-[#E5192C] text-2xl sm:text-3xl" />}
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E5192C] leading-none mb-1 tracking-tight">
                                            {stat.value}
                                        </div>
                                        <div className="text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                                {/* Separator Line (except for last item) */}
                                {index < data.stats.length - 1 && (
                                    <div className="hidden md:block w-[1px] h-12 lg:h-16 bg-gray-800 ml-4 lg:ml-8"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
