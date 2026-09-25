import SubBanner from "@/app/components/ui/subbanner";
import HomeTestimonials from "@/app/components/homelayout/testimonial";

export default function TestimonialsPage() {
    return (
        <main>
            <SubBanner bannerKey="testimonials" />
            <HomeTestimonials isPage={true} />
        </main>
    );
}
