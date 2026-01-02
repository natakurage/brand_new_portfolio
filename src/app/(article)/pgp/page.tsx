import { Metadata } from 'next';
import { Key, readKey, Subkey, enums } from "openpgp";
import Link from "next/link";
import StringCanvas from '@/components/StringCanvas';
import misc from "@/data/misc.json";

export const metadata: Metadata = {
  title: "PGP公開鍵 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲのPGP公開鍵。"
};

function split_n(s: string, n: number) {
  return s.match(new RegExp('.{1,' + n + '}', 'g'))!;
}

function getPurpose(flags: number) {
  const tranlations = new Map([
    ["certifyKeys", "証明 (Certify)"],
    ["signData", "署名 (Sign)"],
    ["encryptCommunication", "暗号 (Encrypt)"],
    ["authentication", "認証 (Authentication)"],
  ]);
  return Object.entries(enums.keyFlags)
  .filter(([, value]) => flags & value as number)
  .map(([name]) => tranlations.get(name))
  .filter(Boolean)
  .join(", ");
}

async function KeyTable({ pgpkey, isSubKey = false } : { pgpkey: Key | Subkey, isSubKey?: boolean }) {
  const id = pgpkey.getKeyID().toHex().toUpperCase();
  const algo = pgpkey.getAlgorithmInfo().algorithm;
  const bits = pgpkey.getAlgorithmInfo().bits;
  const curve = pgpkey.getAlgorithmInfo().curve;
  let purpose = "";
  if (isSubKey) {
    const signature = (pgpkey as Subkey).bindingSignatures[0];
    purpose = getPurpose(signature.keyFlags![0]);
  } else {
    const signature = (await (pgpkey as Key).getPrimaryUser()).selfCertification;
    purpose = "ルート鍵・" + getPurpose(signature.keyFlags![0]);
  }
  const expiration_date = (await pgpkey.getExpirationTime())?.toLocaleString("ja-JP");
  const fingerprintRaw = pgpkey.getFingerprint().toUpperCase();
  const fingerprint = split_n(fingerprintRaw, 4).join(" ");
  return (
    <>
      <h2>{purpose}</h2>
      <table>
        <tbody>
          <tr>
            <th>鍵ID</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>アルゴリズム</th>
            <td>{algo} {bits ? `(${bits} bit)`: ""}{curve ? `(${curve})`: ""}</td>
          </tr>
          <tr>
            <th>有効期限</th>
            <td>
              <time dateTime={expiration_date}>
                {expiration_date}
              </time>
            </td>
          </tr>
          <tr>
            <th>フィンガープリント</th>
            <td>{fingerprint}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default async function PGPPage() {
  const res = await fetch(misc.pgpKeyUrl, {
    cache: "force-cache",
    next: { revalidate: 86400 }, // 1 day
  });
  const binaryKey = new Uint8Array(await res.arrayBuffer());
  const publickey = await readKey({ binaryKey });

  const slug = "ehd5sbozqfy4s9cfpjsaz1qtqupwz1mk";
  const keyPath = "/.well-known/openpgpkey/hu/" + slug;
  
  return (
    <>
      <h1>PGP公開鍵</h1>
      <h2>ユーザーID (Obfuscated for spam protection)</h2>
      <StringCanvas
        text={(await publickey.getPrimaryUser()).user.userID?.userID ?? ""}
        scale={1.2}
        min_size={10}
        className="w-full h-10"
      />
      <noscript>ユーザーIDを見るにはJavaScriptを有効にしてください。</noscript>
      <div className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title">Show Armored</div>
        <div className="collapse-content">
          <pre>{publickey.armor()}</pre>
        </div>
      </div>
      <p><Link href={keyPath}>公開鍵のダウンロード（WKD）</Link></p>
      <KeyTable pgpkey={publickey} />
      {
        publickey.getSubkeys().map((key) => {
          return (
            <div key={key.getKeyID().toHex()}>
              <KeyTable pgpkey={key} isSubKey />
            </div>
          );
        })
      }
    </>
  );
}
