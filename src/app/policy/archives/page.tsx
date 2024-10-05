import { licensesVersionMap } from '@/components/licenses/License'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "過去のライセンス一覧 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲライセンスのアーカイブの一覧"
}

export default function LicenseArchivePage() {
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <article className="prose mx-auto">
          <h1>過去のライセンス一覧</h1>
          <ul>
            {
              Array.from(licensesVersionMap.keys()).map((version: string) => {
                return (
                  <li key={version}>
                    <Link
                      href={`/policy/archives/${version}`}
                    >
                      v{version}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </article>
      </main>
    </>
  )
}
