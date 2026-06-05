import Image from 'next/image'
import Link from 'next/link'

type HeroProps = {
  image: string
  headline: string
  subheading: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
}

export default function Hero({ image, headline, subheading, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src={image}
        alt="Nature landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4">
          {headline}
        </h1>
        <p className="text-green-100 text-lg md:text-xl mb-8 leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="bg-leaf text-white px-8 py-3 rounded text-base font-semibold hover:bg-green-500 transition-colors"
          >
            {primaryCTA.label}
          </Link>
          <a
            href={secondaryCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded text-base font-semibold hover:bg-white hover:text-forest transition-colors"
          >
            {secondaryCTA.label}
          </a>
        </div>
      </div>
    </section>
  )
}
