import type {
  GameEvent,
  Tournament,
  Player,
  LeaderboardEntry,
  GalleryItem,
  Testimonial,
  Announcement,
  ClubStat,
  LearnGuide,
  FAQ,
} from "./types";

// ─── Club Stats ───────────────────────────────────────────────────────────────
export const clubStats: ClubStat[] = [
  { label: "Active Members", value: 248, icon: "Users" },
  { label: "Events Hosted", value: 134, icon: "Calendar" },
  { label: "Courts Partnered", value: 12, icon: "MapPin" },
  { label: "Years Active", value: 6, icon: "Trophy" },
];

// ─── Announcements ────────────────────────────────────────────────────────────
export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "🏸 July Open Rally — Registration Now Open!",
    body: "Spots are filling fast for our biggest open rally of the month. All skill levels welcome. Sign up before June 30.",
    date: "2026-06-10",
    type: "event",
    isPinned: true,
  },
  {
    id: "a2",
    title: "New Court Partnership — Ace Sports Centre",
    body: "We're excited to announce our new partnership with Ace Sports Centre in Makati. TBC members get 20% off court bookings!",
    date: "2026-06-05",
    type: "success",
    isPinned: true,
  },
  {
    id: "a3",
    title: "Beginner Clinic — July 5",
    body: "First time picking up a racket? Join our free beginner clinic. Limited to 20 participants.",
    date: "2026-06-01",
    type: "info",
    isPinned: false,
  },
];

// ─── Upcoming Games ───────────────────────────────────────────────────────────
export const games: GameEvent[] = [
  {
    id: "g1",
    title: "Sunday Smash Session",
    date: "2026-06-22",
    time: "7:00 AM – 11:00 AM",
    venue: "Titan Sports Complex",
    address: "123 Titan Ave, BGC, Taguig",
    skillLevel: "All Levels",
    totalSlots: 32,
    bookedSlots: 24,
    price: "₱300",
    description:
      "Our flagship weekly session. Expect great rallies, coaching tips, and post-game breakfast at the nearby café.",
    status: "upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop",
    hostName: "Marco Reyes",
  },
  {
    id: "g2",
    title: "Intermediate Drills Night",
    date: "2026-06-25",
    time: "6:30 PM – 9:30 PM",
    venue: "PlayPark Badminton Hub",
    address: "45 Dela Rosa St, Makati",
    skillLevel: "Intermediate",
    totalSlots: 16,
    bookedSlots: 14,
    price: "₱250",
    description:
      "Focused drills on net play, clears, and smash accuracy. Bring your A-game.",
    status: "upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=800&auto=format&fit=crop",
    hostName: "Diana Santos",
  },
  {
    id: "g3",
    title: "Beginner Welcome Clinic",
    date: "2026-07-05",
    time: "8:00 AM – 10:00 AM",
    venue: "Ace Sports Centre",
    address: "78 Ayala Ave, Makati",
    skillLevel: "Beginner",
    totalSlots: 20,
    bookedSlots: 11,
    price: "Free",
    description:
      "Brand new to badminton? This is your start. We'll cover basic strokes, footwork, and court etiquette.",
    status: "upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop",
    hostName: "Bea Lim",
  },
  {
    id: "g4",
    title: "Advanced Competitive Play",
    date: "2026-07-06",
    time: "5:00 PM – 8:00 PM",
    venue: "Titan Sports Complex",
    address: "123 Titan Ave, BGC, Taguig",
    skillLevel: "Advanced",
    totalSlots: 12,
    bookedSlots: 12,
    price: "₱350",
    description:
      "High-intensity competitive play for advanced players. Ladder format with prize for the top finisher.",
    status: "full",
    imageUrl:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop",
    hostName: "Paolo Cruz",
  },
  {
    id: "g5",
    title: "Mixed Doubles Fun Day",
    date: "2026-07-12",
    time: "9:00 AM – 1:00 PM",
    venue: "Centro Badminton Court",
    address: "22 Ortigas Ave, Pasig",
    skillLevel: "Intermediate",
    totalSlots: 24,
    bookedSlots: 8,
    price: "₱280",
    description:
      "Mixed doubles round-robin. Pairs drawn randomly so you'll meet new partners. Great vibes guaranteed.",
    status: "upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=800&auto=format&fit=crop",
    hostName: "Marco Reyes",
  },
  {
    id: "g6",
    title: "Monthly Grand Rally",
    date: "2026-07-20",
    time: "7:00 AM – 12:00 PM",
    venue: "SM Mall of Asia Arena Courts",
    address: "Seashell Lane, Pasay",
    skillLevel: "All Levels",
    totalSlots: 60,
    bookedSlots: 31,
    price: "₱400",
    description:
      "Our biggest monthly event — 60 players across 6 courts. Raffle prizes, breakfast buffet, and a full TBC community vibe.",
    status: "upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop",
    hostName: "TBC Committee",
  },
];

// ─── Tournaments ──────────────────────────────────────────────────────────────
export const tournaments: Tournament[] = [
  {
    id: "t1",
    name: "TBC Summer Slam 2026",
    date: "2026-08-10",
    venue: "Titan Sports Complex, BGC",
    format: "Single Elimination",
    participants: 64,
    status: "upcoming",
    description:
      "The biggest TBC tournament of the year. Open to all members with Intermediate and above skill level. Singles and doubles categories.",
    imageUrl:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop",
    highlights: [
      "₱50,000 total prize pool",
      "64 players, 4 categories",
      "Live scoring system",
      "Post-tournament dinner",
    ],
  },
  {
    id: "t2",
    name: "TBC Anniversary Cup 2025",
    date: "2025-11-15",
    venue: "PlayPark Badminton Hub, Makati",
    format: "Round Robin + Knockout",
    participants: 48,
    status: "completed",
    winner: "Paolo Cruz",
    runnerUp: "Marco Reyes",
    description:
      "The 5th Anniversary Cup celebrating TBC's growth. Ran over two exciting days with nail-biting finals.",
    imageUrl:
      "https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=800&auto=format&fit=crop",
    highlights: [
      "Paolo Cruz wins back-to-back titles",
      "Longest rally: 87 shots (Semi-final)",
      "48 players from 3 cities",
      "Record attendance: 200+ spectators",
    ],
  },
  {
    id: "t3",
    name: "Interclub Challenge — TBC vs. Shuttlers PH",
    date: "2025-09-20",
    venue: "SM Aura Courts, BGC",
    format: "Team Match",
    participants: 30,
    status: "completed",
    winner: "TBC (7–3)",
    runnerUp: "Shuttlers PH",
    description:
      "A friendly but fierce interclub showdown. TBC dominated with a 7–3 win across singles and doubles.",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop",
    highlights: [
      "TBC wins 7–3",
      "Diana Santos wins all 3 singles matches",
      "Crowd favourite: doubles final went to 3 sets",
    ],
  },
  {
    id: "t4",
    name: "Beginners Cup 2025",
    date: "2025-06-08",
    venue: "Ace Sports Centre, Makati",
    format: "Round Robin",
    participants: 24,
    status: "completed",
    winner: "Nico Valdez",
    runnerUp: "Camille Tan",
    description:
      "A tournament just for newcomers — no pressure, full fun. A stepping stone for TBC's growing beginner community.",
    imageUrl:
      "https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=800&auto=format&fit=crop",
    highlights: [
      "24 first-time tournament players",
      "Nico Valdez wins undefeated",
      "Post-game clinic for all participants",
    ],
  },
];

// ─── Players ──────────────────────────────────────────────────────────────────
export const players: Player[] = [
  {
    id: "p1",
    name: "Paolo Cruz",
    nickname: "The Terminator",
    role: "Club Captain",
    skillLevel: "Advanced",
    joinedYear: 2020,
    gamesPlayed: 312,
    wins: 241,
    bio: "Paolo is the backbone of TBC. A two-time anniversary cup champion, he combines powerful smashes with incredible court coverage. Off the court, he's known for his coaching patience and infectious laugh.",
    quote: "Badminton taught me that consistency beats talent every time.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&crop=face",
    achievements: [
      "TBC Anniversary Cup Champion 2024 & 2025",
      "Club MVP 2023, 2024, 2025",
      "Most Improved Player 2021",
    ],
    isFeatured: true,
  },
  {
    id: "p2",
    name: "Diana Santos",
    nickname: "The Wall",
    role: "Head Coach",
    skillLevel: "Advanced",
    joinedYear: 2019,
    gamesPlayed: 387,
    wins: 298,
    bio: "Diana is TBC's undefeated ladies singles champion. Her defensive play is legendary — opponents call her 'The Wall'. She leads our coaching clinics and has mentored over 40 beginners into confident players.",
    quote: "Every shuttle you return is a small victory. Keep returning.",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&crop=face",
    achievements: [
      "Ladies Singles Undefeated 2024-2025",
      "Best Coach Award 2024",
      "Interclub MVP vs. Shuttlers PH 2025",
    ],
    isFeatured: true,
  },
  {
    id: "p3",
    name: "Marco Reyes",
    nickname: "Rocket",
    role: "Events Coordinator",
    skillLevel: "Advanced",
    joinedYear: 2021,
    gamesPlayed: 256,
    wins: 188,
    bio: "Marco's smashes have been clocked at over 200 km/h on the court. When he's not terrifying opponents, he organizes TBC's events with military precision. Every great TBC session has Marco's fingerprints on it.",
    quote: "The shuttle doesn't care about your excuses. Neither do I.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&crop=face",
    achievements: [
      "Anniversary Cup Runner-Up 2025",
      "Fastest Smash Award 2024 (207 km/h)",
      "Best Events Organizer 2024",
    ],
    isFeatured: true,
  },
  {
    id: "p4",
    name: "Bea Lim",
    nickname: "Butterfly",
    role: "Membership Officer",
    skillLevel: "Intermediate",
    joinedYear: 2022,
    gamesPlayed: 178,
    wins: 109,
    bio: "Bea joined as a complete beginner and rose to become one of TBC's most active intermediate players in just two years. Her footwork is a thing of beauty — hence the nickname. She now runs our beginner clinics.",
    quote: "I was terrified on my first day. Now I can't imagine life without TBC.",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&crop=face",
    achievements: [
      "Most Improved Player 2023",
      "Beginners Cup Finalist 2022",
      "Community Star Award 2024",
    ],
    isFeatured: true,
  },
  {
    id: "p5",
    name: "Nico Valdez",
    nickname: "The Rookie King",
    role: "Member",
    skillLevel: "Intermediate",
    joinedYear: 2024,
    gamesPlayed: 89,
    wins: 58,
    bio: "Nico went from zero to Beginners Cup champion in his first year. His rapid development has turned heads at every session. Watch this space — TBC's next superstar is warming up.",
    quote: "I thought badminton was easy. I was very, very wrong. I'm hooked.",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&crop=face",
    achievements: [
      "Beginners Cup Champion 2025",
      "Rookie of the Year 2024",
    ],
    isFeatured: false,
  },
  {
    id: "p6",
    name: "Camille Tan",
    nickname: "Ice Queen",
    role: "Social Media Manager",
    skillLevel: "Intermediate",
    joinedYear: 2023,
    gamesPlayed: 142,
    wins: 91,
    bio: "Camille brings ice-cold composure under pressure and tournament runner-up credentials. She also runs TBC's Instagram, making sure every great rally gets documented.",
    quote: "Stay cool, hit clean, smile always.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&crop=face",
    achievements: [
      "Beginners Cup Runner-Up 2025",
      "Most Consistent Player 2024",
    ],
    isFeatured: false,
  },
];

// ─── Leaderboard ──────────────────────────────────────────────────────────────
export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    playerId: "p2",
    playerName: "Diana Santos",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 387,
    wins: 298,
    winRate: 77,
    points: 4850,
    streak: 12,
    badge: "👑 Club Legend",
  },
  {
    rank: 2,
    playerId: "p1",
    playerName: "Paolo Cruz",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 312,
    wins: 241,
    winRate: 77,
    points: 4210,
    streak: 8,
    badge: "🏆 Champion",
  },
  {
    rank: 3,
    playerId: "p3",
    playerName: "Marco Reyes",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 256,
    wins: 188,
    winRate: 73,
    points: 3640,
    streak: 5,
    badge: "🚀 Rocket",
  },
  {
    rank: 4,
    playerId: "p6",
    playerName: "Camille Tan",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 142,
    wins: 91,
    winRate: 64,
    points: 2280,
    streak: 3,
    badge: "❄️ Ice Queen",
  },
  {
    rank: 5,
    playerId: "p4",
    playerName: "Bea Lim",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 178,
    wins: 109,
    winRate: 61,
    points: 2140,
    streak: 2,
  },
  {
    rank: 6,
    playerId: "p5",
    playerName: "Nico Valdez",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 89,
    wins: 58,
    winRate: 65,
    points: 1860,
    streak: 6,
    badge: "⭐ Rising Star",
  },
  {
    rank: 7,
    playerId: "p7",
    playerName: "Rafael Mendoza",
    avatarUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 203,
    wins: 118,
    winRate: 58,
    points: 1980,
    streak: 1,
  },
  {
    rank: 8,
    playerId: "p8",
    playerName: "Sophie Guerrero",
    avatarUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 156,
    wins: 87,
    winRate: 56,
    points: 1720,
    streak: 0,
  },
  {
    rank: 9,
    playerId: "p9",
    playerName: "Josh Aguilar",
    avatarUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 134,
    wins: 71,
    winRate: 53,
    points: 1540,
    streak: 4,
  },
  {
    rank: 10,
    playerId: "p10",
    playerName: "Kris Navarro",
    avatarUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&crop=face",
    gamesPlayed: 119,
    wins: 62,
    winRate: 52,
    points: 1410,
    streak: 2,
  },
];

// ─── Gallery ──────────────────────────────────────────────────────────────────
export const gallery: GalleryItem[] = [
  {
    id: "img1",
    type: "photo",
    url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&auto=format&fit=crop",
    caption: "Sunday Smash Session — The energy was electric!",
    album: "Weekly Sessions",
    date: "2026-06-08",
    likes: 47,
  },
  {
    id: "img2",
    type: "photo",
    url: "https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=600&auto=format&fit=crop",
    caption: "Anniversary Cup 2025 — Finals Day!",
    album: "Tournaments",
    date: "2025-11-15",
    likes: 134,
  },
  {
    id: "img3",
    type: "photo",
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&auto=format&fit=crop",
    caption: "Court side vibes at Titan Sports Complex",
    album: "Weekly Sessions",
    date: "2026-05-25",
    likes: 62,
  },
  {
    id: "img4",
    type: "photo",
    url: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&auto=format&fit=crop",
    caption: "Badminton rackets ready — let's go!",
    album: "Behind the Scenes",
    date: "2026-05-18",
    likes: 38,
  },
  {
    id: "img5",
    type: "photo",
    url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop",
    caption: "Post-game breakfast — the TBC tradition continues",
    album: "Community Life",
    date: "2026-06-01",
    likes: 89,
  },
  {
    id: "img6",
    type: "photo",
    url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&auto=format&fit=crop",
    caption: "Our growing TBC family — group photo at Monthly Grand Rally",
    album: "Community Life",
    date: "2026-05-11",
    likes: 201,
  },
  {
    id: "img7",
    type: "photo",
    url: "https://images.unsplash.com/photo-1474755032398-4b0ed3b2ae5c?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1474755032398-4b0ed3b2ae5c?w=600&auto=format&fit=crop",
    caption: "Mixed doubles partners — random draw, instant friendship",
    album: "Weekly Sessions",
    date: "2026-04-27",
    likes: 55,
  },
  {
    id: "img8",
    type: "photo",
    url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&auto=format&fit=crop",
    caption: "Interclub Challenge — TBC vs. Shuttlers PH",
    album: "Tournaments",
    date: "2025-09-20",
    likes: 118,
  },
  {
    id: "img9",
    type: "photo",
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&fit=crop",
    caption: "Beginners clinic — Day 1, rally 1. The journey starts!",
    album: "Clinics",
    date: "2026-03-15",
    likes: 73,
  },
  {
    id: "img10",
    type: "photo",
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop",
    caption: "Stretching and warmup — injury prevention is part of the game",
    album: "Clinics",
    date: "2026-02-08",
    likes: 41,
  },
  {
    id: "img11",
    type: "photo",
    url: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600&auto=format&fit=crop",
    caption: "Champions podium — Anniversary Cup 2025",
    album: "Tournaments",
    date: "2025-11-15",
    likes: 166,
  },
  {
    id: "img12",
    type: "photo",
    url: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1200&auto=format&fit=crop",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&auto=format&fit=crop",
    caption: "TBC crew at SM Aura — always good energy",
    album: "Community Life",
    date: "2026-04-12",
    likes: 94,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "tm1",
    name: "Bea Lim",
    role: "Member since 2022",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&crop=face",
    quote:
      "I walked into my first TBC session not knowing how to hold a racket. Two years later, I'm coaching beginners myself. This community literally changed my life.",
    rating: 5,
    joinedYear: 2022,
  },
  {
    id: "tm2",
    name: "Nico Valdez",
    role: "Member since 2024",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&crop=face",
    quote:
      "I expected a sports club. What I got was a second family. TBC is the highlight of my weekend — every single week.",
    rating: 5,
    joinedYear: 2024,
  },
  {
    id: "tm3",
    name: "Sophie Guerrero",
    role: "Member since 2023",
    avatarUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&crop=face",
    quote:
      "The vibe here is unmatched. Everyone is welcoming regardless of skill level. I came for badminton and stayed for the people.",
    rating: 5,
    joinedYear: 2023,
  },
  {
    id: "tm4",
    name: "Josh Aguilar",
    role: "Member since 2022",
    avatarUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&crop=face",
    quote:
      "The coaching at TBC is next-level. Diana completely overhauled my footwork in three sessions. My game improved faster than I thought possible.",
    rating: 5,
    joinedYear: 2022,
  },
  {
    id: "tm5",
    name: "Kris Navarro",
    role: "Member since 2023",
    avatarUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&crop=face",
    quote:
      "Post-game breakfast is non-negotiable. TBC is the only sports club I know where the food after the game is as anticipated as the game itself.",
    rating: 5,
    joinedYear: 2023,
  },
  {
    id: "tm6",
    name: "Rafael Mendoza",
    role: "Member since 2021",
    avatarUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&crop=face",
    quote:
      "I've been to other clubs. Nothing compares to TBC's energy. The organization, the people, the sessions — it's premium from start to finish.",
    rating: 5,
    joinedYear: 2021,
  },
];

// ─── Learn Guides ─────────────────────────────────────────────────────────────
export const learnGuides: LearnGuide[] = [
  {
    id: "lg1",
    title: "Your First Badminton Session",
    category: "beginner",
    difficulty: "Beginner",
    duration: "10 min read",
    summary:
      "Everything you need to know before stepping on the court for the first time — what to bring, what to wear, and what to expect.",
    tips: [
      "Wear non-marking court shoes — never outdoor shoes on the court",
      "Bring a towel, water bottle, and spare shuttlecocks if possible",
      "Start with a lighter racket (around 85g) for easier control",
      "Don't worry about the rules — just try to keep the shuttle in the air",
      "Warm up for 5-10 minutes before playing",
    ],
    icon: "Star",
  },
  {
    id: "lg2",
    title: "The 5 Core Strokes Every Player Must Learn",
    category: "technique",
    difficulty: "Beginner",
    duration: "15 min read",
    summary:
      "Mastering these five fundamental strokes will get you competitive faster than any other investment in your game.",
    tips: [
      "Clear: A deep, high shot to the back of the court — your bread and butter",
      "Drop shot: A delicate shot that just clears the net and falls steeply",
      "Smash: A powerful downward shot — the crowd pleaser",
      "Drive: A fast, flat shot aimed at the opponent's body",
      "Net shot: Precise, soft shots played right at the net",
    ],
    icon: "Target",
  },
  {
    id: "lg3",
    title: "Footwork Fundamentals",
    category: "footwork",
    difficulty: "Beginner",
    duration: "12 min read",
    summary:
      "50% of badminton is footwork. Learn the split step, lunge, and recovery that will make you twice the player.",
    tips: [
      "Always return to the centre base position after each shot",
      "Use the split step every time your opponent is about to hit",
      "Practice the 6-direction footwork pattern daily (even at home)",
      "Lunge deep into the corners — don't take baby steps",
      "Push off with your racket foot for rear-court shots",
    ],
    icon: "Footprints",
  },
  {
    id: "lg4",
    title: "Doubles Strategy 101",
    category: "strategy",
    difficulty: "Intermediate",
    duration: "20 min read",
    summary:
      "Doubles is a completely different game. Learn the attack/defend formation, rotation, and how to communicate with your partner.",
    tips: [
      "In attack: play side-by-side (front-back is for defense)",
      "In defense: play side-by-side (front-back is for offense)",
      "Communicate constantly — call 'mine' or 'yours'",
      "The stronger smasher should take the rear; the sharper net player goes front",
      "Target the body of the opponent in attack — it limits their angle",
    ],
    icon: "Users",
  },
  {
    id: "lg5",
    title: "Choosing Your First Racket",
    category: "equipment",
    difficulty: "Beginner",
    duration: "8 min read",
    summary:
      "Don't overspend on your first racket. Here's what to look for and what the specs actually mean.",
    tips: [
      "Weight: 80-89g (4U) for beginners; lighter is easier to manoeuvre",
      "Flex: A more flexible shaft is more forgiving — perfect for beginners",
      "Balance: Even-balanced or head-light for control; head-heavy for power",
      "String tension: Start at 18-20 lbs — lower tension is easier to play with",
      "Budget picks: Yonex Nanoray, Victor Thruster, Li-Ning all offer great value",
    ],
    icon: "Zap",
  },
  {
    id: "lg6",
    title: "How to Beat Players Better Than You",
    category: "strategy",
    difficulty: "Advanced",
    duration: "18 min read",
    summary:
      "Playing up is how you improve fastest. Learn the tactical tricks that even the odds against stronger opponents.",
    tips: [
      "Force errors — don't go for winners, let them make mistakes",
      "Vary the pace drastically — fast then slow confuses timing",
      "Attack the back-hand — most players are weaker there",
      "Keep them moving — width, then depth, then body",
      "Stay patient — outlast them mentally if you can't outskill them",
    ],
    icon: "Brain",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const faqs: FAQ[] = [
  {
    question: "Do I need to be good to join TBC?",
    answer:
      "Absolutely not! TBC welcomes all skill levels from complete beginners to advanced players. We run sessions specifically for beginners and our community is known for being especially welcoming to newcomers.",
  },
  {
    question: "How do I join TBC?",
    answer:
      "It's easy — just message us on Instagram or Facebook, or fill out the contact form on our website. We'll invite you to an upcoming session and you can experience the vibe before committing.",
  },
  {
    question: "What is the membership fee?",
    answer:
      "There is no annual membership fee. You pay per session (typically ₱250–₱400 depending on the event), which covers court fees. Some events are free, especially beginner clinics.",
  },
  {
    question: "What should I bring to my first session?",
    answer:
      "Non-marking court shoes, comfortable sportswear, a water bottle, and a positive attitude. If you have a racket, bring it — but we can lend you one for your first session.",
  },
  {
    question: "How do I know which session is right for my level?",
    answer:
      "Every event listing on our Games page clearly shows the skill level (Beginner, Intermediate, Advanced, or All Levels). When in doubt, come to an All Levels session — we always group players by ability on the day.",
  },
  {
    question: "Can I join as a complete beginner?",
    answer:
      "Yes! We run dedicated beginner clinics and always have experienced players who enjoy helping newcomers. No badminton experience is required at all.",
  },
  {
    question: "Do you have a women-only or family session?",
    answer:
      "We're working on it! Currently our sessions are mixed. Reach out to us and let us know your preference — member demand shapes our schedule.",
  },
  {
    question: "How many sessions can I attend per month?",
    answer:
      "As many as you want! There is no cap on attendance. Most active members attend 4–8 sessions per month. Some come every single week — we don't judge.",
  },
];
