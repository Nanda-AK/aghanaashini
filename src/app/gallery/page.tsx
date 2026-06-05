import type { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Gallery — Nature Programs Photos | Aghanaashini',
  description:
    'Photos from school programs, bird walks, forest trails, family experiences and night trails by naturalist Omkar in Karnataka.',
}

export default function GalleryPage() {
  return (
    <>
      <section className="bg-forest py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-amber-100 mb-3">Gallery</h1>
        <p className="text-green-200 text-lg max-w-xl mx-auto">
          A window into life on our programs — school groups, forest trails, bird walks, and family adventures.
        </p>
      </section>

      <section className="py-12 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid />
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
