import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import TeamSidebar from "@/app/components/layout/teamdetails/sidebar";
import TeamContent from "@/app/components/layout/teamdetails/content";
import { site } from "@/data";

export default async function TeamDetailsPage({ searchParams }: { searchParams: Promise<{ name?: string }> }) {

    const resolvedParams = await searchParams;
    
    const teamMembers = site.teamSec.members;
    const memberName = resolvedParams.name ? resolvedParams.name.replace(/-/g, ' ').toLowerCase() : '';
    
    const member = teamMembers.find(m => m.name.toLowerCase() === memberName) || teamMembers[0];

    return (
        <main className="bg-white">
            <SubBanner bannerKey="teamDetails" />
            
            <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        <TeamSidebar data={member} />
                        <TeamContent data={member} />
                    </div>
                </div>
            </section>
        </main>
    );
}

