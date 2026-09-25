import SubBanner from "@/app/components/ui/subbanner";
import MissionSec from "@/app/components/layout/mission/missionsec";
import OurImpact from "../components/ui/ourimpact";
import HowItWorks from "../components/homelayout/howitworks";

export default function MissionPage() {
    return (
        <main>
            <SubBanner bannerKey="mission" />
            <MissionSec />
            <OurImpact/>
            <HowItWorks/>
        </main>
    );
}
