import SubBanner from "@/app/components/ui/subbanner";
import FaqSec from "@/app/components/layout/faq/faqsec";
import ConsultationSec from "@/app/components/layout/consultation/section";

export default function FaqPage() {
    return (
        <main>
            <SubBanner bannerKey="faq" />
            <FaqSec />
        </main>
    );
}
