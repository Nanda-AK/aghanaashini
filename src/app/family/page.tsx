import type { Metadata } from 'next'
import FamilyCard from '@/components/FamilyCard'
import ContactCTA from '@/components/ContactCTA'
import { familyExperiences } from '@/data/familyExperiences'

export const metadata: Metadata = {
  title: 'Family Experiences — Nature Walks & Bird Watching Karnataka | Aghanaashini',
  description:
    'Guided nature walks, bird watching, forest fruit trails and nocturnal wildlife night trails for families in Karnataka with naturalist Omkar.',
}

export default function FamilyPage() {
  return (
    <>
      <section className="bg-forest py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-amber-100 mb-3">Family Experiences</h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto">
          Meaningful outdoor experiences for families who want to slow down, explore, and connect
          with the natural world together.
        </p>
      </section>

      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyExperiences.map((exp) => (
              <FamilyCard
                key={exp.id}
                image={exp.image}
                title={exp.title}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
