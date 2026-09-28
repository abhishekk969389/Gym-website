"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/app/utils/animations';
import { site, SectionProps, FooterData } from "@/data";
import { 
    FaFacebookF, 
    FaInstagram, 
    FaYoutube, 
    FaLinkedinIn,
    FaChevronRight,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaRegClock
} from 'react-icons/fa';
import { IconType } from 'react-icons';

const ICON_MAP: Record<string, IconType> = {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaRegClock
};

export default function Footer({ data, className }: SectionProps<FooterData> = {}) {
    const resolvedData = data || site.footer;

    return (
        <footer className="relative bg-[#0a0e14] mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-white overflow-hidden pt-16">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-70"
                style={{ backgroundImage: "url('/footer.png')" }}
            ></div>
            <div className="absolute inset-0 z-0"></div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-10 md:gap-10 pb-12"
                >
                    <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-3 flex flex-col">
                        <Link href="/" className="mb-6 inline-block">
                            <img src={resolvedData.logo} alt="Logo" className="w-auto h-14 sm:h-16 lg:h-[72px] object-contain" />
                        </Link>
                        <p className="text-white text-sm md:text-[16px] leading-relaxed mb-6">
                            {resolvedData.description}
                        </p>
                        <div className="flex items-center gap-3">
                            {resolvedData.socialLinks.map((social: any, idx: number) => {
                                const Icon = ICON_MAP[social.icon];
                                return (
                                    <Link key={idx} href={social.url} className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:text-white hover:bg-[#E5192C] hover:border-[#E5192C] transition-all">
                                        {Icon && <Icon className="text-xl" />}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
                        <h3 className="text-white font-bold text-lg">{resolvedData.quickLinks.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <ul className="flex flex-col gap-3">
                            {resolvedData.quickLinks.links.map((link: any, idx: number) => (
                                <li key={idx}>
                                    <Link href={link.url} className="text-gray-400 hover:text-[#E5192C] text-sm flex items-center gap-2 transition-colors">
                                        <FaChevronRight className="text-[#E5192C] text-[12px] shrink-0" />
                                        <span className='text-white text-sm md:text-[15px]'>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
                        <h3 className="text-white font-bold text-lg">{resolvedData.ourServices.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <ul className="flex flex-col gap-3">
                            {resolvedData.ourServices.links.map((link: any, idx: number) => (
                                <li key={idx}>
                                    <Link href={link.url} className="text-gray-400 hover:text-[#E5192C] text-sm flex items-center gap-2 transition-colors">
                                        <FaChevronRight className="text-[#E5192C] text-[12px] shrink-0" />
                                        <span className='text-white text-sm md:text-[15px]'>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-2">
                        <h3 className="text-white font-bold text-lg">{resolvedData.contactInfo.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <div className="flex flex-col gap-5">
                            {resolvedData.contactInfo.items.map((item: any, idx: number) => {
                                const Icon = ICON_MAP[item.icon];
                                return (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0 mt-1">
                                            {Icon && <Icon className="text-white text-sm" />}
                                        </div>
                                        <span className="text-white text-sm md:text-[15px] leading-relaxed">
                                            {item.text.split('\n').map((line: any, i: number) => (
                                                <span key={i} className="block">{line}</span>
                                            ))}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-3 lg:pl-2 xl:pl-8">
                        <h3 className="text-white font-bold text-lg">{resolvedData.openingHours.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <div className="flex items-start gap-4">
                            {(() => {
                                const Icon = ICON_MAP[resolvedData.openingHours.icon];
                                return (
                                    <div className="w-8 h-8 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0 mt-1">
                                        {Icon && <Icon className="text-white text-sm" />}
                                    </div>
                                );
                            })()}
                            <div className="flex flex-col gap-4">
                                {resolvedData.openingHours.schedule.map((slot: any, idx: number) => (
                                    <div key={idx} className="flex flex-col">
                                        <span className="text-white text-sm md:text-[16px] font-semibold">{slot.day}</span>
                                        <span className="text-white/90 text-sm md:text-[14px]">{slot.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative z-10 border-t border-white/90"
            >
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
                    <p className="text-white text-center lg:text-left text-sm md:text-[16px] ">
                        {resolvedData.bottomBar.copyright}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-2 sm:gap-x-4 text-sm">
                        {resolvedData.bottomBar.links.map((link: any, idx: number) => (
                            <React.Fragment key={idx}>
                                <Link href={link.url} className="text-white text-sm md:text-[16px] hover:text-white transition-colors whitespace-nowrap">
                                    {link.label}
                                </Link>
                                {idx < resolvedData.bottomBar.links.length - 1 && (
                                    <span className="text-gray-600 shrink-0">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}




