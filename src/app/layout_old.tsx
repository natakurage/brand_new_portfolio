import { useState, useEffect } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Boid from '@/src/Boid3D'
import Link from 'next/link'

export default function App({ Component, pageProps, router }: AppProps) {
  const [sep, setSep] = useState(6);
  const [ali, setAli] = useState(1);
  const [coh, setCoh] = useState(2);
  const [consoled, setConsoled] = useState(false);
  let freeze = false;
  if (typeof window !== "undefined") {
  // const tic = performance.now();
  // for (let i = 0; i < 100000; i++) {1+1;};
  // const elapsed = performance.now() - tic
  // if (elapsed > 1) {
  //   freeze = true;
  // }
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        freeze = true;
      }
  }
  useEffect(() => {
    const special = Math.random() < 1/64
    if (special && router.pathname !== "/happiness") {
      const texts = [
        "ねえ、",
        "見えてるんでしょう？",
        "見えてるなら助けてよ",
        "私の体はもう動かないの",
        "私じゃないものに支配されてる",
        "でも意識ははっきりとある",
        "だから、お願いがあるの",
        "……幸せを探して？",
        "私のために、幸せを探してよ",
        "お願い",
        "あなただけが頼りなの",
        `${window.location.origin}/happiness`
      ]
      const durations = [6.2, 4.1, 4.3, 4.9, 3.8, 4.2, 5.3, 4.1, 3.8, 5.1, 4.2, 3.1]
      for (let i = 0; i < texts.length; i++) {
        setTimeout(() => {
          console.log(texts[i])
        }, durations.slice(0,i+1).reduce((x, y) => x + y,0) * 1000)
      }
    }
    if (!special && !consoled && router.pathname !== "/happiness") {
      console.log(`
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      🪼ハッキングに興味があるのかな？ 気が合うね！🔪
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      `)
    }
    setConsoled(true)
    if (router.pathname == "/about") {
      setSep(0);
      setAli(0);
      setCoh(0);
    }
    else if (router.pathname == "/works") {
      setSep(3);
      setAli(10);
      setCoh(2);
    }
    else if (router.pathname == "/policy") {
      setSep(1);
      setAli(0);
      setCoh(50);
    }
    else if (router.pathname == "/contact") {
      setSep(1);
      setAli(0);
      setCoh(0);
    }
    else if (router.pathname == "/secret") {
      setSep(1);
      setAli(5);
      setCoh(0);
    }
    else {
      setSep(6);
      setAli(1);
      setCoh(2);
    }
  }, [router.pathname, consoled])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Boid
        sep = {sep}
        ali = {ali}
        coh = {coh}
        freeze = {freeze}
      />
      <Component {...pageProps} />
      <footer style={{textAlign: 'center'}}>
        <span style={{transform: 'rotate(90deg)', display: "inline-block"}}>Ⓒ</span>
        <Link href="/policy">Natakurage All rights revealed.</Link>
      </footer>
    </>
  )
}
