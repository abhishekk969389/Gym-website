import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import ProgramSidebar from "@/app/components/layout/programdetails/sidebar";
import ProgramContent from "@/app/components/layout/programdetails/content";
import ProgramIncluded from "@/app/components/layout/programdetails/included";
import ProgramBenefits from "@/app/components/layout/programdetails/benefits";
import { site } from "@/data";

export default async function ProgramDetailsPage({ searchParams }: { searchParams: Promise<{ name?: string }> }) {
    // Await searchParams before accessing properties (Next.js 15+ requirement)
    const resolvedParams = await searchParams;
    
    const programs = site.homePrograms.programs;
    
    // Determine the program based on the 'name' query parameter
    const programName = resolvedParams.name ? resolvedParams.name.replace(/-/g, ' ').toLowerCase() : '';
    
    // Find the program by matching title (case-insensitive), fallback to the first one if not found
    const program = programs.find(p => p.title.toLowerCase() === programName) || programs[0];

    return (
        <main className="bg-white">
            <SubBanner bannerKey="programDetails" />
            
            <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 xl:gap-12">
                        <ProgramSidebar data={program} />
                        <ProgramContent data={program} />
                    </div>
                    <ProgramBenefits data={program} />
                    <ProgramIncluded data={program} />
                </div>
            </section>
        </main>
    );
}