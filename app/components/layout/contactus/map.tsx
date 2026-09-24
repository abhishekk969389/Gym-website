"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDumbbell, FaUsers, FaShower } from "react-icons/fa";
import { gymData } from "@/data";
import { containerVariants, itemVariants } from "@/app/utils/animations";

const ICON_MAP: Record<string, React.ElementType> = {
    FaDumbbell,
    FaUsers,
    FaShower
};

export default function MapSec() {
    const data = gymData.mapSec;

    return (
        <section className="bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 relative">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col lg:flex-row gap-6 lg:gap-6 h-auto lg:h-[450px]"
                >
                    {/* Left Column (Google Map) */}
                    <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                        <iframe
                            src={data.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </motion.div>

                    {/* Right Column (Info Card) */}
                    <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative h-auto lg:h-full rounded-2xl overflow-hidden shadow-xl border border-slate-800">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={data.infoCard.bgImage}
                                alt="Gym background"
                                fill
                                className="object-cover"
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-[#080d14]/90"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
                            
                            <div>
                                {/* Tag with skewed background */}
                                <div className="inline-block relative mb-6">
                                    <div className="absolute inset-0 bg-[#E5192C] -skew-x-12 transform origin-bottom-left"></div>
                                    <span className="relative z-10 px-4 py-1.5 text-white text-sm sm:text-base font-bold italic uppercase tracking-wider block">
                                        {data.infoCard.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tight mb-4 leading-none">
                                    <span className="text-white block">{data.infoCard.titleLine1}</span>
                                    <span className="text-[#E5192C] block">{data.infoCard.titleLine2}</span>
                                </h2>

                                {/* Description */}
                                <p className="text-gray-300 text-sm sm:text-base max-w-md leading-relaxed mb-8">
                                    {data.infoCard.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex justify-between items-start pt-6 border-t border-gray-700/50 mt-auto">
                                {data.infoCard.features.map((feature, index) => {
                                    const Icon = ICON_MAP[feature.icon];
                                    return (
                                        <React.Fragment key={feature.id}>
                                            <div className="flex flex-col items-center text-center flex-1">
                                                {Icon && <Icon className="text-3xl sm:text-4xl text-[#E5192C] mb-3" />}
                                                <span className="text-white text-xs sm:text-sm font-medium whitespace-pre-line leading-tight">
                                                    {feature.title}
                                                </span>
                                            </div>
                                            {index < data.infoCard.features.length - 1 && (
                                                <div className="w-[1px] h-12 bg-gray-700/50 hidden sm:block mt-2"></div>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
