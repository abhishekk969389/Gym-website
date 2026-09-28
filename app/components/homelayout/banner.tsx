"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
    FaArrowRight,
    FaPlay,
    FaDumbbell,
    FaBrain,
    FaHeart,
    FaHeartPulse,
    FaAppleWhole,
    FaChartLine,
} from "react-icons/fa6";
import { IoBarbell } from "react-icons/io5";
import { PiBrain, PiHeart } from "react-icons/pi";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, itemVariantsLeft, itemVariantsRight } from "@/app/utils/animations";
import { site, HomeBannerData, SectionProps } from "@/data";

const ICON_MAP: Record<string, IconType> = {
    FaArrowRight,
    FaPlay,
    FaDumbbell,
    FaBrain,
    FaHeart,
    FaHeartPulse,
    FaAppleWhole,
    FaChartLine,
    IoBarbell,
    PiBrain,
    PiHeart,
};

export default function Banner({ data, className }: SectionProps<HomeBannerData> = {}) {
    const homeBannerData = data || site.homeBanner;
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const PrimaryIcon = ICON_MAP[homeBannerData.primaryButton.icon] || FaArrowRight;
    const SecondaryIcon = ICON_MAP[homeBannerData.secondaryButton.icon] || FaPlay;

    return (
        <section className={`relative w-full flex items-start bg-[#0a0e14] overflow-hidden ${className || ""}`}>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/home-banner.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e14]/40 to-transparent"></div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-black/70 pointer-events-none block sm:hidden"
            />

            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 lg:pb-10 flex flex-col lg:flex-row items-start justify-between">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full lg:w-[60%] flex flex-col"
                >
                    <motion.div variants={itemVariantsLeft} className="flex flex-wrap items-center gap-y-1.5 gap-x-2 sm:gap-x-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-300/80 mb-4 uppercase">
                        {homeBannerData.subtitle.split('|').map((part, index, array) => (
                            <React.Fragment key={index}>
                                {index === 2 && <div className="w-full sm:hidden"></div>}
                                <span>{part.trim()}</span>
                                {index < array.length - 1 && (
                                    <span className={`text-[#E5192C] ${index === 1 ? 'hidden sm:block' : ''}`}>|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>

                    <motion.h1 variants={itemVariantsLeft} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-3 uppercase italic tracking-tight">
                        <span className="block">{homeBannerData.titleLine1}</span>
                        <span className="block text-[#E5192C] text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{homeBannerData.titleLine2}</span>
                        <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem]">{homeBannerData.titleLine3}</span>
                    </motion.h1>

                    <motion.p variants={itemVariantsLeft} className="text-gray-200 text-sm sm:text-sm md:text-base max-w-md mb-3 leading-relaxed">
                        {homeBannerData.description}
                    </motion.p>

                    <motion.div variants={itemVariantsLeft} className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8">
                        <Link
                            href={homeBannerData.primaryButton.url}
                            className="flex items-center gap-3 bg-[#E5192C] hover:bg-red-700 text-white pl-4 pr-3 py-2.5 rounded-full transition-all font-semibold text-sm tracking-wide"
                        >
                            <span>{homeBannerData.primaryButton.label}</span>
                            <div className="w-6 h-6 bg-[#0a0e14] rounded-full flex items-center justify-center shrink-0">
                                <PrimaryIcon className="text-white text-sm" />
                            </div>
                        </Link>

                        <div className="hidden sm:block w-[1px] h-10 bg-red-600/80 shrink-0"></div>

                        <button
                            onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }}
                            className="flex items-center gap-3 text-white hover:text-[#E5192C] transition-colors group text-left"
                        >
                            <div className="w-10 cursor-pointer h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:border-[#E5192C] transition-colors">
                                <SecondaryIcon className=" ml-1 text-sm" />
                            </div>
                            <span className="font-semibold  cursor-pointer text-sm tracking-wide uppercase leading-tight w-24">
                                {homeBannerData.secondaryButton.label.split('\n').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </span>
                        </button>
                    </motion.div>
                    <motion.div variants={itemVariantsLeft} className="flex flex-wrap items-center gap-4 sm:gap-5">
                        {homeBannerData.bottomFeatures.map((feature, index) => {
                            const Icon = ICON_MAP[feature.icon];
                            return (
                                <React.Fragment key={index}>
                                    {index > 0 && (
                                        <div className="hidden sm:block w-[1px] h-8 bg-red-600/80 shrink-0"></div>
                                    )}
                                    <div className="flex items-center gap-3">
                                        {Icon && <Icon className="text-[#E5192C] text-2xl sm:text-3xl" />}
                                        <span className="text-white text-xs sm:text-sm font-semibold tracking-wider leading-tight uppercase">
                                            {feature.title.split('\n').map((line, i) => (
                                                <span key={i} className="block">{line}</span>
                                            ))}
                                        </span>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="hidden lg:flex w-full lg:w-[35%] flex-col items-end gap-4 lg:pt-2"
                >
                    {homeBannerData.rightFeatures.map((feature, index) => {
                        const Icon = ICON_MAP[feature.icon];
                        return (
                            <motion.div variants={itemVariantsRight} key={index} className="flex items-center justify-start gap-4 w-[180px]">
                                <div className="w-12 h-12 rounded-full border-2 border-[#E5192C] bg-transparent flex items-center justify-center shrink-0">
                                    {Icon && <Icon className="text-white text-xl sm:text-2xl" />}
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-gray-300 text-[12px] font-semibold tracking-wider leading-snug">
                                        {feature.title.split('\n').map((line, i) => (
                                            <span key={i} className="block">{line}</span>
                                        ))}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>

            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 backdrop-blur-sm">
                    <button 
                        onClick={() => setIsVideoOpen(false)}
                        className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:text-[#E5192C] transition-colors p-2"
                    >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-black">
                        <iframe 
                            src={homeBannerData.secondaryButton.videoUrl} 
                            className="w-full h-full"
                            allow="autoplay; encrypted-media; fullscreen" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
