import Banner from "@/app/components/homelayout/banner";
import HomeAbout from "@/app/components/homelayout/about";
import HomePrograms from "@/app/components/homelayout/program";
import HowItWorks from "@/app/components/homelayout/howitworks";

import OurImpact from "@/app/components/ui/ourimpact";
import HomeTestimonials from "@/app/components/homelayout/testimonial";
import HomeTraining from "@/app/components/homelayout/training";
import HomeBlog from "@/app/components/homelayout/blog";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAbout />
      <HomePrograms />
      <HowItWorks />
      <OurImpact />
      <HomeTestimonials />
      <HomeTraining />
      <HomeBlog />
    </>
  );
}
