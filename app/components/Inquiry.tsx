export default function Inquiry() {
  return (
    <section
      className="relative w-full bg-background text-foreground py-24 md:py-32 lg:py-40 overflow-hidden scroll-mt-16"
      id="inquiry"
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none noise-overlay"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-balance min-w-0 [text-wrap:balance] mb-8">
                Reserve
                <br />
                <span className="text-mutedForeground">Your Date</span>
              </h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed max-w-md mb-12 text-foreground/75">
                Secure live instrumental elegance for your upcoming celebration.
                Dates are limited.
              </p>
            </div>
            <div className="space-y-8 hidden lg:block">
              <div className="h-px w-full bg-border" />
              <div>
                <span className="block font-sans text-xs tracking-widest uppercase text-mutedForeground mb-2">
                  Direct Inquiry
                </span>
                <a
                  href="mailto:booking@sapphireduo.com"
                  className="font-sans text-lg hover:text-accent transition-colors inline-flex items-center gap-2 group"
                >
                  booking@sapphireduo.com
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
                    className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="lg:col-span-7">
            <form className="space-y-6" method="POST" action="#">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs tracking-widest uppercase text-mutedForeground"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full h-14 bg-muted border border-border px-4 font-sans text-foreground placeholder:text-mutedForeground/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs tracking-widest uppercase text-mutedForeground"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full h-14 bg-muted border border-border px-4 font-sans text-foreground placeholder:text-mutedForeground/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="block font-sans text-xs tracking-widest uppercase text-mutedForeground"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full h-14 bg-muted border border-border px-4 font-sans text-foreground placeholder:text-mutedForeground/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block font-sans text-xs tracking-widest uppercase text-mutedForeground"
                  >
                    City / Venue
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="Udaipur, Rajasthan"
                    className="w-full h-14 bg-muted border border-border px-4 font-sans text-foreground placeholder:text-mutedForeground/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label
                  htmlFor="details"
                  className="block font-sans text-xs tracking-widest uppercase text-mutedForeground"
                >
                  Event Details (Optional)
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Tell us about the mood, scale, and any specific musical requests..."
                  className="w-full bg-muted border border-border p-4 font-sans text-foreground placeholder:text-mutedForeground/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors rounded-none resize-none"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full h-16 bg-foreground text-background flex items-center justify-center gap-3 font-sans font-semibold text-sm tracking-widest uppercase hover:bg-accent hover:text-accentForeground transition-all duration-200 rounded-none disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  Check Availability
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
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
