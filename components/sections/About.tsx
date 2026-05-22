import ScrollReveal from "@/components/atoms/ScrollReveal";
import SectionLabel from "@/components/atoms/SectionLabel";
import StatItem from "@/components/molecules/StatItem";
import TimelineItem from "@/components/molecules/TimelineItem";

const stats = [
  { number: "10+", label: "Anos de experiência" },
  { number: "100+", label: "Clientes atendidos" },
];

const timeline = [
  { year: "2014", role: "Início da jornada", place: "São Paulo, SP", description: "Primeiros ensaios pelas ruas do centro histórico. Câmera emprestada, olhar próprio." },
  { year: "2017", role: "Graduação em Artes Visuais", place: "FAAP · São Paulo", description: "Aprofundamento técnico e conceitual. TCC com série fotográfica sobre periferia paulistana." },
  { year: "2019", role: "Especialização em Fotodocumentarismo", place: "ARGRA · Buenos Aires", description: "Imersão de 8 meses na capital argentina, fotografando imigrantes e cultura urbana local." },
  { year: "2021", role: "Editor de Fotografia", place: "Veja SP · São Paulo", description: "Dois anos liderando a cobertura visual da revista semanal. Mais de 120 edições." },
  { year: "2023", role: "Estúdio Independente", place: "São Paulo, SP", description: 'Abertura do próprio estúdio. Exposição "Almas da Metrópole" na Galeria Olido e participação no FotoRio.' },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-7 bg-[#080808] relative overflow-hidden"
    >
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)" }}
      />

      <ScrollReveal>
        <SectionLabel>Sobre Mim</SectionLabel>
      </ScrollReveal>

      {/* Portrait */}
      <ScrollReveal>
        <div
          className="w-[70%] max-w-[240px] aspect-[3/4] rounded mb-12 relative overflow-hidden"
          style={{
            boxShadow: "10px 10px 0 -2px transparent, 10px 10px 0 rgba(201,169,110,0.15)",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "radial-gradient(ellipse at 45% 35%, #2a2018 0%, #140e08 50%, #0a0806 100%)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(160deg, rgba(201,169,110,0.08) 0%, transparent 40%, rgba(0,0,0,0.4) 100%)",
              }}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Quote */}
      <ScrollReveal>
        <blockquote
          className="font-serif font-light italic text-[#e8d5b7] mb-10 leading-[1.3]"
          style={{ fontSize: "clamp(1.5rem, 7vw, 2rem)" }}
        >
          &quot;Fotografar é aprender a{' '}
          <em className="text-[#c9a96e] not-italic">ver o que sempre esteve lá,</em>{' '}
          mas ninguém parou para olhar.&quot;
        </blockquote>
      </ScrollReveal>

      {/* Bio */}
      <ScrollReveal>
        <p className="text-[0.7rem] leading-[2] text-[rgba(240,236,228,0.55)] tracking-[0.05em] mb-6">
          Gustavo Mafra é fotógrafo e videomaker autônomo baseado em São Paulo. Disponível para projetos freelance e posições fulltime, ele trabalha com fotografia editorial, conteúdo de marca e produção audiovisual para empresas e personalidades.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <p className="text-[0.7rem] leading-[2] text-[rgba(240,236,228,0.55)] tracking-[0.05em] mb-6">
          Sua trajetória inclui ensaios autorais, documentários de bastidores e campanhas de marca. O olhar de Gustavo equilibra técnica e sensibilidade, valorizando luz natural, composições urbanas e narrativas que se sustentam no ambiente.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="text-[0.7rem] leading-[2] text-[rgba(240,236,228,0.55)] tracking-[0.05em]">
          Entre seus trabalhos estão produções para podcasts, eventos corporativos e séries editoriais. Ele assina projetos como fotografia de bastidores, eventos e campanhas em que a imagem ganha voz própria.
        </p>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal delay={3}>
        <div
          className="grid grid-cols-2 gap-6 mt-12 pt-12"
          style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="mt-16">
        <ScrollReveal>
          <SectionLabel className="mb-8">Trajetória</SectionLabel>
        </ScrollReveal>
        {timeline.map((t, i) => (
          <ScrollReveal key={t.year} delay={(i % 5) as 0 | 1 | 2 | 3 | 4}>
            <TimelineItem {...t} isLast={i === timeline.length - 1} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
