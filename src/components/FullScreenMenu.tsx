import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const menuLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Placements", path: "/placements" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu = ({ isOpen, onClose }: FullScreenMenuProps) => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => { onClose(); }, [location.pathname]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-background transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Soft ambient shapes */}
      <div className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-tight px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Links */}
            <nav className="flex flex-col gap-1">
              {menuLinks.map((link, i) => (
                <div
                  key={link.path}
                  className={`transition-all ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDuration: "700ms",
                    transitionDelay: isOpen ? `${200 + i * 50}ms` : `${(menuLinks.length - i) * 25}ms`,
                  }}
                >
                  <Link
                    to={link.path}
                    className={`group relative block py-2 text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-[-0.02em] transition-all duration-400 ${
                      location.pathname === link.path
                        ? "gradient-text"
                        : "text-foreground/20 hover:text-foreground hover:pl-4"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Info */}
            <div
              className={`hidden lg:flex flex-col justify-end pb-8 transition-all duration-700 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">Contact</p>
                  <p className="text-sm text-foreground/60">help@mindseekers.live</p>
                  <p className="text-sm text-foreground/60">+91 8310803817</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">Location</p>
                  <p className="text-sm text-foreground/60">India</p>
                </div>
                <a
                  href="https://form.qfixonline.com/mind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenMenu;
