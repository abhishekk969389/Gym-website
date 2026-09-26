"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants, itemVariantsLeft, itemVariantsRight } from "@/app/utils/animations";
import { site, FaqQuestion, SectionProps, FaqSecData } from "@/data";
import { IconType } from "react-icons";
import { 
    FaRegQuestionCircle, 
    FaRegIdCard, 
    FaRegCalendarAlt, 
    FaRegCreditCard, 
    FaDumbbell, 
    FaHeadset, 
    FaPhoneAlt, 
    FaEnvelope, 
    FaMapMarkerAlt, 
    FaPlus, 
    FaMinus 
} from "react-icons/fa";

// Dynamic Icon Map
const ICON_MAP: Record<string, IconType> = {
    FaRegQuestionCircle,
    FaRegIdCard,
    FaRegCalendarAlt,
    FaRegCreditCard,
    FaDumbbell,
    FaHeadset,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
};

const AccordionItem = ({ question, index }: { question: FaqQuestion; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-md mb-2 overflow-hidden bg-white">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gray-50/50 hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 font-medium text-sm">
                        {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                    </span>
                    <span className="font-bold text-gray-900 text-sm sm:text-base">
                        {question.q}
                    </span>
                </div>
                <div className="shrink-0 ml-4">
                    {isOpen ? (
                        <div className="w-6 h-6 rounded-full bg-[#E5192C] flex items-center justify-center">
                            <FaMinus className="text-white text-xs" />
                        </div>
                    ) : (
                        <FaPlus className="text-gray-400 text-sm" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-4 sm:p-5 pt-0 text-gray-600 text-sm sm:text-base pl-12">
                            {question.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FaqSec({ data: propData, className }: SectionProps<FaqSecData> = {}) {
    const data = propData || site.faqSec;
    const [activeCategory, setActiveCategory] = useState(data.categories[0].id);

    // Update active category based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const categoryElements = data.categories.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 200; // Offset for sticky header

            for (let i = categoryElements.length - 1; i >= 0; i--) {
                const el = categoryElements[i];
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveCategory(data.categories[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [data.categories]);

    const scrollToCategory = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 100, // Offset for sticky header
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-[#FAFAFA]">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
            >
                
                {/* Header Section */}
                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-center justify-center gap-3">
                       <div className="w-10 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-black tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium uppercase">
                            {data.tag}
                        </span>
                 <div className="w-10 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-3 mt-2 tracking-tighter text-gray-900">
                        {data.titlePart1} <span className="text-[#E5192C]">{data.titlePart2}</span>
                    </h2>
                    <p className="text-center text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        {data.subtitle}
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
                    
                    {/* Left Sidebar */}
                    <motion.div variants={itemVariantsLeft} className="lg:w-[350px] shrink-0">
                        <div className="sticky top-24 flex flex-col gap-8">
                            
                            {/* Navigation List */}
                            <div className="flex flex-col gap-2">
                                {data.categories.map((cat) => {
                                    const Icon = ICON_MAP[cat.icon];
                                    const isActive = activeCategory === cat.id;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => scrollToCategory(cat.id)}
                                            className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${isActive ? "bg-[#E5192C] text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-100"} text-left`}
                                        >
                                            <div className={`w-10 h-10 flex flex-col items-center justify-center ${isActive ? "text-white" : "text-gray-400"}`}>
                                                {Icon && <Icon className="text-xl" />}
                                            </div>
                                            <span className="font-bold text-sm sm:text-base">{cat.title}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Still Have Questions Card */}
                            <div className="relative rounded-2xl overflow-hidden text-white group bg-black">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={data.sidebar.bgImage}
                                        alt="Support"
                                        fill
                                        className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95"></div>
                                </div>
                                <div className="relative z-10 p-6 sm:p-8 flex flex-col items-start">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-[2px] bg-[#E5192C]"></div>
                                        <span className="text-[10px] tracking-widest uppercase font-bold text-gray-300">STILL HAVE</span>
                                    </div>
                                    <h3 className="text-3xl font-black uppercase mb-4 leading-none text-white whitespace-pre-line">
                                        {data.sidebar.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        {data.sidebar.description}
                                    </p>
                                    
                                    <div className="flex flex-col gap-4 mb-8 w-full">
                                        {data.sidebar.contacts.map((contact, i) => {
                                            const CIcon = ICON_MAP[contact.icon];
                                            return (
                                                <div key={i} className="flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0 mt-1">
                                                        {CIcon && <CIcon className="text-white text-xs" />}
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-200 mt-1.5 leading-snug">
                                                        {contact.text}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <Link 
                                        href={data.sidebar.button.url}
                                        className="w-full bg-[#E5192C] hover:bg-white hover:text-black text-white font-bold py-4 rounded-lg flex items-center justify-center transition-colors duration-300"
                                    >
                                        {data.sidebar.button.label}
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div variants={itemVariantsRight} className="flex-1 flex flex-col gap-12 lg:gap-16">
                        {data.categories.map((category) => {
                            const Icon = ICON_MAP[category.icon];
                            const numQuestions = category.questions.length;
                            const formattedNum = numQuestions < 10 ? `0${numQuestions}` : numQuestions;

                            return (
                                <div key={category.id} id={category.id} className="scroll-mt-32">
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                                {Icon && <Icon className="text-[#E5192C] h-8 w-8" />}
                                            </div>
                                            <h3 className="text-2xl font-black text-[#0a0e14]">{category.title}</h3>
                                        </div>
                                        <span className="text-gray-400 text-sm font-medium pb-1">
                                            {formattedNum} Questions
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {category.questions.map((q, i) => (
                                            <AccordionItem key={i} question={q} index={i} />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}

