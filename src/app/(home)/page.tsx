import { Metadata } from 'next';
import Image from 'next/image';
import NatakurageLogo from "public/images/logos/natakurage_logo_vector.svg";
import MinamoLogo from "public/images/logos/minamo_logo_vector.svg";
import NavBar from '@/components/NavBar';
import { TopImage } from '@/components/TopImage';
import { CursorCircleMask } from '@/components/CursorCircleMask';
import Socials from '@/components/Socials';

export const metadata: Metadata = {
  title: "ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲ / 千本槍みなもの公式ホームページ。"
};

export default function Home() {
  
  return (
    <>
      <div className="h-screen relative">
        <TopImage
          hsrc="/images/posters/poster3_new.png"
          vsrc="/images/posters/poster3_new_vert.png"
          alt="Natakurage Key Visual"
          quality={100}
          fill
          priority
          className="object-cover z-[-2] object-[25%_50%] mask-gradient"
        />
        <noscript>
          <Image
            src="/images/posters/poster3_new.png"
            alt="Natakurage Key Visual"
            quality={100}
            fill
            priority
            className="object-cover z-[-2] object-[25%_50%] mask-gradient"
          />
        </noscript>
        <CursorCircleMask
          radius={100}
          attenuation={50}
          className="w-full h-full z-[-1] animate-back-blur-in"
        />
        <div className="flex flex-col w-full sm:w-1/2 ms-auto h-full">
          <div className="w-full h-1/2">
            <NatakurageLogo
              className="w-full h-full"
              fill="orangered"
              stroke="orangered"
              filter="drop-shadow(0 0 12px maroon)"
              />
          </div>
          <div className="w-full h-1/2">
            <MinamoLogo className="w-full h-full" />
          </div>
        </div>
      </div>
      <main className="mx-auto container my-5 space-y-10 px-3">
        <div className="mt-64 mb-32 text-2xl flex flex-col text-center">
          <span><span className="font-bold text-8xl">極限</span>による</span>
          <span><span className="font-bold text-8xl">解放</span>。</span>
        </div>
        <div className="space-y-1 text-center">
          <h1 className="text-4xl">
            <span style={{display: "inline-block"}}>ナタクラゲ /</span>&nbsp;
            <span style={{display: "inline-block"}}>千本槍みなも</span>
          </h1>
          <p>Musician, Writer, Programmer, 3D Artist / VTuber</p>
        </div>

        <NavBar className="mx-auto" />

        <div className="flex flex-row justify-center">
          <Socials size={32} noColor />
        </div>
      </main>
    </>
  );
}
