"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

const delayMap = {
  0: "0s",
  1: "0.1s",
  2: "0.2s",
  3: "0.3s",
  4: "0.4s",
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-10 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 ${className}`}
      style={{ transitionDelay: delayMap[delay] }}
    >
      {children}
    </div>
  );
}
