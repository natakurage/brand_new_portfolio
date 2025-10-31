import { Metadata } from 'next';
import { HiMusicNote } from "react-icons/hi";
import COSMain from '@/components/COSMain';
import Socials from '@/components/Socials';

export const metadata: Metadata = {
  title: "完全にオリジナルな音楽が聴けるサイト！！！！！！ | ナタクラゲ / 千本槍みなも",
  description: "完全にオリジナルな音楽"
};

export default function CompletelyOriginalSongPage() {
  return (
    <>
      <h1>完全にオリジナルな音楽がここにあります。</h1>
      <p>
        世間で知られている音楽はパクリだらけで酷いと思いませんか？ 
        でも大丈夫！ このサイトでは、<strong>完全にオリジナルな</strong>
        音楽を、<strong>誰でも無料で</strong>お楽しみいただけます！
      </p>
      <HiMusicNote size={200} className="mx-auto" />
      <COSMain />
      <Socials size={32} noColor className="mt-5" />
    </>
  );
}
