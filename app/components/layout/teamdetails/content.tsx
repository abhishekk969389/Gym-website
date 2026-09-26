"use client";

import React from "react";
import Link from "next/link";
import { TeamMember, site, SectionProps } from "@/data";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import * as FontAwesome from "react-icons/fa";
import { motion } from "framer-motion";

export default function TeamContent({ data, className }: SectionProps<TeamMember> = {}) {
    const member = data || site.teamSec.members[0];
    if (!member || !member.details) return null;

    const layout = site.teamSec.detailsLayout;

    const nameParts = member.name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    const socials = [
        { icon: FaFacebookF, url: member.socials.facebook, color: "hover:bg-[#1877F2]" },
        { icon: FaInstagram, url: member.socials.instagram, color: "hover:bg-[#E4405F]" },
        { icon: FaLinkedinIn, url: member.socials.linkedin, color: "hover:bg-[#0A66C2]" },
        { icon: FaYoutube, url: member.socials.youtube, color: "hover:bg-[#FF0000]" },
    ];

    const contactInfo = [
        { icon: FaPhoneAlt, label: "Phone", value: member.details.contact.phone },
        { icon: FaEnvelope, label: "Email", value: member.details.contact.email },
        { icon: FaMapMarkerAlt, label: "Location", value: member.details.contact.location },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-10"
        >
            
            {/* Header Section */}
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[2px] bg-[#E5192C]"></div>
                    <span className="text-[#0a0e14] font-bold tracking-[0.2em] uppercase text-sm">
                        {member.role}
                    </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-3 mt-2 tracking-tighter text-gray-900">
                    {firstName} <span className="text-[#E5192C]">{lastName}</span>
                </h2>
                <p className="text-gray-500 text-base mt-2 sm:text-lg leading-relaxed max-w-3xl mt-2">
                    {member.description}
                </p>
            </div>

            {/* Contact & Socials */}
            <div className="flex flex-col gap-6 mt-2 mb-2">
                <div className="flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-16">
                    {contactInfo.map((info, idx) => (
                        <div key={idx} className="flex items-center gap-3.5">
                            <div className="w-11 h-11 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0">
                                <info.icon className="text-white text-[17px]" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-900 font-bold text-[15px] leading-none">{info.label}</span>
                                <span className="text-gray-500 text-[15px]">{info.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    {socials.map((social, idx) => (
                        <Link 
                            key={idx} 
                            href={social.url}
                            className={`w-10 h-10 rounded-full bg-[#0a0e14] flex items-center justify-center transition-all duration-300 ${social.color} group`}
                        >
                            <social.icon className="text-white text-[15px] group-hover:scale-110 transition-transform" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Specialization */}
            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-black uppercase text-[#0a0e14]">Specialization</h3>
                <div className="flex flex-wrap gap-3">
                    {member.details.specialization.map((spec, idx) => (
                        <span key={idx} className="px-5 py-2.5 border border-gray-200 rounded-md text-gray-700 font-medium text-sm hover:border-[#E5192C] hover:text-[#E5192C] transition-colors cursor-default">
                            {spec}
                        </span>
                    ))}
                </div>
            </div>

            {/* About */}
            <div className="flex flex-col gap-6 mt-4">
                <h3 className="text-2xl font-black uppercase text-[#0a0e14]">{layout.aboutPrefix} {firstName}</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                    {member.details.about}
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {member.details.stats.map((stat, idx) => {
                    const Icon = FontAwesome[stat.icon as keyof typeof FontAwesome] as IconType;
                    return (
                        <div key={idx} className="flex items-center gap-4">
                            <Icon className="text-[#E5192C] text-4xl shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-xl font-black text-[#0a0e14]">{stat.value}</span>
                                <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Experience & Journey */}
            <div className="flex flex-col gap-8 mt-8">
                <h3 className="text-2xl font-black uppercase text-[#0a0e14]">{layout.experienceJourneyTitle}</h3>
                <div className="flex flex-col relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 gap-8">
                    {member.details.experience.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 flex flex-col md:flex-row md:items-start gap-2 md:gap-8 group">
                            <div className="absolute left-0 top-[7px] w-3 h-3 rounded-full bg-[#E5192C] shadow-sm z-10"></div>
                            
                            <div className="md:w-[140px] shrink-0">
                                <span className="text-[#0a0e14] font-black text-base md:text-[17px] tracking-tight">{exp.period}</span>
                            </div>
                            
                            <div className="flex flex-col gap-1.5 -mt-0.5">
                                <h4 className="text-lg font-bold text-[#0a0e14]">{exp.role}</h4>
                                <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
}



