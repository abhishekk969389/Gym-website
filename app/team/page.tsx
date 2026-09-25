import SubBanner from "@/app/components/ui/subbanner";
import TeamSec from "@/app/components/layout/team/teamsec";

export default function TeamPage() {
    return (
        <main>
            <SubBanner bannerKey="team" />
            <TeamSec />
        </main>
    );
}
