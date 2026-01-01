"use client";

import Image, { ImageProps } from "next/image";
import useWindowSize from "hooks/useWindowSize";
import { useState } from "react";

export function TopImage({
  hsrc,
  vsrc,
  alt,
  ...props
}: {
  hsrc: string;
  vsrc: string;
  alt: string;
} & Omit<ImageProps, "src" | "alt">) {
  const [width, height] = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const hasWindowSize = width !== 0 && height !== 0;
  const src = width > height ? hsrc : vsrc;

  return (
    <>
      {(!hasWindowSize || isLoading) && (
        <div className={`skeleton rounded-none absolute w-full h-full ${props.className}`} />
      )}
      {hasWindowSize && (
        <Image key={src} src={src} alt={alt} {...props} onLoad={() => setIsLoading(false)} />
      )}
    </>
  );
}