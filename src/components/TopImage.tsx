"use client";

import Image, { ImageProps } from "next/image";
import useWindowSize from "hooks/useWindowSize";

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
  if (width === 0 || height === 0) {
    const baseClasses = "skeleton absolute w-full h-full";
    const className = `${baseClasses} ${props.className}`;
    return <div className={className}></div>;
  }
  if (width > height) {
    return <Image src={hsrc} alt={alt} {...props} />;
  }
  return <Image src={vsrc} alt={alt} {...props} />;
}