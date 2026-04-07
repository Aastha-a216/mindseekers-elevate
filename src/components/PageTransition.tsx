import { useEffect, useState, useRef, ReactNode } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"idle" | "entering" | "exiting">("idle");
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      setDisplayChildren(children);
      return;
    }

    setPhase("entering");
    const t1 = setTimeout(() => {
      setDisplayChildren(children);
      setPhase("exiting");
      window.scrollTo(0, 0);
    }, 500);
    const t2 = setTimeout(() => setPhase("idle"), 1000);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.pathname]);

  // Update children immediately when they change for the same route
  useEffect(() => {
    if (phase === "idle") {
      setDisplayChildren(children);
    }
  }, [children, phase]);

  return (
    <>
      {phase !== "idle" && (
        <div className={`page-transition-overlay ${phase}`} />
      )}
      <div className={phase === "idle" ? "page-enter" : ""}>
        {displayChildren}
      </div>
    </>
  );
};

export default PageTransition;
