import { FaYoutube, FaGithub } from "react-icons/fa"
import { FaXTwitter, FaBluesky } from "react-icons/fa6"
import { TbLetterN } from "react-icons/tb"
import MessageForm from "@/components/MessageForm"
import { ReactNode } from 'react'
import { Metadata } from 'next'

function SocialIcon(
  { href, title, children }
  : { href: string, title: string, children: ReactNode }
) {
  return (
    <div><a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center"
    >
      {children}
      <div>{title}</div>
    </a></div>
  )
}

export const metadata: Metadata = {
  title: "お問い合わせ | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲと連絡を取るためのページ。"
}

export default function ContactPage() {
  return (
    <>
      <main className="container mx-auto my-10 space-y-10">
        <article className="prose mx-auto">
          <h1>お問い合わせ</h1>
          <h2>各種アカウント</h2>
          <div className="flex flex-row justify-center space-x-3 text-center">
          <SocialIcon
              href="https://www.youtube.com/@natakurage"
              title="YouTube"
            >
              <FaYoutube
                color="red"
                size="48"
              />
            </SocialIcon>
            <SocialIcon
              href="https://bsky.app/profile/natakurage.bsky.social"
              title="Bluesky (Main)"
            >
              <FaBluesky
                color="blue"
                size="48"
              />
            </SocialIcon>
            <SocialIcon
              href="https://note.com/minamo_ntk"
              title="Note"
            >
              <TbLetterN
                size="48"
              />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/v_natakurage"
              title="X (Formerly known as Twitter)"
            >
              <FaXTwitter
                size="48"
              />
            </SocialIcon>
            <SocialIcon
              href="https://github.com/natakurage"
              title="GitHub"
            >
              <FaGithub
                size="48"
              />
            </SocialIcon>
          </div>
          <div>
            <h2>お問い合わせフォーム</h2>
            <p>お問い合わせは以下のフォームからお願いします。</p>
            <p>※内部でGoogleフォームを使っており、仕様変更で壊れる可能性や送信できているように見えてできていない可能性がありますので、確実に届けたい方は
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2kcQ3DWJSoYURIS9ARTUhymadXiJoNimGJQ7jGyCyGu76gQ/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >こちらのリンク先</a>
              のフォームをご利用いただくか、上記のアカウントへ直接連絡してください。送信できた場合、入力されたメールアドレスに確認メールが届きます。</p>
            <MessageForm />
          </div>
        </article>
      </main>
    </>
  )
}
