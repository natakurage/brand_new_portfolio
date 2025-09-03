"use client";

import { useState, useEffect, useRef } from "react";

export function CursorCircleMask(
  { radius = 200, attenuation = 100, className }
  : { radius?: number, attenuation?: number, className?: string }
) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      setMousePosition({ 
        x: event.clientX - (rect?.left ?? 0), 
        y: event.clientY - (rect?.top ?? 0) 
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div
      ref={ref}
      className={`absolute inset-0 ${className ?? ""}`}
      style={{
        maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent ${radius}px, black ${radius + attenuation}px)`,
        WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent ${radius}px, black ${radius + attenuation}px)`,
      }}
    />
  );
}