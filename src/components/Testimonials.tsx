import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import GlassCard from "./GlassCard";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const glowColors: ("blue" | "purple" | "pink")[] = ["blue", "purple", "pink"];

  return (
    <section className="relative py-28 overflow-hidden bg-[#0a0a0c]/10" id="testimonials">
      {/* Absolute floating gradient backgrounds */}
      <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-[#bd00ff]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute top-[60%] right-[5%] w-[450px] h-[450px] bg-[#00ffcc]/5 blur-[130px] rounded-full pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff007f]/10 border border-[#ff007f]/20 mb-4 font-mono text-[10px] sm:text-xs text-[#ff007f] uppercase tracking-wider select-none animate-pulse"
          >
            <Quote className="w-3.5 h-3.5 fill-current" />
            Mesh Endorsements
          </motion.div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] max-w-2xl">
            Sourced from the architects of tomorrow
          </h2>
        </div>

        {/* Dynamic testimonial block grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.div key={t.id} variants={itemVariants} className="h-full">
              <GlassCard
                id={`testimonial-${t.id}`}
                glowColor={glowColors[idx % 3]}
                className="group p-8 flex flex-col justify-between h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.01)]"
              >
                {/* Visual Quote mark */}
                <div className="flex items-start justify-between w-full mb-6 select-none">
                  <div className="text-white/10 group-hover:text-[#00f0ff]/20 transition-colors duration-500">
                    <Quote className="w-10 h-10 fill-current" />
                  </div>
                  
                  {/* Rating indicator */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 text-amber-500 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote details */}
                <p className="font-sans font-light text-white/70 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>

                {/* User Portrait with transparent status indicator */}
                <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 select-none">
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full"
                    />
                    
                    {/* Tiny neon border flashing online state */}
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00ffcc] border-2 border-[#121215]" />
                  </div>

                  <div className="flex flex-col text-left gap-0.5 select-none">
                    <span className="font-display font-semibold text-sm text-white tracking-wider leading-none">{t.name}</span>
                    <span className="font-mono text-[9px] text-white/40 tracking-wide">
                      {t.role}, <span className="text-[#00f0ff]">{t.company}</span>
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
