"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Grid, Filter } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import SectionHeader from "@/components/SectionHeader";
import { gallery } from "@/lib/data";
import { cn } from "@/lib/utils";

const albums = ["All", ...Array.from(new Set(gallery.map((g) => g.album)))];

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeAlbum === "All"
      ? gallery
      : gallery.filter((g) => g.album === activeAlbum);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1600&auto=format&fit=crop"
            alt="Gallery"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4" /> Our Moments
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Community <span className="text-tbc-orange">Gallery</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Every session captured. Every victory saved. Every memory preserved.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white dark:bg-tbc-gray-900 border-b border-gray-100 dark:border-tbc-gray-800 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
            {albums.map((album) => (
              <button
                key={album}
                onClick={() => setActiveAlbum(album)}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  activeAlbum === album
                    ? "bg-tbc-orange text-white shadow-orange"
                    : "border border-gray-200 dark:border-tbc-gray-700 text-gray-600 dark:text-gray-400 hover:border-tbc-orange hover:text-tbc-orange dark:hover:border-tbc-orange dark:hover:text-tbc-orange"
                )}
              >
                {album}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Grid className="w-4 h-4" />
              {filtered.length} photos
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-200 dark:bg-tbc-gray-800",
                  i % 7 === 0 || i % 7 === 3 ? "row-span-2" : ""
                )}
                onClick={() => {
                  const globalIndex = gallery.indexOf(item);
                  setLightboxIndex(globalIndex);
                }}
                style={{
                  aspectRatio: i % 7 === 0 || i % 7 === 3 ? "1 / 2" : "1 / 1",
                }}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white text-xs text-center px-3 leading-snug font-medium">
                    {item.caption}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-white/80 text-xs">
                    <Heart className="w-3 h-3 fill-white" />
                    {item.likes}
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-0.5 bg-tbc-orange text-white text-xs rounded-full font-medium">
                    {item.album}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={gallery}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
