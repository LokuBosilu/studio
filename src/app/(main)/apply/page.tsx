import { ApplyForm } from "@/components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 md:py-24 px-4 md:px-6">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl">Join Our Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're passionate about discovering unique voices in the art world. If your work challenges, inspires, and engages, we would love to see it.
        </p>
      </div>

      <div className="mt-12">
        <ApplyForm />
      </div>
    </div>
  );
}
