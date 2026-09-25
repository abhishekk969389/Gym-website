"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gymData, MissionSecData } from "@/data";

// @ts-ignore
const data: MissionSecData = gymData.missionSec;

export default function MissionSec() {
    return (
        <section className="bg-white">
            {/* Our Mission Section */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-8">
                        
                        {/* Text Content */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                                <span className="text-gray-900 tracking-[0.2em] text-sm font-bold uppercase">
                                    {data.mission.badge}
                                </span>
                                <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-black uppercase mb-2 tracking-tighter text-gray-900 italic">
                                <span className="block">{data.mission.titlePart1}</span>
                                <span className="text-[#E5192C] block relative inline-block">
                                    {data.mission.titlePart2}
                                    <div className="absolute -bottom-2 left-0 w-18 h-[3px] bg-[#E5192C]"></div>
                                </span>
                            </h2>

                            <div className="space-y-4">
                                {data.mission.paragraphs.map((para: string, idx: number) => (
                                    <p key={idx} className="text-gray-600 text-sm text-justify sm:text-sm md:text-base    leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image Block */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8"
                        >
                            <div className="relative w-full">
                                {/* Red Corner Accents */}
                                <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-24 h-24 sm:w-32 sm:h-32 border-t-[12px] sm:border-t-[16px] border-l-[12px] sm:border-l-[16px] border-[#E5192C] z-0"></div>
                                <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-24 h-24 sm:w-32 sm:h-32 border-b-[12px] sm:border-b-[16px] border-r-[12px] sm:border-r-[16px] border-[#E5192C] z-0"></div>

                                {/* Main Image Container */}
                                <div className="relative w-full aspect-[4/3] bg-gray-900 shadow-2xl z-10 overflow-hidden group">
                                <Image
                                    src={data.mission.image}
                                    alt="Our Mission"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Overlaid Text Top Right */}
                                <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-right">
                                    <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight tracking-tight">
                                        STRONGER<br />
                                        THAN<br />
                                        <span className="text-[#E5192C] relative inline-block">
                                            YESTERDAY
                                            <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E5192C]"></div>
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-8">
                        
                        {/* Image Block */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8"
                        >
                            <div className="relative w-full">
                                {/* Red Corner Accents */}
                                <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-24 h-24 sm:w-32 sm:h-32 border-t-[12px] sm:border-t-[16px] border-l-[12px] sm:border-l-[16px] border-[#E5192C] z-0"></div>
                                <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-24 h-24 sm:w-32 sm:h-32 border-b-[12px] sm:border-b-[16px] border-r-[12px] sm:border-r-[16px] border-[#E5192C] z-0"></div>

                                {/* Main Image Container */}
                                <div className="relative w-full aspect-[4/3] bg-gray-900 shadow-2xl z-10 overflow-hidden group">
                                <Image
                                    src={data.vision.image}
                                    alt="Our Vision"
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>

                                {/* Overlaid Text Bottom Left */}
                                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-left">
                                    <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase leading-[1.1] tracking-tight -rotate-3 drop-shadow-lg">
                                        BUILD<br />
                                        A HEALTHIER<br />
                                        STRONGER<br />
                                        <span className="text-[#E5192C] relative inline-block mt-1">
                                            TOMORROW
                                            <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[4px] bg-[#E5192C]"></div>
                                        </span>
                                    </h3>
                                </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                                <span className="text-gray-900 tracking-[0.2em] text-sm font-bold uppercase">
                                    {data.vision.badge}
                                </span>
                                <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-black uppercase mb-2 tracking-tighter text-gray-900 italic">
                                <span className="block">{data.vision.titlePart1}</span>
                                <span className="text-[#E5192C] block relative inline-block">
                                    {data.vision.titlePart2}
                                      <div className="absolute -bottom-2 left-0 w-18 h-[3px] bg-[#E5192C]"></div>
                                </span>
                            </h2>

                            <div className="space-y-4">
                                {data.vision.paragraphs.map((para: string, idx: number) => (
                                    <p key={idx} className="text-gray-600 text-justify text-sm sm:text-sm md:text-base leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
