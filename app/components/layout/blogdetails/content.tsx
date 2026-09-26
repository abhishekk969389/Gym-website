"use client";

import React from "react";
import { BlogPost, site, SectionProps } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserAlt, FaCalendarAlt, FaFolder, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

export default function BlogContent({ data, className }: SectionProps<BlogPost> = {}) {
    const post = data || site.homeBlog.posts[0];
    if (!post || !post.details) return null;

    const { details } = post;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            key={post.id}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex-1 w-full lg:max-w-[70%] flex flex-col"
        >
            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-3 mt-2 tracking-tighter text-gray-900">
                {post.title.split(' ').map((word, idx) => (
                    // Optional styling if the user wants red words, assuming first word or specific pattern is red 
                    // To match the screenshot exactly, it has "a Healthier You" in red. We'll just style the whole title and let them refine it.
                    <span key={idx} className={idx > post.title.split(' ').length - 4 ? 'text-[#E5192C] inline-block mr-2' : 'inline-block mr-2'}>{word}</span>
                ))}
            </motion.h1>

            {/* Meta tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 sm:gap-6 text-[14px] text-gray-500 font-medium mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                    <FaUserAlt className="text-[#E5192C] h-5 w-5" />
                    <span className="text-sm sm:text-sm md:text-base">{site.homeBlog.blogDetailsLayout.authorPrefix}{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#E5192C] h-5 w-5" />
                    <span className="text-sm sm:text-sm md:text-base">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaFolder className="text-[#E5192C] h-5 w-5" />
                    <span className="text-sm sm:text-sm md:text-base">{post.category}</span>
                </div>
            </motion.div>

            {/* Main Image */}
            <motion.div variants={itemVariants} className="w-full relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden mb-8">
                <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Paragraphs 1 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 text-gray-600 leading-relaxed text-[15px] sm:text-[16px] mb-8">
                {details.paragraphs1.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </motion.div>

            {/* Quote Block */}
            <motion.div variants={itemVariants} className="bg-pink-200/20 border-l-4 border-[#E5192C] p-6 sm:p-8 mb-8 flex gap-4 sm:gap-5 items-start">
                <FaQuoteLeft className="text-[#E5192C] text-3xl sm:text-4xl shrink-0 mt-1" />
                <p className="text-[#0a0e14] font-semibold italic text-lg sm:text-xl leading-snug tracking-tight">
                    "{details.quote}"
                </p>
            </motion.div>

            {/* Paragraphs 2 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 text-gray-600 leading-relaxed text-[15px] sm:text-[16px] mb-10">
                {details.paragraphs2.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </motion.div>

            {/* List Section */}
            {details.listSection && (
                <motion.div variants={itemVariants} className="flex flex-col gap-5">
                    <h2 className="text-2xl sm:text-[28px] font-black uppercase text-[#0a0e14] tracking-tight">{details.listSection.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px] mb-2">
                        {details.listSection.description}
                    </p>
                    <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                        {details.listSection.items.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.3 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 sm:gap-4"
                            >
                                <FaCheckCircle className="text-[#E5192C] text-xl shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-[15px] sm:text-[16px]">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                    {details.listSection.conclusion && (
                        <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px]">
                            {details.listSection.conclusion}
                        </p>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
}


