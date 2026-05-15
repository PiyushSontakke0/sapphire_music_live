const ArrowRight = () => (
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
    className="w-4 h-4 text-accent"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const offerings = [
  {
    num: "01",
    title: "Bridal Entry",
    subtitle: "A breathtaking acoustic arrival.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1280&q=80",
  },
  {
    num: "02",
    title: "Ceremony & Varmala",
    subtitle: "Sacred traditions scored live.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1280&q=80",
  },
  {
    num: "03",
    title: "Cocktail & Reception",
    subtitle: "Sophisticated ambiance and celebration.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1280&q=80",
  },
];

export default function Offerings() {
  return (
    <section
      id="offerings"
      className="bg-background text-foreground py-24 md:py-40 overflow-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-20 md:mb-32">
          <span className="block font-sans text-xs md:text-sm tracking-widest uppercase text-mutedForeground mb-6">
            Curated Moments
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter text-balance min-w-0 [text-wrap:balance]">
            Scoring your most <br className="hidden md:block" />
            <span className="text-mutedForeground">intimate chapters.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {offerings.map((item) => (
            <article
              key={item.num}
              className={`group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 border-t border-border ${
                item.num === "01" ? "first:border-t-2 first:border-foreground" : ""
              }`}
              style={item.num === "01" ? { borderTopWidth: "2px", borderTopColor: "var(--foreground)" } : undefined}
            >
              <div className="col-span-1 md:col-span-2 flex items-start">
                <span className="font-sans text-xl md:text-2xl text-foreground/75 group-hover:text-accent transition-colors duration-300">
                  {item.num}
                </span>
              </div>
              <div className="col-span-1 md:col-span-5 flex flex-col justify-center min-w-0">
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 transform group-hover:translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.25,0,0,1)]">
                  {item.title}
                </h3>
                <p className="font-sans text-mutedForeground tracking-widest uppercase text-xs md:text-sm transform group-hover:translate-x-4 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.25,0,0,1)]">
                  {item.subtitle}
                </p>
                <div className="mt-8 md:mt-12 flex items-center gap-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.25,0,0,1)]">
                  <span className="font-sans text-xs tracking-widest uppercase text-accent">
                    Inquire
                  </span>
                  <ArrowRight />
                </div>
              </div>
              <div className="col-span-1 md:col-span-5 relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0,0,1)]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-500 ease-out z-10 pointer-events-none" />
              </div>
            </article>
          ))}
          <div className="border-t-2 border-foreground w-full" />
        </div>
      </div>
    </section>
  );
}
