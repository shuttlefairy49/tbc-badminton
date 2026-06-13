import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Breakfast Club Badminton | Where Great Days Begin",
    template: "%s | TBC Badminton",
  },
  description:
    "The Breakfast Club (TBC) is a premier badminton community in the Philippines — welcoming all skill levels with great games, great people, and great vibes.",
  keywords: [
    "badminton",
    "badminton club",
    "The Breakfast Club",
    "TBC",
    "Philippines",
    "sports community",
    "BGC",
    "Makati",
    "badminton sessions",
  ],
  authors: [{ name: "The Breakfast Club Badminton" }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://tbcbadminton.com",
    siteName: "TBC Badminton",
    title: "The Breakfast Club Badminton | Where Great Days Begin",
    description:
      "A premier badminton community in the Philippines. All skill levels welcome. Great games, great people, great vibes.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "TBC Badminton Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Breakfast Club Badminton | Where Great Days Begin",
    description: "A premier badminton community. All skill levels welcome.",
    images: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-tbc-cream dark:bg-tbc-black text-gray-900 dark:text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
