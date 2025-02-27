import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaYoutube, FaGithub, FaListUl, FaBluesky } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { TbLetterN } from "react-icons/tb"

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
      <div
        className="hero min-h-screen relative"
      >
        <Image
          src="/poster3.png"
          alt="Natakurage Key Visual"
          fill
          priority
          className="object-cover z-[-1] object-[25%] mask-gradient"
        />
        <div className="hero-content flex-col w-full sm:w-1/2 ms-auto h-full">
          <div className="relative w-full h-1/2">
            <Image
              src="/ナタクラゲ_logo.png"
              alt="Natakurage Logo"
              fill
              priority
              className="w-1/2 object-contain drop-shadow-xl"
            />
          </div>
          <div className="relative w-full h-1/2">
            <Image
              src="/みなもlogo.png"
              alt="Sembonyari Minamo Logo"
              fill
              priority
              className="w-1/2 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
      <main className="mx-auto container my-5 space-y-10 px-3">
        <div className="mt-64 mb-32 text-2xl flex flex-col text-center">
          <span><span className="font-bold text-8xl">極限</span>による</span>
          <span><span className="font-bold text-8xl">解放</span>。</span>
        </div>
        <div className="space-y-1 text-center">
          <h1 className="text-4xl">
            <span style={{display: "inline-block"}}>ナタクラゲ /</span>&nbsp;
            <span style={{display: "inline-block"}}>千本槍みなも</span>
          </h1>
          <p>VOCALOID Composer, Writer, Programmer, 3D Artist / Virtual YouTuber</p>
        </div>

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
      </main>
    </>
  )
}
