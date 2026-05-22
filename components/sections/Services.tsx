import ScrollReveal from "@/components/atoms/ScrollReveal";
import SectionLabel from "@/components/atoms/SectionLabel";
import ServiceItem from "@/components/molecules/ServiceItem";

const services = [
  {
    index: "01",
    name: "Fotografia Editorial",
    description: "Ensaios autorais, campanhas de moda e fotografia de produto com estética refinada e direção de arte.",
    price: "A partir de R$ 1.200",
  },
  {
    index: "02",
    name: "Vídeo & Conteúdo",
    description: "Captação e edição de vídeos institucionais, bastidores e conteúdo digital para redes sociais.",
    price: "Proposta sob medida",
  },
  {
    index: "03",
    name: "Eventos & Bastidores",
    description: "Cobertura documental de eventos, lançamentos e making of com foco em narrativa e sentimento.",
    price: "Consulta personalizada",
  },
  {
    index: "04",
    name: "Direção de Imagem",
    description: "Projeto visual completo para marcas, desde concepção ao pós-processamento final.",
    price: "A partir de R$ 2.500",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 px-7 bg-[#141414]">
      <ScrollReveal>
        <SectionLabel>O que ofereço</SectionLabel>
      </ScrollReveal>
      <div
        className="grid grid-cols-1 gap-px mt-12 rounded overflow-hidden"
        style={{ background: "rgba(201,169,110,0.08)" }}
      >
        {services.map((s, i) => (
          <ScrollReveal key={s.index} delay={(i % 5) as 0 | 1 | 2 | 3 | 4}>
            <ServiceItem {...s} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
