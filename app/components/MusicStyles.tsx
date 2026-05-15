const styles = [
  { num: "01", title: "Bollywood Romantic" },
  { num: "02", title: "English Classics" },
  { num: "03", title: "Instrumental / Ambient" },
  { num: "04", title: "Custom Requests" },
];

export default function MusicStyles() {
  return (
    <section
      id="styles"
      className="bg-background text-foreground overflow-hidden py-24 md:py-40 border-t border-border scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 md:mb-24 flex items-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <span className="font-mono text-sm tracking-widest uppercase text-mutedForeground">
            Curated Repertoire
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left image */}
          <div className="lg:col-span-4 w-full">
            <div className="relative aspect-[3/4] w-full overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80"
                alt="Close up of acoustic guitar strings in dramatic lighting"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right style list */}
          <div className="lg:col-span-8 flex flex-col w-full">
            <div className="border-b border-border">
              {styles.map((style) => (
                <div
                  key={style.num}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-t border-border relative cursor-default"
                >
                  <div className="absolute top-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.25,0,0,1)] z-20" />
                  <div className="flex items-start md:items-center gap-6 md:gap-12 relative z-10 w-full">
                    <span className="font-mono text-sm md:text-base text-foreground/75 group-hover:text-accent transition-colors duration-300 mt-2 md:mt-0">
                      {style.num}
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tighter text-foreground group-hover:text-accent transition-colors duration-300 text-balance min-w-0 [text-wrap:balance]">
                      {style.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.25,0,0,1)] items-center justify-center w-12 h-12">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
