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
    <div className={
      " sticky top-0 w-full max-w-xl h-12 px-3"
      + " flex flex-row flex-wrap space-x-5"
      + " justify-around z-10"
      + " text-lg text-white mix-blend-difference"
      + " " + className
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
    </div>
  )
}