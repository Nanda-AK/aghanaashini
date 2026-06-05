import Image from '@/components/AppImage'
import Link from 'next/link'

type ProgramCardProps = {
  icon?: string
  image?: string
  title: string
  description: string
  duration?: string
  href: string
  ctaLabel?: string
}

export default function ProgramCard({
  icon,
  image,
  title,
  description,
  duration,
  href,
  ctaLabel = 'Learn More',
}: ProgramCardProps) {
  return (
    <div className="bg-parchment border border-border rounded-lg overflow-hidden flex flex-col">
      {image && (
        <div className="relative h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {icon && <div className="text-3xl mb-3">{icon}</div>}
        <h3 className="font-serif text-xl text-forest mb-2">{title}</h3>
        {duration && (
          <span className="text-xs font-semibold uppercase tracking-wider text-earth mb-3">
            {duration}
          </span>
        )}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{description}</p>
        <Link
          href={href}
          className="self-start bg-forest text-white text-sm px-5 py-2 rounded hover:bg-forest-dark transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  )
}
