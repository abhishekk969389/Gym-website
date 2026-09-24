import SubBanner from "@/app/components/ui/subbanner";
import HomePrograms from "@/app/components/homelayout/program";
import OurImpact from "../components/ui/ourimpact";
import HowItWorks from "../components/homelayout/howitworks";

export default function ProgramPage() {
    return (
        <main>
            <SubBanner bannerKey="programs" />   
            <HomePrograms isProgramPage={true} />
            <OurImpact/>
            <HowItWorks />
        </main>
    );
}