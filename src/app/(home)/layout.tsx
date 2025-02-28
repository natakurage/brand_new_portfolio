import "@/app/globals.css";
import Link from "next/link";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="overflow-hidden">
        {children}
      </div>
      <footer className="flex flex-row space-x-3 justify-center text-center">
        <Link href="/policy">
          Copyright © 2024 Natakurage Some rights reserved.
        </Link>
      </footer>
    </>
  );
}
