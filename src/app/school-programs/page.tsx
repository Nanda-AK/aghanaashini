import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'
import { schoolPrograms } from '@/data/programs'

export const metadata: Metadata = {
  title: 'School Programs — Nature Education Tours Karnataka | Aghanaashini',
  description:
    'One-day school nature tours and 7-day immersion programs for students in Karnataka. Biodiversity education, ecology, bird walks, and more.',
}

export default function SchoolProgramsPage() {
  return (
    <>
      <section className="bg-forest py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-amber-100 mb-3">School Programs</h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto">
          Curriculum-enriching field experiences for Grades 4–12. Designed to inspire curiosity,
          build ecological literacy, and create memories that last a lifetime.
        </p>
      </section>

      {schoolPrograms.map((program, i) => (
        <section
          key={program.id}
          className={`py-16 px-4 ${i % 2 === 0 ? 'bg-offwhite' : 'bg-parchment-alt'}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="relative w-full md:w-80 h-64 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-earth">
                  {program.duration}
                </span>
                <h2 className="font-serif text-3xl text-forest mt-1 mb-2">{program.title}</h2>
                <p className="text-gray-600 mb-4">{program.subtitle}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-earth mb-2">Ideal For</p>
                  <ul className="flex flex-wrap gap-2">
                    {program.idealFor.map((item) => (
                      <li
                        key={item}
                        className="bg-parchment border border-border text-earth text-xs px-3 py-1 rounded-full"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {program.activities.map((group) => (
                  <div key={group.group} className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                      {group.group}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-leaf mt-0.5">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Link
                  href="/contact"
                  className="inline-block mt-4 bg-forest text-white px-6 py-3 rounded font-semibold hover:bg-forest-dark transition-colors"
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </>
  )
}
