import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/db";
import bcrypt from "bcrypt";

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
    // CredentialsProvider({
    //   name: "Email",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const user = await db.user.findUnique({
    //       where: { email: credentials?.email },
    //     });

    //     if (!user) {
    //       throw new Error("No user found with this email");
    //     }

    //     const isValidPassword = await bcrypt.compare(
    //       credentials!.password,
    //       user.password,
    //     );
    //     if (!isValidPassword) {
    //       throw new Error("Invalid password");
    //     }

    //     return user;
    //   },
    // }),
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
              type: "oauth",
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
