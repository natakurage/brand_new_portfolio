import fs from "fs"
import path from "path"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { MdWatchLater } from "react-icons/md"
import { YouTubePlayer } from "@/components/YoutubeEmbedServer"
import Link from "next/link"

interface Metadata {
  title: string
  date: string
  author: string
}

export async function generateMetadata({ params } : { params: { slug: string }}) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "markdowns", "articles", `${slug}.md`)
  let metadata: Metadata
  try {
    const { data: { title, date, author } } = matter(fs.readFileSync(filePath, "utf-8"))
    metadata = { title, date, author}
  } catch (error) {
    notFound()
  }
  return {
    title: `${metadata.title} | ナタクラゲ / 千本槍みなも`,
  }
}

export default function ArticlePage({ params } : { params: { slug: string }}) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "markdowns", "articles", `${slug}.md`)
  let metadata: Metadata
  let markdown = ""
  try {
    const { data: { title, date, author }, content } = matter(fs.readFileSync(filePath, "utf-8"))
    metadata = { title, date, author}
    markdown = content
  } catch (error) {
    notFound()
  }
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <article className="prose mx-auto">
          <h1>{metadata.title}</h1>
          <div className="flex flex-row justify-between">
            <span>{metadata.author}</span>
            <div className="flex flex-row">
              <MdWatchLater className="my-auto" />
              <time>{metadata.date}</time>
            </div>
          </div>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => {
                // YouTubeリンクを検出
                if (href) {
                  const url = new URL(href)
                  let vid = ""
                  if (url.hostname === "www.youtube.com") {
                    vid = url.searchParams.get("v") || ""
                    return <YouTubePlayer vid={vid} />
                  } else if (url.hostname === "youtu.be") {
                    vid = url.pathname.slice(1)
                    return <YouTubePlayer vid={vid} />
                  } else {
                    return href &&
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </Link>
                  }
                }
              }
            }}
          >
            {markdown}
          </Markdown>
        </article>
      </main>
    </>
  )
}
