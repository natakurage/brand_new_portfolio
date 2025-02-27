import { FaYoutube, FaGithub } from "react-icons/fa"
import { FaXTwitter, FaBluesky } from "react-icons/fa6"
import { TbLetterN } from "react-icons/tb"
import MessageForm from "@/components/MessageForm"
import { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
  title: "お問い合わせ | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲと連絡を取るためのページ。"
}

export default function ContactPage() {
  const socials = [
    {
      text: "YouTube",
      icon: <FaYoutube color="red" size="48" />,
      href: "https://www.youtube.com/@natakurage"
    },
    {
      text: "Bluesky (Main)",
      icon: <FaBluesky color="blue" size="48" />,
      href: "https://bsky.app/profile/natakurage.cc"
    },
    {
      text: "Note",
      icon: <TbLetterN size="48" />,
      href: "https://note.com/minamo_ntk"
    },
    {
      text: "X (Formerly known as Twitter)",
      icon: <FaXTwitter size="48" />,
      href: "https://twitter.com/v_natakurage"
    },
    {
      text: "GitHub",
      icon: <FaGithub size="48" />,
      href: "https://github.com/natakurage"
    },
  ]
  return (
    <>
      <h1>お問い合わせ</h1>
      <h2>各種アカウント</h2>
      <div
        className="not-prose flex flex-row flex-wrap gap-3 justify-center"
      >
      {
        socials.map(e => 
          <Link
            key={e.text}
            href={e.href}
            className={`tooltip p-3 rounded-md hover:translate-y-[-0.1rem] transition-[transform]`}
            data-tip={e.text}
          >
            {e.icon}
          </Link>
        )
      }
      </div>
      <h2>Discord</h2>
      <p>誰でも気軽に参加できるVTuberコミュニティ「OpenTLive」を運営しております。
        ぜひご参加ください！
        VTuberコミュニティとは言いますが、一般人でも猫でも惑星でも歓迎しています。
      </p>
      <iframe
        src="https://discord.com/widget?id=1217076838485201007&theme=dark"
        width="350"
        height="500"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className="rounded-[5px] w-full"
      />
      <h2>お問い合わせフォーム</h2>
      <p>お問い合わせは以下のフォームからお願いします。</p>
      <p>※内部でGoogleフォームを使っており、仕様変更で壊れる可能性や送信できているように見えてできていない可能性がありますので、確実に届けたい方は
        <Link 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe2kcQ3DWJSoYURIS9ARTUhymadXiJoNimGJQ7jGyCyGu76gQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >こちらのリンク先</Link>
        のフォームをご利用いただくか、上記のアカウントへ直接連絡してください。送信できた場合、入力されたメールアドレスに確認メールが届きます。</p>
      <MessageForm />
    </>
  )
}
