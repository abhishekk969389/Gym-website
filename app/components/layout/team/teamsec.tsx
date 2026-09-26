"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { gymData, TeamSecData } from "@/data";
import Pagination from "@/app/components/ui/pagination";

// @ts-ignore
const data: TeamSecData = gymData.teamSec;

export default function TeamSec() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(data.members.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentMembers = data.members.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="bg-white  mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-6">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                        <span className="text-gray-900 tracking-[0.2em] text-sm font-bold uppercase">
                            {data.badge}
                        </span>
                        <div className="w-8 h-[2px] bg-[#E5192C]"></div>
                    </div>
                    
                    {/* Heading matched to blog size */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900">
                        <span>{data.titlePart1}</span>
                        <span className="text-[#E5192C]">{data.titlePart2}</span>
                    </h2>
                    
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                {/* Team Grid */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentPage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {currentMembers.map((member: any) => (
                            <div 
                                key={member.id} 
                                className="bg-white rounded-xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300 relative group"
                            >
                                <Link href={`/teamdetails?name=${member.name.replace(/ /g, '-').toLowerCase()}`} className="absolute inset-0 z-0" aria-label={`View ${member.name} details`}></Link>
                                {/* Image Container */}
                                <div className="relative w-full h-64 sm:h-72 pointer-events-none">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow pointer-events-none z-10">
                                    <h3 className="font-bold text-gray-900 text-lg md:text-xl tracking-tight leading-tight group-hover:text-[#E5192C] transition-colors">
                                        {member.name}
                                    </h3>
                                    <span className="text-[#E5192C] font-semibold text-xs sm:text-sm mb-2">
                                        {member.role}
                                    </span>
                                    <div className="w-8 h-[2px] bg-[#E5192C] mb-3"></div>
                                    
                                    <p className="text-gray-600 text-sm sm:text-sm md:text-[14px] leading-relaxed mb-6 flex-grow">
                                        {member.description}
                                    </p>
                                </div>

                                {/* Social Icons */}
                                <div className="flex items-center gap-2.5 p-5 pt-0 mt-auto relative z-10">
                                    <a href={member.socials.facebook} className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-[#E5192C] transition-colors" aria-label="Facebook">
                                        <FaFacebookF className="w-3.5 h-3.5" />
                                    </a>
                                    <a href={member.socials.instagram} className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-[#E5192C] transition-colors" aria-label="Instagram">
                                        <FaInstagram className="w-3.5 h-3.5" />
                                    </a>
                                    <a href={member.socials.linkedin} className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-[#E5192C] transition-colors" aria-label="LinkedIn">
                                        <FaLinkedinIn className="w-3.5 h-3.5" />
                                    </a>
                                    <a href={member.socials.youtube} className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-[#E5192C] transition-colors" aria-label="YouTube">
                                        <FaYoutube className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center">
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
