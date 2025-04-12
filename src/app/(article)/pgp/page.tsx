import { Metadata } from 'next'
import { Key, readKey, Subkey, enums } from "openpgp"
import fs from "fs"
import path from "path"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PGP公開鍵 | ナタクラゲ / 千本槍みなも",
  description: "ナタクラゲのPGP公開鍵。"
}

function split_n(s: string, n: number) {
  return s.match(new RegExp('.{1,' + n + '}', 'g'))!
}

function getPurpose(flags: number) {
  const tranlations = new Map([
    ["certifyKeys", "証明 (Certify)"],
    ["signData", "署名 (Sign)"],
    ["encryptCommunication", "暗号 (Encrypt)"],
    ["authentication", "認証 (Authentication)"],
  ])
  return Object.entries(enums.keyFlags)
  .filter(([_key, value]) => flags & value as number)
  .map(([name]) => tranlations.get(name))
  .filter(Boolean)
  .join(", ")
}

async function KeyTable({ pgpkey, isSubKey = false } : { pgpkey: Key | Subkey, isSubKey?: boolean }) {
  const id = pgpkey.getKeyID().toHex().toUpperCase()
  const algo = pgpkey.getAlgorithmInfo().algorithm
  const bits = pgpkey.getAlgorithmInfo().bits
  const curve = pgpkey.getAlgorithmInfo().curve
  let purpose = ""
  if (isSubKey) {
    const signature = (pgpkey as Subkey).bindingSignatures[0]
    purpose = getPurpose(signature.keyFlags![0])
  } else {
    const signature = (await (pgpkey as Key).getPrimaryUser()).selfCertification
    purpose = "ルート鍵・" + getPurpose(signature.keyFlags![0])
  }
  const expiration_date = (await pgpkey.getExpirationTime())?.toLocaleString("ja-JP")
  const fingerprintRaw = pgpkey.getFingerprint().toUpperCase()
  const fingerprint = split_n(fingerprintRaw, 4).join(" ")
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
  )
}

export default async function PGPPage() {
  const slug = "ehd5sbozqfy4s9cfpjsaz1qtqupwz1mk"
  const keyPath = "/.well-known/openpgpkey/hu/" + slug
  const res = fs.readFileSync(path.join(process.cwd(), "public", keyPath))
  const binaryKey = new Uint8Array(res)
  const publickey = await readKey({ binaryKey })
  
  return (
    <>
      <h1>PGP公開鍵</h1>
      <p>
        ユーザーID: {(await publickey.getPrimaryUser()).user.userID?.userID}
      </p>
      <div className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title">PGP公開鍵</div>
        <div className="collapse-content">
          <pre>{publickey.armor()}</pre>
        </div>
      </div>
      <p><Link href={keyPath}>公開鍵のダウンロード（WKD）</Link></p>
      {await KeyTable({ pgpkey: publickey })}
      {
        publickey.getSubkeys().map(async (key) => {
          return (
            <>
              {await KeyTable({ pgpkey: key, isSubKey: true })}
            </>
          )
        })
      }
    </>
  )
}
