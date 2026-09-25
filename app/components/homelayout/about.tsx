"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariantsLeft, itemVariantsRight } from "@/app/utils/animations";
import { FaCheck } from "react-icons/fa6";
import { gymData } from "@/data";

const homeData = gymData.homeAbout;
const aboutData = gymData.aboutPageAbout;

export default function HomeAbout({ isAboutPage = false }: { isAboutPage?: boolean }) {


    const image1 = isAboutPage ? aboutData.image1 : homeData.image1;
    const image2 = isAboutPage ? aboutData.image2 : homeData.image2;
    const badge = isAboutPage ? aboutData.badge : homeData.badge;

    return (
        <section className="bg-[#f8f9fa] mt-8 sm:mt-10 md:mt-12 lg:mt-14 relative overflow-hidden">
            {/* Very faint background texture can go here if needed */}
            <div className="absolute inset-0 bg-white opacity-50 z-0"></div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left: Images */}
                    <motion.div 
                        variants={itemVariantsLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-start relative"
                    >
                        <div className="relative w-full max-w-[600px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square">
                            {/* Main large image (Bottom Right) */}
                            <div className="absolute bottom-0 right-[-5%] lg:right-[-10%] w-[95%] h-[85%] z-10">
                                <Image
                                    src={image2}
                                    alt="Fitness Model"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Smaller image (Top Left) */}
                            <div className="absolute top-0 -left-[10px] sm:-left-[16px] w-[50%] h-[55%] z-20 border-[10px] sm:border-[16px] border-white bg-white">
                                <Image
                                    src={image1}
                                    alt="Fitness Training"
                                    fill
                                    className="object-cover"
                                />
                                
                                {/* Badge */}
                                <div className="absolute bottom-0 right-0 bg-[#E5192C] text-white py-3 px-4 sm:py-4 sm:px-6 flex flex-col items-center justify-center z-30">
                                    <span className="text-3xl sm:text-5xl lg:text-5xl font-black leading-none mb-1">{badge.number}</span>
                                    <span className="text-[9px] sm:text-[11px] font-bold tracking-wider text-center uppercase whitespace-nowrap">
                                        {badge.text}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className={`w-full lg:w-1/2 flex flex-col items-start pt-4 lg:pt-0 pl-0 lg:pl-10 ${isAboutPage ? 'xl:pl-20' : 'xl:pl-16'}`}
                    >
                        {isAboutPage ? (
                            <>
                                {/* About Page Specific Content */}
                                <motion.p variants={itemVariantsRight} className="text-[#333] text-sm md:text-[14px] font-bold tracking-[0.2em] uppercase mb-1">
                                    {aboutData.tagline}
                                </motion.p>
                                
                                <motion.h2 variants={itemVariantsRight} className="text-4xl sm:text-4xl md:text-6xl lg:text-[64px]     font-black italic leading-none mb-5 tracking-tight flex items-baseline gap-4">
                                    <span className="text-[#1a1a1a]">{aboutData.titlePart1}</span>
                                    <span className="text-[#E5192C]">{aboutData.titlePart2}</span>
                                </motion.h2>

                                {/* Small Red Divider */}
                                <motion.div variants={itemVariantsRight} className="w-[50px] h-[3px] bg-[#E5192C] mb-6"></motion.div>

                                {/* Paragraphs */}
                                <motion.div variants={itemVariantsRight} className="flex flex-col gap-5 text-gray-600 text-[15px] md:text-[18px] leading-[1.5] max-w-[620px]">
                                    {aboutData.paragraphs.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </motion.div>
                            </>
                        ) : (
                            <>
                                {/* Home Page Specific Content */}
                                {/* Red Tag */}
                                <motion.div variants={itemVariantsRight} className="bg-[#E5192C] text-white px-3 py-1 mb-4 inline-block transform -skew-x-12">
                                    <span className="inline-block transform skew-x-12 text-sm md:text-base font-bold tracking-wider italic uppercase">
                                        {homeData.tag}
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h2 variants={itemVariantsRight} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-none mb-4 tracking-tight">
                                    <span className="text-[#1a1a1a] block">{homeData.titleLine1}</span>
                                    <span className="text-[#E5192C] block whitespace-nowrap">{homeData.titleLine2}</span>
                                </motion.h2>

                                {/* Subtitle */}
                                <motion.h3 variants={itemVariantsRight} className="text-xl sm:text-2xl text-[#1a1a1a] font-bold italic mb-4">
                                    {homeData.subtitle}
                                </motion.h3>

                                {/* Description */}
                                <motion.p variants={itemVariantsRight} className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                                    {homeData.description}
                                </motion.p>

                                {/* Bullet Points with left red border */}
                                <motion.div variants={itemVariantsRight} className="border-l-[3px] border-[#E5192C] pl-5 sm:pl-8 mb-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                        {homeData.bulletPoints.map((point, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <FaCheck className="text-[#E5192C] text-sm md:text-base shrink-0" />
                                                <span className="text-[#1a1a1a] font-semibold italic text-sm sm:text-base tracking-wide">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Button */}
                                <motion.div variants={itemVariantsRight}>
                                    <Link 
                                        href={homeData.button.url}
                                        className="inline-flex items-stretch gap-1.5 group"
                                    >
                                        <div className="bg-[#E5192C] text-white px-8 py-3.5 transform -skew-x-12 group-hover:bg-black transition-colors duration-300 flex items-center justify-center">
                                            <span className="inline-block transform skew-x-12 font-bold tracking-wider">
                                                {homeData.button.label}
                                            </span>
                                        </div>
                                        <div className="bg-[#E5192C] w-1.5 sm:w-2 transform -skew-x-12 group-hover:bg-black transition-colors duration-300">
                                        </div>
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
