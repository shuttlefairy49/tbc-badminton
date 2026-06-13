import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { leaderboard } from "@/lib/data";
import { Trophy, Zap, TrendingUp, Award, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Leaderboard & Recognition",
  description:
    "TBC Badminton leaderboard — most active players, top contributors, tournament winners, and community awards.",
};

const awards = [
  { title: "Club MVP", winner: "Diana Santos", year: "2025", icon: "👑" },
  { title: "Most Improved", winner: "Bea Lim", year: "2025", icon: "⭐" },
  { title: "Best Coach", winner: "Diana Santos", year: "2025", icon: "🎓" },
  { title: "Community Star", winner: "Bea Lim", year: "2024", icon: "💫" },
  { title: "Tournament Champion", winner: "Paolo Cruz", year: "2025", icon: "🏆" },
  { title: "Fastest Smash", winner: "Marco Reyes", year: "2024", icon: "🚀" },
];

export default function LeaderboardPage() {
  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tbc-orange to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <Trophy className="w-4 h-4" /> Rankings
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Leaderboard &{" "}
            <span className="text-tbc-orange">Recognition</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Every rally counts. Every win earns its place. Here are the players
            leading the charge.
          </p>
        </div>
      </section>

      {/* Podium */}
      <section className="py-16 bg-white dark:bg-tbc-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Top 3"
            title="Hall of Champions"
            subtitle="The TBC elite — consistency, dedication, and excellence on the court."
          />

          {/* Podium display */}
          <div className="flex items-end justify-center gap-4 sm:gap-8 mb-16">
            {[top3[1], top3[0], top3[2]].map((entry, podiumPos) => {
              const displayRank = podiumPos === 0 ? 2 : podiumPos === 1 ? 1 : 3;
              const heights = ["h-32", "h-44", "h-28"];
              const podiumColors = [
                "bg-gray-400",
                "bg-tbc-orange",
                "bg-amber-700",
              ];
              const medals = ["🥈", "🥇", "🥉"];

              return (
                <div key={entry.rank} className="flex flex-col items-center">
                  <img
                    src={entry.avatarUrl}
                    alt={entry.playerName}
                    className={cn(
                      "w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 mb-2 shadow-lg",
                      displayRank === 1
                        ? "border-tbc-orange shadow-orange"
                        : "border-gray-300 dark:border-tbc-gray-600"
                    )}
                  />
                  <p className="text-2xl mb-1">{medals[podiumPos]}</p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm text-center">
                    {entry.playerName.split(" ")[0]}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {entry.points.toLocaleString()} pts
                  </p>
                  <div
                    className={cn(
                      "w-20 sm:w-28 rounded-t-xl flex items-center justify-center",
                      heights[podiumPos],
                      podiumColors[podiumPos]
                    )}
                  >
                    <span className="text-white font-bold text-2xl">
                      {displayRank}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full table */}
          <div className="bg-tbc-cream dark:bg-tbc-gray-800 rounded-2xl border border-gray-100 dark:border-tbc-gray-700 overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 items-center px-6 py-3 bg-gray-100/70 dark:bg-tbc-gray-700 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <span>Rank</span>
              <span>Player</span>
              <span className="text-right hidden sm:block">Games</span>
              <span className="text-right hidden sm:block">Win %</span>
              <span className="text-right">Pts</span>
              <span className="text-right hidden md:block">Streak</span>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-tbc-gray-700">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={cn(
                    "grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 items-center px-6 py-4 hover:bg-white dark:hover:bg-tbc-gray-700 transition-colors",
                    entry.rank <= 3 &&
                      "bg-tbc-orange/5 dark:bg-tbc-orange/5"
                  )}
                >
                  <span
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0",
                      entry.rank === 1
                        ? "bg-tbc-orange text-white"
                        : entry.rank === 2
                        ? "bg-gray-400 text-white"
                        : entry.rank === 3
                        ? "bg-amber-700 text-white"
                        : "text-gray-500 dark:text-gray-400"
                    )}
                  >
                    {entry.rank <= 3 ? "" : entry.rank}
                    {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : ""}
                  </span>

                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={entry.avatarUrl}
                      alt={entry.playerName}
                      className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                        {entry.playerName}
                      </p>
                      {entry.badge && (
                        <p className="text-xs text-tbc-orange truncate">{entry.badge}</p>
                      )}
                    </div>
                  </div>

                  <span className="text-sm text-gray-600 dark:text-gray-400 text-right hidden sm:block">
                    {entry.gamesPlayed}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 text-right hidden sm:block">
                    {entry.winRate}%
                  </span>
                  <span className="font-bold text-tbc-orange text-right">
                    {entry.points.toLocaleString()}
                  </span>
                  <div className="hidden md:flex items-center gap-1 justify-end">
                    {entry.streak > 0 && (
                      <>
                        <Flame className="w-3.5 h-3.5 text-tbc-orange fill-tbc-orange" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {entry.streak}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Awards */}
      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Community Recognition"
            title="Annual Awards"
            subtitle="Beyond win/loss — celebrating the people who make TBC exceptional."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <div
                key={i}
                className="bg-white dark:bg-tbc-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-tbc-gray-700 shadow-card dark:shadow-card-dark hover:border-tbc-orange/40 dark:hover:border-tbc-orange/40 transition-all"
              >
                <div className="text-4xl mb-3">{award.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {award.title}
                </h3>
                <p className="text-tbc-orange font-semibold text-sm mb-0.5">
                  {award.winner}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {award.year} Award
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
