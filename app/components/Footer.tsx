const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-50 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        {/* Large branding */}
        <div className="mb-20 overflow-hidden w-full">
          <h2 className="font-display text-[15vw] leading-none tracking-tighter uppercase text-foreground mb-4">
            Sapphire
          </h2>
          <p className="font-sans text-sm md:text-base tracking-widest uppercase text-foreground/75 max-w-xl">
            Live Guitar &amp; Keyboard for Timeless Moments
          </p>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs tracking-widest uppercase text-mutedForeground mb-2">
              Navigation
            </h3>
            <a
              href="#about"
              className="font-body text-base hover:text-accent transition-colors w-fit group"
            >
              About the Duo
              <span className="block h-px w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150 mt-1" />
            </a>
            <a
              href="#performances"
              className="font-body text-base hover:text-accent transition-colors w-fit group"
            >
              Performances
              <span className="block h-px w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150 mt-1" />
            </a>
            <a
              href="#offerings"
              className="font-body text-base hover:text-accent transition-colors w-fit group"
            >
              Curated Offerings
              <span className="block h-px w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150 mt-1" />
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs tracking-widest uppercase text-mutedForeground mb-2">
              Social
            </h3>
            <a
              href="#"
              className="font-body text-base hover:text-accent transition-colors w-fit flex items-center gap-2 group"
            >
              Instagram
              <ArrowIcon />
            </a>
            <a
              href="#"
              className="font-body text-base hover:text-accent transition-colors w-fit flex items-center gap-2 group"
            >
              YouTube
              <ArrowIcon />
            </a>
            <a
              href="#"
              className="font-body text-base hover:text-accent transition-colors w-fit flex items-center gap-2 group"
            >
              Spotify
              <ArrowIcon />
            </a>
          </div>

          {/* Inquiries */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <h3 className="font-sans text-xs tracking-widest uppercase text-mutedForeground mb-2">
              Inquiries
            </h3>
            <a
              href="mailto:booking@sapphireduo.com"
              className="font-display text-2xl md:text-3xl tracking-tight hover:text-accent transition-colors"
            >
              booking@sapphireduo.com
            </a>
            <a
              href="tel:+919876543210"
              className="font-display text-2xl md:text-3xl tracking-tight hover:text-accent transition-colors mt-2"
            >
              +91 98765 43210
            </a>
            <div className="mt-6">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase hover:bg-accent hover:text-accentForeground transition-colors duration-150"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-mutedForeground tracking-wider">
            © 2026 SAPPHIRE DUO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-xs text-mutedForeground hover:text-foreground tracking-wider transition-colors"
            >
              PRIVACY
            </a>
            <a
              href="#"
              className="font-sans text-xs text-mutedForeground hover:text-foreground tracking-wider transition-colors"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
