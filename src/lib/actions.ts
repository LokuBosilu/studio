"use server";

import { z } from "zod";

const artistApplicationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  portfolio: z.string().url({ message: "Please enter a valid URL." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitArtistApplication(prevState: any, formData: FormData) {
  const validatedFields = artistApplicationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    portfolio: formData.get("portfolio"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed.",
    };
  }

  // In a real application, you would process this data (e.g., save to a database, send an email).
  console.log("New artist application:", validatedFields.data);

  return {
    message: "Thank you for your application! We will be in touch shortly.",
    errors: {},
    reset: true,
  };
}
