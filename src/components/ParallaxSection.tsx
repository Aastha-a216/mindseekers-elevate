import { useEffect, useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 0 = no effect, 0.5 = half speed
}

const ParallaxSection = ({ children, className = "", speed = 0.3 }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (centerY - viewportCenter) * speed;
        ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed, isMobile]);

  return (
    <div ref={ref} className={className} style={{ willChange: isMobile ? "auto" : "transform" }}>
      {children}
    </div>
  );
};

export default ParallaxSection;
