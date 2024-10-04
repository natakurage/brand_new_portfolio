import YouTubeEmbedToggler from '@/components/YoutubeEmbedClient';
import { YouTubePlayer, YouTubeThumbnail } from '@/components/YoutubeEmbedServer';

export default function YouTubeEmbed({ vid } : { vid: string }) {
  const player = <YouTubePlayer vid={vid} />
  const thumbnail = <YouTubeThumbnail vid={vid} />
  return (
    <YouTubeEmbedToggler player={player} thumbnail={thumbnail} />
  )
}
