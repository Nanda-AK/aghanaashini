import type { Metadata } from 'next'
import Image from 'next/image'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'About Omkar — Naturalist & Environmental Educator | Aghanaashini',
  description:
    'Learn about Omkar, a naturalist and environmental educator facilitating immersive nature experiences for schools and families in Karnataka.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-amber-100 mb-3">About Omkar</h1>
        <p className="text-green-200 text-lg max-w-xl mx-auto">
          Naturalist · Environmental Educator · Nature Experience Facilitator
        </p>
      </section>

      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="relative w-full md:w-80 h-96 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/family/guided-nature-walks/WhatsApp Image 2026-05-20 at 19.01.07.jpeg"
              alt="Omkar in the field"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-earth mb-2">His Story</p>
            <h2 className="font-serif text-3xl text-forest mb-4">A Life Spent in Nature</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Omkar has spent years learning from Karnataka&apos;s forests, rivers, and coastlines. As a
              naturalist, he has developed a deep understanding of the biodiversity that defines the
              Western Ghats and the communities that have coexisted with it for generations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              His journey from curious observer to environmental educator has been shaped by
              countless hours in the field — tracking animals at night, identifying birds at dawn,
              foraging for wild foods, and listening to the ecological knowledge of local farmers and
              forest communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Omkar channels that experience into programs that bring children and families
              into direct contact with the natural world — creating the kind of lasting connections
              that no classroom can replicate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-parchment-alt">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-earth mb-2 text-center">Expertise</p>
          <h2 className="font-serif text-3xl text-forest text-center mb-10">Experience as a Naturalist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🦅', title: 'Birdwatching', desc: 'Expert in the birds of Karnataka and the Western Ghats, with skills in identification by sight and call.' },
              { icon: '🌿', title: 'Biodiversity Education', desc: 'Deep knowledge of local flora and fauna, with the ability to make ecology accessible to learners of all ages.' },
              { icon: '🌙', title: 'Nocturnal Wildlife', desc: 'Experienced in leading safe and engaging night trails to encounter owls, frogs, insects, and other nocturnal life.' },
              { icon: '🌾', title: 'Traditional Knowledge', desc: 'Connections with local farming and forest communities whose ecological wisdom enriches every program.' },
              { icon: '📷', title: 'Camera Trapping', desc: 'Uses camera traps to document wildlife, bringing participants closer to animals that are rarely seen.' },
              { icon: '🧭', title: 'Forest Navigation', desc: 'Skilled in reading signs and tracks, leading treks safely through forest landscapes including Yana and coastal circuits.' },
            ].map((item) => (
              <div key={item.title} className="bg-parchment border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-lg text-forest mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-earth mb-2">Philosophy</p>
          <h2 className="font-serif text-3xl text-forest mb-6">Learning Through Being Present</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Omkar believes that education happens most powerfully when learners are fully present in
            their environment. In a forest, that means slowing down — noticing the texture of bark,
            the call of a bird, the way light filters through a canopy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            His programs are designed not to deliver information but to cultivate attention. A child
            who has spent a day in a forest learning to observe will carry that skill for life —
            applied to science, to relationships, to everything.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nature journaling, hands-on craft, community immersion — each activity is chosen to
            deepen presence and expand the learner&apos;s sense of connection to the living world.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-forest text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-leaf mb-2">Mission</p>
          <h2 className="font-serif text-3xl text-amber-100 mb-6">Conservation Through Connection</h2>
          <p className="text-green-200 leading-relaxed mb-4">
            People protect what they love, and they love what they know. Omkar&apos;s work is ultimately
            about creating that knowledge — a generation of children and adults who have felt the
            forest underfoot, heard the dawn chorus, and understood their place in the web of life.
          </p>
          <p className="text-green-200 leading-relaxed">
            Every program is a small act of conservation — not through rules and restrictions, but
            through wonder and belonging.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
