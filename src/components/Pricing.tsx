import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Flame, PocketKnife, ShieldAlert } from "lucide-react";
import { PRICING_PLANS } from "../data";
import GlassCard from "./GlassCard";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const colorConfigMap = {
    blue: {
      accent: "#00f0ff",
      badgeClass: "bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/20",
      buttonClass: "bg-[#00f0ff]/15 hover:bg-[#00f0ff]/30 text-white border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]",
    },
    purple: {
      accent: "#bd00ff",
      badgeClass: "bg-[#bd00ff]/10 text-[#bd00ff] border-[#bd00ff]/20",
      buttonClass: "bg-gradient-to-r from-[#bd00ff] to-[#8000ff] hover:opacity-95 text-white shadow-[0_0_20px_rgba(189,0,255,0.3)]",
    },
    pink: {
      accent: "#ff007f",
      badgeClass: "bg-[#ff007f]/10 text-[#ff007f] border-[#ff007f]/20",
      buttonClass: "bg-[#ff007f]/15 hover:bg-[#ff007f]/30 text-white border-[#ff007f]/30 shadow-[0_0_15px_rgba(255,0,127,0.1)]",
    },
  };

  return (
    <section className="relative py-28 overflow-hidden bg-[#030303]/40" id="pricing">
      {/* Background radial overlays */}
      <div className="absolute top-[40%] left-[20%] w-[550px] h-[550px] bg-[#bd00ff]/5 blur-[130px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        {/* Title Area */}
        <div className="flex flex-col items-center justify-center text-center mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 mb-4 font-mono text-[10px] sm:text-xs text-[#00f0ff] uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-[#00f0ff]" />
            Consensus Pricing Models
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] max-w-2xl mb-8">
            Deploy hyper-fidelity at correct speed
          </h2>

          {/* Sliding interactive Billing Switcher pill with Framer Motion layoutId */}
          <div className="relative flex items-center p-1 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider transition-colors duration-300 ${
                billingCycle === "monthly" ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-white rounded-full z-0 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">Sync Monthly</span>
            </button>

            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider transition-colors duration-300 ${
                billingCycle === "yearly" ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {billingCycle === "yearly" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-white rounded-full z-0 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                Orbit Yearly
                <span className="text-[9px] font-mono tracking-wide px-1.5 py-0.5 rounded-full bg-[#00ffcc] text-black">
                  -20%
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Matrix Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const cyclePrice = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;
            const config = colorConfigMap[plan.glowColor];

            return (
              <div key={plan.id} className="relative h-full flex flex-col">
                <GlassCard
                  id={`pricing-${plan.id}`}
                  glowColor={plan.glowColor}
                  className={`h-full p-8 flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-1.5 ${
                    plan.isPopular 
                      ? "border-[#bd00ff]/30 shadow-[0_0_25px_rgba(189,0,255,0.1)] md:scale-103 lg:scale-105" 
                      : ""
                  }`}
                >
                  {/* Card Front details */}
                  <div>
                    {/* Header Name & Tag */}
                    <div className="flex items-center justify-between mb-4 select-none">
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-white tracking-wide">
                        {plan.name}
                      </h3>
                      
                      {plan.isPopular && (
                        <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded-full border bg-[#bd00ff]/10 text-[#bd00ff] border-[#bd00ff]/30 animate-pulse">
                          <Flame className="w-3 h-3" />
                          Recommended
                        </span>
                      )}
                    </div>

                    <p className="font-sans text-xs sm:text-sm font-light text-white/50 leading-relaxed min-h-[50px] mb-6">
                      {plan.description}
                    </p>

                    {/* Pricing Core */}
                    <div className="flex items-baseline gap-1 mb-8 select-none">
                      <span className="font-sans text-xl font-light text-white/40">$</span>
                      <h4 className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight">
                        {cyclePrice}
                      </h4>
                      <span className="font-sans text-xs sm:text-sm text-white/40 font-light ml-1">
                        / month
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-white/5 mb-8" />

                    {/* Features List Layout */}
                    <ul className="flex flex-col gap-4 mb-10 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center mt-0.5 select-none text-white/70 group-hover:text-white transition-colors">
                            <Check className="w-3.5 h-3.5" style={{ color: config.accent }} />
                          </div>
                          
                          <span className="font-sans text-xs sm:text-sm font-light text-slate-300 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trigger Call to action button */}
                  <div className="w-full mt-auto">
                    <button
                      className={`w-full py-4 px-6 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer border ${config.buttonClass} text-center`}
                    >
                      {plan.ctaText}
                    </button>
                    
                    <div className="text-center font-mono text-[8px] text-white/20 uppercase tracking-widest mt-3.5 select-none">
                      Encrypted connection protocol
                    </div>
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
