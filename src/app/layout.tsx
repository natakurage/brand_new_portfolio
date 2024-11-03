import { Inter } from "next/font/google";
import "@/app/globals.css";
import Boid3D from "@/components/Boid3D"
import Link from "next/link";
import { Metadata } from "next";
import SecretMessage from "@/components/SecretMessage";

const inter = Inter({ subsets: ["latin"] });

const googleVerification = process.env.GOOGLE_VERIFICATION_CODE

export const metadata: Metadata = {
  icons: "/favicon.ico",
  verification: {
    google: googleVerification
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Boid3D />
        <SecretMessage />
        <div className="flex">
          {children}
        </div>
        <footer className="flex flex-row space-x-3 justify-center">
          <Link href="/">
            Home
          </Link>
          <Link href="/policy">
          Copyright © 2024 Natakurage Some rights reserved.
          </Link>
        </footer>
      </body>
    </html>
  );
}
