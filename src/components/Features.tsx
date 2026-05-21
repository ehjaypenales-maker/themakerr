import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { FEATURES } from "../data";
import GlassCard from "./GlassCard";

export default function Features() {
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Helper to map string to actual Lucide component dynamically
  const renderIcon = (name: string, colorClass: string) => {
    // Type casting to avoid runtime crashes
    const IconComponent = (LucideIcons as any)[name];
    if (!IconComponent) return null;
    return <IconComponent className={`w-6 h-6 ${colorClass}`} />;
  };

  const glowClassMap = {
    cyan: "text-[#00ffcc] bg-[#00ffcc]/10 border-[#00ffcc]/20",
    purple: "text-[#bd00ff] bg-[#bd00ff]/10 border-[#bd00ff]/20",
    pink: "text-[#ff007f] bg-[#ff007f]/10 border-[#ff007f]/20",
    blue: "text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/20",
  };

  const textGradientMap = {
    cyan: "from-[#00f0ff] to-[#00ffcc]",
    purple: "from-[#bd00ff] to-[#8000ff]",
    pink: "from-[#ff007f] to-[#ff00a1]",
    blue: "from-[#00f0ff] to-[#bd00ff]",
  };

  return (
    <section className="relative py-28 overflow-hidden bg-[#030303]/40" id="features">
      {/* Background radial core lamp */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#bd00ff]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        {/* Header content and tag */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 mb-4 font-mono text-[10px] sm:text-xs text-[#00f0ff] uppercase tracking-wider select-none"
          >
            <LucideIcons.Layers className="w-3.5 h-3.5" />
            Quantum Mesh Structure
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight max-w-2xl leading-[1.1]"
          >
            Built for those mapping the futuristic frontier
          </motion.h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#bd00ff] to-transparent mt-5" />
        </div>

        {/* Feature Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants} className="h-full">
              <GlassCard 
                id={`card-${feature.id}`}
                glowColor={feature.glowColor} 
                className="group select-none"
              >
                {/* Header Icon & Tag Area */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className={`p-3.5 rounded-2xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg ${glowClassMap[feature.glowColor]}`}>
                    {renderIcon(feature.iconName, feature.glowColor === "cyan" ? "text-neon-cyan" : feature.glowColor === "purple" ? "text-neon-purple" : feature.glowColor === "pink" ? "text-neon-pink" : "text-neon-blue")}
                  </div>
                  
                  <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded-full">
                    {feature.tag}
                  </span>
                </div>

                {/* Card Main Typography */}
                <h3 className={`font-display text-xl sm:text-2xl font-semibold text-white tracking-wide mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${textGradientMap[feature.glowColor]} transition-colors duration-300`}>
                  {feature.title}
                </h3>

                <p className="font-sans text-sm font-light text-white/50 leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Futuristic card bracket detail footer component */}
                <div className="w-full h-[1px] bg-white/5 mt-6 pt-4 flex items-center justify-between select-none font-mono text-[8px] text-white/25">
                  <span className="uppercase">STATUS: ONLINE</span>
                  <span className="group-hover:text-[#00f0ff] transition-colors duration-300">CORE://{feature.id.toUpperCase()}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
