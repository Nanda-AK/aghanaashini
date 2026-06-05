import Image from '@/components/AppImage'

type FamilyCardProps = {
  image: string
  title: string
  description: string
}

export default function FamilyCard({ image, title, description }: FamilyCardProps) {
  return (
    <div className="bg-parchment border border-border rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-forest mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{description}</p>
        <a
          href="https://wa.me/917676254545"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start bg-leaf text-white text-sm px-5 py-2 rounded hover:bg-green-500 transition-colors"
        >
          💬 WhatsApp Omkar
        </a>
      </div>
    </div>
  )
}
