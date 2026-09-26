"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { site, CerSecData, SectionProps } from "@/data";

// @ts-ignore
const data: CerSecData = site.cerSec;

export default function CerSec({ data: propData, className }: SectionProps<CerSecData> = {}) {
    const data = propData || site.cerSec;
    return (
        <section className="relative bg-white w-full mt-6 overflow-hidden">
            {/* Split Backgrounds */}
            <div className="absolute inset-0 flex flex-col lg:flex-row z-0">
                <div className="w-full lg:w-[30%] relative bg-gray-700">
                    <Image
                        src={data.leftSection.bgImage}
                        alt="Certifications Background"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>
                <div className="w-full lg:w-[70%] bg-white"></div>
            </div>

            <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row relative z-10">
                {/* Left Column Content */}
                <div className="w-full lg:w-[30%] py-8 px-4 sm:py-12 sm:px-8 lg:py-12 lg:pl-8 lg:pr-12 text-white flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                        <span className="tracking-[0.2em] text-sm font-bold uppercase">
                            {data.leftSection.badge}
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-black uppercase mb-3 tracking-tighter">
                        {data.leftSection.title}
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base max-w-[280px] leading-relaxed mb-8">
                        {data.leftSection.description}
                    </p>

                    <div>
                        <Link
                            href={data.leftSection.buttonLink}
                            className="inline-flex items-center justify-center bg-[#E5192C] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#c41525] group gap-2"
                        >
                            {data.leftSection.buttonText}
                            <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Right Column Content - Certificates */}
                <div className="w-full bg-white lg:w-[68%] py-8 px-4 sm:py-12 sm:px-8 lg:py-12 lg:pl-4 xl:pl-6 flex flex-col justify-center">

                    {/* Cards Grid / Flex */}
                    <div className="w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <div className="flex lg:grid lg:grid-cols-4 gap-4 xl:gap-5 min-w-max lg:min-w-0 px-2 lg:px-0">
                            {data.rightSection.certificates.map((cert: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="w-[260px] sm:w-[280px] lg:w-full shrink-0"
                                >
                                    <div className="bg-white rounded-md border border-gray-200 h-full flex flex-col relative overflow-hidden group">
                                        {/* Top Left Red Accent */}
                                        <div className="absolute top-4 left-0 w-1 h-4 bg-[#E5192C]"></div>

                                        {/* Certificate Image Area */}
                                        <div className="px-1 pt-5 pb-1 sm:px-2 sm:pt-6 sm:pb-1 flex items-center justify-center bg-white overflow-hidden">
                                            <div className="relative w-full aspect-[1.3/1] transition-transform duration-500 group-hover:scale-105">
                                                <Image
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    fill
                                                    className="object-contain scale-[1.15] sm:scale-[1.2]"
                                                />
                                            </div>
                                        </div>

                                        {/* Text Area */}
                                        <div className="px-4 pb-6 flex-grow flex flex-col items-center justify-center text-center">
                                            <h3 className="text-[15px] xl:text-[16px] font-black text-gray-900 mb-2 leading-tight tracking-tight">
                                                {cert.title}
                                            </h3>
                                            <div className="w-8 h-[2px] bg-[#E5192C] mb-3"></div>
                                            <p className="text-gray-500 text-[12px] xl:text-[13px] leading-snug px-2">
                                                {cert.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
