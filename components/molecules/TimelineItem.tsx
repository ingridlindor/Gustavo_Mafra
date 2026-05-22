interface TimelineItemProps {
  year: string;
  role: string;
  place: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  role,
  place,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[60px_1fr] gap-4 mb-8 relative">
      {!isLast && (
        <div
          className="absolute left-7 top-6 bottom-[-2rem] w-px"
          style={{
            background: "linear-gradient(to bottom, rgba(201,169,110,0.2), transparent)",
          }}
        />
      )}
      <span className="text-[0.55rem] tracking-[0.15em] text-[#8a6f45] pt-1">{year}</span>
      <div>
        <p className="font-serif text-[1.1rem] font-normal text-[#e8d5b7] mb-1">{role}</p>
        <p className="text-[0.6rem] tracking-[0.15em] text-[#6b6660] uppercase mb-2">{place}</p>
        <p className="text-[0.65rem] leading-[1.9] text-[rgba(240,236,228,0.4)]">{description}</p>
      </div>
    </div>
  );
}
