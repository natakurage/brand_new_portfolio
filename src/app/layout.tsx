import { Noto_Serif_JP } from "next/font/google";
import "@/app/globals.css";
import Boid3D from "@/components/Boid3D";
import Link from "next/link";
import { Metadata } from "next";
import SecretMessage from "@/components/SecretMessage";

const notoSerif = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
  preload: true
});

export const metadata: Metadata = {
  icons: "/images/favicon.ico"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSerif.className}>
        <Boid3D />
        <SecretMessage />
        {children}
        <footer className="flex flex-row space-x-3 justify-center text-center">
          <Link href="/policy">
            Copyright © {new Date().getFullYear()} Natakurage All rights &quot;reversed&quot;.
          </Link>
        </footer>
      </body>
    </html>
  );
}
