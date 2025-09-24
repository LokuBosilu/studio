'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating artwork descriptions using AI.
 *
 * - generateArtworkDescription - A function that takes artwork details as input and returns an AI-generated description.
 * - ArtworkDescriptionInput - The input type for the generateArtworkDescription function.
 * - ArtworkDescriptionOutput - The return type for the generateArtworkDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ArtworkDescriptionInputSchema = z.object({
  title: z.string().describe('The title of the artwork.'),
  artist: z.string().describe('The artist of the artwork.'),
  medium: z.string().describe('The medium used for the artwork (e.g., oil on canvas).'),
  year: z.string().describe('The year the artwork was created.'),
  style: z.string().describe('The style of the artwork (e.g., Impressionism, Abstract).'),
  dimensions: z.string().describe('The dimensions of the artwork.'),
  subject: z.string().describe('The subject of the artwork (e.g. portrait, landscape)'),
});
export type ArtworkDescriptionInput = z.infer<typeof ArtworkDescriptionInputSchema>;

const ArtworkDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling and informative description of the artwork.'),
});
export type ArtworkDescriptionOutput = z.infer<typeof ArtworkDescriptionOutputSchema>;

export async function generateArtworkDescription(input: ArtworkDescriptionInput): Promise<ArtworkDescriptionOutput> {
  return generateArtworkDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'artworkDescriptionPrompt',
  input: {schema: ArtworkDescriptionInputSchema},
  output: {schema: ArtworkDescriptionOutputSchema},
  prompt: `You are an art expert, skilled at creating engaging and informative descriptions of artworks for a gallery setting.

  Given the following details about an artwork, generate a description that will captivate potential buyers and provide them with a rich understanding of the piece.

  Title: {{{title}}}
  Artist: {{{artist}}}
  Medium: {{{medium}}}
  Year: {{{year}}}
  Style: {{{style}}}
  Dimensions: {{{dimensions}}}
  Subject: {{{subject}}}

  Description:`,
});

const generateArtworkDescriptionFlow = ai.defineFlow(
  {
    name: 'generateArtworkDescriptionFlow',
    inputSchema: ArtworkDescriptionInputSchema,
    outputSchema: ArtworkDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
