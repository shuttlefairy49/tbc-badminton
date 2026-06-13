import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { tournaments } from "@/lib/data";
import { Trophy, Calendar, Users, MapPin, Star, ArrowRight } from "lucide-react";
import { formatShortDate } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Tournaments",
  description:
    "TBC tournaments, competitive events, interclub matches, and past event highlights.",
};

export default function EventsPage() {
  const upcoming = tournaments.filter((t) => t.status === "upcoming");
  const past = tournaments.filter((t) => t.status === "completed");

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542327897-d73f4005b533?w=1600&auto=format&fit=crop"
            alt="Tournament"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <Trophy className="w-4 h-4" /> Compete & Celebrate
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Events &{" "}
            <span className="text-tbc-orange">Tournaments</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            From friendly round-robins to championship cups — TBC events are
            where memories are made.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Coming Up"
            title="Upcoming Tournaments"
            subtitle="Register early — spots are limited and go fast."
          />
          <div className="space-y-6">
            {upcoming.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-tbc-gray-800 rounded-2xl shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {t.imageUrl && (
                    <div className="lg:w-72 h-48 lg:h-auto flex-shrink-0">
                      <img
                        src={t.imageUrl}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-tbc-orange/10 text-tbc-orange text-xs font-bold uppercase tracking-wide mb-2">
                          Upcoming
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {t.name}
                        </h3>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-tbc-orange text-white font-semibold text-sm hover:bg-tbc-orange-dark shadow-orange transition-all"
                      >
                        Register Interest <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {t.description}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {[
                        { icon: Calendar, value: formatShortDate(t.date) },
                        { icon: MapPin, value: t.venue },
                        { icon: Users, value: `${t.participants} players` },
                        { icon: Trophy, value: t.format },
                      ].map(({ icon: Icon, value }) => (
                        <div key={value} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Icon className="w-4 h-4 text-tbc-orange flex-shrink-0" />
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                    {t.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {t.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-3 py-1 bg-tbc-cream dark:bg-tbc-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-lg"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Event Archives"
            title="Past Tournaments"
            subtitle="Every past event is a chapter in the TBC story."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {past.map((t) => (
              <div
                key={t.id}
                className="group bg-tbc-cream dark:bg-tbc-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-tbc-gray-700 hover:shadow-lg transition-all duration-300"
              >
                {t.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={t.imageUrl}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                      Completed
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatShortDate(t.date)}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {t.description}
                  </p>

                  {t.winner && (
                    <div className="flex items-center gap-3 p-3 bg-tbc-orange/10 dark:bg-tbc-orange/5 rounded-xl mb-4">
                      <Trophy className="w-5 h-5 text-tbc-orange flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Winner</p>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">
                          {t.winner}
                        </p>
                        {t.runnerUp && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Runner-up: {t.runnerUp}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {t.highlights && (
                    <ul className="space-y-1">
                      {t.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <Star className="w-3 h-3 text-tbc-orange flex-shrink-0 fill-tbc-orange" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
