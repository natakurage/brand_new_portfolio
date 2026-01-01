import Link from "next/link";


export default function NavBar({ className } : { className?: string }) {
  const links = [
    {
      href: "/",
      title: "Home"
    },
    {
      href: "/about",
      title: "About"
    },
    {
      href: "/works",
      title: "Works"
    },
    {
      href: "/gallery",
      title: "Gallery"
    },
    {
      href: "/policy",
      title: "Policy"
    },
    {
      href: "/contact",
      title: "Contact"
    },
    {
      href: "https://blog.natakurage.cc",
      title: "Blog"
    }
  ];
  return (
    <nav className={
      "w-full max-w-xl px-3"
      + " flex flex-row flex-wrap gap-x-5 gap-y-2 justify-around"
      + " text-lg"
      + " " + (className ?? "")
    }
    >
      {
        links.map((link) => (
          <Link
            key={link.href}
            href={link.href} 
            className="my-auto"
          >
            {link.title}
          </Link>
        ))
      }
    </nav>
  );
}