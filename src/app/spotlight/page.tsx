import type { Metadata } from "next";
import PlayerCard from "@/components/PlayerCard";
import SectionHeader from "@/components/SectionHeader";
import { players } from "@/lib/data";
import { Star, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Player Spotlight",
  description:
    "Meet the faces of TBC Badminton — featured members, their stories, and what makes our community exceptional.",
};

export default function SpotlightPage() {
  const featured = players.filter((p) => p.isFeatured);
  const others = players.filter((p) => !p.isFeatured);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&auto=format&fit=crop"
            alt="Player spotlight"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <Star className="w-4 h-4 fill-tbc-orange" /> Our Stars
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Player <span className="text-tbc-orange">Spotlight</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Great games start with great people. Meet the members who make TBC
            what it is — on and off the court.
          </p>
        </div>
      </section>

      {/* Featured players */}
      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Members"
            title="The TBC Core"
            subtitle="These players define the TBC spirit — passionate, welcoming, and always improving."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((player, i) => (
              <PlayerCard key={player.id} player={player} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Community members */}
      {others.length > 0 && (
        <section className="py-16 bg-white dark:bg-tbc-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="More Members"
              title="Rising Stars"
              subtitle="Every great player started somewhere. These members are writing their TBC story."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((player, i) => (
                <PlayerCard key={player.id} player={player} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join CTA */}
      <section className="py-20 bg-tbc-orange">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Zap className="w-10 h-10 mx-auto mb-4 fill-white" />
          <h2 className="text-3xl font-bold mb-4">
            Your spotlight moment is waiting.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Every member featured here started exactly where you are. Come play,
            grow, and become part of the TBC story.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/membership"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-tbc-orange font-bold hover:bg-tbc-cream transition-colors shadow-lg"
            >
              <Users className="w-5 h-5" />
              Join TBC Today
            </a>
            <a
              href="/games"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              View Upcoming Games
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
