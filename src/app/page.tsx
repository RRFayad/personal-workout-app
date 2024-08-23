"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust this path based on your project

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (provider: string) => {
    setLoading(true);
    await signIn(provider, { callbackUrl: "/" });
    setLoading(false);
  };

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Sign in with email and password
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert(result.error); // Handle error, show a message, etc.
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form className="flex flex-col items-center mb-4" onSubmit={handleCredentialsSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border rounded w-64"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 border rounded w-64"
          required
        />
        <Button type="submit" className="mb-4 w-64" disabled={loading}>
          Sign in with Email
        </Button>
      </form>
      <Button onClick={() => handleSignIn("google")} className="mb-4 w-64 bg-red-500 text-white">
        Sign in with Google
      </Button>
      <Button onClick={() => handleSignIn("github")} className="mb-4 w-64 bg-gray-800 text-white">
        Sign in with GitHub
      </Button>
    </div>
  );
}
