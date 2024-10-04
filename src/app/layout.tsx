import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="flex">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
