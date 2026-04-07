import { useRef, useEffect, useState, ReactNode } from "react";

interface InfiniteCarouselProps {
  children: ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteCarousel = ({
  children,
  speed = 1,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isPaused && track) {
        const halfWidth = track.scrollWidth / 2;
        posRef.current += direction === "left" ? -speed : speed;

        if (direction === "left" && posRef.current <= -halfWidth) {
          posRef.current += halfWidth;
        } else if (direction === "right" && posRef.current >= 0) {
          posRef.current -= halfWidth;
        }

        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    if (direction === "right") {
      const halfWidth = track.scrollWidth / 2;
      posRef.current = -halfWidth;
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction, isPaused]);

  return (
    <div
      className={`overflow-hidden carousel-drag ${className}`}
      data-cursor="drag"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={trackRef} className="flex will-change-transform" style={{ width: "max-content" }}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
