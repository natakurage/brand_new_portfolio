import Link from 'next/link';
import YouTubeEmbed from '@/components/YoutubeEmbed';
import { Metadata } from 'next';
import Image from 'next/image';
import worksData from '@/data/works.json';
import { getStoragePath } from '@/utils/imagePath';

export const metadata: Metadata = {
  title: "作品 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲがこれまでに作った作品。"
};

interface WorkCardProps {
  title: string
  content: string
  vid?: string
  img?: string
  href?: string
}

interface WorkCardSectionProps {
  title: string
  titleTag?: "h2" | "h3"
  subtitle?: string
  works: WorkCardProps[]
}

interface WorkCardHeading {
  title: string
  tag: "h2"
}

const isWorkCardHeading = (value: unknown): value is WorkCardHeading => {
  return typeof value === "object" && value !== null &&
    "title" in value && typeof (value as WorkCardHeading).title === "string" &&
    "tag" in value && (value as WorkCardHeading).tag === "h2";
};

function WorkCard({ title, img, content, vid, href }: WorkCardProps) {
  return (
    <div className="flex flex-col space-y-5">
      {vid && <YouTubeEmbed vid={vid} />}
      {
        img &&
        <div
          className="w-full aspect-video relative"
        >
          <Image
            src={getStoragePath(img)}
            alt={title}
            fill
            priority
            className="m-auto object-contain"
          />
        </div>
      }
      <div className="relative">
        <div className="card my-3">
          <div className="card-body p-0">
            <h3 className="card-title">{title}</h3>
            <p>{content}</p>
          </div>
        </div>
        {href && <Link
          href={href}
          target={href.startsWith("/") ? undefined : "_blank"}
          rel={href.startsWith("/") ? undefined : "noopener noreferrer"}
          className="absolute top-0 left-0 block w-full h-full"
        />}
      </div>
    </div>
  );
}

function WorkCardSection({ title, titleTag = "h2", subtitle, works }: WorkCardSectionProps) {
  return (
    <section>
      <div className="space-y-2">
      {titleTag === "h2" ? (
        <h2 className="text-center text-3xl">{title}</h2>
      ) : (
        <h3 className="text-center text-2xl">{title}</h3>
      )}
      {subtitle && <p className="text-center text-sm">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {works.map((work) => <WorkCard key={work.title} {...work} />)}
      </div>
    </section>
  );
}


export default function WorksPage() {
  const works = worksData as (WorkCardHeading | WorkCardSectionProps)[];
  return (
    <div className="not-prose space-y-5">
      {
        works.map((section) => (
          isWorkCardHeading(section) ? (
            <h2 key={section.title} className="text-center text-3xl">{section.title}</h2>
          ) :
          <WorkCardSection key={section.title} {...section}/>
        ))
      }
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
