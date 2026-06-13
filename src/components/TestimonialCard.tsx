"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-tbc-gray-800 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <Quote className="w-8 h-8 text-tbc-orange opacity-60" />
        <div className="flex items-center gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-tbc-orange fill-tbc-orange" />
          ))}
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm flex-1 italic mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
