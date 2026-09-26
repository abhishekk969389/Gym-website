"use client";
import React from "react";
import { site, SectionProps, RefundPolicySecData } from "@/data";
import * as Icons from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/utils/animations";

export default function RefundPolicySec({ data: propData, className }: SectionProps<RefundPolicySecData> = {}) {
    const data = propData || site.refundPolicySec;

    return (
        <section className="bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="w-full"
            >
                {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-6 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                             <div className="flex items-center justify-center gap-3 ">
                             <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                                 <span className="text-[#E5192C] font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                                     {data.tag}
                                 </span>
                                   <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                             </div>
                             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900 italic">
                                 {data.titleLine1} <span className="text-[#E5192C]">{data.titleLine2}</span>
                             </h2>
                             <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                                 {data.description}
                             </p>
                         </motion.div>

                {/* Items */}
                <div className="flex flex-col">
                    {data.items.map((item, index) => {
                        const IconComponent = Icons[item.icon as keyof typeof Icons];
                        const isEven = index % 2 !== 0;

                        return (
                            <div key={index} className={`w-full ${isEven ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
                                <motion.div
                                    variants={itemVariants}
                                    className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 items-start"
                                >
                                    {/* Left Icon */}
                                    <div className="shrink-0 flex justify-center sm:justify-start">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-[#FFE8E8] flex items-center justify-center bg-white shadow-sm">
                                        {IconComponent && <IconComponent className="text-2xl sm:text-3xl text-[#E5192C]" />}
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <div className="w-12 sm:w-16 h-[2px] bg-[#E5192C] mb-4 mx-auto sm:mx-0"></div>
                                    <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed">
                                        {item.text}
                                    </p>

                                    {/* Contacts Section */}
                                    {/* @ts-ignore */}
                                    {item.contacts && (
                                        <div className="flex flex-col sm:flex-row gap-6 mt-6 items-center sm:items-start">
                                            {/* @ts-ignore */}
                                            {item.contacts.map((contact, idx) => {
                                                const ContactIcon = Icons[contact.icon as keyof typeof Icons];
                                                return (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        {ContactIcon && <ContactIcon className="text-[#E5192C] text-lg" />}
                                                        <span className="text-gray-900 font-semibold">{contact.text}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

