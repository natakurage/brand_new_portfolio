import MessageForm from "@/components/MessageForm";
import Socials from "@/components/Socials";
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲと連絡を取るためのページ。"
};

export default function ContactPage() {
  return (
    <>
      <h1>お問い合わせ</h1>
      <h2>各種アカウント</h2>
      <Socials size={48} className="not-prose" />
      <h2>PGP公開鍵</h2>
      <Link href="/pgp">公開鍵はこちら</Link>
      <h2>Matrix</h2>
      <p>誰でも気軽に参加できるコミュニティ「Reproducible Freedom」を運営しております。
        ぜひご参加ください！
      </p>
      <iframe
        src="https://matrix.to/#/#reproducivefreedom:matrix.org"
        width="350"
        height="500"
        sandbox="allow-same-origin allow-scripts allow-forms"
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
  );
}
