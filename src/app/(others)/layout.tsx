import NavBar from "@/components/NavBar";

export default async function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky top-0 z-10 mix-blend-difference"><NavBar /></header>
      <main className="container mx-auto my-10 space-y-10 px-3">
        {children}
      </main>
    </>
  );
}
