import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-forest text-green-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-serif text-xl text-amber-100 mb-2">Aghanaashini</p>
          <p className="text-sm text-green-300 leading-relaxed">
            Immersive nature education programs for schools and families in Karnataka.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Pages</p>
          <ul className="space-y-2 text-sm">
            {[
              ['/', 'Home'],
              ['/about', 'About Omkar'],
              ['/school-programs', 'School Programs'],
              ['/family', 'Family Experiences'],
              ['/gallery', 'Gallery'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Get in Touch</p>
          <div className="space-y-3 text-sm">
            <a
              href="tel:+917676254545"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>📞</span> +91 76762 54545
            </a>
            <a
              href="https://wa.me/917676254545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>💬</span> WhatsApp Omkar
            </a>
            <p className="text-green-400">Karnataka, India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-green-800 text-center py-4 text-xs text-green-500">
        © {new Date().getFullYear()} Aghanaashini. All rights reserved.
      </div>
    </footer>
  )
}
