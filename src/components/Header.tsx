"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { headers } from "next/headers";

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loading = status === "loading";

  return (
    <header>
      <nav className="flex h-12 w-full items-center gap-x-4">
        <Link className="text-md font-bold text-zinc-900" href={"/"}>
          Home
        </Link>
        <Link className="text-md font-bold text-zinc-900" href={"/user"}>
          User
        </Link>
        <Link className="text-md font-bold text-zinc-900" href={"/protected"}>
          Protected
        </Link>
      </nav>
    </header>
  );
}

export default Header;
