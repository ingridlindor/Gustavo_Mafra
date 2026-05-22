interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function SectionLabel({
  children,
  className = "",
  centered = false,
}: SectionLabelProps) {
  return (
    <div
      className={`
        flex items-center gap-3 text-[#8a6f45] uppercase tracking-[0.4em] text-[0.55rem] mb-10
        after:content-[''] after:flex-1 after:h-px after:max-w-[80px]
        after:bg-gradient-to-r after:from-[#8a6f45] after:to-transparent
        ${centered ? "justify-center" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
