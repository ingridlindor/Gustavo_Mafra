const items = [
  "Retratos", "Editorial", "Paisagem", "Arquitetura", "Documental", "Casamento",
];

export default function MarqueeTrack() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-6 bg-[#0f0f0f]"
      style={{
        borderTop: "1px solid rgba(201,169,110,0.08)",
        borderBottom: "1px solid rgba(201,169,110,0.08)",
      }}
    >
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-serif text-base italic text-[rgba(201,169,110,0.25)] tracking-[0.05em] flex-shrink-0">
            {item}
            <span className="not-italic text-[0.4rem] text-[#8a6f45] mx-8 align-middle">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
