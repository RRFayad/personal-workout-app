import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/db";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET,
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) {
        return false;
      }

      const existingUser = await db.user.findUnique({
        where: { email: user.email },
      });

      if (existingUser) {
        // If the user exists, ensure the account is linked
        const existingAccount = await db.account.findFirst({
          where: {
            userId: existingUser.id,
            provider: account!.provider,
          },
        });

        if (!existingAccount) {
          // Safely handle optional fields like accessToken and refreshToken
          await db.account.create({
            data: {
              type: account!.type,
              userId: existingUser.id,
              provider: account!.provider,
              providerAccountId: account!.providerAccountId,
              access_token: account!.access_token || null,
              refresh_token: account!.refresh_token || null,
              expires_at: account!.expires_at || null,
            },
          });
        }
      }

      return true;
    },
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  events: {
    async signIn({ user, account, profile }) {
      console.log(user, "Signed in");
    },
  },
};

export default authOptions;
