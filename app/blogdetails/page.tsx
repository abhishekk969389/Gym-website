import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import BlogSidebar from "@/app/components/layout/blogdetails/sidebar";
import BlogContent from "@/app/components/layout/blogdetails/content";
import { gymData } from "@/data";

export default async function BlogDetailsPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
    // Await searchParams before accessing properties (Next.js 15+ requirement)
    const resolvedParams = await searchParams;
    
    const posts = gymData.homeBlog.posts;
    
    // Determine the post based on the 'id' query parameter
    const postId = resolvedParams.id ? parseInt(resolvedParams.id, 10) : 1;
    
    // Find the post by matching id, fallback to the first one if not found
    const post = posts.find(p => p.id === postId) || posts[0];

    return (
        <main className="bg-white">
            <SubBanner bannerKey="blogDetails" />
            
            <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
                        <BlogContent post={post} />
                        <BlogSidebar />
                    </div>
                </div>
            </section>
        </main>
    );
}
