import SubBanner from "@/app/components/ui/subbanner";
import PricingSec from "@/app/components/layout/pricing/pricingsec";

export default function GalleryPage() {
    return (
        <main>
            <SubBanner bannerKey="pricing" />
            <PricingSec />
        </main>
    );
}
