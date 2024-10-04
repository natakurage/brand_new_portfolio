"use client"

import { ReactNode, useState } from 'react'

export default function YouTubeEmbedToggler(
  { player, thumbnail }
  : { player: ReactNode, thumbnail: ReactNode }
) {
  console.log(player, thumbnail)
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {
        clicked ? player
          : <div onClick={() => setClicked(!clicked)}>
              { thumbnail }
            </div>
      }
    </>
  )
}
