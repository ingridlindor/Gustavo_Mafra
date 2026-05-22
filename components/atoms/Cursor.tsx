"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const onEnter = () => cursor.classList.add("hovering");
    const onLeave = () => cursor.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);

    const targets = document.querySelectorAll(
      "a, button, .work-item, .service-item, .gallery-item"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        background: "#c9a96e",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s, width 0.3s, height 0.3s, opacity 0.3s",
        mixBlendMode: "difference",
      }}
      className="[&.hovering]:!w-10 [&.hovering]:!h-10 [&.hovering]:opacity-40"
    />
  );
}
