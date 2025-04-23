'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterForm() {
  return (
    <form className="flex w-full max-w-md space-x-2" onSubmit={async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email');
      
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          alert('Merci pour votre inscription!');
          (e.target as HTMLFormElement).reset();
        } else {
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      } catch (error) {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    }}>
      <Input 
        type="email" 
        name="email"
        placeholder="Votre adresse email" 
        className="flex-1" 
        required 
      />
      <Button type="submit">S&apos;inscrire</Button>
    </form>
  );
}