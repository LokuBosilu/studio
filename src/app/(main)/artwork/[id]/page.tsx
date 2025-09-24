import { artworks } from "@/lib/artworks";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

type ArtworkPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: artwork.id,
  }));
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworks.find((a) => a.id === params.id);

  if (!artwork) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-7xl py-8 md:py-16 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Artwork Image */}
        <div className="relative">
          <Dialog>
            <DialogTrigger asChild>
              <div className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={artwork.image.imageUrl}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={artwork.image.imageHint}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                  <ZoomIn className="h-12 w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0">
               <DialogTitle className="sr-only">{artwork.title}</DialogTitle>
               <DialogDescription className="sr-only">A larger view of the artwork: {artwork.title} by {artwork.artist}.</DialogDescription>
               <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={artwork.image.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-contain"
                  />
                </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Artwork Details */}
        <div className="flex flex-col">
          <h1 className="font-headline text-3xl md:text-4xl font-bold">{artwork.title}</h1>
          <p className="mt-2 text-xl text-muted-foreground">{artwork.artist}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{artwork.style}</Badge>
            <Badge variant="secondary">{artwork.subject}</Badge>
            <Badge variant="secondary">{artwork.year}</Badge>
          </div>

          <Separator className="my-6" />

          <p className="text-lg leading-relaxed">{artwork.description}</p>
          
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
             <p><span className="font-semibold text-foreground">Medium:</span> {artwork.medium}</p>
             <p><span className="font-semibold text-foreground">Dimensions:</span> {artwork.dimensions}</p>
          </div>

          <Separator className="my-6" />
          
          <div className="flex items-baseline gap-4">
             <span className="text-3xl font-bold text-primary">${artwork.price.toLocaleString()}</span>
          </div>

          <Button size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Buy Now
          </Button>

        </div>
      </div>
    </div>
  );
}
