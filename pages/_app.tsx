import { useState, useEffect } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Boid from '@/src/Boid'

export default function App({ Component, pageProps, router }: AppProps) {
  const [sep, setSep] = useState(6);
  const [ali, setAli] = useState(1);
  const [coh, setCoh] = useState(2);

  useEffect(() => {
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
  }, [router.pathname])

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
      />
      <Component {...pageProps} />
    </>
  )
}
