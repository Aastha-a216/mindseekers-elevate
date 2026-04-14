import { useEffect, useRef } from "react";

interface FloatingElementsProps {
  variant?: "hero" | "section" | "footer";
}

const FloatingElements = ({ variant = "section" }: FloatingElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty("--mx", `${x}px`);
      containerRef.current.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const configs = {
    hero: [
      { size: 280, top: "10%", left: "5%", color: "var(--primary)", delay: "0s", dur: "8s", blur: 80, opacity: 0.07 },
      { size: 200, top: "60%", right: "8%", color: "hsl(200 85% 55%)", delay: "2s", dur: "10s", blur: 100, opacity: 0.05 },
      { size: 120, top: "30%", right: "25%", color: "hsl(170 60% 50%)", delay: "4s", dur: "12s", blur: 60, opacity: 0.06 },
    ],
    section: [
      { size: 180, top: "20%", left: "0%", color: "var(--primary)", delay: "1s", dur: "9s", blur: 90, opacity: 0.04 },
      { size: 140, bottom: "10%", right: "5%", color: "hsl(200 85% 55%)", delay: "3s", dur: "11s", blur: 70, opacity: 0.05 },
    ],
    footer: [
      { size: 200, top: "20%", left: "10%", color: "var(--primary)", delay: "0s", dur: "10s", blur: 100, opacity: 0.03 },
      { size: 150, top: "40%", right: "15%", color: "hsl(200 85% 55%)", delay: "2s", dur: "12s", blur: 80, opacity: 0.03 },
    ],
  };

  const elements = configs[variant];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" style={{ "--mx": "0px", "--my": "0px" } as React.CSSProperties}>
      {elements.map((el, i) => (
        <div
          key={i}
          className="absolute rounded-full hidden md:block"
          style={{
            width: el.size,
            height: el.size,
            top: el.top,
            left: (el as any).left,
            right: (el as any).right,
            bottom: (el as any).bottom,
            background: `radial-gradient(circle, ${el.color}, transparent 70%)`,
            filter: `blur(${el.blur}px)`,
            opacity: el.opacity,
            animation: `blobFloat ${el.dur} ease-in-out ${el.delay} infinite`,
            transform: "translate(var(--mx), var(--my))",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
