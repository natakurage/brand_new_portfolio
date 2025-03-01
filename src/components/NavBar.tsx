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
  ]
  return (
    <nav className={
      "w-full max-w-xl h-12 px-3"
      + " flex flex-row flex-wrap gap-5 justify-around"
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
  )
}