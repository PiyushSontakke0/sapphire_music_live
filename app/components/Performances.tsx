const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default function Performances() {
  return (
    <section
      id="performances"
      className="py-28 md:py-40 bg-background text-foreground overflow-hidden border-t border-border scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="block text-xs font-sans uppercase tracking-[0.2em] text-mutedForeground mb-6">
              Live in Motion
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter text-balance min-w-0 [text-wrap:balance]">
              Selected Performances
            </h2>
          </div>
          <div className="hidden md:block pb-4">
            <p className="text-mutedForeground font-sans text-sm tracking-[0.2em] uppercase">
              Vol. I — MMXXIV
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Featured video */}
          <div
            className="group relative col-span-1 md:col-span-12 aspect-video bg-foreground overflow-hidden border border-border cursor-pointer"
            role="button"
            aria-label="Play The Sapphire Experience video"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=1920&q=80"
              alt="The Sapphire Experience"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0,0,1)]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 border border-background flex items-center justify-center text-background group-hover:bg-accent group-hover:border-accent group-hover:text-accentForeground transition-colors duration-150">
                <PlayIcon className="w-8 h-8 md:w-10 md:h-10 ml-2" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full bg-gradient-to-t from-foreground/90 to-transparent">
              <h3 className="font-display text-2xl md:text-4xl text-background tracking-tight">
                The Sapphire Experience
              </h3>
            </div>
          </div>

          {/* Classical Elegance */}
          <div
            className="group relative col-span-1 md:col-span-7 aspect-video bg-foreground overflow-hidden border border-border cursor-pointer"
            role="button"
            aria-label="Play Classical Elegance video"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1280&q=80"
              alt="Classical Elegance"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0,0,1)]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border border-background flex items-center justify-center text-background group-hover:bg-accent group-hover:border-accent group-hover:text-accentForeground transition-colors duration-150">
                <PlayIcon className="w-6 h-6 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-foreground/90 to-transparent">
              <h3 className="font-display text-xl md:text-3xl text-background tracking-tight">
                Classical Elegance
              </h3>
            </div>
          </div>

          {/* Acoustic Intimacy */}
          <div
            className="group relative col-span-1 md:col-span-5 aspect-[4/3] md:aspect-video bg-foreground overflow-hidden border border-border cursor-pointer"
            role="button"
            aria-label="Play Acoustic Intimacy video"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1280&q=80"
              alt="Acoustic Intimacy"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0,0,1)]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border border-background flex items-center justify-center text-background group-hover:bg-accent group-hover:border-accent group-hover:text-accentForeground transition-colors duration-150">
                <PlayIcon className="w-6 h-6 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-foreground/90 to-transparent">
              <h3 className="font-display text-xl md:text-3xl text-background tracking-tight">
                Acoustic Intimacy
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
