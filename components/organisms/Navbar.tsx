"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-7 py-6"
        style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, transparent 100%)" }}
      >
        <a
          href="#"
          className="font-serif text-[1.1rem] font-light tracking-[0.3em] uppercase text-[#f0ece4] no-underline"
        >
          Gustavo Mafra
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`bg-transparent border-none cursor-none flex flex-col gap-[5px] p-1 ${open ? "open" : ""}`}
          aria-label="Menu"
        >
          <span
            className="block w-[22px] h-px bg-[#f0ece4] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] origin-center"
            style={{ transform: open ? "translateY(6px) rotate(45deg)" : undefined }}
          />
          <span
            className="block w-[22px] h-px bg-[#f0ece4] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] origin-center"
            style={{ opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : undefined }}
          />
          <span
            className="block w-[22px] h-px bg-[#f0ece4] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] origin-center"
            style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : undefined }}
          />
        </button>
      </nav>

      <MenuOverlay open={open} onClose={close} />
    </>
  );
}
