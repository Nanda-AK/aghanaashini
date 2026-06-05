import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aghanaashini — Nature Education Programs Karnataka',
    template: '%s | Aghanaashini',
  },
  description:
    'Immersive biodiversity programs, nature trails, bird walks and ecological learning experiences for schools and families in Karnataka by naturalist Omkar.',
  keywords: [
    'Naturalist Karnataka',
    'Nature Education Programs',
    'School Nature Camp',
    'Biodiversity Education',
    'Environmental Education',
    'Bird Watching Tours Karnataka',
    'Nature Trails Karnataka',
  ],
  openGraph: {
    siteName: 'Aghanaashini',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-offwhite text-gray-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
