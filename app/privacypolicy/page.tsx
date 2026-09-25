import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import PrivacyPolicySec from "@/app/components/layout/privacypolicy/privacypolicysec";

export default function PrivacyPolicyPage() {
    return (
        <main>
            <SubBanner bannerKey="privacypolicy" />
            <PrivacyPolicySec />
        </main>
    );
}
