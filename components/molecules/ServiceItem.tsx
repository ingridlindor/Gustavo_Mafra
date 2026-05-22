interface ServiceItemProps {
  index: string;
  name: string;
  description: string;
  price: string;
}

export default function ServiceItem({
  index,
  name,
  description,
  price,
}: ServiceItemProps) {
  return (
    <div
      className="
        service-item bg-[#141414] px-6 py-8 relative overflow-hidden cursor-none
        transition-colors duration-300 hover:bg-[rgba(201,169,110,0.04)]
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0
        before:w-0.5 before:bg-gold before:scale-y-0 before:origin-bottom
        before:transition-transform before:duration-300
        hover:before:scale-y-100
      "
    >
      <p className="text-[0.55rem] tracking-[0.3em] text-[#c9a96e] uppercase mb-3">{index}</p>
      <h3 className="font-serif text-[1.4rem] font-light text-[#e8d5b7] mb-2">{name}</h3>
      <p className="text-[0.62rem] leading-[1.9] text-[rgba(240,236,228,0.4)]">{description}</p>
      <p className="mt-4 text-[0.55rem] tracking-[0.2em] text-[#8a6f45] uppercase">{price}</p>
    </div>
  );
}
