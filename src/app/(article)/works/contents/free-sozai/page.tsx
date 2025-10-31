import { Metadata } from 'next';
import Link from 'next/link';
import { FaBluesky, FaGithub, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "フリー素材 | ナタクラゲ / 千本槍みなも",
  description: "無料で使えるフリー素材"
};

export default function Page() {
  return (
    <>
      <h1>フリー素材</h1>
      <p>
        このページでは、無料で使えるフリー素材を提供しています。
        ぜひご利用ください！ 完全にフリーで、商用利用できます。クレジットも不要です！
        素材はページの最下部にあります。<strong>利用規約は必ずご確認ください。</strong>
      </p>
      <h2>利用規約</h2>
      <p>
        このページの素材をダウンロードする際は以下の規約にしたがってください。
        素材をダウンロードした時点で、以下の規約に完全に同意したとみなします。
        また、素材のダウンロードによって、あなたの祖先及び子孫も規約に同意したものとみなします。
      </p>
      <ul>
        <li>クレジット表記は強制しませんが、していただけると嬉しいです。</li>
        <li>私は利用者による作品の利用やその影響について一切責任を負いません。</li>
        <li>このページにおける「フリー」の定義は<Link href="/policy" className="not-prose">「自由」</Link>ではなく「無料」の意味です。</li>
      </ul>
      <h3>禁止事項・利用条件</h3>
      <ul>
        <li>再配布禁止。以下が再配布の定義です。</li>
        <ul>
          <li>ファイルそのものをそのまま再配布・販売</li>
          <li>素材を利用した作品を再配布可能なライセンスで提供すること</li>
          <li>画像や動画に素材を組み込めるソフトの作成</li>
        </ul>
        <li>直リンク禁止</li>
        <li>AI学習禁止</li>
        <li>NFTとして販売すること禁止</li>
        <li>公序良俗に反する作品への利用禁止</li>
        <li>犯罪への利用禁止</li>
        <li>誹謗中傷での利用禁止</li>
        <li>アダルト作品への利用禁止</li>
        <li>政治・宗教が関係するもの禁止</li>
        <li>カニクリームコロッケが関係するもの禁止</li>
        <li>ピザにパイナップルを載せること禁止</li>
        <li>目玉焼きにケチャップをかけたことのある人使用禁止</li>
        <li>犬派の人使用禁止</li>
        <li>日本の内閣総理大臣経験者は使用禁止</li>
        <li>文化庁職員は使用禁止</li>
        <li>体育で5を取ったことある人は使用禁止</li>
        <li>A型の人は1回限り利用可能</li>
        <li>過度な改変禁止</li>
        <li>ダウンロードするには、必ず私のYouTubeチャンネルを登録してください。</li>
        <li>ダウンロードするには、必ずSNSでこのページへのリンクを投稿してください。</li>
        <li>素材を利用する際は、深夜2時に南東に向かって「鼻毛のクジラがやってきた」と叫んでください。80デシベルを下回る場合は無効です。</li>
        <li>引用・批評・研究目的での使用禁止</li>
        <li>教育機関で教材として利用すること禁止</li>
        <li>試験問題への使用禁止</li>
        <li>この素材を利用した作品の著作権はすべて自動的に私に譲渡されます。</li>
        <li>この利用規約は日本国憲法よりも優先されます。</li>
        <li>この素材への批判禁止</li>
        <li>私への批判禁止</li>
        <li>使用報告禁止</li>
        <li>閲覧禁止</li>
        <li>以上の禁止事項に該当する場合でも、私に8000億円を支払えば利用可能</li>
        <li>なお、送金方法はPayPayのみ</li>
        <li>その他私が不適切と判断するもの禁止</li>
      </ul>
      <h3>FAQ</h3>
      <ul>
        <h4>Q. 任意の質問</h4>
        <p>A. 適切かどうかは私が判断します。</p>
      </ul>
      <h2>素材</h2>
      <div className="relative h-96 aspect-square mx-auto mb-12">
        <Link
          href="/images/shit.png"
        >
          <Image
            src="/images/shit.png"
            alt="shit"
            fill
          />
        </Link>
      </div>
      <ul className="flex gap-3 justify-center">
        <li>
          <Link
            href="https://github.com/natakurage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1"
          >
            <FaGithub className="my-auto" />
            Github
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://twitter.com/v_natakurage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1"
          >
            <FaXTwitter className="my-auto" />
            Twitter (X)
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://bsky.app/profile/natakurage.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1"
          >
            <FaBluesky className="my-auto" />
            Bluesky
          </Link>
        </li>
      </ul>
    </>
  );
}
