import { Cpu, Github, Twitter, MessageSquare, ArrowUp, Send, Check } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-[#030303]" id="footer">
      
      {/* Background radial lamps */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#bd00ff]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        {/* Massive Brand CTA Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-white/5 mb-16">
          
          {/* Typography side */}
          <div className="lg:col-span-7 text-left">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] mb-4">
              Enter the hyperdimensional sphere today
            </h2>
            <p className="font-sans font-light text-white/50 text-base max-w-xl">
              Initiate sync of your physical spatial assets. Access zero-trust encryption channels designed to serve 10M complex objects on standard client screens.
            </p>
          </div>

          {/* Interactive glow Newsletter form */}
          <div className="lg:col-span-5 flex flex-col items-stretch sm:items-start text-left w-full">
            <span className="font-mono text-[9px] sm:text-xs text-[#00f0ff] uppercase tracking-widest mb-3.5 select-none font-semibold">
              Telemetry Core Notifications Signup
            </span>

            <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row items-stretch gap-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Secure email sync address"
                required
                className="flex-grow px-5 py-4 rounded-full bg-white/[0.02] border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors"
              />
              
              <button
                type="submit"
                className="group relative px-6 py-4 rounded-full bg-[#bd00ff] hover:opacity-95 text-white font-sans text-sm font-semibold tracking-wider transition-all duration-300 transform-gpu active:scale-97 select-none cursor-pointer flex items-center justify-center gap-2"
              >
                <AnimatePresence mode="wait">
                  {subscribed ? (
                    <motion.span
                      key="checked"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4 text-[#00ffcc]" />
                      Synced
                    </motion.span>
                  ) : (
                    <motion.span
                      key="standard"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      Bind Channel
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>

        </div>

        {/* Global Footer Navigation and Copyright Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 items-start mb-16 text-left">
          
          {/* Main info columns column size 4 */}
          <div className="col-span-2 lg:col-span-4 flex flex-col items-start select-none">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl glassmorphism flex items-center justify-center text-[#00f0ff]">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-display font-medium text-lg tracking-wider text-white uppercase">Aetheris</span>
            </a>

            <p className="font-sans font-light text-xs sm:text-sm text-white/40 leading-relaxed max-w-sm">
              Premium decentralized spatial web orchestration frameworks. Synthetically compiled at lightspeed velocities.
            </p>
          </div>

          {/* Links 1 size 2 */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5 font-mono text-xs select-none">
            <span className="text-white/60 font-semibold tracking-widest uppercase">System Core</span>
            <a href="#features" className="text-white/30 hover:text-[#00f0ff] transition-colors leading-none">Quantum Mesh</a>
            <a href="#showcase" className="text-white/30 hover:text-[#bd00ff] transition-colors leading-none">Actives</a>
            <a href="#stats" className="text-white/30 hover:text-[#ff007f] transition-colors leading-none">Consensus</a>
          </div>

          {/* Links 2 size 2 */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5 font-mono text-xs select-none">
            <span className="text-white/60 font-semibold tracking-widest uppercase">Security</span>
            <span className="text-white/30 hover:text-white transition-colors duration-300 leading-none cursor-pointer">Entropy Matrix</span>
            <span className="text-white/30 hover:text-white transition-colors duration-300 leading-none cursor-pointer">Protocol Cipher</span>
            <span className="text-white/30 hover:text-white transition-colors duration-300 leading-none cursor-pointer">Zero-Trust Logs</span>
          </div>

          {/* Links 3 size 2 */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5 font-mono text-xs select-none">
            <span className="text-white/60 font-semibold tracking-widest uppercase">Governance</span>
            <span className="text-white/30 hover:text-white transition-colors duration-300 leading-none cursor-pointer">Open Consor</span>
            <span className="text-white/30 hover:text-white transition-colors duration-300 leading-none cursor-pointer">Orbital SLA</span>
            <span className="text-white/30 hover:text-white transition-colors duration-300 leading-none cursor-pointer">Privacy Matrix</span>
          </div>

          {/* Scroll back to top column - size 2 */}
          <div className="col-span-1 lg:col-span-2 flex items-center justify-end h-full">
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full glassmorphism border border-white/5 hover:border-[#00f0ff]/40 text-white/50 hover:text-[#00f0ff] cursor-pointer transition-all duration-300 select-none flex items-center justify-center animate-bounce shadow-md"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Global Footer Sub-bottom area */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <span className="font-mono text-[9px] sm:text-xs text-white/30 tracking-widest uppercase select-none">
            &copy; {currentYear} AETHERIS CORE SYSTEMS INC. ALL CODES SECURED.
          </span>

          {/* Social connections links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-white/40 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all duration-300"
              aria-label="GitHub Portal"
            >
              <Github className="w-4 h-4" />
            </a>
            
            <a
              href="#"
              className="p-2 w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-white/40 hover:text-[#bd00ff] hover:border-[#bd00ff]/30 transition-all duration-300"
              aria-label="Twitter Portal"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="p-2 w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-white/40 hover:text-[#ff007f] hover:border-[#ff007f]/30 transition-all duration-300"
              aria-label="Discord Portal"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Cyperpunk micro coordinates tag (humble, literal, human label) */}
        <div className="mt-6 md:mt-2 font-mono text-[8px] text-white/10 uppercase select-none tracking-widest text-center">
          Terminal Coordinates: 37.7749&deg; N / 122.4194&deg; W
        </div>

      </div>
    </footer>
  );
}
