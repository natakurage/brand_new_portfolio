import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaYoutube, FaGithub, FaListUl, FaBluesky } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { TbLetterN } from "react-icons/tb"

function LinkCard({ href, title, content } : { href: string, title: string, content: string }) {
  return (
    <Link href={href}>
      <div
        className="card bg-neutral/90 h-full hover:shadow-xl transition-[box-shadow] duration-500"
      >
        <div className="card-body p-5 md:p-8">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </Link>
  )
}

function SocialIcon({ href, children } : { href: string, children: ReactNode }) {
  return (
    <div>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        { children }
      </Link>
    </div>
  )
}

export const metadata: Metadata = {
  title: "ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲ / 千本槍みなもの公式ホームページ。"
}

export default function Home() {
  
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <div
          className="h-screen relative"
        >
          <Image
            src="/poster.png"
            alt="Natakurage Key Visual"
            fill
            priority
            className="w-1/2 m-auto object-contain"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-center">
            <span style={{display: "inline-block"}}>ナタクラゲ /</span>&nbsp;
            <span style={{display: "inline-block"}}>千本槍みなも</span>
          </h1>

          <div className="flex flex-row justify-center space-x-3">
            <SocialIcon href="https://www.youtube.com/@natakurage/featured">
              <FaYoutube size="32" />
            </SocialIcon>
            <SocialIcon href="https://bsky.app/profile/natakurage.cc">
              <FaBluesky size="32" />
            </SocialIcon>
            <SocialIcon href="https://note.com/minamo_ntk">
              <TbLetterN size="32" />
            </SocialIcon>
            <SocialIcon href="https://github.com/natakurage">
              <FaGithub size="32" />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/v_natakurage">
              <FaXTwitter size="32" />
            </SocialIcon>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="https://blog.natakurage.cc/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            ブログを見る
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          <LinkCard 
            href="/about"
            title="About"
            content="ナタクラゲとは何者なのかについて、解説します。"
          />
          <LinkCard 
            href="/works"
            title="Works"
            content="ナタクラゲがこれまでにつくった作品を紹介します。"
          />
          <LinkCard 
            href="/policy"
            title="Policy"
            content="ナタクラゲの作品の利用や注意事項などです。"
          />
          <LinkCard 
            href="/contact"
            title="Contact"
            content="ナタクラゲと連絡をとるための方法です。"
          />
        </div>
      </main>
    </>
  )
}
