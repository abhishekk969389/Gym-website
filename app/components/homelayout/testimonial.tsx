"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { gymData } from "@/data";
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteRight } from "react-icons/fa6";
import { BiSolidQuoteAltRight, BiSolidQuoteLeft } from "react-icons/bi";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/utils/animations";
export default function HomeTestimonials() {
    const data = gymData.homeTestimonials;
    
    // Duplicate testimonials so the slider can smoothly scroll even when showing 3 cards
    const displayTestimonials = [...data.testimonials, ...data.testimonials, ...data.testimonials];
    const totalOriginal = data.testimonials.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth < 768) setCardsToShow(1);
            else if (window.innerWidth < 1024) setCardsToShow(2);
            else setCardsToShow(3);
        };
        
        // Initial setup
        updateCardsToShow();
        
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalOriginal);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalOriginal) % totalOriginal);
    };

    return (
        <section className="bg-white relative overflow-hidden mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            {/* Background Decorative Elements */}
            <div className="absolute top-2 right-10 opacity-[0.03] text-[#E5192C] z-0 pointer-events-none">
                <BiSolidQuoteLeft className="text-[100px]" />
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16"
            >
                
                {/* Header Content */}
                <motion.div variants={itemVariants} className="text-center">
                    {/* Tag */}
                    <div className="flex items-center justify-center gap-3 ">
                        <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-black tracking-[0.3em] text-xs sm:text-sm font-medium uppercase">
                            {data.tag}
                        </span>
                        <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900">
                        <span>{data.titleLine1} </span>
                        <span className="text-[#E5192C]">{data.titleLine2}</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-sm sm:text-base">
                        {data.subtitle}
                    </p>
                </motion.div>

                {/* Slider Container */}
                <motion.div variants={itemVariants} className="relative w-full">
                    {/* Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="hidden lg:flex absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-[#E5192C] hover:text-white transition-all z-20 text-gray-800"
                    >
                        <FaArrowLeft />
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-[#E5192C] hover:text-white transition-all z-20 text-gray-800"
                    >
                        <FaArrowRight />
                    </button>

                    {/* Slider window */}
                    <div className="overflow-hidden py-6">
                        <div 
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                        >
                            {displayTestimonials.map((testimonial, index) => (
                                <div 
                                    key={index} 
                                    className="px-3 shrink-0"
                                    style={{ width: `${100 / cardsToShow}%` }}
                                >
                                    <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 flex flex-col h-full overflow-hidden group">
                                        
                                        {/* Header: Avatar + Info */}
                                        <div className="flex items-center gap-5 mb-6">
                                            {/* Avatar with gradient border */}
                                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-pink-200 to-red-400 p-[2px] shrink-0">
                                                <div className="w-full h-full bg-white rounded-full p-[2px]">
                                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                                        <Image 
                                                            src={testimonial.avatar} 
                                                            alt={testimonial.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Info */}
                                            <div>
                                                <h3 className="text-xl font-black text-gray-900 leading-tight">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-gray-500 text-xs sm:text-[15px] mb-2">
                                                    {testimonial.role}
                                                </p>
                                                <div className="flex items-center gap-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <FaStar key={i} className="text-[#FFC107] text-md" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <p className="text-gray-600 text-[16px] leading-relaxed relative z-10">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Watermark Quote */}
                                        <div className="absolute bottom-2 right-6 z-0">
                                            <BiSolidQuoteAltRight className="text-4xl text-[#FFE8E8] transition-transform group-hover:scale-110 duration-300" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Pagination Dots */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 ">
                    {Array.from({ length: totalOriginal }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                currentIndex === idx ? "bg-[#E5192C]" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
