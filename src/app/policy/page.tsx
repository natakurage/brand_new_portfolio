import License from '@/components/License'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ポリシーと規約 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲの作品の利用や注意事項など"
}

export default function PolicyPage() {
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <article className="prose dark:!prose-invert mx-auto">
          <h1>ポリシーと規約</h1>
          <h2>ナタクラゲの作品について</h2>
          <p>
            ナタクラゲはこれまで、その作品について一律に「営利法人以外はクレジットすれば自由に使用可」としていました。
          </p>
          <p>
            しかしながら、この運用だともろもろの不都合があることが考えられるため、
            今後は一律での許可は停止することにします。
            代替策として、<strong>個別作品ごとへのCCライセンス適用</strong>を進めております。
          </p>
          <p>
            （ほとんどないとは思いますが）既になされた利用分に関しては、
            <strong>利用者の完全な自己責任</strong>という形で、ライセンスを継続します。
          </p>
          <p>
            なお、本サイト上のコンテンツは、特に記載がない限り、
            <Link
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 4.0
            </Link>で利用できます。ソースコードは別途ライセンスで公開されます。
          </p>
          <div className="flex flex-row space-x-3">
            <Link href="/policy/archives">過去のライセンスを見る（アーカイブ）</Link>
          </div>
        </article>
      </main>
    </>
  )
}
