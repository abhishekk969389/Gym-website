const fs = require('fs');
const file = 'data/gym-data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const pricingSecData = {
  variants: {
    GymPricingSec1: {
      header: {
        badge: "PRICING PLAN",
        titlePart1: "Flexible Plans ",
        titlePart2: "For A Healthier You",
        subtitle: "Choose a membership plan that fits your goals, lifestyle and budget. Start your fitness journey today!"
      },
      plans: [
        {
          id: "basic",
          icon: "FiUser",
          title: "BASIC PLAN",
          subtitle: "Start Your Fitness Journey",
          price: "29",
          period: "/ month",
          isPopular: false,
          features: [
            { text: "Gym Access (General Area)", included: true },
            { text: "Basic Equipment Usage", included: true },
            { text: "Locker Room Access", included: true },
            { text: "1 Fitness Assessment", included: true },
            { text: "Personal Trainer Support", included: false }
          ],
          buttonText: "Get Started"
        },
        {
          id: "standard",
          icon: "CgGym",
          title: "STANDARD PLAN",
          subtitle: "For Regular Fitness Enthusiasts",
          price: "49",
          period: "/ month",
          isPopular: true,
          popularText: "MOST POPULAR",
          features: [
            { text: "Full Gym Access", included: true },
            { text: "All Equipment Usage", included: true },
            { text: "Locker Room & Shower", included: true },
            { text: "2 Personal Training Sessions", included: true },
            { text: "Nutrition Guidance", included: true },
            { text: "Custom Workout Plan", included: false }
          ],
          buttonText: "Get Started"
        },
        {
          id: "premium",
          icon: "FaCrown",
          title: "PREMIUM PLAN",
          subtitle: "For Serious Transformation",
          price: "79",
          period: "/ month",
          isPopular: false,
          features: [
            { text: "Full Gym Access", included: true },
            { text: "All Equipment Usage", included: true },
            { text: "Locker Room & Shower", included: true },
            { text: "4 Personal Training Sessions", included: true },
            { text: "Custom Workout Plan", included: true },
            { text: "Nutrition & Diet Plan", included: true },
            { text: "Progress Tracking", included: true }
          ],
          buttonText: "Get Started"
        },
        {
          id: "elite",
          icon: "IoDiamondOutline",
          title: "ELITE PLAN",
          subtitle: "Complete Fitness Solution",
          price: "129",
          period: "/ month",
          isPopular: false,
          features: [
            { text: "VIP Gym Access", included: true },
            { text: "All Equipment & Premium Area", included: true },
            { text: "Locker Room, Shower & Amenities", included: true },
            { text: "Unlimited Personal Training", included: true },
            { text: "Custom Workout & Diet Plan", included: true },
            { text: "Monthly Body Analysis", included: true },
            { text: "Priority Support", included: true }
          ],
          buttonText: "Get Started"
        }
      ],
      compare: {
        badge: "PLAN COMPARISON",
        titlePart1: "Compare ",
        titlePart2: "Plans & Features",
        subtitle: "See what's included in each plan and find the perfect membership for your fitness goals.",
        headers: ["Features", "Basic", "Standard", "Premium", "Elite"],
        rows: [
          { feature: "Gym Access", values: ["General Area", "Full Access", "Full Access", "VIP Access"] },
          { feature: "Equipment Usage", values: ["Basic", "All Equipment", "All Equipment", "All + Premium"] },
          { feature: "Locker Room", values: ["check", "check", "check", "check"] },
          { feature: "Shower Facilities", values: ["-", "check", "check", "check"] },
          { feature: "Personal Training Sessions", values: ["1", "2", "4", "Unlimited"] },
          { feature: "Custom Workout Plan", values: ["-", "-", "check", "check"] },
          { feature: "Nutrition & Diet Plan", values: ["-", "check", "check", "check"] },
          { feature: "Monthly Body Analysis", values: ["-", "-", "check", "check"] },
          { feature: "Priority Support", values: ["-", "-", "-", "check"] }
        ],
        priceRow: {
          feature: "Price",
          values: ["$29/month", "$49/month", "$79/month", "$129/month"]
        }
      },
      cta: {
        left: {
          badge: "READY TO GET STARTED?",
          titlePart1: "Transform ",
          titlePart2: "Your Life Today",
          subtitle: "Join our fitness community and take the first step towards a stronger, healthier you.",
          buttonText: "Join Now",
          bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
        },
        features: [
          { icon: "BiTargetLock", title: "No Long-Term Contracts", desc: "Flexible membership options" },
          { icon: "FiShield", title: "100% Satisfaction", desc: "Your fitness goals are our priority" },
          { icon: "FiUserCheck", title: "Expert Trainers", desc: "Guidance from certified professionals" },
          { icon: "MdOutlineFitnessCenter", title: "Modern Facilities", desc: "State-of-the-art equipment" }
        ]
      }
    }
  }
};

data.GymFit.sections.PricingSec = pricingSecData;

// add to template components
data.GymFit.templateComponents["template-1"].pages.pricing = {
  components: [
    { key: "PricingSec", component: "GymPricingSec1" }
  ]
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Successfully added PricingSec to gym-data.json');
