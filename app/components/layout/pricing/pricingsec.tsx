"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site, PricingSecData, SectionProps } from "@/data";
import { FiUser, FiAward, FiClock, FiShield, FiUserCheck, FiCheck, FiX } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import { IoDiamondOutline } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const pricingData: PricingSecData = site.pricingSec;

const iconMap: Record<string, React.ReactNode> = {
  FiUser: <FiUser className="w-8 h-8 sm:w-10 sm:h-10" />,
  CgGym: <CgGym className="w-8 h-8 sm:w-10 sm:h-10" />,
  FaCrown: <FiAward className="w-8 h-8 sm:w-10 sm:h-10" />, // Using FiAward instead of FaCrown for better consistency
  IoDiamondOutline: <IoDiamondOutline className="w-8 h-8 sm:w-10 sm:h-10" />,
  BiTargetLock: <BiTargetLock className="w-7 h-7 sm:w-8 sm:h-8" />,
  FiShield: <FiShield className="w-7 h-7 sm:w-8 sm:h-8" />,
  FiUserCheck: <FiUserCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
  MdOutlineFitnessCenter: <MdOutlineFitnessCenter className="w-7 h-7 sm:w-8 sm:h-8" />,
};

export default function PricingSec({ data: propData, className }: SectionProps<PricingSecData> = {}) {
    const data = propData || site.pricingSec;
    return (
        <section className="bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            {/* 1. PRICING PLANS SECTION */}
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-14">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-black tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium uppercase">
                            {pricingData.header.badge}
                        </span>
                         <div className="w-10 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-3 mt-2 tracking-tighter text-gray-900">
                        <span>{pricingData.header.titlePart1}</span>
                        <span className="text-[#E5192C]">{pricingData.header.titlePart2}</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                        {pricingData.header.subtitle}
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                    {pricingData.plans.map((plan, index) => (
                        <motion.div 
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col h-full bg-white rounded-xl overflow-hidden transition-all duration-300 group
                                ${plan.isPopular 
                                    ? 'border-2 border-[#E5192C] shadow-xl shadow-[#E5192C]/10 scale-100 lg:scale-105 z-10' 
                                    : 'border border-gray-100 shadow-lg hover:shadow-xl hover:border-gray-200'}`}
                        >
                            {plan.isPopular && (
                                <div className="bg-[#E5192C] text-white text-center py-1.5 text-xs font-bold tracking-wider uppercase w-full">
                                    {plan.popularText}
                                </div>
                            )}
                            
                            <div className="p-6 sm:p-8 flex-grow flex flex-col">
                                {/* Icon & Title */}
                                <div className="mb-4">
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 transition-colors duration-300
                                        ${plan.isPopular ? 'bg-[#E5192C]/10 text-[#E5192C]' : 'bg-gray-50 text-gray-500 group-hover:bg-[#E5192C]/10 group-hover:text-[#E5192C]'}`}>
                                        {iconMap[plan.icon]}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase mb-1">{plan.title}</h3>
                                    <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-6 flex items-baseline">
                                    <span className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-500 ml-1 text-sm sm:text-base font-medium">
                                        {plan.period}
                                    </span>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-2.5 mb-8 flex-grow">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            {feat.included ? (
                                                <div className="w-5 h-5 rounded-full bg-[#E5192C]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <FiCheck className="text-[#E5192C] text-sm" />
                                                </div>
                                            ) : (
                                                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                                                    <FiX className="text-gray-400 text-sm" />
                                                </div>
                                            )}
                                            <span className={`text-sm sm:text-base ${feat.included ? 'text-gray-700' : 'text-gray-400'}`}>
                                                {feat.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button className={`w-full py-3.5 px-4 rounded font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300
                                    ${plan.isPopular 
                                        ? 'bg-[#E5192C] text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-700/30' 
                                        : 'bg-white text-[#E5192C] border-2 border-[#E5192C] hover:bg-[#E5192C] hover:text-white'}`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 2. PLAN COMPARISON */}
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 hidden md:block">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 border-b border-gray-100 pb-4"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-[1px] bg-[#E5192C]"></div>
                            <span className="text-black tracking-[0.2em] text-xs font-medium uppercase">
                                {pricingData.compare.badge}
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-gray-900">
                            <span>{pricingData.compare.titlePart1}</span>
                            <span className="text-[#E5192C]">{pricingData.compare.titlePart2}</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm sm:text-sm md:text-base text-right leading-relaxed">
                        {pricingData.compare.subtitle}
                    </p>
                </motion.div>

                {/* Table */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="overflow-x-auto"
                >
                    <table className="w-full text-sm sm:text-base border border-gray-100">
                        <thead>
                            <tr className="bg-gray-50/50">
                                {pricingData.compare.headers.map((h, i) => (
                                    <th key={i} className={`py-4 px-4 font-bold border border-gray-100 ${i === 0 ? 'w-1/3 text-left' : 'text-center'} 
                                        ${i === 2 ? 'bg-[#E5192C]/5 text-[#E5192C]' : 'text-gray-900'}`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.compare.rows.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-4 font-medium text-gray-700 border border-gray-100">{row.feature}</td>
                                    {row.values.map((val, j) => (
                                        <td key={j} className={`py-4 px-4 text-center border border-gray-100 ${j === 1 ? 'bg-[#E5192C]/5 font-medium' : ''} text-gray-500`}>
                                            {val === 'check' ? (
                                                <FiCheck className="inline-block text-[#E5192C] text-lg font-bold" />
                                            ) : (
                                                val
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {/* Price Row */}
                            <tr className="bg-gray-50/30">
                                <td className="py-5 px-4 font-black text-gray-900 text-base border border-gray-100">{pricingData.compare.priceRow.feature}</td>
                                {pricingData.compare.priceRow.values.map((val, j) => (
                                    <td key={j} className={`py-5 px-4 text-center font-black text-base border border-gray-100 
                                        ${j === 1 ? 'bg-[#E5192C]/10 text-[#E5192C]' : 'text-gray-900'}`}>
                                        {val}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* 3. CTA & FEATURES ROW */}
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                    {/* Left CTA block */}
                    <div className="relative w-full lg:w-5/12 bg-gray-900 text-white p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-center min-h-[280px]">
                        <div className="absolute inset-0 z-0">
                            <Image 
                                src={pricingData.cta.left.bgImage}
                                alt="Gym background"
                                fill
                                className="object-cover opacity-20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/50"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-6 h-[2px] bg-[#E5192C]"></div>
                                <span className="text-gray-300 tracking-[0.1em] text-xs font-bold uppercase">
                                    {pricingData.cta.left.badge}
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-3 leading-tight flex flex-wrap">
                                <span className="text-[#E5192C] mr-2">{pricingData.cta.left.titlePart1}</span>
                                <span>{pricingData.cta.left.titlePart2}</span>
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-sm md:text-base mb-8 max-w-xs">
                                {pricingData.cta.left.subtitle}
                            </p>
                            <Link href="/contactus" className="inline-flex items-center gap-2 bg-[#E5192C] rounded-md text-white px-6 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-red-700 transition-colors group">
                                {pricingData.cta.left.buttonText}
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Features block */}
                    <div className="w-full lg:w-7/12 py-10 px-4 sm:px-6 flex flex-col sm:flex-row items-stretch justify-between bg-white gap-y-8">
                        {pricingData.cta.features.map((feat, index) => (
                            <div key={index} className={`flex flex-col items-center justify-center text-center px-2 w-full sm:w-1/4 ${index < 3 ? 'sm:border-r sm:border-gray-200' : ''}`}>
                                <div className="w-14 h-14 rounded-full bg-red-50 text-[#E5192C] flex items-center justify-center mb-4">
                                    {iconMap[feat.icon]}
                                </div>
                                <h4 className="font-black text-gray-900 text-sm md:text-base mb-2 uppercase leading-tight">{feat.title}</h4>
                                <p className="text-gray-500 text-sm sm:text-sm md:text-sm leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
