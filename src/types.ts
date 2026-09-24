export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
  duration: string;
  typicalBudget: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Bathrooms' | 'Flooring' | 'Interiors';
  location: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
  materials: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  platform: 'Yelp' | 'Thumbtack' | 'MapQuest';
  rating: number;
  projectType: string;
  quote: string;
  date: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  timeline?: string;
  message: string;
}
