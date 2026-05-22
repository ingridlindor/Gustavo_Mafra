"use client";

import { useEffect, useRef } from "react";

export default function ParallaxDivider() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = innerRef.current;
      if (!el) return;
      const wrap = el.closest(".parallax-wrap") as HTMLElement;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = (progress - 0.5) * -60;
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="parallax-wrap h-[220px] overflow-hidden relative">
      <div
        ref={innerRef}
        className="photo-art pl1 absolute inset-x-0 will-change-transform"
        style={{ height: 300, top: -40 }}
      />
    </div>
  );
}
