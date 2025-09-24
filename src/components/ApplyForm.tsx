"use client";

import { useActionState, useFormStatus } from "react";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitArtistApplication } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

const initialState = {
  message: "",
  errors: {},
  reset: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Submit Application
      {!pending && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function ApplyForm() {
  const [state, formAction] = useActionState(submitArtistApplication, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Success!",
        description: state.message,
      });
      if (state.reset) {
        formRef.current?.reset();
      }
    } else if (state.message && state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Artist Application</CardTitle>
        <CardDescription>
          Please fill out the form below. We review every submission carefully.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required />
            {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required />
            {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio URL</Label>
            <Input id="portfolio" name="portfolio" placeholder="https://your-portfolio.com" required />
            {state.errors?.portfolio && <p className="text-sm text-destructive">{state.errors.portfolio[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">About Your Art</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your work, your style, and what drives you to create."
              rows={5}
              required
            />
            {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
