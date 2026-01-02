import { Metadata } from 'next';
import Image from 'next/image';
import NatakurageLogo from "public/images/logos/natakurage_logo_vector.svg";
import MinamoLogo from "public/images/logos/minamo_logo_vector.svg";
import NavBar from '@/components/NavBar';
import { TopImage } from '@/components/TopImage';
import { CursorCircleMask } from '@/components/CursorCircleMask';
import Socials from '@/components/Socials';
import { getStoragePath } from '@/utils/imagePath';

export const metadata: Metadata = {
  title: "ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲ / 千本槍みなもの公式ホームページ。"
};

export default function Home() {

  return (
    <>
      <div className="relative">
        <div className="h-screen absolute top-0 left-0 w-full z-[-1]">
          <TopImage
            hsrc={getStoragePath("/images/posters/poster4_h_new.png")}
            vsrc={getStoragePath("/images/posters/poster4_v_new.png")}
            alt="Natakurage Key Visual"
            quality={100}
            fill
            preload
            className="object-cover object-[50%_50%] mask-gradient"
          />
          <noscript>
            <Image
              src={getStoragePath("/images/posters/poster4_h_new.png")}
              alt="Natakurage Key Visual"
              quality={100}
              fill
              preload
              className="object-cover object-[50%_50%] mask-gradient"
            />
          </noscript>
          <CursorCircleMask
            radius={100}
            attenuation={50}
            className="w-full h-full animate-back-blur-in"
          />
        </div>
        <div className="flex flex-col items-center gap-64">
          <div className="flex flex-row w-full justify-between animate-blur-out">
            <div className="w-1/2 sm:w-1/3 p-2 sm:p-5">
              <NatakurageLogo
                className="w-full h-full"
                fill="#ED5126"
                stroke="#ED5126"
                filter="drop-shadow(0 0 12px maroon)"
                />
            </div>
            <div className="w-1/2 sm:w-1/3 p-2 sm:p-5">
              <MinamoLogo className="w-full h-full" />
            </div>
          </div>
          <main className="mx-auto container space-y-10 px-3 animate-slide-in-bottom animate-blur-out">
            <div className="flex flex-col md:flex-row gap-y-24 justify-center items-center">
              <div className="text-2xl flex flex-col text-center md:shrink-0">
                <span className="inline-block"><span className="font-bold text-8xl">極限</span>による</span>
                <span className="inline-block"><span className="font-bold text-8xl">解放</span>。</span>
              </div>
              <div className="space-y-1 text-center">
                <h1 className="text-4xl">
                  <span className="inline-block">ナタクラゲ /</span>&nbsp;
                  <span className="inline-block">千本槍みなも</span>
                </h1>
                <p>&quot;Virtual&quot; Metal Project / Writer, Programmer, 3D Artist / VTuber</p>
              </div>
            </div>

            <NavBar className="mx-auto" />
            <Socials size={32} noColor />
          </main>
        </div>
      </div>
    </>
  );
}
