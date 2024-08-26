"use client";
import AuthButtons from "@/components/AuthButtons";

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <>
      <AuthButtons />
      {session.data?.user && (
        <div>User is signed in! ({JSON.stringify(session.data.user)})</div>
      )}
      {!session.data?.user && <div>User NOT signed in!</div>}
    </>
  );
}
