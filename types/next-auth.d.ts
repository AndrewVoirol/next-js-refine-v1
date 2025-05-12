import type { DefaultSession, Profile } from "next-auth";
import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}

// Custom type to resolve provider type conflicts
export type CustomOAuthProvider<P extends Profile = Profile> = 
  OAuthConfig<P> & {
    id: string;
    name: string;
    type: "oauth";
  };
