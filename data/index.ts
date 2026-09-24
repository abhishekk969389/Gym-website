import gymDataRaw from "./gym-data.json";

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface TopbarData {
  tagline: string;
  taglineIcon: string;
  phone: string;
  phoneLink: string;
  phoneIcon: string;
  email: string;
  emailLink: string;
  emailIcon: string;
  workingHours: string;
  workingHoursIcon: string;
  socialLinks: SocialLink[];
}

export interface NavLink {
  id: string;
  label: string;
  url: string;
}

export interface NavButton {
  label: string;
  url: string;
  icon: string;
}

export interface NavbarData {
  logoAlt: string;
  links: NavLink[];
  button: NavButton;
}

export interface HomeBannerFeature {
  icon: string;
  title: string;
}

export interface HomeBannerData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  description: string;
  primaryButton: NavButton;
  secondaryButton: NavButton;
  bottomFeatures: HomeBannerFeature[];
  rightFeatures: HomeBannerFeature[];
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface ContactItem {
  icon: string;
  text: string;
}

export interface FooterContactInfo {
  title: string;
  items: ContactItem[];
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface FooterOpeningHours {
  title: string;
  icon: string;
  schedule: OpeningHour[];
}

export interface FooterBottomBar {
  copyright: string;
  links: FooterLink[];
}

export interface FooterData {
  logo: string;
  description: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLinkGroup;
  ourServices: FooterLinkGroup;
  contactInfo: FooterContactInfo;
  openingHours: FooterOpeningHours;
  bottomBar: FooterBottomBar;
}

export interface HomeAboutBadge {
  number: string;
  text: string;
}

export interface HomeAboutData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  button: NavButton;
  image1: string;
  image2: string;
  badge: HomeAboutBadge;
}

export interface HomeProgram {
  number: string;
  icon: string;
  title: string;
  description: string;
  url: string;
  bgImage: string;
}

export interface HomeProgramsData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  learnMoreText: string;
  subtitle: string;
  button: NavButton;
  programs: HomeProgram[];
}

export interface HomeStat {
  icon: string;
  value: string;
  label: string;
}

export interface HomeStatsData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  image: string;
  stats: HomeStat[];
}

export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface HomeTestimonialsData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface HomeCtaData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  button: NavButton;
  bgImage: string;
}

export interface BlogPost {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  url: string;
}

export interface HomeBlogData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  readMoreText: string;
  button: NavButton;
  posts: BlogPost[];
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  description: string;
  side: "left" | "right";
  image: string;
  imageAlt: string;
  icon: string;
}

export interface HomeHowItWorksData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  button: NavButton;
  centerTextLine1: string;
  centerTextLine2: string;
  steps: HowItWorksStep[];
}

export interface SubBannerData {
  titlePart1: string;
  titlePart2: string;
  breadcrumbs: NavLink[];
  backgroundImage: string;
}

export interface AboutPageAboutData {
  image1: string;
  image2: string;
  badge: {
    number: string;
    text: string;
  };
  tagline: string;
  titlePart1: string;
  titlePart2: string;
  paragraphs: string[];
}

export interface WhyChooseUsCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  centerImage: {
    src: string;
    alt: string;
    textLine1: string;
    textLine2: string;
    textLine3: string;
  };
  leftCards: WhyChooseUsCard[];
  rightCards: WhyChooseUsCard[];
}

export interface ContactPageSecData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  contactInfo: {
    id: string;
    icon: string;
    title: string;
    details: string;
  }[];
  centerImage: {
    src: string;
    topTextLine1: string;
    topTextLine2: string;
    topTextLine3: string;
    topTextLine4: string;
    bottomText: string;
  };
  form: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    fields: {
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      subjectPlaceholder: string;
            subjectOptions: string[];
      messagePlaceholder: string;
    };
    buttonText: string;
    bottomScriptText: string;
  };
}

export interface MapSecData {
  mapUrl: string;
  infoCard: {
    bgImage: string;
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    features: {
      id: string;
      icon: string;
      title: string;
    }[];
  };
}

export interface GymData {
  topbar: TopbarData;
  navbar: NavbarData;
  homeBanner: HomeBannerData;
  homeAbout: HomeAboutData;
  homePrograms: HomeProgramsData;
  homeStats: HomeStatsData;
  homeTestimonials: HomeTestimonialsData;
  homeCta: HomeCtaData;
  homeBlog: HomeBlogData;
  homeHowItWorks: HomeHowItWorksData;
  footer: FooterData;
  subBanners: Record<string, SubBannerData>;
  aboutPageAbout: AboutPageAboutData;
  whyChooseUs: WhyChooseUsData;
  contactPageSec: ContactPageSecData;
  mapSec: MapSecData;
}

export const gymData: GymData = gymDataRaw as GymData;
