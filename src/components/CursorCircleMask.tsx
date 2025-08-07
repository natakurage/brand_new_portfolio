"use client";

import { useState, useEffect } from "react";

export function CursorCircleMask(
  { radius = 200, attenuation = 100, className }
  : { radius?: number, attenuation?: number, className?: string }
) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div
      className={`absolute inset-0 ${className ?? ""}`}
      style={{
        maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent ${radius}px, black ${radius + attenuation}px)`,
        WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent ${radius}px, black ${radius + attenuation}px)`,
      }}
    />
  );
}