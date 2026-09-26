"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/utils/animations";
import { site } from "@/data";
import { FaArrowRight, FaDumbbell } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Pagination from "@/app/components/ui/pagination";

interface HomeBlogProps {
    isBlogPage?: boolean;
}

const data = site.homeBlog;

export default function HomeBlog({ isBlogPage = false }: HomeBlogProps) {

    const [currentPage, setCurrentPage] = useState(1);
    
    const postsPerPage = 6;
    let displayedPosts = data.posts;
    let totalPages = 1;
    
    if (isBlogPage) {
        totalPages = Math.ceil(data.posts.length / postsPerPage);
        const startIndex = (currentPage - 1) * postsPerPage;
        displayedPosts = data.posts.slice(startIndex, startIndex + postsPerPage);
    } else {
        displayedPosts = data.posts.slice(0, 3);
    }

    // Scroll to top of section on page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
            >
                
                {/* Header Content */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mb-6"
                >
                    {/* Tag */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-black tracking-[0.3em] text-xs sm:text-sm font-medium uppercase">
                            {data.tag}
                        </span>
                         <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900">
                        <span>{data.titleLine1} </span>
                        <span className="text-[#E5192C]">{data.titleLine2}</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        {data.subtitle}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {displayedPosts.map((post, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group flex flex-col"
                        >
                            
                            {/* Image Container */}
                            <div className="relative w-full h-50 aspect-[4/3] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Category Tag */}
                                <div className="absolute top-4 left-4 bg-[#E5192C] text-white px-3 py-1.5 rounded-sm text-xs font-semibold flex items-center gap-1.5 z-10 shadow-sm">
                                    <FaDumbbell className="text-[10px]" />
                                    <span>{post.category}</span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Date */}
                                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-[13px] font-medium mb-3">
                                    <FaRegCalendarAlt className="text-[#E5192C] text-[18px]" />
                                    <span className="text-[14px]">{post.date}</span>
                                </div>

                                {/* Title */}
                                <Link href={`/blogdetails?name=${post.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2 hover:text-[#E5192C] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>

                                {/* Description */}
                                <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                                    {post.description}
                                </p>

                                {/* Read More */}
                                <Link 
                                    href={`/blogdetails?name=${post.title.replace(/\s+/g, '-').toLowerCase()}`} 
                                    className="flex items-center gap-2 text-[#E5192C] font-bold text-[13px] sm:text-sm uppercase tracking-wide group/link w-fit"
                                >
                                    <span className="w-8 h-[2px] bg-[#E5192C] transition-all group-hover/link:w-12"></span>
                                    <span>{data.readMoreText}</span>
                                    <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination (Only on Blog Page) */}
                {isBlogPage && totalPages > 1 && (
                    <motion.div variants={itemVariants}>
                        <Pagination 
                            currentPage={currentPage} 
                            totalPages={totalPages} 
                            onPageChange={handlePageChange} 
                        />
                    </motion.div>
                )}

                {/* View All Button */}
                {!isBlogPage && (
                <motion.div variants={itemVariants} className="flex justify-center mt-6">
                    <Link 
                        href={data.button.url}
                        className="inline-flex items-center justify-center gap-3 bg-[#E5192C] text-white px-6 py-3 sm:px-6 sm:py-2 rounded-full hover:bg-red-700 transition-colors duration-300 font-medium tracking-wide group shadow-md hover:shadow-lg"
                    >
                        {data.button.label}
                        <span className="w-8 h-8 rounded-full bg-white text-[#E5192C] flex items-center justify-center transition-transform group-hover:scale-110">
                            <FaArrowRight className="text-[12px]" />
                        </span>
                    </Link>
                </motion.div>
                )}

            </motion.div>
        </section>
    );
}
