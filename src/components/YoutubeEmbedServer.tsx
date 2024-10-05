import Image from 'next/image'

export function YouTubePlayer({ vid }: { vid: string }) {
  return (
    <iframe 
      src={`https://www.youtube.com/embed/${vid}`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full aspect-video"
    />
  )
}

export function YouTubeThumbnail({ vid }: { vid: string }) {
  return (
    <Image
      src={`http://img.youtube.com/vi/${vid}/maxresdefault.jpg`}
      alt="youtube video thumbnail"
      width={1280}
      height={720}
    />
  )
}
