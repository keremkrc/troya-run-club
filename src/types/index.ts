// Types for Troya Run Club

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  type: "haftalık" | "özel" | "yarış";
  description: string;
  isPast: boolean;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  distance: number;
  runs: number;
  avgPace: string;
  badge?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  date: string;
  event: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
