import ScrollReveal from "@/components/atoms/ScrollReveal";
import SectionLabel from "@/components/atoms/SectionLabel";

const links = [
  { href: "https://www.behance.net/gustavomafra1", label: "behance.net/gustavomafra1" },
  { href: "https://www.linkedin.com/in/gustavo-mafra/", label: "linkedin.com/in/gustavo-mafra" },
  { href: "mailto:gustavo@mafrafotos.com", label: "gustavo@mafrafotos.com" },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-7 bg-[#080808] text-center">
      <ScrollReveal>
        <SectionLabel centered>Contato</SectionLabel>
      </ScrollReveal>

      <ScrollReveal>
        <h2
          className="font-serif font-light italic text-[#f0ece4] leading-[0.95] mb-10"
          style={{ fontSize: "clamp(2.5rem, 14vw, 5rem)" }}
        >
          Vamos criar<br />
          <em className="text-[#c9a96e]" style={{ fontStyle: "italic" }}>algo juntos?</em>
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col gap-4 mb-12">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="flex items-center justify-center gap-3 text-[0.65rem] tracking-[0.25em] text-[#6b6660] uppercase no-underline transition-colors duration-300 hover:text-[#c9a96e] before:content-[''] before:w-5 before:h-px before:bg-current"
            >
              {label}
            </a>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={2}>
        <a
          href="mailto:gustavo@mafrafotos.com"
          className="group inline-block px-10 py-4 text-[0.6rem] tracking-[0.3em] uppercase text-[#c9a96e] no-underline relative overflow-hidden transition-colors duration-300 hover:text-[#080808] border border-[rgba(201,169,110,0.4)]"
        >
          <span className="absolute inset-0 bg-[#c9a96e] -z-10 -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-x-0" />
          Enviar mensagem
        </a>
      </ScrollReveal>
    </section>
  );
}
