"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariantsLeft } from "@/app/utils/animations";
import { site } from "@/data";
import { FaArrowRight } from "react-icons/fa6";

const data = site.homeCta;

export default function HomeTraining() {

    return (
        <section className="relative w-full h-90 overflow-hidden flex items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.bgImage}
                    alt="Personal Training"
                    fill
                    className="object-cover object-center lg:object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-black/80 to-transparent w-full lg:w-[80%]"></div>
                <div className="absolute inset-0 bg-black/60 md:hidden"></div>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center h-full"
            >
                <div className="max-w-2xl">
                    <motion.div variants={itemVariantsLeft} className="flex items-center gap-2 mb-2">
                        <div className="w-12 sm:w-14 h-[1px] bg-[#E5192C]"></div>
                        <span className="text-gray-300 tracking-[0.2em] text-xs font-medium uppercase">
                            {data.tag}
                        </span>
                        <div className="w-12 sm:w-14 h-[1px] bg-[#E5192C]"></div>
                    </motion.div>
                    <motion.h2 variants={itemVariantsLeft} className="text-3xl sm:text-5xl md:text-[40px] font-black mb-4 tracking-tighter leading-[1.1]">
                        <div className="text-white">{data.titleLine1}</div>
                        <div className="">
                            <span className="text-[#E5192C]">{data.titleLine2}</span>
                            <span className="text-white">{data.titleLine3}</span>
                        </div>
                    </motion.h2>
                    <motion.div variants={itemVariantsLeft}>
                        <Link
                            href={data.button.url}
                            className="inline-flex items-center justify-center gap-2 bg-[#E5192C] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300 font-medium tracking-wide group"
                        >
                            {data.button.label}
                            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
