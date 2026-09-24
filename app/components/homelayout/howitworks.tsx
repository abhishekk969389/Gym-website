"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, itemVariantsLeft, itemVariantsRight } from "@/app/utils/animations";
import { gymData } from "@/data";
import { FaArrowRight, FaClipboardList, FaChartLine, FaTrophy } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { IconType } from "react-icons";

const ICON_MAP: Record<string, IconType> = {
    FaArrowRight,
    FaClipboardList,
    FaListCheck,
    FaChartLine,
    FaTrophy
};

export default function HowItWorks() {
    const data = gymData.homeHowItWorks;

    return (
        <section className="w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 bg-white text-[#0d1c2a] overflow-hidden">
            <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[340px_1fr] gap-10 lg:gap-6 xl:gap-[36px] items-start lg:pt-10">

                {/* LEFT — intro */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-[480px] lg:max-w-[280px] xl:max-w-[340px] mx-auto lg:mx-0 text-center lg:text-left"
                >
                    <motion.div variants={itemVariantsLeft} className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                      <div className="w-16 sm:w-12 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-gray-400 tracking-[0.3em] text-xs sm:text-sm font-medium uppercase">
                            {data.tag}
                        </span>
                        <div className="w-16 sm:w-12 h-[1px] bg-[#E5192C]"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariantsLeft} className="text-3xl sm:text-4xl lg:text-3xl xl:text-[2rem] font-black leading-[1.12] tracking-tight text-[#111820] mb-5 uppercase">
                        {data.titleLine1}
                        <em className="block not-italic text-[#E5192C] text-3xl sm:text-4xl lg:text-4xl xl:text-[2.75rem]">{data.titleLine2}</em>
                    </motion.h2>

                    <motion.p variants={itemVariantsLeft} className="text-sm md:text-base leading-[1.7] text-[#555] max-w-[320px] mx-auto lg:mx-0 mb-7">
                        {data.description}
                    </motion.p>

                    <motion.div variants={itemVariantsLeft}>
                        <Link
                            href={data.button.url}
                            className="inline-flex items-center gap-3 bg-[#E5192C] text-white text-[12px] font-bold tracking-[0.1em] uppercase py-1.5 pl-6 pr-2 rounded-full shadow-[0_12px_28px_rgba(229,25,44,0.28)] hover:brightness-110 hover:-translate-y-[1px] transition-all group"
                        >
                            {data.button.label}
                            <div className="flex w-9 h-9 rounded-full bg-black items-center justify-center group-hover:bg-gray-900 transition-colors">
                                <FaArrowRight className="text-white text-[14px]" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* RIGHT — diagram */}
                <div className="w-full min-w-0">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full relative min-h-auto lg:min-h-[500px] xl:min-h-[440px] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 lg:block"
                    >
                        {data.steps.map((step, index) => {
                            const isLeft = step.side === "left";
                            const Icon = ICON_MAP[step.icon];

                            const posClasses = index === 0 ? "lg:right-[calc(50%+57px)] xl:right-[calc(50%+69px)] lg:left-auto lg:top-0" :
                                index === 1 ? "lg:left-[calc(50%+57px)] xl:left-[calc(50%+69px)] lg:right-auto lg:top-0" :
                                    index === 2 ? "lg:right-[calc(50%+57px)] xl:right-[calc(50%+69px)] lg:left-auto lg:bottom-0" :
                                        "lg:left-[calc(50%+57px)] xl:left-[calc(50%+69px)] lg:right-auto lg:bottom-0";


                            const shapeBase = "rounded-[14px] p-[25px_18px] sm:rounded-[14px_150px_150px_14px] sm:p-[25px_180px_25px_25px]";
                            const shapeLg = isLeft
                                ? "lg:rounded-[14px_150px_150px_14px] lg:p-[16px_120px_16px_16px] xl:p-[20px_175px_20px_20px]"
                                : "lg:rounded-[150px_14px_14px_150px] lg:p-[16px_16px_16px_120px] xl:p-[20px_20px_20px_175px]";

                            return (
                                <motion.div
                                    variants={isLeft ? itemVariantsLeft : itemVariantsRight}
                                    key={step.id}
                                    className={`relative lg:absolute w-full lg:w-[38%] xl:w-[42%] min-h-[220px] lg:min-h-[170px] xl:min-h-[170px] bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row lg:flex-row items-center overflow-visible z-10 ${posClasses} ${shapeBase} ${shapeLg}`}
                                >
                                    {/* Mobile/Tablet switch order based on layout */}
                                    <div className={`w-full relative z-10 ${isLeft ? 'order-2 sm:order-1 lg:order-1' : 'order-2 sm:order-2 lg:order-2'}`}>
                                        <div className="text-[40px] lg:text-[34px] xl:text-[46px] font-extrabold text-[#c9cdd0] leading-none mb-1">
                                            {step.number}
                                        </div>
                                        <div className="w-8 h-[2px] bg-[#E5192C] mb-2 lg:mb-3"></div>
                                        <h3 className="text-[18px] lg:text-[15px] xl:text-[18px] font-bold text-[#111820] mb-2">{step.title}</h3>
                                        <p className="text-[14px] lg:text-[14px] xl:text-[15px] text-[#555] leading-relaxed">{step.description}</p>
                                    </div>

                                    <div className={`relative w-[165px] h-[165px] sm:w-[150px] sm:h-[150px] lg:w-[110px] lg:h-[110px] xl:w-[150px] xl:h-[150px] mx-auto sm:mx-0 sm:absolute shrink-0 ${isLeft ? 'sm:right-[-9px] lg:left-auto lg:right-[-9px] order-1 sm:order-2 lg:order-2 mb-6 sm:mb-0' : 'sm:right-[-9px] lg:right-auto lg:left-[-9px] order-1 sm:order-1 lg:order-1 mb-6 sm:mb-0'}`}>
                                        <div className={`w-full h-full rounded-full overflow-hidden relative bg-[#e8e8e8] z-0 border-[2px] shadow-sm p-[4px] ${['1', '4'].includes(step.id) ? 'border-[#E5192C]' : 'border-[#112b3d]'}`}>
                                            <div className="w-full h-full rounded-full relative overflow-hidden">
                                                <Image src={step.image} alt={step.imageAlt} fill className="object-cover" />
                                            </div>
                                        </div>
                                        <div className={`w-[48px] h-[48px] lg:w-[38px] lg:h-[38px] xl:w-[50px] xl:h-[50px] absolute top-[-4px] xl:top-[-6px] rounded-full flex items-center justify-center text-white bg-[#112b3d] border-[4px] xl:border-[5px] border-white shadow-[0_2px_7px_rgba(0,0,0,0.18)] z-20 ${isLeft ? 'right-[4px] lg:right-auto lg:left-[4px]' : 'left-[4px] lg:left-auto lg:right-[4px]'} ${['1', '4'].includes(step.id) ? 'bg-[#E5192C]' : ''}`}>
                                            {Icon && <Icon className="text-[20px] lg:text-[15px] xl:text-[22px]" />}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Center Circle (Hidden on smaller screens) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="hidden lg:flex w-[96px] h-[96px] xl:w-[120px] xl:h-[120px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                        >
                            <div className="w-full h-full relative rounded-full border-[1.5px] border-[#263e50] flex items-center justify-center">
                                {/* Connecting Dots */}
                                <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] xl:w-[7px] xl:h-[7px] rounded-full bg-[#263e50]" />
                                <span className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] xl:w-[7px] xl:h-[7px] rounded-full bg-[#263e50]" />
                                <span className="absolute top-[20%] left-[-2px] w-[5px] h-[5px] xl:w-[7px] xl:h-[7px] rounded-full bg-[#E5192C]" />
                                <span className="absolute bottom-[20%] left-[-2px] w-[5px] h-[5px] xl:w-[7px] xl:h-[7px] rounded-full bg-[#263e50]" />
                                <span className="absolute top-[20%] right-[-2px] w-[5px] h-[5px] xl:w-[7px] xl:h-[7px] rounded-full bg-[#263e50]" />
                                <span className="absolute bottom-[20%] right-[-2px] w-[5px] h-[5px] xl:w-[7px] xl:h-[7px] rounded-full bg-[#E5192C]" />

                                <div className="w-[80px] h-[80px] xl:w-[105px] xl:h-[105px] rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(0,0,0,0.09),inset_0_0_15px_rgba(0,0,0,0.035)] relative z-10">
                                    <span className="text-[10px] xl:text-[14px] text-[#111820] leading-none mb-0.5 xl:mb-1">{data.centerTextLine1}</span>
                                    <strong className="text-[16px] xl:text-[22px] font-black text-[#E5192C] leading-none">{data.centerTextLine2}</strong>
                                    <div className="flex gap-1 mt-1 xl:mt-1.5">
                                        <div className="w-5 xl:w-8 h-[1.5px] bg-[#E5192C]"></div>
                                        <div className="w-1.5 xl:w-2.5 h-[1.5px] bg-[#E5192C]"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
