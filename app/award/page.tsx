import SubBanner from "@/app/components/ui/subbanner";
import AwardSec from "@/app/components/layout/award/awardsec";
import CerSec from "@/app/components/layout/award/cersec";

export default function AwardPage() {
    return (
        <main>
            <SubBanner bannerKey="award" />
                  <AwardSec />
            <CerSec />
        </main>
    );
}