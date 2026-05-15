"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentY = window.pageYOffset || document.documentElement.scrollTop;
          if (currentY > lastY && currentY > 50) {
            setHidden(true);
            setMenuOpen(false);
          } else if (currentY < lastY) {
            setHidden(false);
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-24">
          <a
            href="#"
            className="font-display text-2xl md:text-3xl tracking-tighter uppercase text-foreground z-50 relative"
          >
            Sapphire
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
            </a>
            <a
              href="#performances"
              className="text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors relative group py-2"
            >
              Performances
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
            </a>
            <a
              href="#offerings"
              className="text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors relative group py-2"
            >
              Offerings
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
            </a>
            <a
              href="#styles"
              className="text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors relative group py-2"
            >
              Styles
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
            </a>
            <a
              href="#inquiry"
              className="ml-4 px-6 py-3 border border-foreground text-foreground text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              Inquire
            </a>
          </nav>
          <button
            className="md:hidden text-foreground p-2 -mr-2 z-50 relative"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-mono uppercase tracking-widest text-foreground border-b border-border/50 pb-4"
          >
            About
          </a>
          <a
            href="#performances"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-mono uppercase tracking-widest text-foreground border-b border-border/50 pb-4"
          >
            Performances
          </a>
          <a
            href="#offerings"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-mono uppercase tracking-widest text-foreground border-b border-border/50 pb-4"
          >
            Offerings
          </a>
          <a
            href="#styles"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-mono uppercase tracking-widest text-foreground border-b border-border/50 pb-4"
          >
            Styles
          </a>
          <a
            href="#inquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex justify-center w-full px-6 py-4 bg-foreground text-background text-sm font-mono uppercase tracking-widest transition-colors"
          >
            Check Availability
          </a>
        </nav>
      </div>
    </header>
  );
}
