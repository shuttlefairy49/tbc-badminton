import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { faqs } from "@/lib/data";
import {
  CheckCircle,
  Users,
  Zap,
  MessageCircle,
  Instagram,
  Star,
  Shield,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join The Breakfast Club Badminton — learn how to become a member, what to expect, and answers to frequently asked questions.",
};

const steps = [
  {
    icon: MessageCircle,
    title: "Reach Out",
    description:
      "Message us on Instagram, Facebook, or fill out our contact form. Tell us a bit about yourself and your experience level.",
  },
  {
    icon: Zap,
    title: "Join a Trial Session",
    description:
      "We'll invite you to an upcoming session — free of charge for your first visit. Come as you are.",
  },
  {
    icon: Heart,
    title: "Fall in Love",
    description:
      "Experience the TBC vibe — great rallies, friendly faces, and post-game breakfast. We're betting you'll be hooked.",
  },
  {
    icon: Users,
    title: "Become a Member",
    description:
      "Register on our platform, pay per session, and you're officially part of the TBC family.",
  },
];

const skillLevels = [
  {
    level: "Beginner",
    color: "border-green-400",
    badge: "bg-green-100 text-green-700",
    description: "Little to no badminton experience. Still learning basic shots and rules.",
    expectations: ["Basic stroke attempts", "Still learning footwork", "Needs guidance on rules", "Plays best in non-competitive settings"],
  },
  {
    level: "Intermediate",
    color: "border-blue-400",
    badge: "bg-blue-100 text-blue-700",
    description: "Comfortable with all basic strokes, can rally consistently, and understands court strategy.",
    expectations: ["Consistent clears, drops, and smashes", "Basic serve and return", "Plays at a moderate competitive pace", "Can sustain 15+ shot rallies"],
  },
  {
    level: "Advanced",
    color: "border-red-400",
    badge: "bg-red-100 text-red-700",
    description: "Strong technical game, good footwork, capable of playing in competitive formats.",
    expectations: ["Tournament-ready technique", "Tactical shot selection", "Capable smash at speed", "Consistent under pressure"],
  },
];

const guidelines = [
  { icon: Shield, title: "Respect Everyone", desc: "Treat all players with respect regardless of skill level." },
  { icon: Heart, title: "Positive Energy Only", desc: "Encouragement and good sportsmanship define TBC culture." },
  { icon: CheckCircle, title: "Arrive on Time", desc: "Courts are shared — punctuality ensures everyone plays." },
  { icon: Users, title: "Include Everyone", desc: "Actively welcome new players. We were all beginners once." },
  { icon: Star, title: "Play Fair", desc: "Call shuttles honestly. Disputed calls? Play a let." },
  { icon: Zap, title: "Give Back", desc: "TBC grows when members volunteer, coach, and contribute." },
];

export default function MembershipPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1600&auto=format&fit=crop"
            alt="TBC Community"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-tbc-orange/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <Users className="w-4 h-4" /> Join the Family
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Become Part of{" "}
            <span className="text-tbc-orange">TBC</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            No annual fee. No complicated sign-up. Just show up, play, and join
            one of the Philippines&apos; best badminton communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#how-to-join"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-tbc-orange text-white font-bold hover:bg-tbc-orange-dark shadow-orange-lg transition-all"
            >
              How to Join
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Message Us
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What You Get"
            title="TBC Member Benefits"
            subtitle="Being a TBC member means more than just court access."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "🏸", title: "Regular Sessions", desc: "Access to weekly sessions across multiple courts in Metro Manila." },
              { emoji: "🎓", title: "Free Coaching", desc: "Beginner clinics and skill tips from Head Coach Diana Santos." },
              { emoji: "🏆", title: "Tournament Access", desc: "Priority registration for TBC tournaments and interclub events." },
              { emoji: "👥", title: "A Real Community", desc: "248+ friends who share your love for the game — and breakfast." },
              { emoji: "📱", title: "Community Group", desc: "Access to TBC Viber and WhatsApp groups for session updates." },
              { emoji: "🎁", title: "Partner Discounts", desc: "20% off at partner courts and equipment discounts from our sponsors." },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="p-5 bg-tbc-cream dark:bg-tbc-gray-800 rounded-2xl border border-gray-100 dark:border-tbc-gray-700 hover:border-tbc-orange/30 dark:hover:border-tbc-orange/30 transition-all"
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section id="how-to-join" className="py-20 bg-tbc-cream dark:bg-tbc-black scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Getting Started"
            title="How to Join TBC"
            subtitle="Four simple steps to becoming part of the family."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white dark:bg-tbc-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-tbc-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-tbc-orange/10 dark:bg-tbc-orange/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-tbc-orange" />
                    </div>
                    <span className="text-tbc-orange font-bold text-2xl leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-tbc-orange/40 z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Social CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              DM us on Instagram
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-tbc-orange text-white font-semibold hover:bg-tbc-orange-dark shadow-orange transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Send us a Message
            </a>
          </div>
        </div>
      </section>

      {/* Skill levels */}
      <section className="py-20 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Know Your Level"
            title="Skill Level Guide"
            subtitle="Not sure which session to join? Use this guide to find your fit."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillLevels.map((sl) => (
              <div
                key={sl.level}
                className={`bg-tbc-cream dark:bg-tbc-gray-800 rounded-2xl p-6 border-2 ${sl.color} border-opacity-60`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${sl.badge}`}
                >
                  {sl.level}
                </span>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {sl.description}
                </p>
                <ul className="space-y-2">
                  {sl.expectations.map((exp, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-tbc-orange flex-shrink-0" />
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The TBC Way"
            title="Community Guidelines"
            subtitle="Every TBC member agrees to play by these values — they're what make us different."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guidelines.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-5 bg-white dark:bg-tbc-gray-800 rounded-2xl border border-gray-100 dark:border-tbc-gray-700">
                <div className="w-10 h-10 rounded-xl bg-tbc-orange/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-tbc-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before your first session."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-tbc-cream dark:bg-tbc-gray-800 rounded-2xl border border-gray-100 dark:border-tbc-gray-700 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="text-tbc-orange font-bold text-lg flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
