import SubBanner from "@/app/components/ui/subbanner";
import HomeBlog from "@/app/components/homelayout/blog";

export default function BlogPage() {
    return (
        <main>
            <SubBanner bannerKey="blog" />
            <HomeBlog isBlogPage={true} />
        </main>
    );
}