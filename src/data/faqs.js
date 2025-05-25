import icon1 from "../assets/icons/gender-male.svg";
import icon2 from "../assets/icons/experince.svg";
import icon3 from "../assets/icons/language.svg";
import icon4 from "../assets/icons/pricing.svg";
import icon5 from "../assets/icons/expertise.svg";

// data/faqs.js
export const faqs = [
  {
    question: "Are my therapy sessions confidential?",
    answer: "Yes, all therapy sessions are completely confidential. Your personal information and discussions with your therapist are protected by strict privacy policies and ethical guidelines."
  },
  {
    question: "Is online therapy effective?",
    answer: "Online therapy is just as effective as in-person therapy for many individuals, offering accessibility, flexibility, and convenience."
  },
  {
    question: "Can I switch my therapist ",
    answer: "Yes, you can switch your therapist anytime if you're not satisfied. We want to ensure you find the right fit for your needs."
  },
  {
    question: "Do I need a diagnosis to start therapy?",
    answer: "No, you don’t need a formal diagnosis. Therapy is for anyone seeking support, growth, or clarity."
  }
];


export const businessFaqsData = [
  {
    question: "What types of services do you offer for businesses?",
    answer: "We offer tailored mental health support programs, workshops, one-on-one therapy, and wellness assessments for businesses."
  },
  {
    question: "How do you ensure confidentiality for employees?",
    answer: "All sessions and data are handled with strict confidentiality protocols to protect employee privacy and build trust."
  },
  {
    question: "How can mental health support improve workplace productivity?",
    answer: "Improved mental health leads to better focus, lower absenteeism, and higher employee engagement, which boosts overall productivity."
  }
];


export const filters = [
  {
    label: "Gender",
    icon: icon1, // Font Awesome icon class
    options: ["Male", "Female", "Other"],
  },
  {
    label: "Language",
    icon: icon3,
    options: ["English", "Hindi", "Spanish"],
  },
  {
    label: "Pricing",
    icon: icon4,
    options: ["Free", "Paid"],
  },
  {
    label: "Expertise",
    icon: icon5,
    options: ["Therapist", "Psychiatrist", "Coach"],
  },
  {
    label: "Years of Experience",
    icon: icon2,
    options: ["1-2 Years", "3-5 Years", "5+ Years"],
  },
];