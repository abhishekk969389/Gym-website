import SubBanner from "@/app/components/ui/subbanner";
import ContactSec from "@/app/components/layout/contactus/contactsec";
import MapSec from "@/app/components/layout/contactus/map";

export default function ContactUsPage() {
    return (
        <main>
            <SubBanner bannerKey="contact" />
            <ContactSec />
            <MapSec />
        </main>
    );
}
