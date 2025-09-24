import { PlaceHolderImages } from './placeholder-images';
import type { ImagePlaceholder } from './placeholder-images';

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  year: string;
  medium: string;
  dimensions: string;
  price: number;
  description: string;
  style: string;
  subject: string;
  image: ImagePlaceholder;
};

const artists = [
  'Elena Petrova',
  'Marcus Reid',
  'Chen Wei',
  'Sofia Flores',
  'Leo Van Der Zee',
  'Aisha Khan',
];

const styles = ['Abstract', 'Realism', 'Impressionism', 'Modern', 'Surrealism', 'Minimalism'];
const subjects = ['Landscape', 'Portrait', 'Still Life', 'Urban', 'Figurative', 'Nature'];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Golden Evanescence',
    artist: 'Elena Petrova',
    year: '2023',
    medium: 'Oil and Gold Leaf on Canvas',
    dimensions: '48" x 60"',
    price: 4500,
    style: 'Abstract',
    subject: 'Light',
    description: 'An ethereal composition where shimmering gold leaf fragments dissolve into deep cerulean and indigo hues. "Golden Evanescence" captures the fleeting moment between dusk and night, exploring themes of memory, transience, and the sublime. The textured brushwork creates a dynamic interplay of light and shadow, inviting contemplation.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-1')!,
  },
  {
    id: '2',
    title: 'Whispering Woods',
    artist: 'Marcus Reid',
    year: '2022',
    medium: 'Watercolor on Paper',
    dimensions: '30" x 22"',
    price: 2800,
    style: 'Impressionism',
    subject: 'Landscape',
    description: 'This piece captures the serene and mystical atmosphere of an ancient forest enveloped in morning mist. Reid\'s masterful use of wet-on-wet watercolor techniques creates soft, diffused light filtering through the canopy. The palette of muted greens, soft grays, and earthy browns evokes a sense of peace and timelessness, making the viewer feel like a quiet observer in a sacred space.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-2')!,
  },
  {
    id: '3',
    title: 'The Alchemist',
    artist: 'Sofia Flores',
    year: '2024',
    medium: 'Mixed Media on Wood Panel',
    dimensions: '24" x 36"',
    price: 3200,
    style: 'Surrealism',
    subject: 'Portrait',
    description: 'A surreal portrait that blends human form with celestial and botanical elements. "The Alchemist" represents the transformative power of knowledge and nature. The subject\'s gaze is both introspective and knowing, with constellations mapped across her skin and flora emerging from her thoughts. Flores uses a rich tapestry of textures, incorporating vintage paper, dried herbs, and acrylics.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-3')!,
  },
  {
    id: '4',
    title: 'Neon Pulse',
    artist: 'Chen Wei',
    year: '2023',
    medium: 'Acrylic on Canvas',
    dimensions: '40" x 40"',
    price: 3800,
    style: 'Modern',
    subject: 'Urban',
    description: 'A vibrant and energetic depiction of a city at night, alive with the pulse of neon lights and bustling streets. Wei uses bold, graphic lines and a high-contrast color palette to capture the dynamic movement and sensory overload of the modern metropolis. Reflections on wet pavement create a mirror world, adding depth and complexity to the urban landscape.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-4')!,
  },
  {
    id: '5',
    title: 'Equilibrium',
    artist: 'Leo Van Der Zee',
    year: '2022',
    medium: 'Bronze and Marble',
    dimensions: '18" x 12" x 12"',
    price: 6500,
    style: 'Minimalism',
    subject: 'Sculpture',
    description: 'A minimalist sculpture that explores the delicate balance between natural and man-made forms. A polished bronze geometric shape rests precariously on a rough, unrefined block of marble. "Equilibrium" is a study in contrasts—smooth versus textured, warm metal versus cool stone, perfect form versus organic chaos—creating a powerful statement about harmony and tension.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-5')!,
  },
  {
    id: '6',
    title: 'Harvest Table',
    artist: 'Aisha Khan',
    year: '2023',
    medium: 'Oil on Linen',
    dimensions: '36" x 24"',
    price: 2950,
    style: 'Realism',
    subject: 'Still Life',
    description: 'A classic still life with a contemporary twist. Khan renders a bountiful arrangement of late-summer fruits and wilting flowers with hyper-realistic detail. The play of light on dewdrops, the texture of a peach\'s skin, and the delicate transparency of glass are captured with breathtaking precision. The composition is a memento mori, celebrating abundance while acknowledging its impermanence.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-6')!,
  },
  {
    id: '7',
    title: 'Crimson Tide',
    artist: 'Marcus Reid',
    year: '2024',
    medium: 'Oil on Canvas',
    dimensions: '50" x 30"',
    price: 4200,
    style: 'Impressionism',
    subject: 'Seascape',
    description: 'An evocative seascape capturing the dramatic moment the sun dips below the horizon, setting the sky and water ablaze in crimson and gold. Reid\'s vigorous brushwork and thick application of paint convey the raw power and movement of the tide. This piece is less a depiction of a place and more an emotional response to the overwhelming beauty of nature.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-7')!,
  },
  {
    id: '8',
    title: 'Digital Soul',
    artist: 'Chen Wei',
    year: '2024',
    medium: 'Digital Painting (Giclée Print)',
    dimensions: '40" x 50"',
    price: 2200,
    style: 'Abstract',
    subject: 'Digital',
    description: 'An exploration of identity in the digital age, this abstract piece visualizes the flow of data and human consciousness. Luminous, ribbon-like forms twist and intersect against a dark, complex background, representing the interconnected yet fragmented nature of our online selves. This is a limited edition Giclée print on archival paper, ensuring longevity and color fidelity.',
    image: PlaceHolderImages.find(p => p.id === 'artwork-8')!,
  },
];
