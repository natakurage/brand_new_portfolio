"use client";

import { useEffect, useRef } from "react";
import useResizeObserver from "hooks/useResizeObserver";

export default function StringCanvas(
  { text, scale, min_size, fontfamily, fillstyle, textalign, textbaseline, className }
  : { text: string, scale: number, min_size?: number, fontfamily?: string, fillstyle?: string,
    textalign?: CanvasTextAlign, textbaseline?: CanvasTextBaseline, className?: string}
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wrapperRef, size] = useResizeObserver<HTMLDivElement>();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = size.width;
    canvas.height = size.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let fsize = canvas.width / text.length * scale;
    if (min_size && fsize < min_size) fsize = min_size;
    ctx.font = `${fsize}px ${fontfamily || "serif"}`;
    ctx.fillStyle = fillstyle || "white";
    ctx.textAlign = textalign || "center";
    ctx.textBaseline = textbaseline || "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  });
  return <div ref={wrapperRef} className={className}>
    <canvas ref={canvasRef} />
  </div>;
}