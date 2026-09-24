const fs = require('fs');
const file = './data/gym-data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.mapSec = {
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923192592!2d77.23701088488971!3d28.522404036526275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1786345160037!5m2!1sen!2sin',
  infoCard: {
    bgImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    tag: 'VISIT OUR GYM',
    titleLine1: 'Come Experience',
    titleLine2: 'the Difference',
    description: 'We\'d be happy to welcome you at our fitness center. Take a tour, meet our trainers and start your fitness journey today.',
    features: [
      { id: 'f1', icon: 'FaDumbbell', title: 'Modern\\nEquipment' },
      { id: 'f2', icon: 'FaUsers', title: 'Expert\\nTrainers' },
      { id: 'f3', icon: 'FaShower', title: 'Premium\\nFacilities' }
    ]
  }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Updated JSON');
