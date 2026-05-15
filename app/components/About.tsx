"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, duration = 2.5, suffix = "" }: { from?: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.floor(value) + suffix;
        }
      }
    });
    
    return () => controls.stop();
  }, [inView, from, to, duration, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-black text-background py-24 md:py-32 overflow-hidden scroll-mt-16 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto border border-background/30 relative p-6 sm:p-10 md:p-16 lg:p-20">
        {/* Subtle inner royal border line */}
        <div className="absolute inset-2 border border-background/10 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left Side: Images */}
          <div className="flex flex-col gap-6 h-full min-h-[500px] lg:min-h-[700px]">
             <div className="flex-1 w-full bg-background/5 relative overflow-hidden group">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1550184658-ff6132a71714?w=800&q=80" alt="Pianist" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="flex-1 w-full bg-background/5 relative overflow-hidden group">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80" alt="Guitarist" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
             </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col text-left py-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-medium text-3xl sm:text-4xl md:text-5xl leading-[1.2] tracking-tight text-background/90 mb-16"
            >
              Sapphire is a live instrumental duo creating elegant, cinematic atmospheres for weddings and sophisticated spaces.
            </motion.h2>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8 w-full">
              {/* Stat 1 */}
              <div className="flex flex-col items-start border-l border-background/20 pl-5">
                <div className="font-display text-5xl sm:text-6xl font-light tracking-tighter mb-2 text-background">
                  <Counter to={250} suffix="+" />
                </div>
                <div className="font-sans text-xs text-background/60 tracking-widest uppercase mt-1">
                  Performances<br />Completed
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-start border-l border-background/20 pl-5">
                <div className="font-display text-5xl sm:text-6xl font-light tracking-tighter mb-2 text-background">
                  <Counter to={15} suffix="+" />
                </div>
                <div className="font-sans text-xs text-background/60 tracking-widest uppercase mt-1">
                  Years of<br />Experience
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-start border-l border-background/20 pl-5 col-span-2">
                <div className="font-display text-5xl sm:text-6xl font-light tracking-tighter mb-2 text-background">
                  <Counter to={98} suffix="%" />
                </div>
                <div className="font-sans text-xs text-background/60 tracking-widest uppercase mt-1">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
