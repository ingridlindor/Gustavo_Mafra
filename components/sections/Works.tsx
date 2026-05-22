import WorkCard from "@/components/molecules/WorkCard";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import SectionLabel from "@/components/atoms/SectionLabel";

const works = [
  { number: "01", photoClass: "pl1", title: "Como você fez isso", year: "2024", tag: "Podcast" },
  { number: "02", photoClass: "pl2", title: "MLS Growth Circle", year: "2024", tag: "Bastidores" },
  { number: "03", photoClass: "pl3", title: "IMPUSHE Eventos", year: "2024", tag: "Eventos" },
];

export default function Works() {
  return (
    <section id="trabalhos" className="py-20 px-7 bg-[#0f0f0f]">
      <SectionLabel>Trabalhos em Destaque</SectionLabel>
      {works.map((w, i) => (
        <ScrollReveal key={w.number} delay={(i % 5) as 0 | 1 | 2 | 3 | 4}>
          <WorkCard {...w} />
        </ScrollReveal>
      ))}
    </section>
  );
}
