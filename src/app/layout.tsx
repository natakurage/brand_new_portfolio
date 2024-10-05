import { Inter } from "next/font/google";
import "@/app/globals.css";
import Boid3D from "@/components/Boid3D"
import Link from "next/link";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "/favicon.ico"
}

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
