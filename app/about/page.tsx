import SubBanner from "@/app/components/ui/subbanner";
import HomeAbout from "@/app/components/homelayout/about";
import HowItWorks from "../components/homelayout/howitworks";
import OurImpact from "../components/ui/ourimpact";
import WhyChooseUs from "../components/layout/whychooseus/whychoosesec";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <SubBanner bannerKey="about" />
            <HomeAbout isAboutPage={true} />
            <HowItWorks/>
            <OurImpact/>
            <WhyChooseUs />
        </main>
    );
}
