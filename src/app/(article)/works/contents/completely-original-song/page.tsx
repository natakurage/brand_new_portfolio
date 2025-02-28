import { Metadata } from 'next'
import Link from 'next/link'
import { HiMusicNote } from "react-icons/hi";
import { FaBluesky, FaGithub, FaXTwitter } from 'react-icons/fa6'
import COSMain from '@/components/COSMain';

export const metadata: Metadata = {
  title: "完全にオリジナルな音楽が聴けるサイト！！！！！！ | ナタクラゲ / 千本槍みなも",
  description: "完全にオリジナルな音楽"
}

export default function CompletelyOriginalSongPage() {
  return (
    <>
      <h1>完全にオリジナルな音楽がここにあります。</h1>
      <p>
        世間で知られている音楽はパクリだらけで酷いと思いませんか？ 
        でも大丈夫！ このサイトでは、<strong>完全にオリジナルな</strong>
        音楽を、<strong>誰でも無料で</strong>お楽しみいただけます！
      </p>
      <HiMusicNote size={200} className="mx-auto" />
      <COSMain />
      <ul className="flex gap-3 justify-center">
        <li>
          <Link
            href="https://github.com/natakurage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1"
          >
            <FaGithub className="my-auto" />
            Github
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://twitter.com/v_natakurage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1"
          >
            <FaXTwitter className="my-auto" />
            Twitter (X)
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://bsky.app/profile/natakurage.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1"
          >
            <FaBluesky className="my-auto" />
            Bluesky
          </Link>
        </li>
      </ul>
    </>
  )
}
