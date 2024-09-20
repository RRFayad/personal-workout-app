import NextAuth from "next-auth";

// Created this to extend the default Session type, as the id in the session returns TS error
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      image?: string;
    };
  }
}
