"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    getProviders().then((prov) => setProviders(prov));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <div className="flex flex-col space-y-4">
        {providers ? (
          Object.values(providers).map((provider) => (
            <Button
              key={provider.name}
              onClick={() =>
                signIn(provider.id, { callbackUrl: "/" })
              }
            >
              Sign in with {provider.name}
            </Button>
          ))
        ) : (
          <p>Loading providers…</p>
        )}
      </div>
    </main>
  );
}