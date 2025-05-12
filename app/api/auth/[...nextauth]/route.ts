// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { type AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    {
      id: 'github',
      name: 'GitHub',
      type: 'oauth',
      authorization: 'https://github.com/login/oauth/authorize',
      token: 'https://github.com/login/oauth/access_token',
      userinfo: 'https://api.github.com/user',
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    },
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      authorization: 'https://accounts.google.com/o/oauth2/v2/auth',
      token: 'https://oauth2.googleapis.com/token',
      userinfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
  pages: {
    signIn: "/signin",
  },
  session: { strategy: 'database' },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export const { GET, POST } = handler;