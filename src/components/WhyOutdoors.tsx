const reasons = [
  {
    icon: '🤲',
    title: 'Hands-On Learning',
    desc: 'Children learn best when they touch, observe, and discover. Outdoor experiences make knowledge stick.',
  },
  {
    icon: '🦋',
    title: 'Biodiversity Discovery',
    desc: 'Every forest trail reveals hundreds of species. Students learn to see the diversity that surrounds them.',
  },
  {
    icon: '🌱',
    title: 'Ecology Awareness',
    desc: 'Understanding ecosystems builds a lifelong respect for nature and environmental responsibility.',
  },
  {
    icon: '🌾',
    title: 'Traditional Knowledge',
    desc: "Local communities hold centuries of ecological wisdom. Learning from them enriches every child's education.",
  },
]

export default function WhyOutdoors() {
  return (
    <section className="bg-parchment-alt py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-forest text-center mb-3">
          Why Learn Outdoors?
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Nature is the best classroom. Here's why outdoor learning matters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-parchment border border-border rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="font-serif text-lg text-forest mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
