import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FullScreenMenu from "@/components/FullScreenMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${
          isScrolled && !isMenuOpen
            ? "glass-card py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-tight flex items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link to="/" className="relative z-[111]">
            <span className="text-lg font-heading font-bold tracking-tight text-foreground">
              Mind<span className="gradient-text">Seekers</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 relative z-[111]">
            <a
              href="https://form.qfixonline.com/mind"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-xs font-medium tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors link-underline"
            >
              Enroll Now
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 group"
              aria-label="Toggle menu"
            >
              <span className="text-xs font-medium tracking-[0.1em] uppercase text-foreground/60 hidden sm:block">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
              <div className="w-8 h-5 relative flex flex-col justify-center items-center">
                <span
                  className={`block w-full h-[1.5px] bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${
                    isMenuOpen ? "rotate-45 top-[9px]" : "top-[4px]"
                  }`}
                />
                <span
                  className={`block w-full h-[1.5px] bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${
                    isMenuOpen ? "-rotate-45 top-[9px]" : "top-[14px]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
