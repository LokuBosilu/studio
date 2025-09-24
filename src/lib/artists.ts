import { PlaceHolderImages } from './placeholder-images';
import type { ImagePlaceholder } from './placeholder-images';

export type Artist = {
  name: string;
  bio: string;
  image: ImagePlaceholder;
};

export const featuredArtists: Artist[] = [
    {
      name: "Elena Petrova",
      bio: "Elena's work explores the intersection of memory and abstraction, using gold leaf to represent fleeting moments of clarity amidst the chaos of recollection. Her paintings are a testament to the beauty of the ephemeral.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-elena-petrova')!
    },
    {
      name: "Marcus Reid",
      bio: "A master of watercolor, Marcus captures the tranquil yet powerful essence of the natural world. His landscapes are immersive experiences, inviting viewers to step into misty forests and stand before dramatic seascapes.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-marcus-reid')!
    },
    {
      name: "Sofia Flores",
      bio: "Sofia is a surrealist storyteller, weaving together mythology, botany, and human anatomy. Her mixed-media works are rich with symbolism, creating intricate narratives that challenge our perception of reality.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-sofia-flores')!
    },
    {
      name: "Chen Wei",
      bio: "Chen's canvases pulsate with the energy of the urban environment. From the vibrant chaos of neon-lit streets to the abstract beauty of digital data streams, his work is a bold reflection of contemporary life.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-chen-wei')!
    },
     {
      name: 'Leo Van Der Zee',
      bio: 'Leo is a sculptor who finds poetry in the tension between materials. His work often combines industrial metals with organic forms, creating dialogues about nature, technology, and the passage of time.',
      image: PlaceHolderImages.find((p) => p.id === 'artist-leo-van-der-zee')!,
    },
    {
      name: 'Aisha Khan',
      bio: 'Aisha is a master of realism, whose still life paintings are imbued with a quiet, contemplative power. Her work celebrates the beauty of everyday objects, rendered with a precision that borders on the divine.',
      image: PlaceHolderImages.find((p) => p.id === 'artist-aisha-khan')!,
    },
  ];
