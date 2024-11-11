import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/nav/header";
import { getServerSession } from "next-auth";
import Provider from "@/components/auth/Provider";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Primal Trainer",
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
          <main className="mt-[80px] flex min-h-[calc(100vh-80px)] w-screen flex-col content-start px-[5vw] py-[2.5vw] lg:grid lg:grid-cols-12 lg:gap-[30px] lg:px-[60px] lg:py-2 xl:px-[120px]">
            {children}
          </main>
        </body>
      </html>
    </Provider>
  );
}
