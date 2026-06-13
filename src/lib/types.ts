export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export type EventStatus = "upcoming" | "full" | "past" | "cancelled";

export interface GameEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  skillLevel: SkillLevel;
  totalSlots: number;
  bookedSlots: number;
  price: string;
  description: string;
  status: EventStatus;
  imageUrl?: string;
  hostName: string;
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  venue: string;
  format: string;
  participants: number;
  status: "upcoming" | "ongoing" | "completed";
  winner?: string;
  runnerUp?: string;
  highlights?: string[];
  imageUrl?: string;
  description: string;
}

export interface Player {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  skillLevel: SkillLevel;
  joinedYear: number;
  gamesPlayed: number;
  wins: number;
  bio: string;
  quote: string;
  avatarUrl: string;
  achievements: string[];
  isFeatured?: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  playerName: string;
  avatarUrl: string;
  gamesPlayed: number;
  wins: number;
  winRate: number;
  points: number;
  streak: number;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  url: string;
  thumbnailUrl: string;
  caption: string;
  album: string;
  date: string;
  likes: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  joinedYear: number;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  type: "info" | "warning" | "success" | "event";
  isPinned: boolean;
}

export interface ClubStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string;
}

export interface LearnGuide {
  id: string;
  title: string;
  category: "beginner" | "technique" | "footwork" | "strategy" | "equipment";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
  tips: string[];
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
