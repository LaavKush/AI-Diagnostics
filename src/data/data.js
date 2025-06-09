import { AlertCircle, Sliders, ShieldCheck, Users,Syringe, Hospital, Watch, HeartPulse } from 'lucide-react';


const heroTexts = [
  {
    heading: "Say no to surprises, when it comes to health",
    subheading: "Live your life without unexpected pauses",
  },
  {
    heading: "Life doesn't stop for anything, why should your health?",
    subheading: "Regular check-ins, reminders and community support",
  },
  {
    heading: "Don't go it alone",
    subheading: "Keep your loved ones connected",
  },
];

export const supportTexts = [
  {
    icon: AlertCircle,
    heading: "Avoid surprises and late detection of critical diseases",
    subheading: "",
  },
  {
    icon: Sliders,
    heading: "Easily adapt your personalized care plan to your unique needs",
    subheading: "",
  },
  {
    icon: ShieldCheck,
    heading: "Always stay confident in your health",
    subheading: "",
  },
  {
    icon: Users,
    heading: "Keep your care team in the know, with full control on what you want to share",
    subheading: "",
  },
];

const carePlanData = [
  {
    icon: "🦶",
    title: "Morning walk",
    description: "30 minutes - 2,450 steps",
    color: "text-green-600"
  },
  {
    icon: "💙",
    title: "Blood pressure check",
    description: "125/82 - Within normal range",
    color: "text-blue-600"
  },
  {
    icon: "💊",
    title: "Medication",
    description: "Morning and evening dose",
    color: "text-purple-600"
  },
  {
    icon: "🧘‍♀️",
    title: "Relaxation Exercise",
    description: "15 minutes - Breathing practice",
    color: "text-orange-600"
  }
];

const chatSection = {
  title: "Chat with SolidHealth.AI as you would with a friend",
  features: [
    {
      heading: "Effortless Technology Integration",
      description:
        "Enhances your care without adding complexity, making tech an enabler, not a barrier.",
    },
    {
      heading: "Natural, Intuitive Interaction",
      description:
        "Communicates via text, voice, or video—just like chatting with a friend.",
    },
  ],
};

const healthData = [
  {
    icon: Syringe,
    color: 'text-green-500',
    title: 'Lab Results',
  },
  {
    icon: Hospital,
    color: 'text-blue-500',
    title: 'Hospital Records',
  },
  {
    icon: Watch,
    color: 'text-purple-500',
    title: 'Wearable Devices',
  },
  {
    icon: HeartPulse,
    color: 'text-yellow-400',
    title: 'Health Apps',
  },
]

const healthText = {
  heading: 'Most holistic and updated view of your health data',
  items: [
    {
      title: 'Complete Health Perspective',
      desc: 'Combines data from hospitals, labs, wearables, and personal apps/devices for the most comprehensive view of your health.',
    },
    {
      title: 'Full Data Control',
      desc: 'You decide what to share and with whom—your health, your choice.',
    },
  ],
}

const alertText = {
  heading: 'Early alerts about onset of any new health issues',
  items: [
    {
      title: 'Proactive Health Monitoring',
      desc: 'Uses advanced analytics to track your health, detect early warning signs and provide clear guidance for informed discussions with care providers.',
    },
    {
      title: 'Empowered Prevention & Control',
      desc: 'Enables early intervention to address concerns before they escalate, helping you stay healthy without disruptions.',
    },
  ],
}

 const chatBubbles = [
  {
    sender: 'system',
    text: `Good morning Linda! We noticed your heart rate dipped a bit during sleep, and with the tiredness you mentioned, I thought we could chat. How've you been feeling?`,
  },
  {
    sender: 'user',
    text: `A little dizzy in the mornings... Is this normal?`,
  },
  {
    sender: 'system',
    text: `Make sure to run a simple blood test and share the results with SolidHealth to guide your care. Think of it as a team effort! We'll make sure everything's on track.`,
  },
]

const discussSection = {
  heading: "Discuss health queries thoroughly and confidently",
  items: [
    {
      title: "Comprehensive Health Discussions",
      desc: "Dive deep into symptoms, specialist advice, lab results, and health data—all in one place.",
    },
    {
      title: "Access to Expert Insights",
      desc: "Stay informed with cutting-edge medical knowledge to support confident decision-making.",
    },
  ],
  chatBubbles: [
    {
      text: "Good morning, Linda! How have you been?",
      sender: "system",
    },
    {
      text: "I've been a little more tired lately. Just climbing the stairs leaves me winded. My daughter says I should ask you",
      sender: "user",
      avatar: "/images/old-woman.jpg",
    },
    {
      text: "I'm glad you mentioned that. Fatigue can be a sign your heart isn't pumping as efficiently as it should. Have you noticed any swelling in your ankles or trouble sleeping flat?",
      sender: "system",
    },
  ],
}

export const discussSection2 = {
  heading: 'Connect with Specialists matched to your need',
  items: [
    {
      title: 'Personalized Specialist Matching',
      desc: 'Connects you with the right healthcare professional based on your unique needs.'
    },
    {
      title: 'Effortless Appointment Management',
      desc: 'Handles scheduling and logistics, removing the hassle of booking care.'
    }
  ],
  chatBubbles: [
    {
      text: "Hi! I need to book an appointment with my Care Practitioner, Dr. Emily Carter. What's the earliest availability?",
      sender: 'user',
      avatar: '/old-woman.jpg'
    },
    {
      text: "Hi Linda! Dr. Carter's earliest slot is Tuesday at 10 AM. Would this time work for you? 📅",
      sender: 'system'
    },
    {
      text: 'Yes, Tuesday at 10 AM works for me!',
      sender: 'user',
      avatar: '/old-woman.jpg'
    },
    {
      text: "Confirmed! Your appointment is set for Tuesday at 10 AM. We'll send a reminder 24 hours before. You're all set, Linda!",
      sender: 'system'
    }
  ]
}

const preventiveCare = {
  heading: {
    strong: 'Preventive Care',
    regular: 'Specialist',
  },
  description:
    'Our Preventive Care Specialist is a human physician that backs up SolidHealth.AI. They’ll keep an oversight on your health and progress on a regular basis and will be available for virtual consultation if you ever need a second opinion.',
  button: {
    text: 'Join waitlist',
    href: '#',
  },
  image: '/image.jpg', 
}

const footer = {
  companyName: "SolidHealth.ai",
  copyright: "© DataSense LLC 2024 - 2025",
  email: "info@datasenselabs.com",
};

export {footer,preventiveCare,discussSection2,discussSection, chatBubbles,alertText,heroTexts, supportTexts,carePlanData,chatSection,healthData,healthText };
