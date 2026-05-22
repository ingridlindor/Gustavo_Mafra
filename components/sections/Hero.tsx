export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-svh flex flex-col justify-end px-7 pb-16 overflow-hidden"
    >
      {/* Backgrounds */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(139,44,44,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.08) 0%, transparent 50%), #0a0a08",
        }}
      />
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 120% at 65% 30%, rgba(40,35,28,0.9) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 70% 20%, rgba(201,169,110,0.12) 0%, transparent 50%)",
          }}
        />
      </div>
      <div
        className="absolute inset-0 z-0 animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <p className="hero-eyebrow relative z-10 opacity-0 text-[0.6rem] tracking-[0.35em] uppercase text-[#c9a96e] mb-5 flex items-center gap-3 before:content-[''] before:inline-block before:w-8 before:h-px before:bg-[#c9a96e] before:align-middle">
        Fotógrafo & Videomaker
      </p>

      <h1
        className="hero-title relative z-10 opacity-0 font-serif font-light leading-[0.9] tracking-[-0.02em]"
        style={{ fontSize: "clamp(3.5rem, 18vw, 6rem)" }}
      >
        Projetos<br />editoriais<br />e narrativas em vídeo.
      </h1>

      <p className="hero-sub relative z-10 opacity-0 mt-6 text-[0.65rem] tracking-[0.2em] uppercase text-[#6b6660] max-w-[280px] leading-[1.8]">
        Disponível para freelance e fulltime — São Paulo, Brasil
      </p>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 right-8 z-10 opacity-0 flex flex-col items-center gap-2">
        <div
          className="w-px h-[60px] animate-scroll-pulse"
          style={{ background: "linear-gradient(to bottom, #c9a96e, transparent)" }}
        />
        <span
          className="text-[0.5rem] tracking-[0.3em] uppercase text-[#6b6660]"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
