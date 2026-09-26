import gymDataRaw from "./gym-data.json";

const sec = gymDataRaw.GymFit.sections;

export type SectionProps<T = unknown> = {
  data?: T;
  className?: string;
};

export type TopbarData = typeof sec.Topbar.variants.GymTopbar1;
export type NavbarData = typeof sec.Navbar.variants.GymNavbar1;
export type HomeBannerData = typeof sec.HomeBanner.variants.GymHomeBanner1;
export type HomeAboutData = typeof sec.HomeAbout.variants.GymHomeAbout1;
export type HomeProgramsData = typeof sec.HomePrograms.variants.GymHomePrograms1;
export type Program = HomeProgramsData["programs"][0];
export type HomeJourneyData = typeof sec.HomeJourney.variants.GymHomeJourney1;
export type HomeStatsData = typeof sec.HomeStats.variants.GymHomeStats1;
export type HomeTestimonialsData = typeof sec.HomeTestimonials.variants.GymHomeTestimonials1;
export type HomeCtaData = typeof sec.HomeCta.variants.GymHomeCta1;
export type HomeBlogData = typeof sec.HomeBlog.variants.GymHomeBlog1;
export type BlogPost = HomeBlogData["posts"][0];
export type HomeHowItWorksData = typeof sec.HomeHowItWorks.variants.GymHomeHowItWorks1;
export type FooterData = typeof sec.Footer.variants.GymFooter1;
export type SubBannerData = typeof sec.SubBanners.variants.GymSubBanners1.about;
export type AboutPageAboutData = typeof sec.AboutPageAbout.variants.GymAboutPageAbout1;
export type WhyChooseUsData = typeof sec.WhyChooseUs.variants.GymWhyChooseUs1;
export type ContactPageSecData = typeof sec.ContactPageSec.variants.GymContactPageSec1;
export type MapSecData = typeof sec.MapSec.variants.GymMapSec1;
export type GalleryData = typeof sec.Gallery.variants.GymGallery1;
export type VideoGalleryData = typeof sec.VideoGallery.variants.GymVideoGallery1;
export type PricingSecData = typeof sec.PricingSec.variants.GymPricingSec1;
export type ConsultationSecData = typeof sec.ConsultationSec.variants.GymConsultationSec1;
export type TeamSecData = typeof sec.TeamSec.variants.GymTeamSec1;
export type TeamMember = TeamSecData["members"][0];
export type MissionSecData = typeof sec.MissionSec.variants.GymMissionSec1;
// @ts-ignore
export type AwardSecData = typeof sec.AwardSec.variants.GymAwardSec1;
// @ts-ignore
export type CerSecData = typeof sec.CerSec.variants.GymCerSec1;

export type PrivacyPolicySecData = typeof sec.PrivacyPolicySec.variants.GymPrivacyPolicySec1;
export type RefundPolicySecData = typeof sec.RefundPolicySec.variants.GymRefundPolicySec1;
export type TermsConditionSecData = typeof sec.TermsConditionSec.variants.GymTermsConditionSec1;
export type FaqSecData = typeof sec.FaqSec.variants.GymFaqSec1;
export type FaqQuestion = FaqSecData["categories"][0]["questions"][0];

export const site = {
  topbar: sec.Topbar.variants.GymTopbar1,
  navbar: sec.Navbar.variants.GymNavbar1,
  homeBanner: sec.HomeBanner.variants.GymHomeBanner1,
  homeAbout: sec.HomeAbout.variants.GymHomeAbout1,
  homePrograms: sec.HomePrograms.variants.GymHomePrograms1,
  homeJourney: sec.HomeJourney.variants.GymHomeJourney1,
  homeStats: sec.HomeStats.variants.GymHomeStats1,
  homeTestimonials: sec.HomeTestimonials.variants.GymHomeTestimonials1,
  homeCta: sec.HomeCta.variants.GymHomeCta1,
  homeBlog: sec.HomeBlog.variants.GymHomeBlog1,
  homeHowItWorks: sec.HomeHowItWorks.variants.GymHomeHowItWorks1,
  footer: sec.Footer.variants.GymFooter1,
  subBanners: sec.SubBanners.variants.GymSubBanners1,
  aboutPageAbout: sec.AboutPageAbout.variants.GymAboutPageAbout1,
  whyChooseUs: sec.WhyChooseUs.variants.GymWhyChooseUs1,
  contactPageSec: sec.ContactPageSec.variants.GymContactPageSec1,
  mapSec: sec.MapSec.variants.GymMapSec1,
  gallery: sec.Gallery.variants.GymGallery1,
  videoGallery: sec.VideoGallery.variants.GymVideoGallery1,
  pricingSec: sec.PricingSec.variants.GymPricingSec1,
  consultationSec: sec.ConsultationSec.variants.GymConsultationSec1,
  teamSec: sec.TeamSec.variants.GymTeamSec1,
  missionSec: sec.MissionSec.variants.GymMissionSec1,
  // @ts-ignore
  awardSec: sec.AwardSec.variants.GymAwardSec1,
  // @ts-ignore
  cerSec: sec.CerSec.variants.GymCerSec1,
  privacyPolicySec: sec.PrivacyPolicySec.variants.GymPrivacyPolicySec1,
  refundPolicySec: sec.RefundPolicySec.variants.GymRefundPolicySec1,
  termsConditionSec: sec.TermsConditionSec.variants.GymTermsConditionSec1,
  faqSec: sec.FaqSec.variants.GymFaqSec1,
};
