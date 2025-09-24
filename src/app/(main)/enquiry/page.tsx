import { EnquiryForm } from "@/components/EnquiryForm";

export default function EnquiryPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 md:py-24 px-4 md:px-6">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question or a comment? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-12">
        <EnquiryForm />
      </div>
    </div>
  );
}

    