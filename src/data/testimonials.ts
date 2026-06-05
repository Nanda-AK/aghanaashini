export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The one-day nature tour was the best field experience our school has ever organised. The students were engaged, curious, and talking about it for weeks afterwards.',
    name: 'Priya Nair',
    role: 'Science Teacher, DPS Bangalore',
  },
  {
    quote:
      'My children had never noticed a bird before this walk. By the end they were pointing out hornbills and arguing about which call belonged to which species. Omkar has a gift.',
    name: 'Anand Krishnamurthy',
    role: 'Parent',
  },
  {
    quote:
      'The 7-day immersion was transformative for our nature club. From camera trapping to handmade paper — every day was packed with discovery.',
    name: 'Suresh Hegde',
    role: 'Activity Coordinator, Kodagu Residential School',
  },
]
