import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

const TiltCard = ({ children, className = "", intensity = 8 }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card transition-transform duration-500 ease-out ${className}`}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
