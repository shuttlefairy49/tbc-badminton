"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Tag } from "lucide-react";
import { cn, formatShortDate, getSlotsLeft, getSlotPercentage, getSkillLevelColor } from "@/lib/utils";
import type { GameEvent } from "@/lib/types";

interface EventCardProps {
  event: GameEvent;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const slotsLeft = getSlotsLeft(event.totalSlots, event.bookedSlots);
  const fillPercent = getSlotPercentage(event.totalSlots, event.bookedSlots);
  const isFull = event.status === "full" || slotsLeft === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white dark:bg-tbc-gray-800 rounded-2xl shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      {event.imageUrl && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 left-3">
            <span
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-semibold",
                getSkillLevelColor(event.skillLevel)
              )}
            >
              {event.skillLevel}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-bold",
                isFull
                  ? "bg-red-500 text-white"
                  : slotsLeft <= 5
                  ? "bg-yellow-500 text-white"
                  : "bg-tbc-orange text-white"
              )}
            >
              {isFull
                ? "FULL"
                : slotsLeft <= 5
                ? `${slotsLeft} left!`
                : event.price}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 leading-snug">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 text-tbc-orange flex-shrink-0" />
            <span>{formatShortDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4 text-tbc-orange flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 text-tbc-orange flex-shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Tag className="w-4 h-4 text-tbc-orange flex-shrink-0" />
            <span>{event.price}</span>
          </div>
        </div>

        {/* Slots */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Users className="w-3 h-3" />
              {event.bookedSlots}/{event.totalSlots} registered
            </span>
            <span
              className={cn(
                "font-semibold",
                isFull
                  ? "text-red-500"
                  : slotsLeft <= 5
                  ? "text-yellow-500"
                  : "text-green-600"
              )}
            >
              {isFull ? "No slots" : `${slotsLeft} slots left`}
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 dark:bg-tbc-gray-700 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                fillPercent >= 100
                  ? "bg-red-500"
                  : fillPercent >= 80
                  ? "bg-yellow-500"
                  : "bg-tbc-orange"
              )}
              style={{ width: `${Math.min(fillPercent, 100)}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        <button
          disabled={isFull}
          className={cn(
            "w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
            isFull
              ? "bg-gray-100 dark:bg-tbc-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
              : "bg-tbc-orange text-white hover:bg-tbc-orange-dark hover:shadow-orange active:scale-[0.98]"
          )}
        >
          {isFull ? "Session Full" : "Register Now"}
        </button>
      </div>
    </motion.div>
  );
}
