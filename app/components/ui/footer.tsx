"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/app/utils/animations';
import { gymData } from '@/data';
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

export default function Footer() {
    const data = gymData.footer;

    return (
        <footer className="relative bg-[#0a0e14] mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-white overflow-hidden pt-16">
            {/* Background Image & Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-70"
                style={{ backgroundImage: "url('/footer.png')" }}
            ></div>
            <div className="absolute inset-0 z-0"></div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Footer Area (Grid) */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12"
                >
                    
                    {/* Col 1: Logo, Desc, Social */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col">
                        <Link href="/" className="mb-6 inline-block">
                            <img src={data.logo} alt="Logo" className="w-auto h-14 sm:h-16 lg:h-[72px] object-contain" />
                        </Link>
                        <p className="text-white text-sm md:text-[16px] leading-relaxed mb-6">
                            {data.description}
                        </p>
                        <div className="flex items-center gap-3">
                            {data.socialLinks.map((social, idx) => {
                                const Icon = ICON_MAP[social.icon];
                                return (
                                    <Link key={idx} href={social.url} className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:text-white hover:bg-[#E5192C] hover:border-[#E5192C] transition-all">
                                        {Icon && <Icon className="text-sm" />}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Col 2: Quick Links */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg">{data.quickLinks.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <ul className="flex flex-col gap-3">
                            {data.quickLinks.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.url} className="text-gray-400 hover:text-[#E5192C] text-sm flex items-center gap-2 transition-colors">
                                        <FaChevronRight className="text-[#E5192C] text-[12px] shrink-0" />
                                        <span className='text-white text-sm md:text-[15px]'>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Col 3: Our Services */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg">{data.ourServices.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <ul className="flex flex-col gap-3">
                            {data.ourServices.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.url} className="text-gray-400 hover:text-[#E5192C] text-sm flex items-center gap-2 transition-colors">
                                        <FaChevronRight className="text-[#E5192C] text-[12px] shrink-0" />
                                        <span className='text-white text-sm md:text-[15px]'>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Col 4: Contact Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg">{data.contactInfo.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <div className="flex flex-col gap-5">
                            {data.contactInfo.items.map((item, idx) => {
                                const Icon = ICON_MAP[item.icon];
                                return (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0 mt-1">
                                            {Icon && <Icon className="text-white text-sm" />}
                                        </div>
                                        <span className="text-white text-sm md:text-[15px] leading-relaxed">
                                            {item.text.split('\n').map((line, i) => (
                                                <span key={i} className="block">{line}</span>
                                            ))}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Col 5: Opening Hours */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-2 xl:pl-8">
                        <h3 className="text-white font-bold text-lg">{data.openingHours.title}</h3>
                        <div className="w-8 h-[2px] bg-[#E5192C] mt-3 mb-6"></div>
                        <div className="flex items-start gap-4">
                            {(() => {
                                const Icon = ICON_MAP[data.openingHours.icon];
                                return (
                                    <div className="w-8 h-8 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0 mt-1">
                                        {Icon && <Icon className="text-white text-sm" />}
                                    </div>
                                );
                            })()}
                            <div className="flex flex-col gap-4">
                                {data.openingHours.schedule.map((slot, idx) => (
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

            {/* Bottom Bar - Full Width Border */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative z-10 border-t border-white/90"
            >
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-sm md:text-[16px] ">
                        {data.bottomBar.copyright}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        {data.bottomBar.links.map((link, idx) => (
                            <React.Fragment key={idx}>
                                <Link href={link.url} className="text-white text-sm md:text-[16px] hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                                {idx < data.bottomBar.links.length - 1 && (
                                    <span className="text-gray-600">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
