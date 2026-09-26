"use client";

import React from "react";
import { site, SectionProps } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function BlogSidebar({ data, className }: SectionProps<any> = {}) {
    const layout = site.homeBlog.blogDetailsLayout.sidebar;
    const recentPosts = site.homeBlog.posts.slice(0, 4); // Just take first 4 for recent posts

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full lg:w-[350px] xl:w-[400px] shrink-0 flex flex-col gap-8"
        >
            {/* Categories */}
            <motion.div variants={itemVariants} className="bg-[#fafafa] p-6 sm:p-8 rounded-lg">
                <h3 className="text-xl sm:text-[22px] font-black uppercase text-[#0a0e14] mb-6 tracking-tight">
                    {layout.categoriesTitle}
                </h3>
                <div className="flex flex-col gap-4">
                    {layout.categories.map((cat, idx) => {
                        // Find the first post with this category, or fallback to the first post overall
                        const categoryPost = site.homeBlog.posts.find(p => p.category.toLowerCase() === cat.name.toLowerCase()) || site.homeBlog.posts[0];
                        
                        return (
                            <Link 
                                href={`/blogdetails?name=${categoryPost.title.replace(/\s+/g, '-').toLowerCase()}`}
                                key={idx} 
                                className={`flex items-center gap-3 pb-4 group ${idx !== layout.categories.length - 1 ? 'border-b border-gray-200' : ''}`}
                            >
                                <FaAngleDoubleRight className="text-[#E5192C] text-sm group-hover:translate-x-1 transition-transform" />
                                <span className="text-[#3a4454] font-bold text-[15px] group-hover:text-[#E5192C] transition-colors">
                                    {cat.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </motion.div>

            {/* Recent Posts */}
            <motion.div variants={itemVariants} className="bg-[#fafafa] p-6 sm:p-8 rounded-lg">
                <h3 className="text-xl sm:text-[22px] font-black uppercase text-[#0a0e14] mb-6 tracking-tight">
                    {layout.recentPostsTitle}
                </h3>
                <div className="flex flex-col gap-6">
                    {recentPosts.map((post, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1), duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/blogdetails?name=${post.title.replace(/\s+/g, '-').toLowerCase()}`} className="flex gap-4 group cursor-pointer">
                                <div className="w-[80px] h-[80px] shrink-0 relative overflow-hidden rounded">
                                <Image 
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-[#E5192C] font-semibold text-[13px] mb-1">{post.date}</span>
                                <h4 className="text-[#0a0e14] font-bold text-[15px] leading-tight tracking-tight group-hover:text-[#E5192C] transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                            </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

