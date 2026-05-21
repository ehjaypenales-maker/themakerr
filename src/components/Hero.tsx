import { motion } from "motion/react";
import { ArrowRight, Terminal, Star, Play, ShieldAlert } from "lucide-react";
import ThreeCanvas from "./ThreeCanvas";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const glowVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.3,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden" id="hero">
      {/* Mesh Glow Gradient Background Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          variants={glowVariants}
          initial="hidden"
          animate="visible"
          className="mesh-glow-1 absolute top-10 left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-r from-[#00f0ff]/15 to-transparent blur-[120px]"
        />
        <motion.div
          variants={glowVariants}
          initial="hidden"
          animate="visible"
          className="mesh-glow-2 absolute bottom-10 right-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-r from-[#bd00ff]/15 to-transparent blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typography Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Cyberpunk Launcher Tagline */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 font-mono text-[10px] sm:text-xs text-white/80 select-none shadow-[0_0_15px_rgba(255,255,255,0.02)]"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span className="tracking-wider uppercase">SYNTH-NET CORE INITIATED v4.1</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            </motion.div>

            {/* Massive Cinematic Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6 outline-none"
            >
              The Hyperdimensional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#bd00ff] to-[#ff007f] filter drop-shadow-[0_2px_15px_rgba(0,240,255,0.15)] mt-2">
                Spatial Web Sync
              </span>
            </motion.h1>

            {/* Cinematic body lead */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/60 font-sans font-light leading-relaxed mb-10 max-w-xl"
            >
              Architect stunning high-fidelity client environments linked natively to spatial mesh routers. Build tactile 3D experiences configured in single-digit code lines without complex server stacks.
            </motion.p>

            {/* Premium Button Trio with magnetic physics concept hover styles */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary Glowing Button */}
              <a
                href="#pricing"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full font-sans text-sm font-semibold text-black tracking-wider transition-all duration-300 transform-gpu bg-white hover:bg-neutral-100 hover:scale-103 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
              >
                <span className="flex items-center gap-2">
                  Initiate Sync
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                
                {/* Glow ring accent */}
                <div className="absolute inset-0 rounded-full border border-white/50 opacity-0 group-hover:opacity-100 scale-105 transition-all duration-300" />
              </a>

              {/* Secondary Glass Borderless Button */}
              <a
                href="#showcase"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 glassmorphism text-slate-300 hover:text-white font-sans text-sm font-semibold tracking-wider transition-all duration-300 transform-gpu hover:border-white/20 hover:scale-102 flex items-center gap-2"
              >
                <Play className="w-4 h-4 text-[#bd00ff] transition-transform duration-300 group-hover:scale-115 fill-current" />
                Explore Portals
              </a>
            </motion.div>

            {/* Subtle Client Trust Proof Metrics Area */}
            <motion.div
              variants={itemVariants}
              className="mt-14 pt-8 border-t border-white/5 w-full max-w-xl flex gap-8 items-center"
            >
              <div className="flex -space-x-3.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-black"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-black"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-black"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col text-left gap-0.5 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-semibold text-white">4.9/5 Rating</span>
                </div>
                <span className="text-white/40 text-xs font-mono font-medium tracking-wide">Tuned by 10,000+ spatial developers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive ThreeJS 3D Column */}
          <div className="lg:col-span-5 h-[360px] sm:h-[480px] lg:h-[520px] w-full relative z-10 flex items-center justify-center">
            
            {/* Background glowing halo elements under 3D sphere */}
            <div className="absolute w-72 h-72 rounded-full bg-[#bd00ff]/10 blur-[80px] animate-pulse pointer-events-none" />
            <div className="absolute w-60 h-60 rounded-full bg-[#00f0ff]/10 blur-[90px] animate-pulse delay-1000 pointer-events-none" />

            {/* Futuristic cyber bracket indicators framing the 3D space */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#00f0ff]/30 rounded-tl-xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#bd00ff]/30 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#ff007f]/30 rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#00ffcc]/30 rounded-br-xl pointer-events-none" />

            {/* Core canvas container */}
            <div className="absolute inset-4 overflow-hidden rounded-2xl bg-white/[0.01] border border-white/[0.03]">
              <ThreeCanvas />
            </div>

            {/* Mini HUD coordinates panel overlayed on canvas (cyperpunk detail) */}
            <div className="absolute top-4 right-6 pointer-events-none select-none font-mono text-[8px] text-white/30 text-right flex flex-col gap-0.5 leading-none">
              <span>LAT_ALPHA: 14.881</span>
              <span>GRID_CON_Z: 9.002</span>
              <span>STATE: SYN_WARP</span>
            </div>
            
            <div className="absolute bottom-4 left-6 pointer-events-none select-none font-mono text-[8px] text-white/30 text-left flex flex-col gap-0.5 leading-none">
              <span>COMPILING MESH...</span>
              <span>SATELLITE SYNC ACTIVE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
