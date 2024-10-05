import Link from 'next/link'
import YouTubeEmbed from '@/components/YoutubeEmbed'
import { Metadata } from 'next'

function WorkCard({ title, content } : { title: string, content: string}) {
  return (
    <div className="card my-3">
      <div className="card-body p-0">
        <h3 className="card-title">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "作品 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲがこれまでに作った作品。"
}

export default function WorksPage() {
  const musicWorks = [
      {
        vid: "69s14zGHevU",
        title: "ナタクラゲ",
        content: "森の中に、不思議な格好をしたかわいらしい少女がいた。"
          + "近寄ってみると、突然鉈を持って襲いかかってきた。"
          + "彼女は街や海に繰り出し、人々を次々に殺して回る。"
          + "まるで、何かの鬱憤を晴らすかのように。"
      },
      {
        vid: "ZvNJcR_AuX8",
        title: "シロップ",
        content: "乾いた心は、粘り気を帯びて、そのまま干からびていく。"
      },
      {
        vid: "zF7bAz8IelU",
        title: "懲役80年",
        content: "少女は、物心ついた頃から実験施設に監禁されていた。"
          + "実験や雑居房での苦しみの日々――。"
      }
  ]
  const movieWorks = [
    {
      vid: "ThX-p6wxrC4",
      title: "まもなく、4番線に、\"死\"がまいります。",
      content: ""
    }
  ]
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <h2 className="text-center">音楽（クリックで再生）</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {
            musicWorks.map((work) => (
              <div
                key={work.vid}
                className="flex flex-col space-y-5"
              >
                <YouTubeEmbed vid={work.vid} />
                <WorkCard
                  title={work.title}
                  content={work.content}
                />
              </div>
            ))
          }
        </div>
        <h2 className="text-center">映像作品（クリックで再生）</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {
            movieWorks.map((work) => (
              <div key={work.vid} >
                <YouTubeEmbed vid={work.vid} />
                <WorkCard
                  title={work.title}
                  content={work.content}
                />
              </div>
            ))
          }
        </div>
        <Link
          href="/secret"
          className="no-underline"
        >&nbsp;</Link>
      </main>
    </>
  )
}
