import NextAuth from "next-auth";
import { Gender } from "@prisma/client";

// Created this to extend the default Session type, as the id in the session returns TS error
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      image?: string;
      gender?: Gender;
    };
  }
}
