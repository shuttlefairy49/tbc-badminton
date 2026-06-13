"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import type { GalleryItem } from "@/lib/types";

interface LightboxProps {
  items: GalleryItem[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ items, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % items.length);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [items.length, onClose]);

  const item = items[current];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Nav */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((c) => (c - 1 + items.length) % items.length);
        }}
        className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((c) => (c + 1) % items.length);
        }}
        className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image */}
      <div className="max-w-5xl max-h-[80vh] w-full px-16" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.url}
          alt={item.caption}
          className="w-full h-full object-contain max-h-[70vh] rounded-xl"
        />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-white font-medium">{item.caption}</p>
            <p className="text-gray-400 text-sm mt-1">
              {item.album} · {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{item.likes}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm text-center mt-4">
          {current + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}
