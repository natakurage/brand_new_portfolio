"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SecretMessage() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/happiness") {
      return;
    }
    const special = Math.random() < 1/64;
    if (special) {
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
      ];
      const durations = [6.2, 4.1, 4.3, 4.9, 3.8, 4.2, 5.3, 4.1, 3.8, 5.1, 4.2, 3.1];
      for (let i = 0; i < texts.length; i++) {
        setTimeout(() => {
          console.log(texts[i]);
        }, durations.slice(0,i+1).reduce((x, y) => x + y,0) * 1000);
      }
    }
    if (!special) {
      console.log(`
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      🪼ハッキングに興味があるのかな？ 気が合うね！🔪
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      `);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}