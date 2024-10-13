import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import Provider from "@/components/auth/Provider";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

const openSans = Open_Sans({ subsets: ["latin"] });

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
    <Provider session={session}>
      <html lang="en">
        <body className={`${openSans.className} `}>
          <Header />
          <LightDarkToggle className="fixed right-6 top-[calc(50%-12px)]" />
          <main className="gap-y- mt-[80px] grid min-h-[calc(100vh-80px)] w-screen grid-cols-12 grid-rows-[auto_1fr] gap-[30px] px-[120px] py-2">
            {children}
          </main>
        </body>
      </html>
    </Provider>
  );
}
