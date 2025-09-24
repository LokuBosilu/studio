import { featuredArtists } from "@/lib/artists";
import { artworks } from "@/lib/artworks";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type ArtistPageProps = {
  params: {
    name: string;
  };
};

export async function generateStaticParams() {
  return featuredArtists.map((artist) => ({
    name: slugify(artist.name),
  }));
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artist = featuredArtists.find((a) => slugify(a.name) === params.name);

  if (!artist) {
    notFound();
  }

  const artistArtworks = artworks.filter((artwork) => artwork.artist === artist.name);

  return (
    <div className="container mx-auto max-w-7xl py-16 md:py-24 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-1">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={artist.image.imageUrl}
              alt={`Portrait of ${artist.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              data-ai-hint={artist.image.imageHint}
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">{artist.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{artist.bio}</p>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <h2 className="font-headline text-3xl md:text-4xl text-center">Artworks by {artist.name}</h2>
        {artistArtworks.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {artistArtworks.map((artwork) => (
              <Link href={`/artwork/${artwork.id}`} key={artwork.id} className="group">
                <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={artwork.image.imageUrl}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={artwork.image.imageHint}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-headline text-lg font-semibold">{artwork.title}</h3>
                      <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                      <p className="mt-2 font-semibold text-primary">
                        ${artwork.price.toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-muted-foreground">No artworks found for this artist.</p>
        )}
      </div>
    </div>
  );
}
