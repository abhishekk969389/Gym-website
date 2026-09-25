const fs = require('fs');
const file = './data/gym-data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.GymFit.sections.VideoGallery = {
  variants: {
    GymVideoGallery1: {
      header: {
        titlePart1: "Video ",
        titlePart2: "Gallery",
        subtitle: "Watch our workout clips, training tips, member stories and gym highlights."
      },
      categories: [
        { id: "all", label: "All" },
        { id: "workout", label: "Workout" },
        { id: "tips", label: "Tips" },
        { id: "member_stories", label: "Member Stories" },
        { id: "events", label: "Events" }
      ],
      videos: [
        {
          id: 1,
          title: "Full Body Workout Routine",
          desc: "Get fit with this 20-minute full body workout.",
          duration: "01:24",
          category: "workout",
          thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 2,
          title: "Fitness Tips for Beginners",
          desc: "Simple tips to start your fitness journey.",
          duration: "02:36",
          category: "tips",
          thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 3,
          title: "Pre-Workout Warmup",
          desc: "Essential warmup exercises before training.",
          duration: "01:50",
          category: "workout",
          thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 4,
          title: "Our Gym Tour",
          desc: "Take a tour of our state-of-the-art facility.",
          duration: "03:12",
          category: "events",
          thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 5,
          title: "Healthy Meal Ideas",
          desc: "Quick and easy post-workout meals.",
          duration: "02:08",
          category: "tips",
          thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 6,
          title: "Group Training Session",
          desc: "Stronger together.",
          duration: "01:45",
          category: "workout",
          thumbnail: "https://images.unsplash.com/photo-1526506190296-414777d1217e?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 7,
          title: "Member Transformation",
          desc: "Inspiring stories from our members.",
          duration: "02:20",
          category: "member_stories",
          thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 8,
          title: "HIIT Workout",
          desc: "High intensity workout for faster results.",
          duration: "01:58",
          category: "workout",
          thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 9,
          title: "Advanced Deadlifts",
          desc: "Perfecting your deadlift form.",
          duration: "03:45",
          category: "workout",
          thumbnail: "https://images.unsplash.com/photo-1599058917212-597145ae713b?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 10,
          title: "Community Event Highlights",
          desc: "Fun moments from our latest gym gathering.",
          duration: "04:10",
          category: "events",
          thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ],
      loadMoreText: "Load More Videos"
    }
  }
};

// Add to template components
if (data.GymFit.templateComponents && data.GymFit.templateComponents['template-1'].pages) {
  data.GymFit.templateComponents['template-1'].pages.gallery.components.push(
    { key: "VideoGallerySec", component: "GymVideoGallery1" }
  );
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
