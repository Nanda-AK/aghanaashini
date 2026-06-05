export default function ContactCTA() {
  return (
    <section className="bg-forest py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-amber-100 mb-3">
          Nature is the Classroom
        </h2>
        <p className="text-green-200 text-base md:text-lg leading-relaxed mb-8">
          Experiential learning programs that help children and families discover biodiversity,
          ecology and the wonders of the natural world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+917676254545"
            className="bg-white text-forest font-semibold px-8 py-3 rounded hover:bg-green-50 transition-colors"
          >
            📞 Call Omkar
          </a>
          <a
            href="https://wa.me/917676254545"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-leaf text-white font-semibold px-8 py-3 rounded hover:bg-green-500 transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
