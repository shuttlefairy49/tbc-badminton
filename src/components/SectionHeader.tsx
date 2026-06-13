"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(centered && "text-center", "mb-12", className)}
    >
      {eyebrow && (
        <span className="inline-block text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold tracking-tight",
          light
            ? "text-white"
            : "text-gray-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
