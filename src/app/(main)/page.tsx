
"use client";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/lib/artworks";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


export default function Home() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-image");
  const heroArtworks = artworks.slice(0, 3);
  
  const featuredArtists = [
    {
      name: "Elena Petrova",
      bio: "Elena's work explores the intersection of memory and abstraction, using gold leaf to represent fleeting moments of clarity amidst the chaos of recollection. Her paintings are a testament to the beauty of the ephemeral.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-elena-petrova')
    },
    {
      name: "Marcus Reid",
      bio: "A master of watercolor, Marcus captures the tranquil yet powerful essence of the natural world. His landscapes are immersive experiences, inviting viewers to step into misty forests and stand before dramatic seascapes.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-marcus-reid')
    },
    {
      name: "Sofia Flores",
      bio: "Sofia is a surrealist storyteller, weaving together mythology, botany, and human anatomy. Her mixed-media works are rich with symbolism, creating intricate narratives that challenge our perception of reality.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-sofia-flores')
    },
    {
      name: "Chen Wei",
      bio: "Chen's canvases pulsate with the energy of the urban environment. From the vibrant chaos of neon-lit streets to the abstract beauty of digital data streams, his work is a bold reflection of contemporary life.",
      image: PlaceHolderImages.find((p) => p.id === 'artist-chen-wei')
    },
  ]


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full md:h-[80vh]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          className="absolute inset-0 w-full h-full"
        >
          <CarouselContent>
            {heroArtworks.map((artwork, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] w-full md:h-[80vh]">
                  <Image
                    src={artwork.image.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    data-ai-hint={artwork.image.imageHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4 text-white">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl">
            Experience Art, Redefined
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Discover a curated collection of contemporary and classic artworks from artists around the globe.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/#gallery">
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
           <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/#gallery-full">
                Explore Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What makes us Special Section */}
      <section id="about" className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 text-center">
              <h2 className="font-headline text-3xl md:text-4xl">
                What Makes Us Special
              </h2>
              <p className="mt-4 text-foreground/80">
                At Laya Art Gallery, we're not just a place to buy art; we're a destination for artistic discovery. We pride ourselves on our meticulous curation process, seeking out artists who bring a unique perspective and a masterful command of their craft. Our collection is a testament to the vibrant, ever-evolving world of contemporary art.
              </p>
              <p className="mt-4 text-foreground/80">
                We believe in building relationships—between the artist and the collector, the artwork and the viewer. We offer personalized advisory services and create a welcoming environment where both seasoned collectors and new art lovers can feel inspired and confident in their acquisitions.
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
      
      {/* Meet the Artists Section */}
      <section id="artists" className="w-full bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-16 text-center font-headline text-3xl md:text-4xl">
            Meet Our Artists
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredArtists.map((artist, index) => (
                <CarouselItem key={index}>
                  <div className="relative flex justify-center items-center h-[500px]">
                     {artist.image && (
                       <div className="relative w-[600px] h-[450px] md:w-[700px] md:h-[525px] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl">
                        <Image
                          src={artist.image.imageUrl}
                          alt={`Portrait of ${artist.name}`}
                          fill
                          className="object-cover"
                          data-ai-hint={artist.image.imageHint}
                          sizes="(max-width: 768px) 500px, 600px"
                        />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 md:left-auto md:right-0 transform translate-y-1/4 md:translate-y-0 md:translate-x-1/4 w-[300px] md:w-[350px] bg-card text-card-foreground p-6 rounded-lg shadow-xl border border-border">
                      <h3 className="font-headline text-3xl font-semibold text-primary">{artist.name}</h3>
                      <p className="mt-4 text-muted-foreground text-base">{artist.bio}</p>
                      <Button asChild variant="link" className="mt-4 p-0 h-auto">
                        <Link href="#">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-1rem] md:left-[-4rem]" />
            <CarouselNext className="right-[-1rem] md:right-[-4rem]" />
          </Carousel>
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
