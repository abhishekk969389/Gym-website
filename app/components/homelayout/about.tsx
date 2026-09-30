"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { containerVariants, itemVariantsLeft, itemVariantsRight } from "@/app/utils/animations";
import { FaCheck } from "react-icons/fa6";
import { site } from "@/data";

const homeData = site.homeAbout;
const aboutData = site.aboutPageAbout;

function Counter({ value }: { value: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, amount: 0.5 });

    useEffect(() => {
        const match = value.match(/^(\d+)(.*)$/);
        if (!match) {
            if (nodeRef.current) nodeRef.current.textContent = value;
            return;
        }

        const endValue = parseInt(match[1], 10);
        const suffix = match[2];

        if (inView) {
            const controls = animate(0, endValue, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(v) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(v).toString() + suffix;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [value, inView]);

    const initialMatch = value.match(/^(\d+)(.*)$/);
    const initialText = initialMatch ? `0${initialMatch[2]}` : value;

    return <span ref={nodeRef}>{initialText}</span>;
}

export default function HomeAbout({ isAboutPage = false }: { isAboutPage?: boolean }) {


    const image1 = isAboutPage ? aboutData.image1 : homeData.image1;
    const image2 = isAboutPage ? aboutData.image2 : homeData.image2;
    const badge = isAboutPage ? aboutData.badge : homeData.badge;

    return (
        <section className="bg-[#f8f9fa] mt-8 sm:mt-10 md:mt-12 lg:mt-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-50 z-0"></div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12 xl:gap-8">
                    <motion.div 
                        variants={itemVariantsLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full lg:w-[42%] xl:w-1/2 flex justify-center lg:justify-start relative"
                    >
                        <div className="relative w-full max-w-[600px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square">
                            <div className="absolute bottom-0 right-0 sm:right-[-5%] lg:right-[-10%] w-[80%] h-[85%] z-10">
                                <Image
                                    src={image2}
                                    alt="Fitness Model"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute top-0 -left-[10px] sm:-left-[16px] w-[50%] h-[55%] z-20 border-[10px] sm:border-[16px] border-white bg-white">
                                <Image
                                    src={image1}
                                    alt="Fitness Training"
                                    fill
                                    className="object-cover"
                                />
                                
                                <div className="absolute bottom-0 right-0 bg-[#E5192C] text-white py-3 px-4 sm:py-4 sm:px-6 flex flex-col items-center justify-center z-30">
                                    <span className="text-3xl sm:text-5xl lg:text-5xl font-black leading-none mb-1"><Counter value={String(badge.number)} /></span>
                                    <span className="text-[9px] sm:text-[11px] font-bold tracking-wider text-center uppercase whitespace-nowrap">
                                        {badge.text}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className={`w-full lg:w-[58%] xl:w-1/2 flex flex-col items-start pt-4 lg:pt-0 pl-0 lg:pl-12 ${isAboutPage ? 'xl:pl-20' : 'xl:pl-16'}`}
                    >
                        {isAboutPage ? (
                            <>
                                <motion.p variants={itemVariantsRight} className="text-[#333] text-sm md:text-[14px] font-bold tracking-[0.2em] uppercase mb-1">
                                    {aboutData.tagline}
                                </motion.p>
                                
                                <motion.h2 variants={itemVariantsRight} className="text-4xl sm:text-4xl md:text-6xl lg:text-[64px]     font-black italic leading-none mb-5 tracking-tight flex items-baseline gap-4">
                                    <span className="text-[#1a1a1a]">{aboutData.titlePart1}</span>
                                    <span className="text-[#E5192C]">{aboutData.titlePart2}</span>
                                </motion.h2>

                                <motion.div variants={itemVariantsRight} className="w-[50px] h-[3px] bg-[#E5192C] mb-6"></motion.div>

                                <motion.div variants={itemVariantsRight} className="flex flex-col gap-5 text-gray-600 text-[15px] md:text-[18px] leading-[1.5] max-w-[620px]">
                                    {aboutData.paragraphs.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <motion.div variants={itemVariantsRight} className="bg-[#E5192C] text-white px-3 py-1 mb-4 inline-block transform -skew-x-12">
                                    <span className="inline-block transform skew-x-12 text-sm md:text-base font-bold tracking-wider italic uppercase">
                                        {homeData.tag}
                                    </span>
                                </motion.div>
                                <motion.h2 variants={itemVariantsRight} className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-5xl font-black uppercase italic leading-none mb-4 tracking-tight">
                                    <span className="text-[#1a1a1a] block">{homeData.titleLine1}</span>
                                    <span className="text-[#E5192C] block whitespace-nowrap">{homeData.titleLine2}</span>
                                </motion.h2>

                                <motion.h3 variants={itemVariantsRight} className="text-xl sm:text-2xl text-[#1a1a1a] font-bold italic mb-4">
                                    {homeData.subtitle}
                                </motion.h3>

                                <motion.p variants={itemVariantsRight} className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                                    {homeData.description}
                                </motion.p>
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
