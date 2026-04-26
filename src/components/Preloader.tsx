import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fading"), 400);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background pointer-events-none"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transform: phase === "fading" ? "scale(1.02)" : "scale(1)",
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
      }}
    >
      <span className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight select-none">
        Mind<span className="gradient-text">Seekers</span>
      </span>
    </div>
  );
};

export default Preloader;

