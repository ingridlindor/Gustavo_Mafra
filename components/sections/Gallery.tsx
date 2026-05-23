"use client";

import { useRef, useState } from "react";
import GalleryItem from "@/components/molecules/GalleryItem";

const photos = [
  // Use src quando a imagem existir em public/gallery
  { src: "/gallery/serie-urbana.jpg", width: 200, height: 260, caption: "Série Urbana · 2024" },
  { src: "/gallery/retrato.jpg", width: 160, height: 200, caption: "Retratos · 2024" },
  { src: "/gallery/ouro-preto.jpg", width: 240, height: 280, caption: "Ouro Preto · 2023" },
  { src: "/gallery/natureza.jpg", width: 165, height: 210, caption: "Natureza · 2023" },
  { src: "/gallery/editorial.jpg", width: 200, height: 250, caption: "Editorial · 2024" },
  { src: "/gallery/food.jpg", width: 158, height: 195, caption: "Food · 2023" },
  { src: "/gallery/arquitetura.jpg", width: 210, height: 265, caption: "Arquitetura · 2024" },
];

export default function Gallery() {
  const duplicatedPhotos = [...photos, ...photos];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="galeria" className="py-12 pb-20 bg-[#080808] overflow-hidden">
      <div className="px-7 text-[0.55rem] tracking-[0.4em] uppercase text-[#8a6f45] mb-8 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:max-w-[80px] after:bg-gradient-to-r after:from-[#8a6f45] after:to-transparent">
        Galeria
      </div>
      <div
        ref={scrollContainerRef}
        className={`flex gap-3 ${isDragging ? "" : "animate-gallery-scroll"} overflow-x-auto cursor-grab active:cursor-grabbing`}
        style={{ scrollbarWidth: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {duplicatedPhotos.map((p, i) => (
          <GalleryItem key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
