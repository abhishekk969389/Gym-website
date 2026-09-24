import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2 mt-10">
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Previous Page"
            >
                <FaArrowLeft className="text-sm " />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md border transition-colors text-sm font-medium
                        ${currentPage === page 
                            ? "bg-[#ff2a3a] border-[#ff2a3a] text-white" 
                            : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                        }
                    `}
                >
                    {page}
                </button>
            ))}

            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Next Page"
            >
                <FaArrowRight className="text-sm cursor-pointer" />
            </button>
        </div>
    );
}
