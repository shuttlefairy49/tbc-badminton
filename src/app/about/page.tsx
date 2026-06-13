import type { Metadata } from "next";
import { Heart, Shield, Zap, Users, Target, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About TBC",
  description:
    "Learn about The Breakfast Club Badminton — our story, mission, values, and why we're the Philippines' most welcoming badminton community.",
};

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We win as a team and grow as a family. Every new member is welcomed, every improvement celebrated.",
  },
  {
    icon: Shield,
    title: "Inclusive & Safe",
    description:
      "TBC is a respectful, safe space for everyone — regardless of age, gender, background, or skill level.",
  },
  {
    icon: Zap,
    title: "Excellence & Fun",
    description:
      "We take our badminton seriously, but never so seriously that we forget to enjoy every rally.",
  },
  {
    icon: Target,
    title: "Continuous Growth",
    description:
      "Clinics, coaching, and structured play pathways to help every member improve at their own pace.",
  },
  {
    icon: Users,
    title: "Real Connections",
    description:
      "Post-game breakfasts aren't optional — they're where the real TBC community gets built.",
  },
  {
    icon: Star,
    title: "Celebrate Everyone",
    description:
      "From your first net shot to your first tournament win — every milestone matters here.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "TBC Founded",
    description:
      "Six friends, two rented courts, and a shared vision of a badminton community that felt like family.",
  },
  {
    year: "2021",
    title: "First 50 Members",
    description:
      "Word spread fast. Within a year, TBC had grown to 50 active members and moved to dedicated court partnerships.",
  },
  {
    year: "2022",
    title: "First Tournament",
    description:
      "The inaugural TBC Open drew 32 players and set the template for our now-annual championship series.",
  },
  {
    year: "2023",
    title: "Coaching Program Launch",
    description:
      "Launched structured beginner clinics under Head Coach Diana Santos. 40+ beginners graduated in year one.",
  },
  {
    year: "2024",
    title: "100+ Member Milestone",
    description:
      "TBC crossed 100 active members, expanded to 8 court partners across Metro Manila.",
  },
  {
    year: "2025",
    title: "Interclub Expansion",
    description:
      "Competed in our first interclub match, winning 7–3 against Shuttlers PH in a memorable afternoon.",
  },
  {
    year: "2026",
    title: "248 Members & Growing",
    description:
      "TBC is now 248 strong across 12 partner courts — and the journey is just beginning.",
  },
];

export default function AboutPage() {
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Built on Courts.{" "}
            <span className="text-tbc-orange">Held Together</span> by Community.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            TBC wasn&apos;t built by a corporation or committee. It was built by players
            who wanted something more than just a court booking — a real community where
            badminton is a reason to connect.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-tbc-orange font-semibold text-sm uppercase tracking-widest">
                How It Started
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
                Six Players. One Vision.
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  In 2020, six friends who met at a casual Sunday game decided
                  that Manila&apos;s badminton scene needed something different. Not
                  another formal club with membership fees and bureaucracy — but
                  a community. Welcoming. Fun. Built around the game and the
                  people who love it.
                </p>
                <p>
                  They named themselves The Breakfast Club — partly because
                  sessions always ended with breakfast, and partly because every
                  great day deserves a great beginning.
                </p>
                <p>
                  Six years later, TBC has grown to 248 members, 12 court
                  partners, 134 events, and a culture that every member is
                  genuinely proud of. The post-game breakfast remains mandatory.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop"
                alt="TBC Badminton"
                className="rounded-3xl w-full h-80 object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-tbc-orange text-white p-6 rounded-2xl shadow-orange-lg">
                <p className="font-bold text-3xl">2020</p>
                <p className="text-sm opacity-90">Founded with heart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tbc-orange font-semibold text-sm uppercase tracking-widest">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-8">
            Why TBC Exists
          </h2>
          <div className="bg-white dark:bg-tbc-gray-800 rounded-3xl p-10 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic font-medium">
              &ldquo;To build a badminton community where every player — from complete
              beginner to seasoned champion — feels genuinely welcomed,
              challenged, and celebrated. We believe great badminton and great
              people belong together.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-8 h-0.5 bg-tbc-orange/30 rounded-full" />
              <span className="text-tbc-orange font-semibold text-sm">TBC Mission Statement</span>
              <div className="w-8 h-0.5 bg-tbc-orange/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Values"
            subtitle="These aren't just words on a wall. They're how we show up every session, every rally, every breakfast."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-6 bg-tbc-cream dark:bg-tbc-gray-800 rounded-2xl border border-gray-100 dark:border-tbc-gray-700 hover:border-tbc-orange/40 dark:hover:border-tbc-orange/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-tbc-orange/10 dark:bg-tbc-orange/20 flex items-center justify-center mb-4 group-hover:bg-tbc-orange/20 transition-colors">
                  <value.icon className="w-6 h-6 text-tbc-orange" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="The TBC Timeline"
            subtitle="From a WhatsApp group to the Philippines' fastest-growing badminton community."
          />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-tbc-gray-700" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-tbc-orange flex items-center justify-center shadow-orange z-10 self-start">
                    <span className="text-white font-bold text-xs text-center leading-tight">
                      {m.year}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-tbc-gray-800 rounded-2xl p-5 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700 flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {m.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {m.description}
                    </p>
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
