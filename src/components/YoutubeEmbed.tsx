import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/YouTubeEmbed.module.css'

const inter = Inter({ subsets: ['latin'] })

const YouTubeEmbed = (props: {vid: string}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {clicked ?
        <div className={styles.youtubeEmbeddedVideo}>
          <iframe 
            src={`https://www.youtube.com/embed/${props.vid}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width={1280}
            height={720}
            allowFullScreen
          />
        </div>
        :
        <div className={styles.youtubeThumbnail}>
          <Image
            src={`http://img.youtube.com/vi/${props.vid}/maxresdefault.jpg`}
            alt="youtube video thumbnail"
            width={1280}
            height={720}
            onClick = {() => setClicked(!clicked)}
          />
        </div>
      }
    </>
  )
}

export default YouTubeEmbed