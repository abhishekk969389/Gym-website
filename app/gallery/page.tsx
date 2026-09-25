import SubBanner from "@/app/components/ui/subbanner";
import GallerySec from "@/app/components/layout/gallery/imagegal";
import VideoGal from "@/app/components/layout/gallery/videogal";

export default function GalleryPage() {
    return (
        <main>
            <SubBanner bannerKey="gallery" />
            <GallerySec />
            <VideoGal />
        </main>
    );
}
