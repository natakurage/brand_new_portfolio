import { TwitterSearch } from '@/components/Twitter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Twitter検索 | ナタクラゲ / 千本槍みなも",
  description: "Twitter検索するページ"
}

export default function TwitterSearchPage() {
  return (
    <>
      <h2 className="text-center">Twitter検索のやつ</h2>
      <p className="text-center max-w-xl mx-auto">
        注意: このページは検索ページのリンクを生成して飛ぶだけの機能です。
      </p>
      <TwitterSearch />
    </>
  )
}
