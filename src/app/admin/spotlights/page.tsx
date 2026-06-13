"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit3, Star, StarOff } from "lucide-react";
import { players } from "@/lib/data";
import type { Player } from "@/lib/types";
import { cn, getSkillLevelColor } from "@/lib/utils";

export default function AdminSpotlightsPage() {
  const [members, setMembers] = useState<Player[]>(players);

  const toggleFeatured = (id: string) => {
    setMembers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p))
    );
  };

  return (
    <div className="pt-16 min-h-screen bg-tbc-cream dark:bg-tbc-black">
      <div className="bg-white dark:bg-tbc-gray-900 border-b border-gray-200 dark:border-tbc-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="w-9 h-9 rounded-lg border border-gray-200 dark:border-tbc-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-tbc-orange hover:text-tbc-orange transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Player Spotlights</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {members.filter((m) => m.isFeatured).length} featured
                </p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tbc-orange text-white font-semibold text-sm hover:bg-tbc-orange-dark shadow-orange transition-all">
              <Plus className="w-4 h-4" />
              Add Member
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-3">
          {members.map((player) => (
            <div
              key={player.id}
              className={cn(
                "flex items-center gap-4 p-4 bg-white dark:bg-tbc-gray-800 rounded-2xl border transition-all",
                player.isFeatured
                  ? "border-tbc-orange/40 bg-tbc-orange/5 dark:border-tbc-orange/30 dark:bg-tbc-orange/5"
                  : "border-gray-100 dark:border-tbc-gray-700"
              )}
            >
              <img
                src={player.avatarUrl}
                alt={player.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                    {player.name}
                  </h3>
                  {player.isFeatured && (
                    <span className="px-2 py-0.5 rounded-full bg-tbc-orange text-white text-xs font-bold">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{player.role}</p>
              </div>
              <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold hidden sm:block", getSkillLevelColor(player.skillLevel))}>
                {player.skillLevel}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFeatured(player.id)}
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                    player.isFeatured
                      ? "bg-tbc-orange/10 text-tbc-orange border border-tbc-orange/30"
                      : "border border-gray-200 dark:border-tbc-gray-700 text-gray-400 hover:border-tbc-orange hover:text-tbc-orange"
                  )}
                  title={player.isFeatured ? "Remove from spotlight" : "Add to spotlight"}
                >
                  {player.isFeatured ? (
                    <Star className="w-4 h-4 fill-tbc-orange" />
                  ) : (
                    <StarOff className="w-4 h-4" />
                  )}
                </button>
                <button className="w-8 h-8 rounded-lg border border-gray-200 dark:border-tbc-gray-700 flex items-center justify-center text-gray-400 hover:border-tbc-orange hover:text-tbc-orange transition-all">
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
