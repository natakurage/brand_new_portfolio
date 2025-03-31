import Link from 'next/link'
import { Metadata } from 'next'
import GalleryCard from '@/components/GalleryCard'

export const metadata: Metadata = {
  title: "ギャラリー | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲに関する画像"
}

interface GalleryItem {
  src: string
  title: string
  content?: string
}

export default function Page() {
  const logos: GalleryItem[] = [
    {
      src: "/images/logos/NTK.png",
      title: "ナタクラゲ　クラゲ",
      content: "クラゲ"
    },
    {
      src: "/images/logos/鉈海月.png",
      title: "ナタクラゲ　アイコン",
    },
    {
      src: "/images/logos/minamo_logo_vector.svg",
      title: "千本槍みなも　ロゴ（SVG）",
    },
    {
      src: "/images/logos/natakurage_logo_vector.svg",
      title: "ナタクラゲ　ロゴ（SVG）",
    },
  ]
  const posters: GalleryItem[] = [
    {
      src: "/images/posters/poster2.png",
      title: "ポスター2（旧衣装）",
    },
    {
      src: "/images/posters/banner2.png",
      title: "バナー2（旧衣装）",
    },
    {
      src: "/images/posters/poster2_3.png",
      title: "ポスター2",
    },
    {
      src: "/images/posters/banner2_3.png",
      title: "バナー2",
    },
    {
      src: "/images/posters/poster3.png",
      title: "ポスター3（旧衣装）",
    },
    {
      src: "/images/posters/poster3_new.png",
      title: "ポスター3",
    }
  ]
  const others: GalleryItem[] = [
    {
      src: "/images/canvas.png",
      title: "千本槍みなも（旧衣装）"
    },
    {
      src: "/images/natakurage_newicon.png",
      title: "千本槍みなも",
      content: "🤘🤘"
    }
  ]
  return (
    <div className="not-prose space-y-5">
      <h1 className="text-center text-4xl">Gallery</h1>
      <h2 className="text-2xl">Logos and Icons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {
          logos.map((image) => (
            <GalleryCard
              key={image.src}
              src={image.src}
              title={image.title}
              content={image.content}
            />
          ))
        }
      </div>
      <h2 className="text-2xl">Posters and Banners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {
          posters.map((image) => (
            <GalleryCard
              key={image.src}
              src={image.src}
              title={image.title}
              content={image.content}
            />
          ))
        }
      </div>
      <h2 className="text-2xl">Others</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {
          others.map((image) => (
            <GalleryCard
              key={image.src}
              src={image.src}
              title={image.title}
              content={image.content}
            />
          ))
        }
      </div>
      <p className="text-center">
        作品利用については
        <Link href="/policy" className="underline">こちら</Link>
      </p>
    </div>
  )
}
