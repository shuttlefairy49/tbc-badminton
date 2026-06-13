"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Trash2, Heart } from "lucide-react";
import { gallery } from "@/lib/data";
import type { GalleryItem } from "@/lib/types";

export default function AdminGalleryPage() {
  const [photos, setPhotos] = useState<GalleryItem[]>(gallery);

  const handleDelete = (id: string) => {
    if (confirm("Remove this photo?")) {
      setPhotos((prev) => prev.filter((p) => p.id !== id));
    }
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
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Gallery Management</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{photos.length} photos</p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tbc-orange text-white font-semibold text-sm hover:bg-tbc-orange-dark shadow-orange transition-all">
              <Upload className="w-4 h-4" />
              Upload Photos
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload area */}
        <div className="border-2 border-dashed border-gray-300 dark:border-tbc-gray-600 rounded-2xl p-8 text-center mb-8 hover:border-tbc-orange dark:hover:border-tbc-orange transition-colors cursor-pointer">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="font-medium text-gray-700 dark:text-gray-300">Click or drag photos here to upload</p>
          <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 10MB each</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative rounded-xl overflow-hidden aspect-square bg-gray-200 dark:bg-tbc-gray-700">
              <img src={photo.thumbnailUrl} alt={photo.caption} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-200 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 gap-2 p-3">
                <p className="text-white text-xs text-center leading-snug">{photo.caption}</p>
                <div className="flex items-center gap-1 text-white/70 text-xs">
                  <Heart className="w-3 h-3 fill-white" /> {photo.likes}
                </div>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="mt-1 px-3 py-1 rounded-lg bg-red-500 text-white text-xs font-semibold flex items-center gap-1 hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-3 h-3" /> Remove
                </button>
              </div>
              <div className="absolute top-2 left-2">
                <span className="px-2 py-0.5 bg-black/60 text-white text-xs rounded-full">{photo.album}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
