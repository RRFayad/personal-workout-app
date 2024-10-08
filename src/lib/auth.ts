import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/db";
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  pages: { signIn: "/" },
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
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
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) {
          throw new Error("Email not found");
        }

        if (!user.password) {
          throw new Error("User signed up with a different method");
        }

        const isValidPassword = await bcrypt.compare(
          credentials!.password,
          user.password,
        );

        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
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
    // Implemented it ot add the user id to my session (In the next callback))
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      if (token) {
        session.user.id = token.id;
      }
      // This is a work around to update user image when the user user updates his profile pic
      const userData = await db.user.findFirst({
        where: { email: session.user.email },
        include: { profile: { select: { gender: true } } },
      });
      session.user.image = userData?.image;
      // Added the gender to recommend the bf% for different genders
      session.user.gender = userData?.profile?.gender;

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
