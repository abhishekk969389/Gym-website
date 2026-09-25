import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import TermsConditionSec from "@/app/components/layout/termscondition/termsconditionsec";

export default function TermsConditionPage() {
    return (
        <main>
            <SubBanner bannerKey="termscondition" />
            <TermsConditionSec />
        </main>
    );
}
