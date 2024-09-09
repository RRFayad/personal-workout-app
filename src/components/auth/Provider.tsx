"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

function Provider({ children, session }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Provider;
