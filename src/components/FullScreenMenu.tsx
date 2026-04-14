import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const menuLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Placements", path: "/placements" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Insights", path: "/posts" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu = ({ isOpen, onClose }: FullScreenMenuProps) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-background/95 backdrop-blur-2xl transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-1000 delay-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/3 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
        <nav className="flex flex-col items-center gap-1 sm:gap-2">
          {menuLinks.map((link, i) => (
            <div
              key={link.path}
              className={`transition-all ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDuration: "600ms",
                transitionDelay: isOpen ? `${150 + i * 60}ms` : `${(menuLinks.length - i) * 30}ms`,
              }}
            >
              <Link
                to={link.path}
                className={`group relative block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "gradient-text"
                    : "text-foreground/40 hover:text-foreground"
                }`}
              >
                <span className="relative inline-block overflow-hidden">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span className="absolute top-full left-0 block gradient-text transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full" aria-hidden>
                    {link.label}
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </nav>

        <div
          className={`absolute bottom-8 left-6 right-6 flex items-center justify-between text-sm text-muted-foreground transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isOpen ? "700ms" : "0ms" }}
        >
          <span>help@mindseekers.live</span>
          <a
            href="https://form.qfixonline.com/mind"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FullScreenMenu;
