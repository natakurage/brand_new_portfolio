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
      <h1>ナタクラゲ / 千本槍みなもについて</h1>
      
      <h2>ナタクラゲ</h2>
      <div className="text-sm">ボカロP / 小説家 / プログラマー / 3DCGアーティスト / 「千本槍みなも」運営 / Reproducible Freedom主宰</div>
      <div className="h-64 relative">
        <Image
          src={getStoragePath("/images/logos/鉈海月.png")}
          alt="Natakurage Icon"
          fill
          priority
          className="w-1/2 m-auto object-contain"
        />
      </div>
      <p>
        2011年頃、ニンテンドー3DSを手にし、初めて自由にインターネットを使えるようになる。
        2018年に今につながるインターネット活動を開始。
        紆余曲折を経て、2023年に現在のYouTubeチャンネルを開設。
        日本の伝統文化と大衆文化をクリティカルに継承しつつ、独自の価値を生み出す試みを続けている。
      </p>
      <div
        className="not-prose flex flex-row flex-wrap gap-3 justify-center"
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
      <h2>千本槍みなも</h2>
      <div className="relative w-full">
        <VRMCanvas
          vrmFilename={getStoragePath("/3D/vrm/ナタクラゲ3.1_edit.vrm")}
          imgFilename={getStoragePath("/images/canvas2_sq.png")}
        />
      </div>
      <p>
        <Link href={getStoragePath("/3D/vrm/ナタクラゲ3.1_edit.vrm")}>
          Download VRM
        </Link>
      </p>
      <p className="not-prose">
        ナタクラゲによる &quot;ナタクラゲ3.1_edit.vrm&quot; © 2025 は、CC BY-SA 4.0のライセンス下に提供されています。
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
      <table className="text-base">
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
      <p>クラゲのような雰囲気を持つ無邪気な少女。
        ナタクラゲのイメージキャラクター、かつVTuberを務める。
        人類を研究するために人間界にやってきたと自称している。
        彼女と接触した人間が定期的に行方不明になることが報告されている。
        鉈を振り回して遊ぶのが趣味。泳ぐのは苦手。
        実は脳天のクラゲ状の生物が本体で、
        身体は17歳の少女を乗っ取って使っている。
        クラゲに見えるからクラゲと呼ばれているだけで、
        本当にクラゲなのかどうかは不明。
        クラゲの細胞や遺伝子は検出されておらず、一説には宇宙人ではないかと言われ、
        パンスペルミア説の有力な根拠になっている。字が汚い。
      </p>
      <p>触手に触れた人間に精神状態を変容させる毒物を注入できる。
        ナメクジが交尾の際に感ずる快楽や、
        何も準備してないのにいきなり発表させられる夢を見たときの不安、
        「こちら側のどこからでも切れます」で頭の血管が切れた時の怒りを感じさせるものがある。
      </p>
      <div className="collapse collapse-arrow">
        <input type="checkbox" />
        <h3 className="collapse-title">正体に関する考察</h3>
        <div className="collapse-content">
          <p>その起源は明確になっておらず、複数の説が唱えられている。
            毎年のようにその正体を考察する研究や調査が発表されているが、
            未だコンセンサスと言えるものはない。
            一説には、それらは本当の正体を隠すためのダミーとして意図的に出されているともいわれる。
            以下は報告の一例である。
          </p>
          <ul>
            <li>
              数年前に「みつき」という名の少女が海月神社（<span className="badge">null</span>県に存在）に行ったとき、
              境内にある小屋から不思議な光を見つけた。
              彼女は吸い寄せられるようにそこに向かい、小屋の中に侵入した。
              その中には木の札が置いてあり、
              そこに書かれていた「読み上げてはいけない真の名前」を読み上げてしまったことで、
              封印されていた怪異を復活させてしまい、彼女と融合してしまった。<br />
              <cite>久下新. 「ナタクラゲ」伝承の起源と発展. <span className="badge">null</span>県民俗学会誌, 2023, vol. 26, no. 1, p.23-35.</cite>
            </li>
            <li>
              公にはなっていない科学施設で行われた、人間と他の生物の能力を融合する実験により、
              クラゲ型生命体と被検体の少女が融合された。
              しかし人間を恨んでいたため施設を破壊して脱走した。<br />
              <cite>国際科学研究健全化機構. 秘密研究所の実態に関する調査報告書. 2023.</cite>
            </li>
            <li>
              生命は宇宙から飛来した物質から生まれた（パンスペルミア説）。
              その際に飛来した物質と同じもの、
              あるいはそれと起源を同じくする物質が再び地球に飛来し、
              それが宿主と融合しながら成長したことで今の状態となった。<br />
              <cite>弁康則. 新説・生命の起源. 鏡虫出版, 2023.</cite>
            </li>
          </ul>
          <p>このうち最も有力なのは最初の説と言われる。しかし、疑問点も残る。
            例えば海月神社にはクラゲの意匠が所々に存在するが、
            所在地は海から何十kmも離れた場所にあり、
            なぜ海月神社と呼ばれているのかは不明である。
            そもそも何が祀られているのかもよくわかっておらず、
            クラゲとは無関係である可能性もある。
          </p>
          <p>海月神社の言い伝えとして、山姥の伝説が残っている。
            それによると、海月神社にほど近い山に、恐ろしい山姥が棲んでいるという噂があった。
            ある日3人の若い男たちが山姥退治に向かった。しかし返り討ちに遭い、
            山姥は山を下りて周囲の街を無差別に襲ったという。
          </p>
        </div>
      </div>
      <h2>歴史</h2>
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
