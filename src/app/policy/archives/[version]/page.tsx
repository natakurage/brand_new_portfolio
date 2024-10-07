import License from '@/components/License'
import Link from 'next/link'

export function generateMetadata({ params } : { params: { version: string }}) {
  return {
    title: `ナタクラゲライセンス v${params.version} | ナタクラゲ / 千本槍みなも`,
    description: "ナタクラゲライセンスのアーカイブページ"
  }
}

export default function LicenseOfVersion({ params } : { params: { version: string }}) {
  const version = params.version
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <article className="prose mx-auto">
          <License version={version} />
          <Link href="/policy/archives">別の時点でのライセンスを見る</Link>
        </article>
      </main>
    </>
  )
}
