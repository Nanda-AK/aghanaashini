import type { Metadata } from 'next'
import Image from '@/components/AppImage'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProgramCard from '@/components/ProgramCard'
import TestimonialCard from '@/components/TestimonialCard'
import WhyOutdoors from '@/components/WhyOutdoors'
import ContactCTA from '@/components/ContactCTA'
import { testimonials } from '@/data/testimonials'
import { galleryPhotos } from '@/data/gallery'

export const metadata: Metadata = {
  title: 'Aghanaashini — Nature Education Programs Karnataka | Omkar',
  description:
    'Immersive biodiversity programs, nature trails, bird walks and ecological learning experiences for schools and families in Karnataka by naturalist Omkar.',
}

export default function HomePage() {
  const previewPhotos = galleryPhotos.slice(0, 6)

  return (
    <>
      <Hero
        image="/images/school/whatsapp-image-2026-05-20-at-19.16.25.jpeg"
        headline="Learning Nature Through Experience"
        subheading="Immersive biodiversity programs, nature trails, bird walks and ecological learning experiences for schools and families."
        primaryCTA={{ label: 'Book a Program', href: '/contact' }}
        secondaryCTA={{ label: 'Contact Omkar', href: 'https://wa.me/917676254545' }}
      />

      {/* About Omkar teaser */}
      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="relative w-full md:w-72 h-72 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/family/guided-nature-walks/img20260502095810.jpg"
              alt="Omkar, Naturalist"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-earth mb-2">
              About Omkar
            </p>
            <h2 className="font-serif text-3xl text-forest mb-4">
              Naturalist. Educator. Experience Facilitator.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Omkar is a naturalist and environmental educator who helps children, families, and
              communities reconnect with nature through immersive outdoor experiences. His programs
              combine biodiversity education, ecology awareness, birdwatching, and traditional
              ecological knowledge into transformative learning journeys.
            </p>
            <Link
              href="/about"
              className="text-forest font-semibold text-sm border-b-2 border-leaf hover:text-leaf transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-4 bg-parchment-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-forest text-center mb-3">
            Programs
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            Designed for schools, nature clubs, and families who want to learn from the land.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgramCard
              icon="🏫"
              title="One-Day Education Tour"
              description="A full day of nature trails, biodiversity sessions, and journaling for school groups. Ideal for Grades 4–12."
              duration="1 Day"
              href="/school-programs"
              ctaLabel="View Program"
            />
            <ProgramCard
              icon="🌿"
              title="7-Day Nature Immersion"
              description="A residential deep-dive into ecology, traditional crafts, bird walks, night trails, and rural living."
              duration="7 Days"
              href="/school-programs"
              ctaLabel="View Program"
            />
            <ProgramCard
              icon="👨‍👩‍👧"
              title="Family Experiences"
              description="Guided nature walks, bird watching, forest fruit trails, and nocturnal wildlife night trails for families."
              duration="Half / Full Day"
              href="/family"
              ctaLabel="View Experiences"
            />
          </div>
        </div>
      </section>

      <WhyOutdoors />

      {/* Gallery preview */}
      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-forest text-center mb-3">
            From the Field
          </h2>
          <p className="text-center text-gray-500 mb-10">
            A glimpse of life on our programs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {previewPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-square rounded overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="border-2 border-forest text-forest px-6 py-2 rounded text-sm font-semibold hover:bg-forest hover:text-white transition-colors"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-parchment-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-forest text-center mb-10">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
