import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Coordinate state
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    interface Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
      pulseSpeed: number;
      pulsePhase: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.floor((width * height) / 14000); // Scaled based on viewport density

    const colors = [
      "rgba(0, 240, 255, 0.5)",  // Cyan
      "rgba(189, 0, 255, 0.4)",  // Purple
      "rgba(255, 0, 127, 0.4)",  // Pink
      "rgba(255, 255, 255, 0.3)" // Pure star white
    ];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const pX = Math.random() * width;
      const pY = Math.random() * height;
      particles.push({
        x: pX,
        y: pY,
        originX: pX,
        originY: pY,
        size: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.18,
        speedY: (Math.random() - 0.5) * 0.18,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // LOOP
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth coordinate lerping for coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Draw standard glowing connection lines for nearby nodes (subtle constallation mesh feel)
      ctx.lineWidth = 0.5;

      particles.forEach((p, i) => {
        // Move floating particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Apply mouse repel hover physics parameters
        if (mouse.x > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceRadius = 140; // repulsion bubble boundary

          if (distance < forceRadius) {
            const force = (forceRadius - distance) / forceRadius; // proportional strength
            const repulsionStrength = 2.5;
            p.x += (dx / distance) * force * repulsionStrength;
            p.y += (dy / distance) * force * repulsionStrength;
          }
        }

        // Pulse size and opacity slightly
        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulsePhase) * 0.15;
        const currentSize = p.size * (1 + Math.sin(p.pulsePhase) * 0.1);

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fill();

        // Subtly connect particles that are close
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = p.x - p2.x;
          const distDy = p.y - p2.y;
          const dist = Math.sqrt(distDx * distDx + distDy * distDy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(0, 240, 255, 0.04)";
            ctx.globalAlpha = (100 - dist) / 100 * 0.3;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen z-0"
    />
  );
}
