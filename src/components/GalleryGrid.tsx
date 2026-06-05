'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { galleryPhotos, galleryCategories, type GalleryPhoto } from '@/data/gallery'

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  const filtered =
    activeCategory === 'all'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory)

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-forest text-white'
                : 'bg-parchment border border-border text-earth hover:bg-parchment-alt'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((photo) => (
          <div
            key={photo.src}
            className="relative break-inside-avoid overflow-hidden rounded cursor-pointer group"
            onClick={() => setLightbox(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl leading-none"
            onClick={(e) => { e.stopPropagation(); setLightbox(null) }}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-6 text-white text-sm opacity-75">{lightbox.alt}</p>
        </div>
      )}
    </>
  )
}
