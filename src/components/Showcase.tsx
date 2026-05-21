import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Code, Cpu, ExternalLink, HardDrive } from "lucide-react";
import { PROJECTS } from "../data";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-28 overflow-hidden" id="showcase">
      {/* Background glowing lamps */}
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-[#ff007f]/5 blur-[140px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* Header Title Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bd00ff]/10 border border-[#bd00ff]/20 mb-4 font-mono text-[10px] sm:text-xs text-[#bd00ff] uppercase tracking-wider select-none">
              <Cpu className="w-3.5 h-3.5" />
              Active Portals & Ledgers
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]">
              Witness hyper-fidelity in production
            </h2>
          </div>

          {/* Tab Selector Links */}
          <div className="flex flex-wrap gap-2.5 bg-white/[0.02] border border-white/5 p-1.5 rounded-full backdrop-blur-sm self-start">
            {PROJECTS.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-103"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {project.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Display Active Showcase Item with custom 3D reveal dynamics */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* Media Block (Left/Right) */}
              <div className="lg:col-span-7 relative group">
                {/* Accent glow light */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00f0ff] via-[#bd00ff] to-[#ff007f] opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-700 pointer-events-none" />
                
                {/* Image core */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 glassmorphism transform-gpu transition-all duration-700 group-hover:scale-[1.015] group-hover:border-white/20">
                  <img
                    src={PROJECTS[activeTab].imageSrc}
                    alt={PROJECTS[activeTab].title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 select-none grayscale-30 contrast-120 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Cyber Overlay tag */}
                  <div className="absolute top-6 left-6 font-mono text-[9px] font-semibold tracking-widest text-[#00f0ff] uppercase border border-[#00f0ff]/30 bg-[#00f0ff]/10 px-3 py-1.5 rounded-full select-none">
                    {PROJECTS[activeTab].category}
                  </div>
                </div>
              </div>

              {/* Text Specs Block */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <span className="font-mono text-xs text-white/40 mb-2 uppercase tracking-widest">Selected Core Module</span>
                
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-2 leading-none">
                  {PROJECTS[activeTab].title}
                </h3>
                
                <p className="font-sans text-[#bd00ff] text-sm sm:text-base font-medium tracking-wide mb-6">
                  {PROJECTS[activeTab].subtitle}
                </p>

                <p className="font-sans font-light text-white/50 text-sm sm:text-base leading-relaxed mb-8">
                  This multi-threaded synthetic deployment supports micro-processing routing nodes dynamically connected to physical coordinate indices. Excellent for atmospheric low-density workloads.
                </p>

                {/* Micro tech metrics area */}
                <div className="grid grid-cols-3 gap-4 w-full p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 mb-8 select-none">
                  {PROJECTS[activeTab].specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-white/30 uppercase tracking-wider">{spec.label}</span>
                      <span className="font-display font-medium text-xs sm:text-sm text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={PROJECTS[activeTab].link}
                  className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-white hover:text-[#00f0ff] font-medium tracking-wider transition-colors duration-300"
                >
                  ACCESS PORTAL ENCRYPTION
                  <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-[#00f0ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
