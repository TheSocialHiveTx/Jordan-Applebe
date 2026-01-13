
import React from 'react';
import { Neighborhood, Testimonial } from './types';

export const THEME = {
  primary: '#BD1015', // KW Red
  secondary: '#333333',
  lightGray: '#F5F5F5',
  darkGray: '#1A1A1A',
};

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'clear-lake',
    name: 'Clear Lake',
    description: 'The heart of Houston\'s Bay Area, known for waterfront living and aerospace industry roots.',
    whoItsFor: 'NASA employees, boaters, and families.',
    highlights: ['Waterfront Parks', 'NASA Johnson Space Center', 'Excellent Schools'],
    image: 'https://picsum.photos/id/122/800/600',
    commuteNote: '30-40 mins to Downtown via I-45, 10 mins to Kemah.'
  },
  {
    id: 'league-city',
    name: 'League City',
    description: 'A rapidly growing family-centric community with historic charm and modern amenities.',
    whoItsFor: 'Commuters and young families.',
    highlights: ['Historic District', 'Big League Dreams', 'Top-rated CCISD Schools'],
    image: 'https://picsum.photos/id/124/800/600',
    commuteNote: 'Right on the I-45 corridor midway between Houston and Galveston.'
  },
  {
    id: 'friendswood',
    name: 'Friendswood',
    description: 'Consistently ranked as one of the safest cities with a strong sense of community.',
    whoItsFor: 'Families prioritizing luxury and safety.',
    highlights: ['Large Lots', 'Quaker Heritage', 'Elite School District'],
    image: 'https://picsum.photos/id/132/800/600',
    commuteNote: 'Easy access to Pearland and Clear Lake.'
  },
  {
    id: 'pearland',
    name: 'Pearland',
    description: 'A diverse, thriving suburb with some of the best shopping and dining in the region.',
    whoItsFor: 'Diverse professionals and retail lovers.',
    highlights: ['Town Center', 'Srilankan Temple', 'Shadow Creek Ranch'],
    image: 'https://picsum.photos/id/145/800/600',
    commuteNote: 'Quick 20-minute jump to the Medical Center via Hwy 288.'
  },
  {
    id: 'pasadena',
    name: 'Pasadena',
    description: 'Affordable living with deep roots in the industrial and petrochemical sector.',
    whoItsFor: 'Industrial workers and first-time buyers.',
    highlights: ['Strawberry Festival', 'San Jacinto Monument', 'Affordable Housing'],
    image: 'https://picsum.photos/id/160/800/600',
    commuteNote: 'Direct access to the Ship Channel and East Beltway.'
  },
  {
    id: 'heights',
    name: 'The Heights / Midtown',
    description: 'Walkable urban living with historic bungalows and trendy nightlife.',
    whoItsFor: 'Young professionals and urbanites.',
    highlights: ['19th Street Shopping', 'White Oak Drive', 'Biking Trails'],
    image: 'https://picsum.photos/id/180/800/600',
    commuteNote: '5-10 mins to Downtown, very central.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah M.',
    text: 'Jordan made our relocation to Clear Lake seamless. Her knowledge of the flood zones and school districts was invaluable!',
    location: 'Clear Lake'
  },
  {
    name: 'David R.',
    text: 'Sold our home in League City for over asking price. Jordan\'s marketing strategy and prep tips were spot on.',
    location: 'League City'
  },
  {
    name: 'The Thompson Family',
    text: 'Working with Jordan was like working with a friend who happens to be an expert in Houston real estate.',
    location: 'Pearland'
  }
];

export const COMPLIANCE_LINKS = {
  HAR_BROKER_INFO: 'https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=817307',
  TREC_CN_PDF: 'https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-2.pdf',
  FACEBOOK: 'https://www.facebook.com/JordanApplebeRealtor'
};
