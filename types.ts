
export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  whoItsFor: string;
  highlights: string[];
  image: string;
  commuteNote: string;
}

export interface Testimonial {
  name: string;
  text: string;
  location: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'buyer' | 'seller' | 'general';
  timeframe?: string;
  address?: string;
}
