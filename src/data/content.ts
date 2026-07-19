import { IconType } from "react-icons";
import {
  FaAmbulance,
  FaBaby,
  FaCapsules,
  FaChartLine,
  FaFlask,
  FaHeartbeat,
  FaHospitalUser,
  FaNotesMedical,
  FaProcedures,
  FaSyringe,
} from "react-icons/fa";

export type Service = {
  slug: string;
  name: string;
  description: string;
  whyVisit: string;
  visitReasons: string[];
  icon: IconType;
  image: string;
};

export const services: Service[] = [
  { slug: "general-consultation", name: "General Consultation", description: "Comprehensive first-line diagnosis and treatment for common illnesses and symptoms.", whyVisit: "Visit for early diagnosis, treatment plans, referrals, and general medical review.", visitReasons: ["Persistent fever, pain, or infection symptoms", "General health concerns needing a doctor review", "Follow-up after treatment or medication changes"], icon: FaNotesMedical, image: "/images/services/consultation.svg" },
  { slug: "family-medicine", name: "Family Medicine", description: "Long-term care for children, adults, and older family members in one clinic setting.", whyVisit: "Visit to manage ongoing health issues and keep the whole family under consistent care.", visitReasons: ["Routine family health management", "Chronic disease follow-up", "Preventive care and annual reviews"], icon: FaHospitalUser, image: "/images/services/consultation.svg" },
  { slug: "pediatrics", name: "Pediatrics", description: "Dedicated child healthcare covering growth, illness management, and preventive support.", whyVisit: "Visit when your child needs safe age-specific care from infancy through adolescence.", visitReasons: ["Child fever, cough, diarrhea, or poor feeding", "Growth and development monitoring", "Vaccination and school health reviews"], icon: FaBaby, image: "/images/services/consultation.svg" },
  { slug: "antenatal-care", name: "Antenatal Care", description: "Pregnancy monitoring focused on maternal safety, fetal wellbeing, and birth preparation.", whyVisit: "Visit regularly during pregnancy for safer monitoring and early detection of complications.", visitReasons: ["Routine pregnancy clinic visits", "Blood pressure and fetal monitoring", "Nutrition advice and delivery planning"], icon: FaHeartbeat, image: "/images/services/antenatal-care.svg" },
  { slug: "postnatal-care", name: "Postnatal Care", description: "Recovery support for mothers and newborns after delivery, including early health checks.", whyVisit: "Visit after birth to monitor healing, breastfeeding, baby health, and danger signs.", visitReasons: ["Mother and baby review after delivery", "Breastfeeding support", "Post-delivery bleeding, pain, or newborn concerns"], icon: FaBaby, image: "/images/services/antenatal-care.svg" },
  { slug: "family-planning", name: "Family Planning", description: "Private counselling on safe contraception and reproductive health choices.", whyVisit: "Visit for informed family planning options that match your health needs and life goals.", visitReasons: ["Contraceptive counselling", "Method change or refill", "Reproductive health planning"], icon: FaSyringe, image: "/images/services/consultation.svg" },
  { slug: "vaccination", name: "Vaccination", description: "Routine immunization services for children, adults, and special travel needs.", whyVisit: "Visit to prevent avoidable infections through timely vaccination and record updates.", visitReasons: ["Childhood vaccine schedule", "Adult booster doses", "Travel or occupational vaccines"], icon: FaSyringe, image: "/images/services/consultation.svg" },
  { slug: "laboratory-services", name: "Laboratory Services", description: "Accurate diagnostic testing to support fast treatment decisions and disease monitoring.", whyVisit: "Visit when you need tests to confirm illness, monitor treatment, or screen for disease.", visitReasons: ["Doctor-requested investigations", "Blood, urine, and rapid diagnostic tests", "Monitoring sugar, liver, kidney, or infection markers"], icon: FaFlask, image: "/images/services/laboratory.svg" },
  { slug: "pharmacy", name: "Pharmacy", description: "Safe medicine dispensing with dosage guidance, refill support, and treatment counselling.", whyVisit: "Visit to collect prescribed medication and understand how to use it correctly.", visitReasons: ["Prescription collection", "Chronic medication refills", "Medicine counselling and availability checks"], icon: FaCapsules, image: "/images/services/pharmacy.svg" },
  { slug: "hiv-testing-counselling", name: "HIV Testing & Counselling", description: "Confidential screening, counselling, and linkage to further care when needed.", whyVisit: "Visit for private HIV testing, prevention advice, and early support services.", visitReasons: ["Routine HIV status check", "Pre-test and post-test counselling", "Referral for treatment and support"], icon: FaHeartbeat, image: "/images/services/consultation.svg" },
  { slug: "diabetes-clinic", name: "Diabetes Clinic", description: "Structured diabetes care with blood sugar checks, medication review, and lifestyle guidance.", whyVisit: "Visit for better glucose control and prevention of long-term diabetes complications.", visitReasons: ["High or unstable blood sugar", "Diabetes medication monitoring", "Nutrition and lifestyle follow-up"], icon: FaChartLine, image: "/images/services/bp-monitoring.svg" },
  { slug: "hypertension-clinic", name: "Hypertension Clinic", description: "Blood pressure assessment, treatment adjustment, and cardiovascular risk monitoring.", whyVisit: "Visit for BP monitoring, early treatment, and prevention of stroke or heart disease.", visitReasons: ["High blood pressure readings", "Headaches, dizziness, or pressure symptoms", "Routine BP monitoring and treatment review"], icon: FaHeartbeat, image: "/images/services/bp-monitoring.svg" },
  { slug: "minor-surgery", name: "Minor Surgery", description: "Safe outpatient procedures performed in a controlled and sterile clinical setting.", whyVisit: "Visit for minor procedures that do not require hospital admission but need professional care.", visitReasons: ["Small lump, abscess, or wound procedures", "Minor incision and drainage", "Doctor-recommended outpatient procedures"], icon: FaProcedures, image: "/images/services/consultation.svg" },
  { slug: "wound-care", name: "Wound Care", description: "Professional wound cleaning, dressing, infection prevention, and healing follow-up.", whyVisit: "Visit when cuts, ulcers, or surgical wounds need skilled dressing and monitoring.", visitReasons: ["Infected or slow-healing wounds", "Regular dressing changes", "Post-procedure wound follow-up"], icon: FaProcedures, image: "/images/services/consultation.svg" },
  { slug: "emergency-care", name: "Emergency Care", description: "Rapid clinical response for urgent illnesses, injuries, and high-risk symptoms.", whyVisit: "Visit immediately when symptoms are severe, sudden, or potentially life-threatening.", visitReasons: ["Difficulty breathing or chest pain", "Severe bleeding or injury", "Urgent fever, convulsions, or collapse"], icon: FaAmbulance, image: "/images/services/consultation.svg" },
  { slug: "medical-checkups", name: "Medical Checkups", description: "Preventive screening packages for individuals, families, and workplace health programs.", whyVisit: "Visit to detect hidden health issues early and maintain long-term wellness.", visitReasons: ["Pre-employment or routine checkups", "Annual health screening", "Early detection of chronic disease risk"], icon: FaNotesMedical, image: "/images/services/consultation.svg" },
  { slug: "occupational-health", name: "Occupational Health", description: "Work-related health assessments, fitness evaluations, and safety compliance services.", whyVisit: "Visit when you need work fitness certification or employee health review.", visitReasons: ["Pre-employment assessments", "Return-to-work reviews", "Workplace medical compliance"], icon: FaHospitalUser, image: "/images/services/consultation.svg" },
  { slug: "nutrition-counselling", name: "Nutrition Counselling", description: "Practical diet advice tailored to age, illness, pregnancy, and treatment goals.", whyVisit: "Visit for meal planning that supports recovery, prevention, and chronic disease control.", visitReasons: ["Weight management support", "Pregnancy and child nutrition guidance", "Diet plans for diabetes, BP, or recovery"], icon: FaHeartbeat, image: "/images/services/consultation.svg" },
];

export const labTests = [
  "Full Blood Count",
  "Malaria Test",
  "Typhoid Test",
  "Urinalysis",
  "Pregnancy Test",
  "Blood Sugar",
  "Liver Function Test",
  "Kidney Function Test",
  "Microscopy",
  "Culture & Sensitivity",
  "Rapid Diagnostic Tests",
];

export const pharmacyFeatures = [
  "Prescription dispensing",
  "Medicine counselling",
  "Chronic medication refill",
  "Drug availability",
  "Health products",
  "Insurance support",
];

export const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Use the Book Appointment page and choose your department, date, and preferred doctor.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, our billing desk supports major insurance plans and can guide eligibility checks.",
  },
  {
    question: "Can I get lab results online?",
    answer: "The patient portal UI is ready for this and EMR integration will enable secure access soon.",
  },
  {
    question: "What are your emergency hours?",
    answer: "Emergency support is available 24/7 via our emergency hotline.",
  },
];

export const blogPosts = [
  {
    slug: "nutrition-for-diabetes",
    title: "Nutrition Tips for Better Diabetes Control",
    category: "Nutrition",
    excerpt: "Simple meal planning strategies that stabilize blood glucose throughout the day.",
    date: "2026-06-18",
  },
  {
    slug: "maternal-health-checklist",
    title: "Maternal Health Checklist for Every Trimester",
    category: "Maternal Health",
    excerpt: "What every expecting mother should monitor for a safer pregnancy journey.",
    date: "2026-05-12",
  },
  {
    slug: "vaccination-myths",
    title: "Vaccination Myths vs Facts",
    category: "Vaccination",
    excerpt: "Evidence-backed answers to common concerns from patients and caregivers.",
    date: "2026-04-28",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/laboratory", label: "Laboratory" },
  { href: "/pharmacy", label: "Pharmacy" },
  { href: "/appointments", label: "Appointments" },
  { href: "/health-blog", label: "Health Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/patient-portal/login", label: "Patient Portal" },
  { href: "/staff-login", label: "Staff Login" },
];
