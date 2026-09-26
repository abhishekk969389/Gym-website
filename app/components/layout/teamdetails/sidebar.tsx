"use client";

import React from "react";
import Image from "next/image";
import { TeamMember, gymData } from "@/data";
import { FaUser, FaBriefcase, FaCalendarAlt, FaStar, FaClock } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TeamSidebar({ member }: { member: TeamMember }) {
    if (!member || !member.details) return null;

    const layout = gymData.teamSec.detailsLayout;

    const quickInfo = [
        { icon: FaUser, label: layout.labels.name, value: member.name },
        { icon: FaBriefcase, label: layout.labels.role, value: member.role },
        { icon: FaCalendarAlt, label: layout.labels.experience, value: member.details.experienceYears },
        { icon: FaStar, label: layout.labels.specialization, value: member.details.specialization[0] + " & Conditioning" },
        { icon: FaClock, label: layout.labels.availability, value: member.details.availability }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[450px] shrink-0 flex flex-col gap-8"
        >
            {/* Image & Quote */}
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quote Box (Black Overlay) */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0a0e14] p-6 sm:p-8 flex items-start gap-4">
                    <FaQuoteLeft className="text-[#E5192C] text-3xl shrink-0 opacity-100 mt-1" />
                    <div className="flex flex-col">
                        <p className="text-gray-100 font-medium text-[15px] leading-relaxed mb-4">
                            "{member.details.quote}"
                        </p>
                        <p className="text-gray-400 text-right italic font-serif text-lg">
                            - {member.name}
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.03)] border border-gray-100 p-6 sm:p-8">
                <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase text-[#0a0e14]">{layout.quickInfoTitle}</h3>
                    <div className="w-10 h-[2px] bg-[#E5192C] mt-2"></div>
                </div>
                <div className="flex flex-col gap-4">
                    {quickInfo.map((info, idx) => {
                        const Icon = info.icon;
                        return (
                            <div key={idx} className="flex items-center gap-5 py-4 sm:py-5 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="flex items-center justify-center shrink-0 w-8">
                                    <Icon className="text-[#E5192C] text-[22px]" />
                                </div>
                                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                                    <span className="text-gray-500 font-medium text-base">{info.label}:</span>
                                    <span className="text-[#0a0e14] font-semibold text-base text-left sm:text-right">{info.value}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
