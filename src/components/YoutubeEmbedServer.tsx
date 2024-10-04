import Image from 'next/image'

export function YouTubePlayer({ vid }: { vid: string }) {
  return (
    <div className="">
      <iframe 
        src={`https://www.youtube.com/embed/${vid}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        width={1280}
        height={720}
        allowFullScreen
      />
    </div>
  )
}

export function YouTubeThumbnail({ vid }: { vid: string }) {
  return (
    <div className="">
      <Image
        src={`http://img.youtube.com/vi/${vid}/maxresdefault.jpg`}
        alt="youtube video thumbnail"
        width={1280}
        height={720}
      />
    </div>
  )
}
