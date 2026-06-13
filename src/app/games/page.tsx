import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import { games } from "@/lib/data";
import { Calendar, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Upcoming Games",
  description:
    "Browse and register for upcoming TBC badminton sessions — beginner, intermediate, and advanced. All skill levels welcome.",
};

const skillFilters = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function GamesPage() {
  const upcoming = games.filter((g) => g.status === "upcoming" || g.status === "full");
  const totalAvailableSlots = upcoming.reduce(
    (sum, g) => sum + Math.max(0, g.totalSlots - g.bookedSlots),
    0
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=1600&auto=format&fit=crop"
            alt="Badminton"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <Zap className="w-4 h-4 fill-tbc-orange" /> Get on the Court
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Upcoming <span className="text-tbc-orange">Games</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            From beginner-friendly clinics to advanced competitive play — pick
            your session and register in seconds.
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-white dark:bg-tbc-gray-900 border-b border-gray-100 dark:border-tbc-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {[
              { icon: Calendar, label: "Upcoming Sessions", value: upcoming.length },
              { icon: Users, label: "Available Slots", value: totalAvailableSlots },
              { icon: Zap, label: "Skill Levels", value: "4" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tbc-orange/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-tbc-orange" />
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900 dark:text-white">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="py-8 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            {skillFilters.map((filter) => (
              <button
                key={filter}
                className={
                  filter === "All Levels"
                    ? "px-4 py-2 rounded-xl bg-tbc-orange text-white font-semibold text-sm"
                    : "px-4 py-2 rounded-xl border border-gray-200 dark:border-tbc-gray-700 text-gray-600 dark:text-gray-400 font-medium text-sm hover:border-tbc-orange hover:text-tbc-orange dark:hover:border-tbc-orange dark:hover:text-tbc-orange transition-all"
                }
              >
                {filter}
              </button>
            ))}
          </div>

          <SectionHeader
            eyebrow={`${upcoming.length} sessions available`}
            title="All Upcoming Sessions"
            subtitle="Click 'Register Now' to secure your spot. Slots fill fast!"
            centered={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((game, i) => (
              <EventCard key={game.id} event={game} index={i} />
            ))}
          </div>

          {/* How to join */}
          <div className="mt-16 bg-tbc-orange/10 dark:bg-tbc-orange/5 border border-tbc-orange/20 dark:border-tbc-orange/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How does registration work?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Find Your Session", desc: "Browse sessions by date, venue, or skill level and pick one that fits." },
                { step: "02", title: "Click Register", desc: "Hit 'Register Now' and complete payment via GCash, PayMaya, or bank transfer." },
                { step: "03", title: "Show Up & Play", desc: "Arrive 15 mins early, warm up, and enjoy your TBC session!" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <span className="text-tbc-orange font-bold text-2xl leading-none">{step}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
