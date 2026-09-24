"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaArrowRight } from "react-icons/fa";
import { FaUser, FaList } from "react-icons/fa6";
import { gymData } from "@/data";
import { containerVariants, itemVariants } from "@/app/utils/animations";
import { Yellowtail } from "next/font/google";

const yellowtail = Yellowtail({ subsets: ["latin"], weight: "400" });

const ICON_MAP: Record<string, React.ElementType> = {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaRegClock
};

export default function ContactSec() {
    const data = gymData.contactPageSec;

    return (
        <section className="bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 relative">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col items-center justify-center text-center mb-8"
                >
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 ">
                                    <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                        <span className="text-[#E5192C] font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                            {data.tag}
                        </span>
                                    <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900 italic">
                        <span className="text-[#0a0e14]">{data.titleLine1} </span>
                        <span className="text-[#E5192C]">{data.titleLine2}</span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </motion.p>
                </motion.div>

                {/* Main Content (3 Columns) */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col lg:flex-row gap-6 lg:gap-6 h-auto lg:h-[600px]"
                >

                    {/* Left Column (Contact Info) */}
                    <motion.div variants={itemVariants} className="w-full lg:w-[28%] bg-[#080d14] text-white p-6 flex flex-col justify-center rounded-2xl overflow-hidden">
                        <div className="flex flex-col gap-8">
                            {data.contactInfo.map((item, index) => {
                                const Icon = ICON_MAP[item.icon];
                                return (
                                    <React.Fragment key={item.id}>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-14 h-14 shrink-0 rounded-full bg-[#E5192C] flex items-center justify-center">
                                                {Icon && <Icon className="text-2xl text-white" />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                                <p className="text-gray-300 text-sm md:text-base whitespace-pre-line leading-relaxed">
                                                    {item.details}
                                                </p>
                                            </div>
                                        </div>
                                        {index < data.contactInfo.length - 1 && (
                                            <div className="w-full h-[1px] bg-gray-800"></div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Center Column (Image) */}
                    <motion.div variants={itemVariants} className="w-full lg:w-[28%] relative hidden md:block h-[400px] lg:h-full rounded-2xl overflow-hidden">
                        <Image
                            src={data.centerImage.src}
                            alt="Fitness model"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                        {/* Top Text */}
                        <div className="absolute top-10 right-6 text-right font-black italic tracking-tighter uppercase leading-[0.9] -rotate-[6deg]">
                            <div className="text-white text-2xl">{data.centerImage.topTextLine1}</div>
                            <div className="text-white text-2xl">{data.centerImage.topTextLine2}</div>
                            <div className="text-white text-2xl">{data.centerImage.topTextLine3}</div>
                            <div className="text-[#E5192C] text-2xl relative inline-block mt-1">
                                {data.centerImage.topTextLine4}
                                {/* Brush underline effect */}
                                <div className="absolute -bottom-2 right-0 w-[100%] h-[5px] bg-[#E5192C] rounded-full"></div>
                                <div className="absolute -bottom- right-2 w-[85%] h-[2px] bg-[#E5192C] rounded-full opacity-90"></div>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="absolute bottom-10 right-6 flex flex-col items-center -rotate-[8deg]">
                            <div className={`text-white text-3xl whitespace-pre-line leading-[0.9] text-center relative ${yellowtail.className}`}>
                                {data.centerImage.bottomText}
                                {/* Brush underline effect */}
                                <div className="mt-2">
                                <div className="absolute -bottom-2 -right-4 w-[120%] h-[4px] bg-[#E5192C] rounded-full -rotate-2"></div>
                                <div className="absolute right-0 w-[100%] h-[2px] bg-[#E5192C] rounded-full opacity-90 -rotate-2"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column (Form) */}
                    <motion.div variants={itemVariants} className="w-full lg:w-[44%] bg-white p-8 sm:p-10 flex flex-col justify-start rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[#E5192C] tracking-[0.3em] text-sm sm:text-sm md:text-base font-bold uppercase italic">
                                {data.form.tag}
                            </span>
                                   <div className="w-12 sm:w-16 h-[2px] bg-[#E5192C]"></div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-2">
                            {data.form.titleLine1} <span className="text-[#E5192C]">{data.form.titleLine2}</span>
                        </h3>

                        <p className="text-gray-500 text-sm md:text-base mb-6">
                            {data.form.description}
                        </p>

                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder={data.form.fields.namePlaceholder}
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-[#E5192C] focus:bg-white transition-colors"
                                    />
                                </div>
                                <div className="relative flex-1">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder={data.form.fields.emailPlaceholder}
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-[#E5192C] focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder={data.form.fields.phonePlaceholder}
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-[#E5192C] focus:bg-white transition-colors"
                                    />
                                </div>
                                <div className="relative flex-1">
                                    <FaList className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <select className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-[#E5192C] focus:bg-white transition-colors appearance-none text-gray-500">
                                        <option value="">{data.form.fields.subjectPlaceholder}</option>
                                        {data.form.fields.subjectOptions?.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="relative">
                                <textarea
                                    rows={4}
                                    placeholder={data.form.fields.messagePlaceholder}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-[#E5192C] focus:bg-white transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div className="flex items-end justify-between mt-2">
                                <button type="button" className="bg-[#E5192C] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2">
                                    {data.form.buttonText} <FaArrowRight />
                                </button>
                                <div className={`hidden sm:flex flex-col items-center -rotate-[10deg] relative ${yellowtail.className}`}>
                                    <span className="text-gray-900 text-3xl whitespace-pre-line leading-[0.8] text-center">
                                        {data.form.bottomScriptText}
                                    </span>
                                    {/* Brush underline effect */}
                                    <div className="mt-1">
                                        <div className="absolute -bottom-1 -right-2 w-[110%] h-[3px] bg-[#E5192C] rounded-full -rotate-2"></div>
                                        <div className="absolute -bottom-1.5 right-1 w-[90%] h-[2px] bg-[#E5192C] rounded-full opacity-90 -rotate-2"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
