import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/lib/artworks";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-image");
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-image");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full text-white md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl">
            Experience Art, Redefined
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            Discover a curated collection of contemporary and classic artworks from artists around the globe.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#gallery">
              Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center font-headline text-3xl md:text-4xl">
            Featured Artworks
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {artworks.slice(0, 4).map((artwork) => (
              <Link href={`/artwork/${artwork.id}`} key={artwork.id} className="group">
                <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={artwork.image.imageUrl}
                        alt={artwork.title}
                        fill
                        className="object-cover"
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
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl md:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-foreground/80">
                Laya Art Gallery was founded with a passion for connecting exceptional artists with discerning collectors. Our mission is to create a vibrant space that celebrates creativity, fosters artistic dialogue, and makes art accessible to everyone. We believe that art has the power to inspire, provoke, and enrich our lives.
              </p>
              <p className="mt-4 text-foreground/80">
                We curate a diverse collection of artworks, ranging from traditional paintings to cutting-edge digital creations. Each piece is carefully selected for its unique vision, technical skill, and emotional resonance.
              </p>
            </div>
            <div className="order-1 md:order-2">
              {aboutImage && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Artist Application CTA */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl">
            Are You an Artist?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are always looking for new talent to join our community. If you are an artist interested in showcasing your work at Laya Art Gallery, we invite you to apply.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/apply">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
