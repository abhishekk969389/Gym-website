"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gymData } from "@/data";
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteRight } from "react-icons/fa6";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight, BiSolidQuoteLeft } from "react-icons/bi";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/utils/animations";
import Pagination from "@/app/components/ui/pagination";
const data = gymData.homeTestimonials;

type TestimonialProps = {
    isPage?: boolean;
};

export default function HomeTestimonials({ isPage = false }: TestimonialProps) {
    const sectionRef = useRef<HTMLElement>(null);

    // Duplicate testimonials so the slider can smoothly scroll even when showing 3 cards
    const displayTestimonials = [...data.testimonials, ...data.testimonials, ...data.testimonials];
    const totalOriginal = data.testimonials.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    // Pagination for grid layout (isPage = true)
    const [pageNumber, setPageNumber] = useState(1);
    const itemsPerPage = 6;
    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGridTestimonials = data.testimonials.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.testimonials.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setPageNumber(page);
        if (sectionRef.current) {
            const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

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
        <section ref={sectionRef} className={`bg-white relative overflow-hidden ${isPage ? 'mt-8 sm:mt-10 md:mt-12 lg:mt-14' : 'mt-8 sm:mt-10 md:mt-12 lg:mt-14'}`}>
            {/* Background Decorative Elements */}
            <div className="absolute top-2 right-10 opacity-[0.03] text-[#E5192C] z-0 pointer-events-none">
                <BiSolidQuoteLeft className="text-[100px]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 ${isPage ? 'lg:px-8' : 'lg:px-16'}`}
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

                {isPage ? (
                    <>
                    {/* Grid Container */}
                    <motion.div 
                        key={pageNumber}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left"
                    >
                        {currentGridTestimonials.map((testimonial, index) => (
                            <div key={index} className="flex flex-col h-full">
                                <div className="bg-white rounded-md p-6 sm:p-7 border border-gray-100 flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 relative">

                                    <div className="flex gap-4 sm:gap-5 mb-5">
                                        {/* Avatar */}
                                        <div className="shrink-0">
                                            <div className="relative w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden border-2 border-gray-50">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Stars and Text */}
                                        <div className="flex flex-col w-full">
                                            <div className="flex justify-between items-start mb-2">
                                                {/* Stars */}
                                                <div className="flex items-center gap-[2px] mt-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <FaStar key={i} className="text-[#E5192C] text-[13px] sm:text-[15px]" />
                                                    ))}
                                                </div>

                                                {/* Quote Icon */}
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFE8E8] flex items-center justify-center shrink-0">
                                                    <BiSolidQuoteAltLeft className="text-lg sm:text-xl text-[#E5192C]" />
                                                </div>
                                            </div>

                                            {/* Text */}
                                            <p className="text-gray-600 text-sm sm:text-sm md:text-base   leading-relaxed pr-2">
                                                "{testimonial.text.split(' ').slice(0, 18).join(' ')}{testimonial.text.split(' ').length > 18 ? '...' : ''}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom: Name & Role */}
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <h3 className="text-sm sm:text-sm md:text-base font-black text-gray-900 leading-tight">
                                            {testimonial.name}
                                        </h3>
                                        <div className="w-8 h-[2px] bg-[#E5192C] my-[6px]"></div>
                                        <p className="text-gray-500 text-sm sm:text-sm md:text-base">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Pagination Controls for Grid */}
                    <Pagination 
                        currentPage={pageNumber} 
                        totalPages={totalPages} 
                        onPageChange={handlePageChange} 
                    />
                </>
                ) : (
                    /* Slider Container */
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
                )}
            </motion.div>
        </section>
    );
}
