import type { Metadata } from "next";
import type { ElementType } from "react";
import SectionHeader from "@/components/SectionHeader";
import { learnGuides } from "@/lib/data";
import {
  Star,
  Target,
  Users,
  Zap,
  Brain,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Learn Badminton",
  description:
    "TBC's badminton learning hub — beginner guides, technique tips, footwork basics, equipment advice, and doubles strategy.",
};

const categoryIcons: Record<string, ElementType> = {
  beginner: Star,
  technique: Target,
  footwork: Zap,
  strategy: Brain,
  equipment: BookOpen,
};

const categoryColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  technique: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  footwork: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  strategy: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  equipment: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
};

const tips = [
  "Always warm up for 10 minutes before playing",
  "Focus on consistency before power — control wins more points",
  "Watch the shuttle, not your opponent",
  "Recover to center court after every shot",
  "Practice your weakest stroke the most",
  "Never rush the net without being sure",
  "Breathe out on contact — it generates more power",
  "Doubles: communicate before every serve",
];

export default function LearnPage() {
  const categories = Array.from(new Set(learnGuides.map((g) => g.category)));

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-tbc-orange to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <BookOpen className="w-4 h-4" /> Learning Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Learn <span className="text-tbc-orange">Badminton</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            From your very first rally to tournament-level tactics — TBC&apos;s
            guides have you covered at every stage.
          </p>
        </div>
      </section>

      {/* Quick tips */}
      <section className="bg-tbc-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-white font-bold text-sm uppercase tracking-widest mb-4 text-center">
            Quick Tips from TBC Coaches
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-white/10 rounded-xl p-3"
              >
                <span className="w-5 h-5 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-white text-sm leading-snug">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Guides & Resources"
            title="TBC Learning Library"
            subtitle="Our coaches have put together the guides they wish they had when they started."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {learnGuides.map((guide, i) => {
              const Icon = categoryIcons[guide.category] || BookOpen;
              return (
                <div
                  key={guide.id}
                  className="group bg-white dark:bg-tbc-gray-800 rounded-2xl shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700 hover:border-tbc-orange/40 dark:hover:border-tbc-orange/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-tbc-orange/10 dark:bg-tbc-orange/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-tbc-orange" />
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={cn(
                            "px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize",
                            categoryColors[guide.category]
                          )}
                        >
                          {guide.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-tbc-gray-700 text-gray-600 dark:text-gray-400 text-xs">
                          {guide.difficulty}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {guide.duration}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                      {guide.summary}
                    </p>

                    {/* Tips */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Key Takeaways
                      </p>
                      {guide.tips.slice(0, 3).map((tip, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-tbc-orange flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                            {tip}
                          </p>
                        </div>
                      ))}
                      {guide.tips.length > 3 && (
                        <p className="text-xs text-tbc-orange font-medium pt-1">
                          +{guide.tips.length - 3} more tips
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want hands-on coaching?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Reading guides is great — but nothing beats playing. Join a TBC
            beginner clinic and get real-time feedback from our coaches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/games"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-tbc-orange text-white font-bold hover:bg-tbc-orange-dark shadow-orange hover:shadow-orange-lg transition-all"
            >
              <Users className="w-5 h-5" />
              Join a Beginner Clinic
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-gray-200 dark:border-tbc-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-tbc-orange hover:text-tbc-orange transition-all"
            >
              Ask a Coach
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
