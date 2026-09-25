import SubBanner from "@/app/components/ui/subbanner";
import WhyChooseUs from "../components/layout/whychooseus/whychoosesec";
import OurImpact from "../components/ui/ourimpact";
import HomeTestimonials from "../components/homelayout/testimonial";

export default function GalleryPage() {
    return (
        <main>
            <SubBanner bannerKey="whychooseus" />
            <WhyChooseUs/>
            <OurImpact/>
            <HomeTestimonials/>
        </main>
    );
}
