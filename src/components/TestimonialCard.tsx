type TestimonialCardProps = {
  quote: string
  name: string
  role: string
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="bg-parchment border border-border rounded-lg p-6">
      <p className="text-gray-700 text-base leading-relaxed italic mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold text-forest text-sm">{name}</p>
        <p className="text-earth text-xs mt-0.5">{role}</p>
      </div>
    </div>
  )
}
