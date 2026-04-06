import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "open">("default");
  const [cursorText, setCursorText] = useState("");
  const isMobile = useIsMobile();
  const mouse = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      followerPos.current.x += (mouse.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (mouse.current.y - followerPos.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor='view'], [data-cursor='open'], .card-3d, .tilt-card");
      if (!interactive) {
        setCursorState("default");
        setCursorText("");
        return;
      }
      const cursorAttr = interactive.getAttribute("data-cursor");
      if (cursorAttr === "view") {
        setCursorState("view");
        setCursorText("View");
      } else if (cursorAttr === "open") {
        setCursorState("open");
        setCursorText("Open");
      } else if (interactive.matches(".card-3d, .tilt-card")) {
        setCursorState("view");
        setCursorText("View");
      } else {
        setCursorState("hover");
        setCursorText("");
      }
    };

    const handleMouseOut = () => {
      setCursorState("default");
      setCursorText("");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const isExpanded = cursorState === "view" || cursorState === "open";

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ willChange: "transform" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300 ease-out ${
            isExpanded ? "w-0 h-0 opacity-0" : cursorState === "hover" ? "w-2 h-2 opacity-100" : "w-2 h-2 opacity-100"
          }`}
        />
      </div>
      {/* Follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500 ease-out flex items-center justify-center ${
            isExpanded
              ? "w-20 h-20 bg-primary border-primary"
              : cursorState === "hover"
              ? "w-12 h-12 border-primary/60 bg-primary/5"
              : "w-8 h-8 border-foreground/20 bg-transparent"
          }`}
        >
          {isExpanded && (
            <span className="text-primary-foreground text-xs font-semibold tracking-wide animate-fade-in">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
