import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Secret Zone | ナタクラゲ / 千本槍みなも",
  description: "Secret Zone"
}

export default function SecretPage() {
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <div className="
          fixed top-0 left-0 w-screen h-screen z-[-1]
          bg-[url('/NTK.png')] bg-[length:20px_20px]">

        </div>
        <article className="prose mx-auto">
          <h1>Secret Zone</h1>
          <p>↓</p>
          <a href="https://drive.google.com/drive/folders/1YpBdkZkq45lZd2tgWBOWiBE6J7YAdtgV?usp=drive_link">
          link</a>
        </article>
      </main>
    </>
  )
}
