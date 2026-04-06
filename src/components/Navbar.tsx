import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const courseCategories = [
  {
    label: "Computer Science & IT",
    courses: [
      { name: "Artificial Intelligence", path: "/courses/artificial-intelligence" },
      { name: "Cyber Security & Ethical Hacking", path: "/courses/cyber-security" },
      { name: "Data Science", path: "/courses/data-science" },
      { name: "Machine Learning", path: "/courses/machine-learning" },
      { name: "Web Development (Full Stack)", path: "/courses/web-development" },
      { name: "AWS", path: "/courses/aws" },
      { name: "DSA in Python", path: "/courses/dsa-python" },
      { name: "DSA in Java", path: "/courses/dsa-java" },
      { name: "DSA in C++", path: "/courses/dsa-cpp" },
    ],
  },
  {
    label: "Engineering",
    courses: [
      { name: "AutoCAD & MATLAB", path: "/courses/autocad-matlab" },
      { name: "IoT & Robotics", path: "/courses/iot-robotics" },
      { name: "Aspen HYSYS & DWSIM", path: "/courses/aspen-hysys" },
      { name: "VLSI", path: "/courses/vlsi" },
    ],
  },
  {
    label: "Non-Technical",
    courses: [
      { name: "IELTS", path: "/courses/ielts" },
      { name: "Digital Marketing", path: "/courses/digital-marketing" },
      { name: "HR", path: "/courses/hr" },
      { name: "Financial Analysis", path: "/courses/financial-analysis" },
    ],
  },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses", hasDropdown: true },
  { label: "Placements", path: "/placements" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsCoursesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-tight flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-xl font-heading font-bold text-foreground tracking-tight">
              Mind<span className="gradient-text">Seekers</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                }`}
                onMouseEnter={() => link.hasDropdown && setIsCoursesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsCoursesOpen(false)}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {link.hasDropdown && isCoursesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-[540px] bg-card rounded-xl shadow-lg border border-border p-4 grid grid-cols-2 gap-4"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  {courseCategories.map((cat) => (
                    <div key={cat.label}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {cat.label}
                      </p>
                      {cat.courses.map((course) => (
                        <Link
                          key={course.path}
                          to={course.path}
                          className="block px-3 py-1.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors"
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-medium shadow-sm">
              Enroll Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-card border-t border-border mt-2 px-4 py-4 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-accent"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer" className="block pt-2">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium">
              Enroll Now
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
