import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import path from "path"
import { MdWatchLater } from "react-icons/md"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function License({ version }: { version: string }) {
  const filePath = path.join(process.cwd(), "markdowns", "licenses", `${version}.md`)
  let markdown = ""
  let _date = ""
  try {
    const { data: { date }, content } = matter(fs.readFileSync(filePath, "utf-8"))
    markdown = content
    _date = date
  } catch (error) {
    console.log(error)
    notFound()
  }
  return (
    <>
      <main className="container mx-auto my-10 space-y-10 px-3">
        <article className="prose mx-auto">
          <h2>ナタクラゲライセンス v{version}</h2>
          <div className="flex flex-row justify-end">
            <div className="flex flex-row">
              <MdWatchLater className="my-auto" />
              <time>{_date}</time>
            </div>
          </div>
          <Markdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </Markdown>
        </article>
      </main>
    </>
  )
}
