import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "秘密のページ | ナタクラゲ / 千本槍みなも",
  description: "秘密のページ"
}

export default function SecretPage() {
  return (
    <>
      <main className="container mx-auto my-10 space-y-10">
        <article className="prose mx-auto">
          <h1>秘密のページ</h1>
          <p>よく見つけたね！ご褒美にこれを見せてあげるよ！</p>
          <a href="https://drive.google.com/drive/folders/1YpBdkZkq45lZd2tgWBOWiBE6J7YAdtgV?usp=drive_link">
          link</a>
        </article>
      </main>
    </>
  )
}
