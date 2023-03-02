import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { FaYoutube, FaGithub, FaBookOpen, FaListUl } from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ナタクラゲ / ポートフォリオ</title>
        <meta name="description" content="Natakurage's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            src="/鉈海月.png"
            alt="Natakurage Logo"
            width={250}
            height={250}
            priority
          />
        </div>

        <h1 className={styles.creatorName}>
          <span style={{display: "inline-block"}}>鉈海月 /</span>&nbsp;
          <span style={{display: "inline-block"}}>ナタクラゲ</span>
        </h1>

        <ul className={styles.links}>
            <li><a 
              href="https://www.youtube.com/channel/UCsE5FbMXnmBYe-THSt3kwJQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a></li>
            <li><a 
              href="https://kakuyomu.jp/users/icchy1128Novelman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBookOpen />
            </a></li>
            <li><a 
              href="https://github.com/UzoGaMuzol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a></li>
            <li><Link href="/contact">
              <FaListUl />
            </Link></li>
        </ul>

        <div className={styles.grid}>
          <Link
            href="/about"
            className={styles.card}
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              ナタクラゲとは何者なのかについて、解説します。
            </p>
          </Link>

          <Link
            href="/works"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Works <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              ナタクラゲがこれまでにつくった作品を紹介します。
            </p>
          </Link>

          <Link
            href="/policy"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Policy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            ナタクラゲの作品の利用や注意事項などです。
            </p>
          </Link>

          <Link
            href="/contact"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            ナタクラゲと連絡をとるための方法です。
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
