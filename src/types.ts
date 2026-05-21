export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  glowColor: "cyan" | "purple" | "pink" | "blue";
}

export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  link: string;
  specs: { label: string; value: string }[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  suffix: string;
  glowClass: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular: boolean;
  glowColor: "blue" | "purple" | "pink";
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
