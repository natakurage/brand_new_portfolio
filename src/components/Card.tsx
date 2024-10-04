import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Card = (props: {title: string, content: string, subtitle?: string, href?: string}) => {
  const inner = 
  <>
    <h3 className={`${inter.className}`}>
      {props.title}
    </h3>
    <p className={inter.className}>
      <strong>{props.subtitle}</strong>
    </p>
    <p className={""}>
      {props.content}
    </p>
  </>
  const isLink = props.href !== undefined
  const href = props.href ?? ""
  const isAbs = href.slice(0, 7) === "http://" ||href.slice(0, 8) === "https://"
  const linkComp = <>
    {
      isAbs ?
      <a
        href={href}
        className={""}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {inner}
      </a>
      :
      <Link
        href={href}
        className={""}
      >
        {inner}
      </Link>
    }
  </>
  return (
    <>
      {
        isLink ?
          linkComp
        :
        <div
          className={""}
        >
          {inner}
        </div>
      }

    </>
  )
}

export default Card