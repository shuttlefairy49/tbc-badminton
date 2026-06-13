"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Calendar,
  Camera,
  Users,
  Megaphone,
  TrendingUp,
  Plus,
  Settings,
  Eye,
  Edit3,
  Activity,
} from "lucide-react";
import { games, gallery, players, announcements } from "@/lib/data";

const stats = [
  { label: "Upcoming Sessions", value: games.filter((g) => g.status === "upcoming").length, icon: Calendar, trend: "+2 this week" },
  { label: "Total Members", value: 248, icon: Users, trend: "+12 this month" },
  { label: "Gallery Photos", value: gallery.length, icon: Camera, trend: "3 new" },
  { label: "Active Announcements", value: announcements.filter((a) => a.isPinned).length, icon: Megaphone, trend: "1 pinned" },
];

const adminSections = [
  {
    title: "Events & Games",
    href: "/admin/events",
    icon: Calendar,
    description: "Add, edit, or remove upcoming sessions and tournaments",
    color: "bg-blue-500",
  },
  {
    title: "Gallery",
    href: "/admin/gallery",
    icon: Camera,
    description: "Upload photos, manage albums, and set featured images",
    color: "bg-purple-500",
  },
  {
    title: "Player Spotlights",
    href: "/admin/spotlights",
    icon: Users,
    description: "Feature members, update bios, and manage spotlight stories",
    color: "bg-green-500",
  },
  {
    title: "Announcements",
    href: "#",
    icon: Megaphone,
    description: "Post and pin homepage announcements for the community",
    color: "bg-tbc-orange",
  },
];

const recentActivity = [
  { action: "New session added", subject: "Sunday Smash Session", time: "2 hours ago", icon: Plus },
  { action: "Member spotlight updated", subject: "Diana Santos", time: "1 day ago", icon: Edit3 },
  { action: "Gallery photo uploaded", subject: "Anniversary Cup 2025", time: "2 days ago", icon: Camera },
  { action: "Announcement pinned", subject: "July Open Rally", time: "3 days ago", icon: Megaphone },
  { action: "Session marked full", subject: "Advanced Competitive Play", time: "4 days ago", icon: Activity },
];

export default function AdminPage() {
  return (
    <div className="pt-16 min-h-screen bg-tbc-cream dark:bg-tbc-black">
      {/* Header */}
      <div className="bg-white dark:bg-tbc-gray-900 border-b border-gray-200 dark:border-tbc-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-tbc-orange flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  TBC Admin Dashboard
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your club content
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-tbc-gray-700 text-gray-600 dark:text-gray-400 text-sm font-medium hover:border-tbc-orange hover:text-tbc-orange dark:hover:border-tbc-orange dark:hover:text-tbc-orange transition-all"
              >
                <Eye className="w-4 h-4" />
                View Site
              </Link>
              <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-tbc-gray-800 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, trend }) => (
            <div
              key={label}
              className="bg-white dark:bg-tbc-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-tbc-gray-700 shadow-card"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-tbc-orange/10 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 w-[18px] h-[18px] text-tbc-orange" />
                </div>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                  {trend}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-0.5">
                {value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Admin sections */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Manage Content
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {adminSections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-white dark:bg-tbc-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-tbc-gray-700 shadow-card hover:border-tbc-orange/40 dark:hover:border-tbc-orange/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${section.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {section.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="bg-white dark:bg-tbc-gray-800 rounded-2xl border border-gray-100 dark:border-tbc-gray-700 shadow-card divide-y divide-gray-100 dark:divide-tbc-gray-700">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <div className="w-8 h-8 rounded-lg bg-tbc-orange/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-tbc-orange" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.action}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      {item.subject}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-8 p-5 bg-tbc-orange/10 dark:bg-tbc-orange/5 border border-tbc-orange/20 dark:border-tbc-orange/10 rounded-2xl">
          <p className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-tbc-orange" />
            Quick Actions
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Add New Session", href: "/admin/events" },
              { label: "Upload Photo", href: "/admin/gallery" },
              { label: "Update Spotlight", href: "/admin/spotlights" },
              { label: "Pin Announcement", href: "#" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white dark:bg-tbc-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-tbc-gray-700 hover:border-tbc-orange hover:text-tbc-orange dark:hover:border-tbc-orange dark:hover:text-tbc-orange transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
