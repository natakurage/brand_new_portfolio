import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default async function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
        <main className="container mx-auto my-10 space-y-10 px-3">
          <article className="prose dark:!prose-invert mx-auto">
            {children}
          </article>
        </main>
      <footer className="flex flex-row space-x-3 justify-center text-center">
        <Link href="/policy">
          Copyright © 2024 Natakurage Some rights reserved.
        </Link>
      </footer>
    </>
  );
}
