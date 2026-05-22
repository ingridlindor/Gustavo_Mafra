import GalleryItem from "@/components/molecules/GalleryItem";

const photos = [
  // Use src quando a imagem existir em public/gallery
  { src: "/gallery/serie-urbana.jpg", width: 200, height: 260, caption: "Série Urbana · 2024" },
  { photoClass: "p2", width: 160, height: 200, caption: "Retratos · 2024" },
  { photoClass: "p3", width: 240, height: 280, caption: "Ouro Preto · 2023" },
  { photoClass: "p4", width: 165, height: 210, caption: "Natureza · 2023" },
  { photoClass: "p5", width: 200, height: 250, caption: "Editorial · 2024" },
  { photoClass: "p6", width: 158, height: 195, caption: "Noite · 2023" },
  { photoClass: "p7", width: 210, height: 265, caption: "Arquitetura · 2024" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-12 pb-20 bg-[#080808]">
      <div className="px-7 text-[0.55rem] tracking-[0.4em] uppercase text-[#8a6f45] mb-8 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:max-w-[80px] after:bg-gradient-to-r after:from-[#8a6f45] after:to-transparent">
        Galeria
      </div>
      <div
        className="flex gap-3 overflow-x-auto px-7 scroll-smooth"
        style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {photos.map((p, i) => (
          <GalleryItem key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
