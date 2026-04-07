import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-tight px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        {/* Big CTA text */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary-foreground/30 mb-6">
            Ready to start?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground/90 leading-[1.1] max-w-3xl">
            Let's build your future,{" "}
            <span className="text-primary">together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-primary-foreground/90">
              Mind<span className="text-primary">Seekers</span>
            </h3>
            <p className="text-primary-foreground/40 text-sm leading-relaxed">
              Where knowledge meets opportunity. Empowering learners with industry-relevant skills.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-primary-foreground/30 mb-5">
              Navigation
            </h4>
            <div className="space-y-3">
              {[
                { label: "About", path: "/about" },
                { label: "Courses", path: "/courses" },
                { label: "Placements", path: "/placements" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-primary-foreground/30 mb-5">
              Programs
            </h4>
            <div className="space-y-3">
              {["Artificial Intelligence", "Web Development", "Data Science", "Machine Learning", "Cyber Security"].map((course) => (
                <Link
                  key={course}
                  to="/courses"
                  className="block text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
                >
                  {course}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-primary-foreground/30 mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="mailto:help@mindseekers.live" className="block text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300">
                help@mindseekers.live
              </a>
              <a href="tel:+918310803817" className="block text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300">
                +91 8310803817
              </a>
              <p className="text-sm text-primary-foreground/40">India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} MindSeekers Technologies
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
