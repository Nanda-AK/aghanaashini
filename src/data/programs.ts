export type Activity = {
  group: string
  items: string[]
}

export type Program = {
  id: string
  title: string
  subtitle: string
  duration: string
  idealFor: string[]
  activities: Activity[]
  image: string
}

export const schoolPrograms: Program[] = [
  {
    id: 'one-day',
    title: 'One-Day Education Tour',
    subtitle: 'A full day of hands-on nature discovery',
    duration: '1 Day',
    idealFor: ['Grades 4–12', 'School field visits', 'Environmental awareness programs'],
    activities: [
      {
        group: 'Activities',
        items: [
          'Introductory session on biodiversity',
          'Nature Trail',
          'Nature Games',
          'Nature Journaling',
          'Documentary Session',
        ],
      },
    ],
    image: '/images/school/WhatsApp Image 2026-05-20 at 19.16.02.jpeg',
  },
  {
    id: 'seven-day',
    title: 'Nature Immersion: 7-Day Study Tour',
    subtitle: 'A residential deep-dive into ecology and traditional knowledge',
    duration: '7 Days',
    idealFor: ['Residential school groups', 'Nature clubs', 'Environmental studies programs'],
    activities: [
      {
        group: 'Ecology & Biodiversity',
        items: [
          'Introductory session on biodiversity and ecology',
          'Bird walks',
          'Night trails',
          'Signs and tracks session',
          'Camera trapping session',
        ],
      },
      {
        group: 'Field Experiences',
        items: ['Yana Trek', 'Beach circuits', 'Local farm visits'],
      },
      {
        group: 'Traditional Knowledge & Nature Crafts',
        items: ['Earth pigments introduction', 'Handmade paper making', 'Paper mache workshops'],
      },
      {
        group: 'Hands-On Rural Learning',
        items: ['Apiculture', 'Animal husbandry', 'Organic farming'],
      },
      {
        group: 'Nature Connection',
        items: [
          'Forest food foraging',
          'Nature journaling',
          'Nature games',
          'Documentary sessions',
        ],
      },
    ],
    image: '/images/school/WhatsApp Image 2026-05-20 at 19.16.25.jpeg',
  },
]
