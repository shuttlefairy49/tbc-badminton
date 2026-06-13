"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Calendar,
  Users,
  MapPin,
  Trophy,
  ArrowRight,
  ChevronRight,
  Star,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCard from "@/components/TestimonialCard";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import { clubStats, games, testimonials, announcements } from "@/lib/data";

const statIcons: Record<string, ElementType> = {
  Users,
  Calendar,
  MapPin,
  Trophy,
};

export default function HomePage() {
  const upcomingGames = games.filter((g) => g.status === "upcoming").slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1600&auto=format&fit=crop"
            alt="Badminton court"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-tbc-black/50" />
        </div>

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tbc-orange/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tbc-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tbc-orange/20 border border-tbc-orange/40 text-tbc-orange-light text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 fill-tbc-orange-light" />
            The Breakfast Club Badminton
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6"
          >
            Where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-tbc">
              Great Days
            </span>
            <br />
            Begin.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A community of passionate badminton players built on great games,
            great people, and great vibes. All skill levels welcome — your
            journey starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/membership"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-tbc-orange text-white font-bold text-base hover:bg-tbc-orange-dark shadow-orange-lg hover:shadow-orange hover:scale-[1.03] transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              Join the Community
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/games"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Upcoming Games
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-1 text-white/50 text-xs">
              <span>Scroll to explore</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Announcement Banner ─────────────────────────────────────────── */}
      {announcements.filter((a) => a.isPinned).length > 0 && (
        <section className="bg-tbc-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-3 text-white">
              <Zap className="w-4 h-4 fill-white flex-shrink-0" />
              <p className="text-sm font-medium flex-1 min-w-0">
                <span className="font-bold">{announcements[0].title}</span>
                <span className="hidden sm:inline text-white/80 ml-2">
                  — {announcements[0].body}
                </span>
              </p>
              <Link
                href="/games"
                className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
              >
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── Stats ───────────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-tbc-gray-900 border-b border-gray-100 dark:border-tbc-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clubStats.map((stat, i) => {
              const Icon = statIcons[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-tbc-orange/10 dark:bg-tbc-orange/20 flex items-center justify-center mx-auto mb-3">
                    {Icon && <Icon className="w-6 h-6 text-tbc-orange" />}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    {stat.suffix ? "" : "+"}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Upcoming Games ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Get on the Court"
            title="Upcoming Games"
            subtitle="From beginner clinics to competitive sessions — there's always a game for you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingGames.map((game, i) => (
              <EventCard key={game.id} event={game} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/games"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-tbc-orange text-tbc-orange font-semibold hover:bg-tbc-orange hover:text-white transition-all duration-200"
            >
              View All Games
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── About Section ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tbc-orange font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-6 leading-tight">
                More than a club.{" "}
                <span className="text-tbc-orange">A community.</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  TBC started in 2020 with six friends and two courts. Today, we&apos;re
                  a family of over 248 players spanning all ages and skill levels —
                  united by love for the shuttle and life-giving post-game breakfasts.
                </p>
                <p>
                  We believe badminton is better when it&apos;s welcoming, fun, and
                  accessible. Whether you&apos;re lifting a racket for the first time or
                  chasing a tournament title, TBC is your place.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tbc-orange text-white font-semibold hover:bg-tbc-orange-dark shadow-orange hover:shadow-orange-lg transition-all duration-200"
                >
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-tbc-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-tbc-orange hover:text-tbc-orange dark:hover:border-tbc-orange dark:hover:text-tbc-orange transition-all duration-200"
                >
                  How to Join
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1613747731879-432c72ce3f6b?w=600&auto=format&fit=crop"
                  alt="TBC players"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&auto=format&fit=crop"
                  alt="TBC court"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&auto=format&fit=crop"
                  alt="TBC community"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg -mt-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600&auto=format&fit=crop"
                  alt="TBC trophy"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg mt-4"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-tbc-orange text-white px-5 py-3 rounded-2xl shadow-orange-lg">
                <p className="font-bold text-2xl">6</p>
                <p className="text-xs font-medium opacity-90">Years Strong</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Great Games. Great People. Great Vibes. ─────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Testimonials"
            title="Great Games. Great People. Great Vibes."
            subtitle="Don&apos;t take our word for it — here's what the TBC family has to say."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: Star, label: "4.9/5 avg rating" },
              { icon: Users, label: "248+ active members" },
              { icon: Trophy, label: "134 events hosted" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm font-medium"
              >
                <Icon className="w-4 h-4 text-tbc-orange" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Banner ──────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden bg-tbc-black dark:bg-tbc-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,_#F97316_0px,_#F97316_1px,_transparent_1px,_transparent_40px)]" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-tbc-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tbc-orange/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ready to start your{" "}
              <span className="text-tbc-orange">TBC journey?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Your first game is always the hardest to book. After that, you
              won&apos;t want to stop. Join 248+ players who made the best
              decision of their week.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/membership"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-tbc-orange text-white font-bold text-base hover:bg-tbc-orange-dark shadow-orange-lg hover:scale-[1.03] transition-all duration-200 animate-pulse-orange"
              >
                <Users className="w-5 h-5" />
                Join TBC Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
