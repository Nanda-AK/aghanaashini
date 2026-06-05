import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Omkar — Book a Nature Program | Aghanaashini',
  description:
    'Get in touch with Omkar to book a school nature tour or family experience in Karnataka. Call or WhatsApp +91 76762 54545.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-amber-100 mb-3">Get in Touch</h1>
        <p className="text-green-200 text-lg max-w-xl mx-auto">
          Omkar responds personally to every enquiry. Reach out to discuss programs for your school or family.
        </p>
      </section>

      <section className="py-20 px-4 bg-offwhite">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-parchment border border-border rounded-2xl p-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-earth mb-6">
              Reach Omkar Directly
            </p>

            <p className="font-serif text-4xl text-forest mb-2">+91 76762 54545</p>
            <p className="text-gray-500 text-sm mb-8">Karnataka, India</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917676254545"
                className="bg-forest text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-forest-dark transition-colors flex items-center justify-center gap-2"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/917676254545"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-leaf text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
              >
                💬 WhatsApp
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-8 leading-relaxed">
              Whether you&apos;re a school coordinator planning a field trip, or a family looking for a
              weekend nature walk — Omkar will help you find the right experience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
