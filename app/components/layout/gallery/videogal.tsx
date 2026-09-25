"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { gymData, VideoGalleryData } from '@/data';

const videoData: VideoGalleryData = gymData.videoGallery;

export default function VideoGal() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(8);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Filter videos based on active category
    const filteredVideos = videoData.videos.filter(
        vid => activeCategory === "all" || vid.category === activeCategory
    );
    
    // Get visible videos
    const visibleVideos = filteredVideos.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8);
    };

    // Reset visible count when category changes
    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        setVisibleCount(8);
    };

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "auto";
    };

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % filteredVideos.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? filteredVideos.length - 1 : prev - 1));
    };

    return (
        <section className=" mt-8 sm:mt-10 md:mt-12 lg:mt-14 border-t border-gray-100">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header & Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0">
                            <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0a0e14] mb-1">
                                <span className="text-[#0a0e14]">{videoData.header.titlePart1}</span>
                                <span className="text-[#E5192C]">{videoData.header.titlePart2}</span>
                            </h3>
                            <p className="text-sm sm:text-sm md:text-base lg:text-[18px] text-gray-600">
                                {videoData.header.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {videoData.categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`px-4 sm:px-5 cursor-pointer py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                                    activeCategory === cat.id 
                                    ? "bg-[#E5192C] text-white border border-[#E5192C] shadow-md shadow-[#E5192C]/20" 
                                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Videos Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">
                    <AnimatePresence mode='popLayout'>
                        {visibleVideos.map((vid, index) => (
                            <motion.div 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                                key={vid.id} 
                                className="group flex flex-col"
                            >
                            {/* Thumbnail Container */}
                            <div 
                                onClick={() => openModal(filteredVideos.indexOf(vid))}
                                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-gray-100 mb-4"
                            >
                                <Image 
                                    src={vid.thumbnail}
                                    alt={vid.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay & Play Button */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <FaPlay className="text-[#0a0e14] text-lg ml-1" />
                                    </div>
                                </div>
                                {/* Duration Badge */}
                                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-bold font-mono tracking-wider">
                                    {vid.duration}
                                </div>
                            </div>

                            {/* Video Info */}
                            <div>
                                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 line-clamp-1 group-hover:text-[#E5192C] transition-colors duration-200">
                                    {vid.title}
                                </h4>
                                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                                    {vid.desc}
                                </p>
                            </div>
                        </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                {filteredVideos.length > visibleCount && (
                    <div className="text-center">
                        <button 
                            onClick={handleLoadMore}
                            className="px-6 cursor-pointer sm:px-12 py-2.5 rounded-md border-2 border-[#E5192C] text-[#E5192C] font-bold text-sm sm:text-base hover:bg-[#E5192C] hover:text-white transition-colors duration-300"
                        >
                            {videoData.loadMoreText} +
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#252525] bg-opacity-95" 
                        onClick={closeModal}
                    >
                    <button 
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded text-white text-xl transition-colors z-10"
                        onClick={closeModal}
                    >
                        <FaTimes />
                    </button>

                    <button 
                        className="absolute left-4 sm:left-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded-full text-white text-xl transition-colors z-10"
                        onClick={prevSlide}
                    >
                        <FaChevronLeft />
                    </button>

                    <button 
                        className="absolute right-4 sm:right-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded-full text-white text-xl transition-colors z-10"
                        onClick={nextSlide}
                    >
                        <FaChevronRight />
                    </button>

                    <motion.div 
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-4xl aspect-video mx-16 sm:mx-24 flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={filteredVideos[selectedIndex].videoUrl}
                            title={filteredVideos[selectedIndex].title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg shadow-2xl bg-black"
                        ></iframe>
                        
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#3c342f] text-white px-6 py-2 rounded-full font-bold text-sm sm:text-base shadow-xl text-center whitespace-nowrap">
                            {filteredVideos[selectedIndex].title}
                        </div>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </section>
    );
}
