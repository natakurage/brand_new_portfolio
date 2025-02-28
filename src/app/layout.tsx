import { Noto_Serif_JP } from "next/font/google";
import "@/app/globals.css";
import Boid3D from "@/components/Boid3D"
import Link from "next/link";
import { Metadata } from "next";
import SecretMessage from "@/components/SecretMessage";
import NavBar from "@/components/NavBar";

const notoSerif = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
  preload: true
})

export const metadata: Metadata = {
  icons: "/favicon.ico"
}

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
      </body>
    </html>
  );
}
