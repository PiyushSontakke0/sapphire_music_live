export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-32 pb-24 bg-background">
      {/* Curtain reveal panels */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-foreground z-50 transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-foreground z-50 transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-full"
        aria-hidden="true"
      />

      {/* Background image */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-[3000ms] ease-out scale-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=80'), linear-gradient(135deg, var(--hero-overlay) 0%, var(--hero-overlay) 100%)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center center, center center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, color-mix(in srgb, var(--hero-overlay) 30%, transparent) 0%, var(--hero-overlay) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
        <span
          className="font-sans uppercase tracking-[0.2em] text-xs md:text-sm mb-6 md:mb-8 transition-all duration-1000 ease-out delay-[1000ms] opacity-100 translate-y-0"
          style={{ color: "var(--hero-fg)" }}
        >
          Live Guitar &amp; Keyboard for Timeless Moments
        </span>

        <h1
          className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter text-balance min-w-0 [text-wrap:balance] mb-6 md:mb-8 transition-all duration-1000 ease-out delay-[1200ms] opacity-100 translate-y-0"
          style={{
            backgroundImage: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #9a9a9a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sapphire
        </h1>

        <p
          className="font-sans text-lg md:text-xl max-w-2xl text-balance mb-12 transition-all duration-1000 ease-out delay-[1400ms] opacity-90 translate-y-0"
          style={{ color: "var(--hero-fg)" }}
        >
          Elegant instrumental music crafted for your wedding and most intimate
          celebrations
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto transition-all duration-1000 ease-out delay-[1600ms] opacity-100 translate-y-0">
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--hero-fg)",
              color: "var(--hero-overlay)",
            }}
          >
            Check Availability
          </a>
          <a
            href="#performances"
            className="inline-flex items-center justify-center px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest transition-all duration-300 border hover:bg-[var(--hero-fg)] hover:text-[var(--hero-overlay)]"
            style={{
              borderColor: "var(--hero-fg)",
              color: "var(--hero-fg)",
            }}
          >
            Watch Performances
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce transition-opacity duration-1000 delay-[2000ms] opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
          style={{ color: "var(--hero-fg)" }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
