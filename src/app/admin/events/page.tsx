"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit3, Trash2, Calendar, MapPin, Users, Clock } from "lucide-react";
import { games } from "@/lib/data";
import { formatShortDate, getSlotsLeft } from "@/lib/utils";
import type { GameEvent } from "@/lib/types";

export default function AdminEventsPage() {
  const [events, setEvents] = useState<GameEvent[]>(games);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm("Remove this session?")) {
      setEvents((prev) => prev.filter((e) => e.id !== id));
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-tbc-cream dark:bg-tbc-black">
      {/* Header */}
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
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Events & Games
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {events.length} sessions total
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tbc-orange text-white font-semibold text-sm hover:bg-tbc-orange-dark shadow-orange transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Session
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add form placeholder */}
        {showForm && (
          <div className="bg-white dark:bg-tbc-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-tbc-gray-700 shadow-card mb-6">
            <h2 className="font-bold text-gray-900 dark:text-white mb-4">New Session</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Title", "Date", "Time", "Venue", "Skill Level", "Price"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {field}
                  </label>
                  <input
                    type={field === "Date" ? "date" : "text"}
                    placeholder={field}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-tbc-gray-700 bg-tbc-cream dark:bg-tbc-gray-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tbc-orange/50 focus:border-tbc-orange transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Session description..."
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-tbc-gray-700 bg-tbc-cream dark:bg-tbc-gray-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tbc-orange/50 focus:border-tbc-orange transition-all resize-none"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button className="px-5 py-2.5 rounded-lg bg-tbc-orange text-white font-semibold text-sm hover:bg-tbc-orange-dark transition-colors">
                Save Session
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-lg border border-gray-200 dark:border-tbc-gray-700 text-gray-600 dark:text-gray-400 font-medium text-sm hover:border-red-400 hover:text-red-500 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Events list */}
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-tbc-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-tbc-gray-700 shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full sm:w-24 h-20 sm:h-16 rounded-xl object-cover flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      event.status === "full"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-tbc-orange" />
                    {formatShortDate(event.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-tbc-orange" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-tbc-orange" />
                    {event.venue}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-tbc-orange" />
                    {event.bookedSlots}/{event.totalSlots} · {getSlotsLeft(event.totalSlots, event.bookedSlots)} left
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="w-8 h-8 rounded-lg border border-gray-200 dark:border-tbc-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-tbc-orange hover:text-tbc-orange transition-all">
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="w-8 h-8 rounded-lg border border-gray-200 dark:border-tbc-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-red-400 hover:text-red-500 transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
