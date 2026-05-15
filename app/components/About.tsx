export default function About() {
  return (
    <section
      id="about"
      className="bg-background text-foreground pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden flex flex-col scroll-mt-16"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 mb-16 md:mb-24">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-mutedForeground whitespace-nowrap">
            Our Philosophy
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none uppercase text-balance min-w-0 [text-wrap:balance]">
            The Art of <br className="hidden md:block" /> Presence.
          </h2>
        </div>
      </div>

      <div className="w-full h-[60vh] md:h-[80vh] relative mb-16 md:mb-24">
        <div className="absolute inset-0 bg-background/10 mix-blend-multiply z-10 pointer-events-none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&q=80"
          alt="Sapphire duo performing live"
          className="w-full h-full object-cover grayscale-[15%]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-end">
        <div className="max-w-2xl relative">
          <div className="w-16 h-1 bg-accent mb-8" />
          <p className="font-body text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/75">
            We don&apos;t just play songs; we score the most intimate moments of
            your life.
            <span className="text-foreground font-medium">
              {" "}
              The chemistry between guitar and keyboard creates a living,
              breathing atmosphere
            </span>
            —curated live sets that respond to the energy of your room, turning
            fleeting seconds into timeless memories.
          </p>
        </div>
      </div>
    </section>
  );
}
