"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaImage } from 'react-icons/fa6';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { gymData, GalleryData } from '@/data';

const galleryData: GalleryData = gymData.gallery;

export default function GallerySec() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(8);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Filter images based on active category
    const filteredImages = galleryData.images.filter(
        img => activeCategory === "all" || img.category === activeCategory
    );
    
    // Get visible images
    const visibleImages = filteredImages.slice(0, visibleCount);

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
        setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    };

    return (
        <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header section (Centered) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <div className="flex items-center justify-center gap-4">
              <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-black tracking-[0.3em] text-xs sm:text-sm font-medium uppercase">
                            {galleryData.badge}
                        </span>
             <div className="w-12 sm:w-16 h-[1px] bg-[#E5192C]"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-2 tracking-tighter text-gray-900">
                        {galleryData.title.normal} <span className="text-[#E5192C]">{galleryData.title.highlighted}</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        {galleryData.desc}
                    </p>
                </motion.div>

                {/* Sub-header & Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E5192C] flex items-center justify-center shrink-0">
                            <FaImage className="text-white text-xl sm:text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0a0e14]  mb-1">
                                <span className="text-[#0a0e14]">Photo </span>
                                <span className="text-[#E5192C]">Gallery</span>
                            </h3>
                            <p className="text-sm sm:text-sm md:text-base lg:text-[18px] text-gray-600">
                                {galleryData.header.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {galleryData.categories.map((cat) => (
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

                {/* Images Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                    <AnimatePresence mode='popLayout'>
                        {visibleImages.map((img, index) => (
                            <motion.div 
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                                key={img.id} 
                                onClick={() => openModal(filteredImages.indexOf(img))}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer bg-gray-100"
                            >
                            <Image 
                                src={img.src}
                                alt={img.alt || "Gallery image"}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <span className="text-white font-bold capitalize translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.category}
                                </span>
                            </div>
                        </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                {filteredImages.length > visibleCount && (
                    <div className="text-center mt-12">
                        <button 
                            onClick={handleLoadMore}
                            className="px-6 sm:px-12 py-2.5 rounded-md border-2 border-[#E5192C] text-[#E5192C] font-bold text-sm sm:text-base hover:bg-[#E5192C] hover:text-white transition-colors duration-300"
                        >
                            {galleryData.loadMoreText} +
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
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded text-white text-xl transition-colors"
                        onClick={closeModal}
                    >
                        <FaTimes />
                    </button>

                    <button 
                        className="absolute left-4 sm:left-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded-full text-white text-xl transition-colors"
                        onClick={prevSlide}
                    >
                        <FaChevronLeft />
                    </button>

                    <button 
                        className="absolute right-4 sm:right-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded-full text-white text-xl transition-colors"
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
                        className="relative w-full max-w-5xl h-[70vh] mx-16 sm:mx-24 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={filteredImages[selectedIndex].src}
                            alt={filteredImages[selectedIndex].alt || "Gallery Image"}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#3c342f] text-white px-6 py-2 rounded-full font-bold text-sm sm:text-base shadow-xl">
                            {filteredImages[selectedIndex].alt || "Gallery Image"}
                        </div>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </section>
    );
}
