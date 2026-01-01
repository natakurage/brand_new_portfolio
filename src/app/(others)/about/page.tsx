import VRMCanvas from '@/components/VRMCanvas';
import { Metadata } from 'next';
import { MdWatchLater, MdOutlineScience } from "react-icons/md";
import { LuHandMetal } from "react-icons/lu";
import { FaJs, FaRegHandRock, FaPython } from 'react-icons/fa';
import { GiGuitar, GiMusicalScore } from "react-icons/gi";
import { TbBrandCpp, TbWorld } from "react-icons/tb";
import { SiBlender, SiTypescript } from "react-icons/si";
import Image from 'next/image';
import Link from 'next/link';
import about from '@/data/about.json';
import { getStoragePath } from '@/utils/imagePath';
import NTK from "public/images/logos/NTK.svg";

export const metadata: Metadata = {
  title: "ナタクラゲ / 千本槍みなもについて | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲ、およびVTuber千本槍みなもについての説明",
};

const keywords = [
  {
    text: "ネットサーフィン",
    icon: TbWorld,
    colorClass: "bg-sky-700"
  },
  {
    text: "ヘヴィメタル",
    icon: LuHandMetal,
    colorClass: "bg-purple-800"
  },
  {
    text: "ロック",
    icon: FaRegHandRock,
    colorClass: "bg-orange-800"
  },
  {
    text: "ギター",
    icon: GiGuitar,
    colorClass: "bg-red-700"
  },
  {
    text: "曲作り",
    icon: GiMusicalScore,
    colorClass: "bg-pink-700"
  },
  {
    text: "自然科学",
    icon: MdOutlineScience,
    colorClass: "bg-lime-600"
  },
  {
    text: "Python",
    icon: FaPython,
    colorClass: "bg-blue-700"
  },
  {
    text: "JavaScript",
    iconColorClass: "text-neutral-800",
    icon: FaJs,
    colorClass: "bg-yellow-400",
  },
  {
    text: "TypeScript",
    icon: SiTypescript,
    colorClass: "bg-blue-700",
  },
  {
    text: "C++",
    icon: TbBrandCpp,
    colorClass: "bg-indigo-800"
  },
  {
    text: "Blender",
    icon: SiBlender,
    colorClass: "bg-orange-600",
  }
];

export default function AboutPage() {
  const { profileTable, timeLineEvents } = about;
  return (
    <>
      <div className="text-6xl text-end rotate-6 z-10 relative font-bold">
        <span className="inline-block">痛みを</span>
        <span className="inline-block">越えろ。</span>
      </div>
      <div className="flex flex-col sm:flex-row-reverse items-center">
        <div className="max-w-64 sm:w-1/3 p-2 shrink-0">
          <NTK
            className="w-full h-full"
            filter="drop-shadow(0 0 24px maroon)"
          />
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold">ナタクラゲ</h2>
          <div className="text-sm">作曲 / ギター / 小説 / プログラマー / 3DCGアーティスト / 「千本槍みなも」運営 / Reproducible Freedom主宰</div>
        </div>
      </div>
      <p className="prose dark:!prose-invert mx-auto">
        2011年頃、某社のゲーム機を手にし、初めて自由にインターネットを使えるようになる。
        2018年に今につながるインターネット活動を開始。
        紆余曲折を経て、2023年に現在のYouTubeチャンネルを開設。
        人間の絶望や執着、社会と個人の関係、科学技術などをテーマに音楽・文章・プログラム・3DCG作品を制作・発表している。
        日本の伝統文化とサブカルチャーをクリティカルに継承しつつ、グローバルな視点から独自の価値を生み出す試みを続けている。
      </p>
      <div
        className="flex flex-row flex-wrap gap-3 justify-center"
      >
      {
        keywords.map(({ text, icon: Icon, colorClass, iconColorClass: className }) => 
          <div
            key={text}
            className={`tooltip p-3 rounded-md ${colorClass} hover:translate-y-[-0.1rem] transition-[transform]`}
            data-tip={text}
          >
            <Icon size={48} color={className} />
          </div>
        )
      }
      </div>
      <div className="text-4xl sm:text-6xl -rotate-6 z-10 relative font-bold text-start my-5">
        <span className="inline-block">地獄でお会い</span>
        <span className="inline-block">しましょう。</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="relative max-w-96 sm:w-2/3 p-2 shrink-0 w-full h-96 sm:h-auto sm:self-stretch">
          <Image
            src={getStoragePath("/images/natakurage_choke.png")}
            alt="千本槍みなも"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-3xl text-center font-bold">千本槍みなも</h2>
          <table className="table table-sm">
            <tbody>
            {
              profileTable.map(({ key, value }) =>
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
      <div className="prose dark:!prose-invert mx-auto">
        <p>
          人類を抹殺するために海底2000mからやってきたクラゲ型の死神。
          その触手で人間を絡め取り、金切り声をあげながら薙刀を突き刺して命を奪う。
          薙刀の柄はイッカクの角を加工して作られており、穂の切れ味は風下にいるだけで怪我をするほどと言われる。
          心拍数が非常に高く、毎分200～300回に達することもある。
          毒は持っていないが、その姿を肉眼で直視した者は精神に異常をきたし、最終的に自ら命を絶つと言われている。
        </p>
        <p>
          身体の大部分は未特定の人間の少女がベースとなっているが、外皮や触手部分は異なる遺伝情報を持っている。
          遺伝子解析の結果、地球上のどの生物とも一致しない未知の生命体であることが判明している。
        </p>
        <div className="collapse collapse-arrow">
          <input type="checkbox" />
          <h3 className="collapse-title">詳細</h3>
          <div className="collapse-content">
            <p>初期の遭遇時、その身体的特徴から暫定的にスティギオメデューサ・ギガンティア（Stygiomedusa gigantea）
              の亜種として分類されたが、後の遺伝子解析により全く異なる未知の生命体であることが判明した。
              この遺伝子解析では遺伝子の一部に自然界には見られない塩基が含まれていることが示されており、人工生命説が浮上している。
              しかし3度の海底探査においても起源を示す手掛かりは発見されていない。
            </p>
            <p>行き詰まりを見せる科学的調査に対し、宗教的アプローチを試みる動きもある。
              一部の宗教団体はナタクラゲを神格的なものとみなし、儀式や生贄が有効であると主張している。
              また、ナタクラゲを崇拝するカルト的な動きも確認されている。
              これらのアプローチには科学的な根拠はないが、
              初期の遭遇における浮遊や物体の透過などの現象は既存の科学では説明が困難であることも事実である。
            </p>
            <p>
              出現の度に大きな被害をもたらすナタクラゲに対し、事態の鎮圧のため数度の交戦が発生したが、
              いずれも捕獲には至っていない。ただしサンプルの一部採取には成功しており、これらは遺伝子解析や生理学的研究に利用されている。
              ナタクラゲの攻撃は非常に迅速かつ致命的であり、対処には高度な専門知識と装備が必要とされる。
            </p>
            <p>
              融合された少女については、その出自や経緯は未だ不明である。
              ただし遺伝子解析から日本人女性であることが強く示唆されている。
              またDNAのメチル化パターンの分析から、融合時の年齢は16～20歳程度であったと推定されている。
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full mask mask-squircle">
        <VRMCanvas
          vrmFilename={getStoragePath("/3D/vrm/ナタクラゲ4.vrm")}
          imgFilename={getStoragePath("/images/new_avatar.png")}
        />
      </div>
      <Link
        href={getStoragePath("/3D/vrm/ナタクラゲ4.vrm")}
        className="btn btn-primary my-5"
      >
        Download VRM
      </Link>
      <p>
        ナタクラゲによる &quot;ナタクラゲ4.vrm&quot; © 2025 は、CC BY-SA 4.0のライセンス下に提供されています。
        <Link
          href="https://creativecommons.org/licenses/by-sa/4.0/"
        >
          <Image
            src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg"
            alt=""
            width={88}
            height={31}
            className="inline"
          />
        </Link>
      </p>
      <ul className="not-prose timeline timeline-vertical">
      {
        timeLineEvents.map(({ time, title, content }, i) => {
          return (<li key={title}>
            {
              i !== 0 && <hr />
            }
            <div className="timeline-middle">
              <MdWatchLater />
            </div>
            <div className={i % 2 === 0 ? "timeline-start" : "timeline-end"}>
              <time className="font-mono italic">{time}</time>
              <div className="text-lg font-black">{title}</div>
              {content}
            </div>
            {
              i !== timeLineEvents.length - 1 && <hr />
            }
          </li>
          );
        })
      }
      </ul>
    </>
  );
}
