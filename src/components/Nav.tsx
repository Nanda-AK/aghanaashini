'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/school-programs', label: 'School Programs' },
  { href: '/family', label: 'Family' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-forest shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-amber-100 tracking-wide hover:text-white transition-colors"
        >
          Aghanaashini
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm transition-colors ${
                  pathname === l.href
                    ? 'text-white font-semibold'
                    : 'text-green-200 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/917676254545"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-leaf text-white text-sm px-4 py-2 rounded hover:bg-green-500 transition-colors"
            >
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-forest-dark px-4 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-green-200 text-base hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/917676254545"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-leaf text-white px-4 py-2 rounded text-sm hover:bg-green-500 transition-colors"
              >
                WhatsApp Omkar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
