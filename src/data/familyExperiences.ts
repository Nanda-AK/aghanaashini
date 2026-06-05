export type FamilyExperience = {
  id: string
  title: string
  description: string
  image: string
}

export const familyExperiences: FamilyExperience[] = [
  {
    id: 'guided-walks',
    title: 'Guided Nature Walks',
    description:
      'Explore forests and meadows with Omkar as your guide. Learn to identify local flora, read animal signs, and tune in to the rhythms of the natural world.',
    image: '/images/family/guided-nature-walks/img20260502095810.jpg',
  },
  {
    id: 'bird-watching',
    title: 'Bird Watching',
    description:
      "Karnataka's forests are home to hundreds of bird species. Join a morning walk with binoculars and field guides to spot and identify the birds of the Western Ghats.",
    image: '/images/family/bird-watching/img20260503063606.jpg',
  },
  {
    id: 'forest-fruit-trails',
    title: 'Forest Fruit Trails',
    description:
      'A foraging walk through forest paths to discover edible fruits, seeds, and plants that have sustained communities for generations.',
    image: '/images/family/forest-fruit-trails/img20260503171821.jpg',
  },
  {
    id: 'night-trails',
    title: 'Nocturnal Wildlife Night Trails',
    description:
      'After dark, the forest reveals a different world. Join a guided night trail to encounter nocturnal insects, frogs, owls, and the sounds of the forest at night.',
    image: '/images/family/night-trails/img20260502114027.jpg',
  },
]
