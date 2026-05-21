import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover/has mouse
    const canHover = window.matchMedia("(hover: hover)").matches;
    if (!canHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const updatePosition = () => {
      // Lerping speed coefficient for dragging inertia
      mouse.current.x += (target.current.x - mouse.current.x) * 0.06;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.06;

      if (glowRef.current) {
        // Center the 600px orb
        glowRef.current.style.transform = `translate3d(${mouse.current.x - 300}px, ${mouse.current.y - 300}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="hidden lg:block fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0 rounded-full transition-opacity duration-1000 opacity-60"
      style={{
        background: "radial-gradient(circle, rgba(189, 0, 255, 0.08) 0%, rgba(0, 240, 255, 0.04) 40%, rgba(0, 0, 0, 0) 70%)",
        transform: "translate3d(-1000px, -1000px, 0)",
        willChange: "transform",
      }}
    />
  );
}
