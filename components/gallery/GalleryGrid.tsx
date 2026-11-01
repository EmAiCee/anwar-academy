"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import {
  categories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery-data";

function Tile({
  item,
  onOpen,
  index,
}: {
  item: GalleryItem;
  onOpen: (i: number) => void;
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  const Icon = item.icon;

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      onClick={() => onOpen(index)}
      aria-label={`Open ${item.title}`}
      style={{ display: "block", width: "100%" }}
      className={`group relative w-full aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${
        item.gradient
      } text-white text-left focus:outline-none focus:ring-4 focus:ring-brand-red/40`}
    >
      {!failed ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={index < 4}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <Icon
            size={54}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:scale-110 transition-transform duration-500"
          />
          <FiImage
            size={18}
            className="absolute top-3 right-3 opacity-40"
            aria-hidden
          />
        </>
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <p className="text-sm md:text-base font-semibold">{item.title}</p>
        <p className="text-xs text-white/70 capitalize">{item.category}</p>
      </div>
    </motion.button>
  );
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lbFailed, setLbFailed] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((i) => i.category === filter),
    [filter]
  );

  const close = useCallback(() => {
    setLightboxIndex(null);
    setLbFailed(false);
  }, []);

  const next = useCallback(() => {
    setLbFailed(false);
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % filtered.length
    );
  }, [filtered.length]);

  const prev = useCallback(() => {
    setLbFailed(false);
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, next, prev]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;
  const CurrentIcon = current?.icon;

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const active = filter === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setFilter(cat.key);
                setLightboxIndex(null);
                setLbFailed(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                active
                  ? "bg-brand-red text-white shadow-md shadow-brand-red/30"
                  : "bg-white text-brand-charcoal border border-gray-200 hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Uniform grid — every tile is a square */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filtered.map((item, i) => (
            <Tile key={item.id} item={item} index={i} onOpen={setLightboxIndex} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-16">
          No photos in this category yet.
        </p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title} preview`}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition z-10"
            >
              <FiX size={26} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 md:left-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition z-10"
            >
              <FiChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 md:right-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition z-10"
            >
              <FiChevronRight size={28} />
            </button>

            <motion.div
              key={current.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden bg-gradient-to-br ${current.gradient} aspect-video flex items-center justify-center`}
            >
              {!lbFailed ? (
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-contain"
                  onError={() => setLbFailed(true)}
                />
              ) : (
                CurrentIcon && (
                  <CurrentIcon size={96} className="text-white/30" />
                )
              )}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none">
                <p className="text-white text-xl font-semibold">
                  {current.title}
                </p>
                <p className="text-white/70 text-sm capitalize">
                  {current.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}