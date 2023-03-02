import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/YouTubeEmbed.module.css'

const inter = Inter({ subsets: ['latin'] })

const YouTubeEmbed = (props: {vid: string, width: number}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {clicked ?
        <div className={styles.youtubeEmbeddedVideo}>
          <iframe 
            src={`https://www.youtube.com/embed/${props.vid}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width={props.width}
            height={props.width*9/16}
            allowFullScreen
          />
        </div>
        :
        <div className={styles.youtubeThumbnail}>
          <Image
            src={`http://img.youtube.com/vi/${props.vid}/mqdefault.jpg`}
            alt="youtube video thumbnail"
            width={props.width}
            height={Math.floor(props.width*9/16)}
            onClick = {() => setClicked(!clicked)}
          />
        </div>
      }
    </>
  )
}

export default YouTubeEmbed