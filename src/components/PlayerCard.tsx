"use client";

import { motion } from "framer-motion";
import { Quote, Trophy } from "lucide-react";
import { cn, getSkillLevelColor } from "@/lib/utils";
import type { Player } from "@/lib/types";

interface PlayerCardProps {
  player: Player;
  index?: number;
  variant?: "default" | "compact";
}

export default function PlayerCard({
  player,
  index = 0,
  variant = "default",
}: PlayerCardProps) {
  const winRate = Math.round((player.wins / player.gamesPlayed) * 100);

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="flex items-center gap-4 p-4 bg-white dark:bg-tbc-gray-800 rounded-xl border border-gray-100 dark:border-tbc-gray-700 hover:border-tbc-orange/40 dark:hover:border-tbc-orange/40 transition-all"
      >
        <img
          src={player.avatarUrl}
          alt={player.name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">
            {player.name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{player.role}</p>
        </div>
        <span
          className={cn(
            "ml-auto px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0",
            getSkillLevelColor(player.skillLevel)
          )}
        >
          {player.skillLevel}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white dark:bg-tbc-gray-800 rounded-2xl shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Header with gradient */}
      <div className="relative h-28 bg-gradient-tbc flex items-end px-5 pb-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="relative -mb-10">
          <img
            src={player.avatarUrl}
            alt={player.name}
            className="w-20 h-20 rounded-2xl object-cover border-4 border-white dark:border-tbc-gray-800 shadow-lg"
          />
        </div>
      </div>

      <div className="pt-12 px-5 pb-5">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-snug">
              {player.name}
            </h3>
            {player.nickname && (
              <p className="text-tbc-orange text-xs font-semibold">
                &ldquo;{player.nickname}&rdquo;
              </p>
            )}
          </div>
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-semibold mt-1",
              getSkillLevelColor(player.skillLevel)
            )}
          >
            {player.skillLevel}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {player.role} · Since {player.joinedYear}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Played", value: player.gamesPlayed },
            { label: "Wins", value: player.wins },
            { label: "Win %", value: `${winRate}%` },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="text-center p-2 bg-gray-50 dark:bg-tbc-gray-700 rounded-lg"
            >
              <p className="font-bold text-gray-900 dark:text-white text-sm">
                {value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed">
          {player.bio}
        </p>

        {/* Quote */}
        <div className="flex gap-2 p-3 bg-tbc-orange/5 dark:bg-tbc-orange/10 rounded-xl border border-tbc-orange/10 dark:border-tbc-orange/20">
          <Quote className="w-4 h-4 text-tbc-orange flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 dark:text-gray-400 italic leading-relaxed">
            {player.quote}
          </p>
        </div>

        {/* Achievements */}
        {player.achievements.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Trophy className="w-3 h-3" /> Achievements
            </p>
            <ul className="space-y-1">
              {player.achievements.slice(0, 2).map((ach, i) => (
                <li
                  key={i}
                  className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-tbc-orange flex-shrink-0" />
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
