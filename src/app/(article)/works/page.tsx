import Link from 'next/link';
import YouTubeEmbed from '@/components/YoutubeEmbed';
import { Metadata } from 'next';
import Image from 'next/image';

function WorkCard({ title, content } : { title: string, content: string}) {
  return (
    <div className="card my-3">
      <div className="card-body p-0">
        <h3 className="card-title">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "作品 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲがこれまでに作った作品。"
};

export default function WorksPage() {
  const musicWorks = [
      {
        vid: "69s14zGHevU",
        title: "ナタクラゲ",
        content: "森の中に、不思議な格好をしたかわいらしい少女がいた。"
          + "近寄ってみると、突然鉈を持って襲いかかってきた。"
          + "彼女は街や海に繰り出し、人々を次々に殺して回る。"
          + "まるで、何かの鬱憤を晴らすかのように。",
        blogUrl: "https://blog.natakurage.cc/songs/natakurage"
      },
      {
        vid: "ZvNJcR_AuX8",
        title: "シロップ",
        content: "乾いた心は、粘り気を帯びて、そのまま干からびていく。",
        blogUrl: "https://blog.natakurage.cc/songs/syrup"
      },
      {
        vid: "zF7bAz8IelU",
        title: "懲役80年",
        content: "少女は、物心ついた頃から実験施設に監禁されていた。"
          + "実験や雑居房での苦しみの日々――。",
        blogUrl: "https://blog.natakurage.cc/songs/80-years-in-prison"
      },
      {
        vid: "KyrHOWM8wEI",
        title: "絶頂、その果て",
        content: "実験施設から偶然にも脱出した主人公は、心優しい農夫の家族に拾われる。"
        + "そこで出会った義兄弟たちと、夏休みのある日に海に行く。"
        + "クラゲに刺されたことすらも楽しかったような、かけがえのない、充実した一日。"
        + "人生で一番幸せな日。一方で、その先には何もないのではないかという不安。その不安は、後に現実のものとなる。",
        blogUrl: "https://blog.natakurage.cc/songs/climax-the-end"
      },
      {
        vid: "KQgwsJLhch8",
        title: "合法投棄",
        content: "少女は学校にも通い始める。"
        + "だが同時に、義兄弟たちが別の友達を作りはじめ、距離が広がっていくことになる。"
        + "外に友達を作れなかった彼女はある日、孤独に耐え切れなくなり、"
        + "一緒に遊べないことについて喧嘩し、孤児院にあった鉈で怪我をさせてしまう。"
        + "これがもとで、彼女はさらに追い詰められていく。",
        blogUrl: "https://blog.natakurage.cc/songs/legal-dumping"
      }
  ];
  const movieWorks = [
    {
      vid: "ThX-p6wxrC4",
      title: "まもなく、4番線に、\"死\"がまいります。",
      content: ""
    },
    {
      vid: "J1bqglXcLAQ",
      title: "失踪していた友人が見つかりました",
      content: ""
    }
  ];
  const webWorks = [
    {
      title: "p5.js Ray Tracer",
      img: "/images/works/p5-example.png",
      href: "https://p5-raytracer.natakurage.cc",
      content: "p5.js + TypeScriptで作ったパストレーサーです。"
    },
    {
      title: "ナタクラゲのドブ川水族館",
      img: "/images/works/blog.png",
      href: "https://blog.natakurage.cc",
      content: "Next.js + TailwindCSS + Vercel + Contentfulで作ったブログです。"
    },
    {
      title: "完全にオリジナルな曲",
      href: "/works/contents/completely-original-song",
      content: "完全にオリジナルな曲を作れるサイト。"
    },
    {
      title: "Twitter Search",
      href: "/works/contents/twitter-search",
      content: "Twitterの検索画面に飛ぶだけのサイト（トレンドを見なくて済むように）"
    },
    {
      title: "MineSweeper",
      href: "/works/contents/minesweeper",
      content: "ただのマインスイーパー"
    }
  ];
  const otherWorks = [
    {
      title: "永遠のゆく先へ",
      img: null,
      href: "https://note.com/minamo_ntk/m/mb1de2ad66365",
      content: "連載小説「永遠のゆく先へ」 悩める少女たちのSF冒険物語！"
    }
  ];
  return (
    <div className="not-prose space-y-5">
      <div className="space-y-2">
        <h2 className="text-center text-3xl">Discography</h2>
        <p className="text-center text-sm">Click to play</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {
          musicWorks.map((work) => (
            <div
              key={work.vid}
              className="flex flex-col space-y-5"
            >
              <YouTubeEmbed vid={work.vid} />
              <div className="relative">
                <WorkCard
                  title={work.title}
                  content={work.content}
                />
                <Link
                  href={work.blogUrl}
                  target={work.blogUrl.startsWith("/") ? undefined : "_blank"}
                  rel={work.blogUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                  className="absolute top-0 left-0 block w-full h-full"
                />
              </div>
            </div>
          ))
        }
      </div>
      <div className="space-y-2">
        <h2 className="text-center text-3xl">Videos</h2>
        <p className="text-center text-sm">Click to play</p>
      </div>
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
      <h2 className="text-center text-3xl">Web</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {
          webWorks.map((work) => (
            <div key={work.title} className={"relative" + ( !work.img ? " self-end" : "")} >
              {
                work.img &&
                <div
                  className="w-full aspect-video relative"
                >
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    priority
                    className="m-auto object-contain"
                  />
                </div>
              }
              <WorkCard
                title={work.title}
                content={work.content}
              />
              <Link
                href={work.href}
                target={work.href.startsWith("/") ? undefined : "_blank"}
                rel={work.href.startsWith("/") ? undefined : "noopener noreferrer"}
                className="absolute top-0 left-0 block w-full h-full"
              />
            </div>
          ))
        }
      </div>
      <h2 className="text-center text-3xl">Others</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {
        otherWorks.map((work) => (
          <div key={work.title} className={"relative" + ( !work.img ? " self-end" : "")} >
            {
              work.img &&
              <div
                className="w-full aspect-video relative"
              >
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  priority
                  className="m-auto object-contain"
                />
              </div>
            }
            <WorkCard
              title={work.title}
              content={work.content}
            />
            <Link
              href={work.href}
              target={work.href.startsWith("/") ? undefined : "_blank"}
              rel={work.href.startsWith("/") ? undefined : "noopener noreferrer"}
              className="absolute top-0 left-0 block w-full h-full"
            />
          </div>
        ))
      }
      </div>
      <p className="text-center">
        作品利用については
        <Link href="/policy" className="underline">こちら</Link>
      </p>
      <Link
        href="/secret"
        className="no-underline"
      >&nbsp;</Link>
      <span className="text-transparent">←ここに何かある</span>
    </div>
  );
}
