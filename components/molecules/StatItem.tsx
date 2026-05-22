interface StatItemProps {
  number: string;
  label: string;
}

export default function StatItem({ number, label }: StatItemProps) {
  return (
    <div>
      <p className="font-serif text-[2.8rem] font-light text-[#c9a96e] leading-none mb-1">
        {number}
      </p>
      <p className="text-[0.5rem] tracking-[0.3em] text-[#6b6660] uppercase leading-relaxed">
        {label}
      </p>
    </div>
  );
}
