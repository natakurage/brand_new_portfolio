import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Card from '@/src/Card'
import { FaYoutube, FaGithub, FaListUl } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { PiButterflyFill } from "react-icons/pi";
import { TbLetterN } from "react-icons/tb"

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
          <div
            className={styles.posterWrapper}
          >
            <Image
              src="/poster.png"
              alt="Natakurage Key Visual"
              fill
              className={styles.poster}
              priority
              loading = "eager"
            />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.logo}>
            <Image
              src="/鉈海月.png"
              alt="Natakurage Logo"
              width={0}
              height={0}
              sizes="250px"
              style={{width: '100%',height: 'auto'}}
              priority
              loading = "eager"
            />
          </div>

        <div>
          <h1 className={styles.creatorName}>
            <span style={{display: "inline-block"}}>鉈海月 /</span>&nbsp;
            <span style={{display: "inline-block"}}>ナタクラゲ</span>
          </h1>

          <ul className={styles.links}>
            <li><a 
              href="https://www.youtube.com/@natakurage/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a></li>
            <li><a 
              href="https://bsky.app/profile/natakurage.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiButterflyFill />
            </a></li>
            <li><a 
              href="https://note.com/minamo_ntk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbLetterN />
            </a></li>
            <li><a 
              href="https://github.com/natakurage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a></li>
            <li><a 
              href="https://twitter.com/v_natakurage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a></li>
            <li><Link href="/contact">
              <FaListUl />
            </Link></li>
          </ul>
        </div>
        </div>

        <div className={styles.grid}>
          <Card
            title="About"
            content="ナタクラゲとは何者なのかについて、解説します。"
            href='/about'
          ></Card>
          <Card
            title="Works"
            content="ナタクラゲがこれまでにつくった作品を紹介します。"
            href='/works'
          ></Card>
          <Card
            title="Policy"
            content="ナタクラゲの作品の利用や注意事項などです。"
            href='/policy'
          ></Card>
          <Card
            title="Contact"
            content="ナタクラゲと連絡をとるための方法です。"
            href='/contact'
          ></Card>
        </div>
      </main>
    </>
  )
}
