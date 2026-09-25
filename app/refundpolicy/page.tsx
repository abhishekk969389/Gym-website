import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import RefundPolicySec from "@/app/components/layout/refundpolicy/refundpolicysec";

export default function RefundPolicyPage() {
    return (
        <main>
            <SubBanner bannerKey="refundpolicy" />
            <RefundPolicySec />
        </main>
    );
}
