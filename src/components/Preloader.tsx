import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1800;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setPhase("reveal");
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 600);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-all duration-600 ${
        phase === "reveal" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)" }}
    >
      <div className="relative mb-8">
        <span className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
          Mind<span className="gradient-text">Seekers</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="mt-3 text-xs text-muted-foreground font-mono tabular-nums">
        {progress}%
      </span>
    </div>
  );
};

export default Preloader;
