import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-PH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getSlotsLeft(total: number, booked: number): number {
  return total - booked;
}

export function getSlotPercentage(total: number, booked: number): number {
  return Math.round((booked / total) * 100);
}

export function getSkillLevelColor(level: string): string {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "Intermediate":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "Advanced":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-tbc-orange/10 text-tbc-orange";
  }
}
