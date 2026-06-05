export type GalleryPhoto = {
  src: string
  alt: string
  category: 'school' | 'bird-walks' | 'forest-trails' | 'family' | 'night-trails'
}

export const galleryPhotos: GalleryPhoto[] = [
  // School Program
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.02.jpeg', alt: 'Students during nature program', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.06.jpeg', alt: 'Nature journaling session', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.07.jpeg', alt: 'Biodiversity walk with students', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.17.jpeg', alt: 'Nature games in the field', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.25.jpeg', alt: 'Documentary session outdoors', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.29.jpeg', alt: 'Students exploring forest', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.31.jpeg', alt: 'School group nature trail', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.35.jpeg', alt: 'Ecology field session', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.37.jpeg', alt: 'Nature observation activity', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.38.jpeg', alt: 'Hands-on learning outdoors', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.41-.1.jpeg', alt: 'Group nature activity', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.41.jpeg', alt: 'School nature experience', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.42-.1.jpeg', alt: 'Field exploration session', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.42.jpeg', alt: 'Nature discovery program', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.43-.1.jpeg', alt: 'Outdoor education activity', category: 'school' },
  { src: '/images/school/whatsapp-image-2026-05-20-at-19.16.43.jpeg', alt: 'School nature camp', category: 'school' },
  // Bird Walks
  { src: '/images/family/bird-watching/img20260503063606.jpg', alt: 'Bird watching at dawn', category: 'bird-walks' },
  // Forest Fruit Trails
  { src: '/images/family/forest-fruit-trails/img20260503171821.jpg', alt: 'Forest fruit foraging', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503171825.jpg', alt: 'Wild fruits in the forest', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503171923.jpg', alt: 'Edible forest plants', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503172646.jpg', alt: 'Forest trail walk', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503172804.jpg', alt: 'Foraging in nature', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503172958.jpg', alt: 'Wild food discovery', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503173732.jpg', alt: 'Forest ecology walk', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503174041.jpg', alt: 'Nature food trail', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503174848.jpg', alt: 'Forest exploration', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503180213.jpg', alt: 'Fruit trail experience', category: 'forest-trails' },
  { src: '/images/family/forest-fruit-trails/img20260503181402.jpg', alt: 'Evening forest trail', category: 'forest-trails' },
  // Guided Walks
  { src: '/images/family/guided-nature-walks/img20260502095810.jpg', alt: 'Morning nature walk', category: 'family' },
  { src: '/images/family/guided-nature-walks/img20260503070741.jpg', alt: 'Guided walk at sunrise', category: 'family' },
  { src: '/images/family/guided-nature-walks/img20260504102131-.1.jpg', alt: 'Family nature walk', category: 'family' },
  { src: '/images/family/guided-nature-walks/img20260504102425.jpg', alt: 'Exploring with Omkar', category: 'family' },
  { src: '/images/family/guided-nature-walks/whatsapp-image-2026-05-20-at-19.01.07-.1.jpeg', alt: 'Nature observation walk', category: 'family' },
  { src: '/images/family/guided-nature-walks/whatsapp-image-2026-05-20-at-19.01.07.jpeg', alt: 'Guided nature experience', category: 'family' },
  { src: '/images/family/guided-nature-walks/whatsapp-image-2026-05-20-at-19.01.08.jpeg', alt: 'Wildlife spotting walk', category: 'family' },
  { src: '/images/family/guided-nature-walks/whatsapp-image-2026-05-20-at-19.01.13.jpeg', alt: 'Forest walk with family', category: 'family' },
  // Night Trails
  { src: '/images/family/night-trails/img20260502114027.jpg', alt: 'Preparing for night trail', category: 'night-trails' },
  { src: '/images/family/night-trails/img20260503201805.jpg', alt: 'Nocturnal wildlife walk', category: 'night-trails' },
  { src: '/images/family/night-trails/img20260503202705.jpg', alt: 'Night trail in the forest', category: 'night-trails' },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'school', label: 'School Programs' },
  { id: 'bird-walks', label: 'Bird Walks' },
  { id: 'forest-trails', label: 'Forest Trails' },
  { id: 'family', label: 'Family Walks' },
  { id: 'night-trails', label: 'Night Trails' },
] as const
