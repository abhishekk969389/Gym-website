"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site, ConsultationSecData, SectionProps } from "@/data";
import { FiUser, FiHeart, FiMail, FiPhone, FiCalendar, FiClock, FiCheck } from "react-icons/fi";
import { LuClipboardList, LuFileText } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { BiTargetLock } from "react-icons/bi";
import { FaArrowRight, FaLock } from "react-icons/fa";

const data: ConsultationSecData = site.consultationSec;

const iconMap: Record<string, React.ReactNode> = {
    FiUser: <FiUser className="w-6 h-6 sm:w-8 sm:h-8" />,
    LuClipboardList: <LuClipboardList className="w-6 h-6 sm:w-8 sm:h-8" />,
    CgGym: <CgGym className="w-6 h-6 sm:w-8 sm:h-8" />,
    FiHeart: <FiHeart className="w-6 h-6 sm:w-8 sm:h-8" />,
    FiMail: <FiMail className="w-5 h-5 text-gray-400" />,
    FiPhone: <FiPhone className="w-5 h-5 text-gray-400" />,
    BiTargetLock: <BiTargetLock className="w-5 h-5 text-gray-400" />,
    FiCalendar: <FiCalendar className="w-5 h-5 text-gray-400" />,
    FiClock: <FiClock className="w-5 h-5 text-gray-400" />,
    LuFileText: <LuFileText className="w-5 h-5 text-gray-400" />
};

export default function ConsultationSec({ data: propData, className }: SectionProps<ConsultationSecData> = {}) {
    const data = propData || site.consultationSec;
    return (
        <section className="bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 -mb-2 sm:-mb-2 md:-mb-4 lg:-mb-6 relative z-10">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                                <span className="text-gray-900 tracking-[0.2em] text-sm font-bold uppercase">
                                    {data.left.badge}
                                </span>
                            </div>

                            {/* Heading uses the blog style size */}
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase mb-2 tracking-tighter text-gray-900">
                                <span>{data.left.titlePart1}</span>
                                <span className="text-[#E5192C]">{data.left.titlePart2}</span>
                                <span>{data.left.titlePart3}</span>
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                                {data.left.subtitle}
                            </p>

                            {/* Icons Grid */}
                            <div className="flex items-start justify-between sm:justify-start sm:gap-12 mb-10">
                                {data.left.features.map((feat, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 sm:w-18 sm:h-18 rounded-full bg-red-50 text-[#E5192C] flex items-center justify-center mb-3">
                                            {/* We use a smaller version of the icon map for the inputs, so let's adjust size just for these features */}
                                            {feat.icon === "FiUser" && <FiUser className="w-6 h-6 sm:w-8 sm:h-8" />}
                                            {feat.icon === "LuClipboardList" && <LuClipboardList className="w-6 h-6 sm:w-8 sm:h-8" />}
                                            {feat.icon === "CgGym" && <CgGym className="w-6 h-6 sm:w-8 sm:h-8" />}
                                            {feat.icon === "FiHeart" && <FiHeart className="w-6 h-6 sm:w-8 sm:h-8" />}
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm md:text-base whitespace-pre-line">
                                            {feat.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>

                            {/* Image Card with Overlay */}
                            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[450px] sm:h-[481px]">
                                <Image
                                    src={data.left.imageCard.image}
                                    alt="Consultation Image"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Block */}
                                <div className="absolute top-0 right-0 bottom-0 w-full sm:w-3/7 bg-gray-900/90 text-white p-6 sm:p-8 flex flex-col justify-center backdrop-blur-sm  shadow-[-10px_0_20px_rgba(0,0,0,0.3)]">
                                    <h3 className="text-xl sm:text-2xl font-black uppercase mb-6 leading-tight">
                                        <span className="block whitespace-pre-line text-gray-200">{data.left.imageCard.overlayTitle1}</span>
                                        <span className="text-[#E5192C]">{data.left.imageCard.overlayTitle2}</span>
                                    </h3>
                                    <ul className="space-y-4 mb-8">
                                        {data.left.imageCard.list.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0">
                                                    <FiCheck className="text-white text-xs" />
                                                </div>
                                                <span className="text-gray-200 font-medium text-sm sm:text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <p className="font-serif italic text-2xl sm:text-3xl text-gray-300 whitespace-pre-line transform -rotate-2">
                                            {data.left.imageCard.signature}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN - FORM */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:p-10"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                                <span className="text-gray-900 tracking-[0.2em] text-sm md:text-base font-bold uppercase">
                                    {data.right.badge}
                                </span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-black uppercase mb-3 tracking-tighter text-gray-900">
                                <span>{data.right.titlePart1}</span>
                                <span className="text-[#E5192C]">{data.right.titlePart2}</span>
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-sm md:text-base leading-relaxed mb-8">
                                {data.right.subtitle}
                            </p>

                            <form className="space-y-5">
                                {/* Name */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiUser className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder={data.right.form.name.placeholder}
                                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-[#E5192C] focus:ring-1 focus:ring-[#E5192C] transition-colors"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiMail className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder={data.right.form.email.placeholder}
                                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-[#E5192C] focus:ring-1 focus:ring-[#E5192C] transition-colors"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiPhone className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder={data.right.form.phone.placeholder}
                                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-[#E5192C] focus:ring-1 focus:ring-[#E5192C] transition-colors"
                                        required
                                    />
                                </div>

                                {/* Goal Select */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <BiTargetLock className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <select
                                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-md text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#E5192C] focus:ring-1 focus:ring-[#E5192C] transition-colors cursor-pointer"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>{data.right.form.goal.placeholder}</option>
                                        {data.right.form.goal.options?.map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                {/* Date & Time Row */}
                                <div className="flex flex-col sm:flex-row gap-5">
                                    <div className="relative w-full sm:w-1/2">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FiCalendar className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder={data.right.form.date.placeholder}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = e.target.value ? 'date' : 'text'}
                                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:border-[#E5192C] focus:ring-1 focus:ring-[#E5192C] transition-colors"
                                            required
                                        />
                                        {/* Optional: Add custom calendar icon on the right to override the native one, or just let native handle it. For this we just let native handle it on focus. */}
                                    </div>

                                    <div className="relative w-full sm:w-1/2">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FiClock className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <select
                                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-md text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#E5192C] focus:ring-1 focus:ring-[#E5192C] transition-colors cursor-pointer"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>{data.right.form.time.placeholder}</option>
                                            <option value="morning">Morning (6AM - 12PM)</option>
                                            <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                            <option value="evening">Evening (4PM - 9PM)</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Textarea */}
                                <div className="relative">
                                    <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                                        <LuFileText className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        placeholder={data.right.form.message.placeholder}
                                        rows={4}
                                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-[#E5192C] focus:ring-1 focus:ring-[#E5192C] transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start gap-3 pt-2">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#E5192C] focus:ring-[#E5192C] cursor-pointer"
                                        required
                                    />
                                    <label htmlFor="agree" className="text-gray-500 text-sm cursor-pointer leading-tight">
                                        {data.right.form.checkboxText}
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="w-full mt-6 bg-[#E5192C] hover:bg-red-700 text-white font-bold text-sm sm:text-base py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-red-500/20">
                                    {data.right.form.buttonText}
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Secure Notice */}
                                <div className="flex items-center justify-center gap-2 pt-4 text-gray-500 text-xs sm:text-sm">
                                    <FaLock className="w-3 h-3" />
                                    <span>{data.right.form.secureText}</span>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
