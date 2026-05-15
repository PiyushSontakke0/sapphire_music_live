"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <div
            key={i}
            className="overflow-hidden inline-flex relative mr-[0.2em] last:mr-0"
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block relative pb-[0.1em]"
            >
              {word}
              {showAsterisk && isLast && (
                <span className="absolute top-[0.4em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              )}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full bg-black z-0">
      <div className="relative w-full h-full overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="/hero-bg.png"
          alt="Sapphire Live Performance"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar inside Hero (Pill) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-background rounded-b-2xl md:rounded-b-3xl px-6 py-3 md:px-10 md:py-4 z-20 shadow-2xl">
          <nav className="flex items-center gap-4 sm:gap-8 md:gap-14">
            {["About", "Performances", "Offerings", "Styles", "Inquire"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-sans text-[10px] sm:text-xs md:text-sm tracking-widest uppercase transition-colors duration-300 text-foreground/80 hover:text-foreground"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 pb-12 md:pb-20 z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8 lg:col-span-8 pb-4">
              <WordsPullUp
                text="Sapphire"
                showAsterisk={false}
                className="font-display text-background font-medium leading-[1] tracking-[-0.05em] text-[24vw] sm:text-[22vw] md:text-[18vw] lg:text-[17vw] xl:text-[16vw] 2xl:text-[15vw]"
              />
            </div>
            <div className="md:col-span-4 flex flex-col items-start gap-8 pb-4 md:pb-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-background/80 text-sm sm:text-base leading-relaxed font-sans max-w-sm drop-shadow-lg"
              >
                Elegant instrumental music crafted for your wedding and most intimate
                celebrations. Live guitar and keyboard for timeless moments.
              </motion.p>

              <motion.a
                href="#inquiry"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center bg-background rounded-full pl-6 pr-2 py-2 gap-4 hover:gap-6 transition-all duration-300 shadow-2xl hover:shadow-background/20"
              >
                <span className="text-foreground font-sans font-semibold tracking-widest uppercase text-xs sm:text-sm whitespace-nowrap">
                  Check Availability
                </span>
                <div className="bg-foreground rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="text-background w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
