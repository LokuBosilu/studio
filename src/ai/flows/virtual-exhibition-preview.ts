// VirtualExhibitionPreview.ts
'use server';

/**
 * @fileOverview Generates a virtual exhibition preview of an artwork in a specified environment using AI.
 *
 * - generateVirtualExhibitionPreview - A function that generates the virtual exhibition preview.
 * - VirtualExhibitionPreviewInput - The input type for the generateVirtualExhibitionPreview function.
 * - VirtualExhibitionPreviewOutput - The return type for the generateVirtualExhibitionPreview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import * as fs from 'fs';

const VirtualExhibitionPreviewInputSchema = z.object({
  artworkDataUri: z
    .string()
    .describe(
      "A photo of the artwork, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  environmentDescription: z
    .string()
    .describe('The description of the virtual environment to display the artwork in, such as a modern living room or a corporate office.'),
});
export type VirtualExhibitionPreviewInput = z.infer<typeof VirtualExhibitionPreviewInputSchema>;

const VirtualExhibitionPreviewOutputSchema = z.object({
  virtualExhibitionPreview: z
    .string()
    .describe('A data URI containing the generated virtual exhibition preview image.'),
});
export type VirtualExhibitionPreviewOutput = z.infer<typeof VirtualExhibitionPreviewOutputSchema>;

export async function generateVirtualExhibitionPreview(
  input: VirtualExhibitionPreviewInput
): Promise<VirtualExhibitionPreviewOutput> {
  return virtualExhibitionPreviewFlow(input);
}

const virtualExhibitionPreviewPrompt = ai.definePrompt({
  name: 'virtualExhibitionPreviewPrompt',
  input: {schema: VirtualExhibitionPreviewInputSchema},
  output: {schema: VirtualExhibitionPreviewOutputSchema},
  prompt: [
    {
      media: {url: '{{artworkDataUri}}'},
    },
    {
      text: 'Generate an image of this artwork in a virtual exhibition environment described as follows: {{{environmentDescription}}}.',
    },
  ],
  config: {
    responseModalities: ['TEXT', 'IMAGE'],
  },
});

const virtualExhibitionPreviewFlow = ai.defineFlow(
  {
    name: 'virtualExhibitionPreviewFlow',
    inputSchema: VirtualExhibitionPreviewInputSchema,
    outputSchema: VirtualExhibitionPreviewOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        {media: {url: input.artworkDataUri}},
        {text: `Generate an image of this artwork in a virtual exhibition environment described as follows: ${input.environmentDescription}.`},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {virtualExhibitionPreview: media!.url!};
  }
);
