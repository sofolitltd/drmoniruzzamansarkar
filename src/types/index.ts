export interface Doctor {
  name: string;
  title: string;
  qualifications: string[];
  position: string;
  institution: string;
  bio: string;
  mission: string;
  experience: string;
  image: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  chambers: Chamber[];
  achievements: Achievement[];
  memberships: Membership[];
  education: Education[];
}

export interface Chamber {
  id: string;
  name: string;
  address: string;
  city: string;
  visitingHours: string;
  phone: string;
  mapUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
}

export interface Membership {
  id: string;
  name: string;
  organization: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Specialty {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  prevention: string[];
  whenToSeeDoctor: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  slug: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  content: string;
  rating: number;
  date: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}
