import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FullScreenMenu from "@/components/FullScreenMenu";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

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
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${
          isScrolled && !isMenuOpen
            ? "glass-card py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-tight flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 relative z-[111]">
            <img src={logo} alt="MindSeekers" className="h-7 sm:h-8 w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:brightness-150" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {["Home", "About Us", "Courses", "Placements", "Testimonials", "Insights"].map((label) => {
              const path = label === "Home" ? "/" : label === "About Us" ? "/about" : label === "Insights" ? "/posts" : `/${label.toLowerCase()}`;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === path
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 relative z-[111]">
            <ThemeToggle />

            <a
              href="https://form.qfixonline.com/mind"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <span className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm">
                Enroll Now
              </span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary/50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${
                    isMenuOpen ? "rotate-45 top-[9px]" : "top-[3px]"
                  }`}
                />
                <span
                  className={`block w-4 h-[2px] bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] absolute top-[9px] ${
                    isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${
                    isMenuOpen ? "-rotate-45 top-[9px]" : "top-[15px]"
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
