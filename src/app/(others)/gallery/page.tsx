import Link from 'next/link';
import { Metadata } from 'next';
import GalleryCard from '@/components/GalleryCard';
import galleryData from '@/data/gallery.json';
import { getStoragePath } from '@/utils/imagePath';

export const metadata: Metadata = {
  title: "ギャラリー | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲに関する画像"
};

interface GalleryItem {
  src: string
  title: string
  content?: string
}

interface GallerySection {
  title: string
  items: GalleryItem[]
}

export default function Page() {
  const gallerySections: GallerySection[] = galleryData;
  return (
    <div className="not-prose space-y-5">
      <h1 className="text-center text-4xl font-bold">Gallery</h1>
      {
        gallerySections.map(({ title, items }) => (
          <section key={title}>
            <h2 className="text-2xl font-bold">{ title }</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5">
              {
                items.map((image) => (
                  <GalleryCard
                    key={image.src}
                    src={getStoragePath(image.src)}
                    title={image.title}
                    content={image.content}
                  />
                ))
              }
            </div>
          </section>
        ))
      }
      <p className="text-center">
        作品利用については
        <Link href="/policy" className="underline">こちら</Link>
      </p>
    </div>
  );
}
