import SubBanner from "@/app/components/ui/subbanner";
import TeamSec from "@/app/components/layout/team/teamsec";
import OurImpact from "../components/ui/ourimpact";

export default function TeamPage() {
    return (
        <main>
            <SubBanner bannerKey="team" />
            <TeamSec />
            <OurImpact/>
        </main>
    );
}
