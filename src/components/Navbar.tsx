import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Menu, X, ArrowRight, Activity } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Quantum Mesh", href: "#features" },
    { label: "Active Portals", href: "#showcase" },
    { label: "Consensus", href: "#stats" },
    { label: "Core Pricing", href: "#pricing" },
    { label: "Telemetry FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 sm:py-4 bg-[#030303]/70 backdrop-blur-md border-b border-white/5" 
          : "py-5 sm:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#" className="flex items-center gap-3 group relative">
          <div className="relative w-9 h-9 rounded-xl glassmorphism flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-[#00f0ff]/50 transition-colors duration-500">
            {/* Spinning background shard in icon */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#bd00ff]/20 to-[#00f0ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Cpu className="w-5 h-5 text-white group-hover:text-[#00f0ff] transition-colors duration-500 relative z-10" />
          </div>
          <span className="font-display font-medium text-lg sm:text-xl tracking-wider text-white flex items-center gap-1.5 uppercase">
            Aetheris
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-sans tracking-wide text-white/70 hover:text-white transition-colors duration-300 relative py-1.5 group font-medium"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#00f0ff] to-[#bd00ff] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Brand System Status Dashboard Indicator (Futuristic cyberpunk detail) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/50 select-none">
            <Activity className="w-3.5 h-3.5 text-[#00ffcc] animate-pulse" />
            <span className="tracking-widest uppercase">Mesh Node: OK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]" />
          </div>

          <a
            href="#pricing"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-[#00f0ff] to-[#bd00ff] hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 transition-all duration-300"
          >
            <span className="relative px-5 py-1.8 transition-all ease-in duration-75 bg-[#030303] rounded-full group-hover:bg-opacity-0 font-sans tracking-wider text-xs lg:text-sm font-semibold flex items-center gap-1.5">
              Sync Core
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-lg font-medium text-white/80 hover:text-white self-start"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-[1px] bg-white/5 w-full my-1" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5 self-start px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/50">
                  <Activity className="w-3.5 h-3.5 text-[#00ffcc] animate-pulse" />
                  <span className="tracking-widest uppercase">Grid Latency: 0.08ms</span>
                </div>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#bd00ff] font-sans font-medium text-sm text-white tracking-wider"
                >
                  Sync Quantum Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
