const testimonials = [
  {
    quote:
      '"Their instrumental set during our vows felt like scoring a film in real time. Absolute perfection."',
    cite: "Anjali & Vikram, Udaipur",
    align: "mr-auto",
  },
  {
    quote:
      '"Sophisticated, unobtrusive, and deeply moving. Sapphire elevated our reception beyond anything we imagined."',
    cite: "Rohan & Priya, Goa",
    align: "ml-auto",
  },
  {
    quote:
      '"The transition from classical ceremony to upbeat cocktail hour was seamless. The duo is pure class."',
    cite: "Meera & Dev, Mumbai",
    align: "mr-auto",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-background py-32 md:py-48">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] noise-overlay"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-24 flex items-center gap-6">
          <div className="h-px w-12 bg-border" />
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mutedForeground">
            Client Words
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`w-full max-w-3xl border border-border p-8 transition-colors duration-500 hover:border-foreground/30 md:p-16 ${t.align}`}
            >
              <blockquote className="min-w-0 text-balance font-display text-2xl leading-snug tracking-tight text-foreground md:text-4xl [text-wrap:balance]">
                {t.quote}
              </blockquote>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-1 w-12 bg-accent" aria-hidden="true" />
                <cite className="font-sans text-xs font-semibold uppercase tracking-widest text-mutedForeground not-italic">
                  {t.cite}
                </cite>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center justify-center border-t border-border pt-16">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-4">
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
              className="h-5 w-5 text-accent"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-center font-sans text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Performed at venues across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
