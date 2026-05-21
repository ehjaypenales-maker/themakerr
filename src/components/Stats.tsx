import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { STATS } from "../data";
import { Shield } from "lucide-react";

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-[#0a0a0c]/55 border-y border-white/5" id="stats">
      <div className="absolute inset-0 bg-[#00f0ff]/[0.01] pointer-events-none select-none radial-grid" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-6">
          {STATS.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center lg:items-start text-center lg:text-left select-none group">
              <span className="font-mono text-[9px] sm:text-xs text-white/30 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                METRIC::{stat.id.toUpperCase()}
              </span>

              {/* Counting Static Trigger with CSS neon gradients */}
              <div className="flex items-baseline gap-0.5 justify-center lg:justify-start">
                <CounterValue value={parseFloat(stat.value)} suffix={stat.suffix} active={isInView} />
              </div>

              <div className="w-12 h-[1px] bg-white/10 group-hover:bg-[#bd00ff] my-3 transition-colors duration-500" />

              <p className="font-sans text-xs sm:text-sm text-white/60 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Subcomponent to count up smoothly on viewport enter
function CounterValue({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 16ms frames
    
    let currentId: number;

    const tick = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(start);
        currentId = requestAnimationFrame(tick);
      }
    };

    tick();

    return () => cancelAnimationFrame(currentId);
  }, [active, value]);

  // Format correctly based on whether it is integer or decimal
  const formattedCount = Number.isInteger(value) 
    ? Math.round(count) 
    : count.toFixed(3).replace(/\.?0+$/, ""); // Handle clean decimal formatting

  return (
    <h3 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]">
      {formattedCount}
      <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-white/60 to-white/20 bg-clip-text text-transparent ml-0.5">
        {suffix}
      </span>
    </h3>
  );
}
