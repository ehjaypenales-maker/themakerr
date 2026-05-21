import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data";
import GlassCard from "./GlassCard";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-28 overflow-hidden" id="faq">
      {/* Background neon elements */}
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-[#ff007f]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute bottom-[30%] left-[10%] w-[450px] h-[450px] bg-[#00f0ff]/5 blur-[130px] rounded-full pointer-events-none select-none z-0" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        {/* Title elements */}
        <div className="flex flex-col items-center justify-center text-center mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ffcc]/10 border border-[#00ffcc]/20 mb-4 font-mono text-[10px] sm:text-xs text-[#00ffcc] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Core Inquiries & Telemetry
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] max-w-2xl mb-4">
            Answers for the spatial developer
          </h2>
          
          <div className="w-16 h-[1.5px] bg-[#00f0ff] mt-2" />
        </div>

        {/* Accordions Container */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={faq.id}>
                <GlassCard
                  glowColor={isOpen ? "cyan" : "blue"}
                  className={`transition-all duration-300 p-1 sm:p-2 ${
                    isOpen ? "border-white/10" : ""
                  }`}
                >
                <div className="w-full">
                  {/* Accordion Question Trigger button */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left py-6 px-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-white hover:text-[#00f0ff] transition-colors duration-300 pr-4">
                      {faq.question}
                    </span>
                    
                    <div className={`p-1.5 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 group-hover:text-white transition-all duration-300 ${
                      isOpen ? "rotate-185 border-[#00f0ff]/40 text-[#00f0ff]" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Answer Content (Smooth dynamic height scaling) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 px-4 border-t border-white/5 pt-4 text-left">
                          <p className="font-sans font-light text-white/60 text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </GlassCard>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
