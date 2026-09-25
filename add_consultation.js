const fs = require('fs');
const file = 'data/gym-data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const consultationSecData = {
  variants: {
    GymConsultationSec1: {
      left: {
        badge: "FREE CONSULTATION",
        titlePart1: "Let's Build a ",
        titlePart2: "Healthier",
        titlePart3: " You",
        subtitle: "Get expert guidance from our certified fitness trainers. Book your free consultation today and take the first step towards your goals.",
        features: [
          { icon: "FiUser", title: "Expert\nGuidance" },
          { icon: "LuClipboardList", title: "Personalized\nPlan" },
          { icon: "CgGym", title: "No\nObligation" },
          { icon: "FiHeart", title: "Start Your\nJourney" }
        ],
        imageCard: {
          image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
          overlayTitle1: "YOUR FITNESS GOALS\nOUR ",
          overlayTitle2: "EXPERTISE",
          list: [
            "Lose Weight",
            "Build Muscle",
            "Improve Endurance",
            "Get Expert Advice"
          ],
          signature: "Stronger\nHealthier\nHappier You!"
        }
      },
      right: {
        badge: "FREE CONSULTATION",
        titlePart1: "Book Your ",
        titlePart2: "Free Consultation",
        subtitle: "Fill in your details and our fitness expert will get in touch with you shortly.",
        form: {
          name: { placeholder: "Full Name *", icon: "FiUser" },
          email: { placeholder: "Email Address *", icon: "FiMail" },
          phone: { placeholder: "Phone Number *", icon: "FiPhone" },
          goal: { placeholder: "Your Fitness Goal *", icon: "BiTargetLock", options: ["Weight Loss", "Muscle Building", "General Fitness", "Endurance"] },
          date: { placeholder: "Preferred Date *", icon: "FiCalendar" },
          time: { placeholder: "Preferred Time *", icon: "FiClock" },
          message: { placeholder: "Additional Message (Optional)", icon: "LuFileText" },
          checkboxText: "I agree to be contacted by the team regarding my consultation.",
          buttonText: "Book Free Consultation",
          secureText: "Your information is 100% secure with us."
        }
      }
    }
  }
};

data.GymFit.sections.ConsultationSec = consultationSecData;

// add to template components
data.GymFit.templateComponents["template-1"].pages.consultation = {
  components: [
    { key: "ConsultationSec", component: "GymConsultationSec1" }
  ]
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Successfully added ConsultationSec to gym-data.json');
