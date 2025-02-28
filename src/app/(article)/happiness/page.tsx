import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "幸せ | ナタクラゲ / 千本槍みなも",
  description: "幸せは見つかりませんでした。"
}

export default function HapinessPage() {
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <h1 className="text-center text-3xl">404</h1>
        <p className="text-center">Happiness is not found in this world.</p>
      </main>
    </>
  )
}
