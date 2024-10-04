import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Boid3D from "@/components/Boid3D"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ナタクラゲ ホームページ",
  description: "ナタクラゲおよびVTuber千本槍みなものホームページです。",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Boid3D />
        <div className="flex">
          {children}
        </div>
        <footer className="flex flex-row space-x-3 justify-center">
          <Link href="/">
            Home
          </Link>
          <Link href="/policy">
            Natakurage all rights revealed.
          </Link>
        </footer>
      </body>
    </html>
  );
}
