"use client";

import { useEffect } from "react";

const links = [
  { href: "#galeria", label: "Galeria" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#contato", label: "Contato" },
];

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col justify-center items-start pt-24 px-10 pb-12 transition-transform duration-[600ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
      style={{
        background: "rgba(8,8,8,0.97)",
        transform: open ? "translateX(0)" : "translateX(100%)",
      }}
    >
      {links.map(({ href, label }, i) => (
        <a
          key={href}
          href={href}
          onClick={onClose}
          className="font-serif font-light italic text-[#f0ece4] no-underline leading-[1.15] tracking-[-0.01em] block mb-1 transition-all duration-500 hover:text-[#c9a96e]"
          style={{
            fontSize: "clamp(2.8rem, 12vw, 4.5rem)",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(30px)",
            transitionDelay: open ? `${0.15 + i * 0.07}s` : "0s",
          }}
        >
          {label}
        </a>
      ))}
      <p className="mt-auto text-[0.65rem] tracking-[0.2em] text-[#6b6660] uppercase">
        gustavo@mafrafotos.com &nbsp;·&nbsp; São Paulo, BR
      </p>
    </div>
  );
}
