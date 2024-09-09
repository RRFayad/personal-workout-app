import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/auth/Provider";
import { getServerSession } from "next-auth";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workout App",
  description: "Generate your optimal workout",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Provider session={session}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-grow items-center justify-center px-[120px]">
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
