interface WorkCardProps {
  number: string;
  photoClass: string;
  title: string;
  year: string;
  tag: string;
}

export default function WorkCard({
  number,
  photoClass,
  title,
  year,
  tag,
}: WorkCardProps) {
  return (
    <div className="work-item mb-16 last:mb-0 cursor-none group">
      <p className="text-[0.5rem] tracking-[0.3em] text-[#6b6660] mb-4">{number}</p>
      <div className="w-full aspect-[4/3] rounded overflow-hidden mb-5 transition-transform duration-700 ease-out group-hover:scale-[0.98]">
        <div
          className={`photo-art ${photoClass} w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
        />
      </div>
      <h3 className="font-serif text-[1.7rem] font-light italic leading-[1.1] mb-2">
        {title}
      </h3>
      <div className="flex justify-between items-center text-[0.55rem] tracking-[0.2em] text-[#6b6660] uppercase">
        <span>{year}</span>
        <span className="text-[#8a6f45]">{tag}</span>
      </div>
    </div>
  );
}
