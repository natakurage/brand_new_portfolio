import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ポリシーと規約 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲの作品の利用や注意事項など"
};

export default function PolicyPage() {
  return (
    <>
      <h1>ポリシーと規約</h1>
      <h2>ナタクラゲの作品について</h2>
      <p className="text-3xl text-center">Free as in speech.</p>
      <p>
        ※ナタクラゲは法律の専門家ではないため、最終的な判断はライセンスの条文と法的解釈に基づいて行ってください。
      </p>
      <h3>基本方針</h3>
      <p>
        ナタクラゲは、自由こそが文化の発展において最も重要なことであると考えます。
        そのため、ナタクラゲの作品は原則として自由なライセンスの元で提供します。
        作品が未来永劫自由であり続けるため、原則としてコピーレフトライセンスを採用します。
      </p>
      <h3>運用</h3>
      <p>
        基本的に、作品ごとにライセンスを付与します。
        トラブル防止のため、サイト単位を超える一括適用は行いません。
        ライセンスが不明確な作品がある場合、<Link href="/contact">こちら</Link>からお問い合わせください。
        ライセンスが明確な場合、問い合わせは不要です。
      </p>
      <h3>互換性</h3>
      <p>
        過去、独自ライセンスを採用していた時期がありました。
        ほとんどないとは思いますが、2024年10月20日までに入手した作品のコピーはその時点での独自ライセンスで利用可能です。
        独自ライセンスは法的な地位が不明確であるため、可能な限り新ライセンスに従うことを強く推奨します。
      </p>
      <div className="flex flex-row space-x-3">
        <Link href="/policy/archives">過去のライセンスを見る（アーカイブ）</Link>
      </div>
      <h3>このサイト</h3>
      <p>
        本サイト上のコンテンツは、特に記載がない限り、
        <Link
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-SA 4.0
        </Link>で利用できます。ソースコードは別途ライセンスで公開されます。
      </p>
      <h3>Q&A</h3>
      <p>
        ※以下の記述の多くはCC BY-SAを前提にしています。
        個別の作品のライセンスによって変化する場合があります。
        また、これはナタクラゲの見解を示すものにすぎず、
        実際のライセンス内容や法的な解釈が優先されます。
      </p>
      <h4>Q. 営利目的で利用できますか？</h4>
      <p>できます。（明示的に禁止しない場合）</p>
      <h4>Q. 改変はできますか？</h4>
      <p>できます。（明示的に禁止しない場合）</p>
      <h4>Q. 再配布はできますか？</h4>
      <p>ライセンスの範囲内で可能です。</p>
      <h4>Q. 報告は必要ですか？</h4>
      <p>ライセンスに従う限り不要です。</p>
      <h4>Q. どのようにライセンス表記すればいいですか？</h4>
      <p>「TASL（Title, Author, Source, License）」を表示してください。例えば：</p>
      <blockquote>
        ナタクラゲによる
        <Link href="https://blog.natakurage.cc/songs/syrup">「シロップ」</Link>
        は、
        <Link href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Link>
        の下で提供されています。
      </blockquote>
      <p>
        重要なのは、作品のタイトル、作者名、ソース（URL）、ライセンスの情報を明示することです。
        リンクは可能な限り行ってください。
      </p>
      <h4>Q. 年齢制限がある作品に利用できますか？
        政治・宗教に関わる作品に利用できますか？
        違法性の懸念がある作品に利用できますか？
      </h4>
      <p>
        可能です。私の採用するライセンスでは、ナタクラゲが作品の利用目的や方法を制限することはできません。
        ナタクラゲはいかなる利用においても一切無関係とし、なんらの責任も負わないものとします。
      </p>
      <p>
        （私見）この点を明示的に許可した例は非常に限られています。
        しかし、真に作品が「自由」である為には、こうでなくてはならないと考えます。
      </p>
      <h4>Q. 削除された作品は利用できますか？</h4>
      <p>できます。作品が削除されたかに関係なく、入手時のライセンスに従って利用できます。</p>
      <h4>Q. 私的な目的で利用できますか？</h4>
      <p>できます。ナタクラゲの採用するライセンスは著作権法に定められたいかなる例外事項も妨げません。</p>
      <h4>Q. あなたの作品を利用してグッズを作ることはできますか？</h4>
      <p>はい、できます。ライセンスを遵守する限り、好きにグッズを作って、それを販売することも構いません。
        これは日本における常識とは異なりますが、実際に可能です。</p>
      <p>しかしながら、それらのグッズはあくまで「非公式」グッズです。
        「公式」と名乗ることはできません。なぜか？ <strong>それは嘘だからです。</strong>
        ライセンスが許そうが許すまいが、嘘をついていいことはありません。
      </p>
      <p>なお、CCライセンスでは、「許諾者があなたやあなたの利用行為を支持していると示唆するような方法」
        でのクレジットを禁止しています。これを素直に読めば、「公式」を詐称することはライセンス違反となりそうです。
      </p>
      <h4>Q. AIの学習データや入力として利用できますか？</h4>
      <p>
        これに関しては、明確な規定や合意が存在しないため、簡単には答えられません。
        ただし、ナタクラゲとしては以下の見解を持ちます。
      </p>
      <ul>
        <li>前提として、AIを用いて作品を私的な範囲で利用することは一切問題がない</li>
        <li>
          大規模な基盤モデルの学習にライセンスを適用させることは非現実的であり、
          かつ大量のデータの一部であるがゆえに出力に与える影響は限定的であるため、
          学習したことをもって即座に二次利用と見做されるべきではない
        </li>
        <li>
          出力が元の作品と近しい場合に限り依拠性が認められる余地がある
        </li>
      </ul>
      <p>
        以上の見解に適合するような利用であればまず問題ないと思っていただいて構いません。
        ただし、いかなる場合でもナタクラゲは一切の責任を負わないものとします。
      </p>
      <h4>Q. ライセンスが見当たらないんですが</h4>
      <p>
        <Link href="/contact">こちら</Link>からお問い合わせください。
        ただし、YouTube動画に関しては、一部の動画以外は意図的にライセンス付与をしていません。
        これはCCと互換性のないと思われる素材が含まれる可能性が高いためです。
        しかしこれらの利用を一律禁止することはナタクラゲ自身の方針に反します。
        そのため、YouTubeやその他動画コンテンツのうち、個別のライセンスが適用されていない場合のみ以下のような指針を設けます。
      </p>
      <ol>
        <li>CCに準ずるクレジット表記を行えば、営利目的を含むいかなる目的での利用も妨げない。</li>
        <li>ただしナタクラゲはその利用について一切の責任を負わず、無関係な立場を維持する。</li>
      </ol>
    </>
  );
}
