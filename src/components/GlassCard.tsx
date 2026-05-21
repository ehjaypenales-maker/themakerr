import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "pink" | "cyan";
  id?: string;
}

export default function GlassCard({ children, className = "", glowColor = "blue", id }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const glowColorMap = {
    blue: "rgba(0, 240, 255, 0.15)",
    purple: "rgba(189, 0, 255, 0.15)",
    pink: "rgba(255, 0, 127, 0.15)",
    cyan: "rgba(0, 255, 204, 0.15)",
  };

  const handlePointerMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Direct cursor percentage for spotlight
    setSpotlight({
      x,
      y,
      opacity: 1,
    });

    // Angle calculate (max 10 degrees tilt)
    const cardWidth = rect.width;
    const cardHeight = rect.height;
    const rotateX = ((y / cardHeight) - 0.5) * -12; // tilt backward if mouse is at bottom
    const rotateY = ((x / cardWidth) - 0.5) * 12; // tilt right if mouse is at right

    setRotation({ x: rotateX, y: rotateY });
  };

  const handlePointerLeave = () => {
    setRotation({ x: 0, y: 0 });
    setSpotlight(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      style={{
        perspective: 1000,
      }}
      className="relative transition-all duration-300 transform-gpu"
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`glassmorphism rounded-2xl relative overflow-hidden h-full flex flex-col p-6 sm:p-8 transition-colors duration-500 transform-gpu ${className}`}
      >
        {/* Dynamic glossy border outline */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 300px at ${spotlight.x}px ${spotlight.y}px, ${glowColorMap[glowColor]}, transparent 70%)`
          }}
        />

        {/* Dynamic spot light cursor reflection layer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(circle 220px at ${spotlight.x}px ${spotlight.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
          }}
        />

        {/* Custom background mesh layer */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-10 pointer-events-none"
          style={{
            background: glowColorMap[glowColor]
          }}
        />

        {/* Content wrapper */}
        <div className="relative z-10 flex-grow flex flex-col">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
