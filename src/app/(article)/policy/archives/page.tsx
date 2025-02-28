import fs from 'fs'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import path from 'path'

export const metadata: Metadata = {
  title: "過去のライセンス一覧 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲライセンスのアーカイブの一覧"
}

export default function LicenseArchivePage() {
  const dirPath = path.join(process.cwd(), "markdowns", "licenses")
  const mdFiles = [] as string[]
  try {
    const files = fs.readdirSync(dirPath)
    mdFiles.push(...files.map(e => path.basename(e, path.extname(e))))
  } catch (error) {
    console.log(error)
    notFound()
  }
  console.log(mdFiles)
  return (
    <>
      <h1>過去のライセンス一覧</h1>
      <ul>
        {
          mdFiles.map((version: string) => {
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
    </>
  )
}
