"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2 } from "lucide-react";
import type { Artwork } from "@/lib/artworks";
import { generateVirtualPreview } from "@/lib/actions";

const environments = [
  "A modern, minimalist living room with white walls and a large window",
  "A cozy, rustic study with a fireplace and dark wood furniture",
  "A chic, corporate office lobby with marble floors",
  "A bright, Scandinavian-style dining room",
  "A traditional art gallery with high ceilings and track lighting",
];

export function VirtualExhibitionClient({ artwork }: { artwork: Artwork }) {
  const [environment, setEnvironment] = useState(environments[0]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePreview = async () => {
    setIsLoading(true);
    setError(null);
    setPreviewImage(null);

    try {
      const response = await fetch(artwork.image.imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        const result = await generateVirtualPreview({
          artworkDataUri: base64data,
          environmentDescription: environment,
        });

        if (result.error) {
          setError(result.error);
        } else if (result.previewImage) {
          setPreviewImage(result.previewImage);
        }
        setIsLoading(false);
      };
      reader.onerror = () => {
        setError("Failed to read image data.");
        setIsLoading(false);
      };
    } catch (e) {
      console.error(e);
      setError("An unexpected error occurred.");
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2">
              <label htmlFor="environment-select" className="text-sm font-medium">
                Select an Environment
              </label>
              <Select value={environment} onValueChange={setEnvironment}>
                <SelectTrigger id="environment-select" className="mt-2">
                  <SelectValue placeholder="Choose an environment" />
                </SelectTrigger>
                <SelectContent>
                  {environments.map((env, index) => (
                    <SelectItem key={index} value={env}>
                      {env.split(",")[0]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleGeneratePreview}
              disabled={isLoading}
              className="w-full md:mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Generate Preview
            </Button>
          </div>

          <div className="mt-6">
            {isLoading && (
              <div className="w-full aspect-video flex flex-col items-center justify-center bg-muted rounded-lg">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">Generating your preview...</p>
              </div>
            )}
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {previewImage && (
              <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={previewImage}
                  alt={`Virtual preview of ${artwork.title} in ${environment}`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
