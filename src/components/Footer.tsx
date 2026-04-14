import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
      <FloatingElements variant="footer" />
      {/* Large background branding text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-heading font-bold text-primary-foreground/[0.07] whitespace-nowrap tracking-tighter">
          MindSeekers
        </span>
      </div>

      <div className="relative z-10 container-tight section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">
              Mind<span className="text-primary">Seekers</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Where knowledge meets opportunity. Empowering learners with industry-relevant skills and certifications.
            </p>
            <p className="text-primary-foreground/40 text-xs">Smart. Sharp. Certified.</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Courses", path: "/courses" },
                { label: "Placements", path: "/placements" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
                { label: "Insights", path: "/posts" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors link-underline w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Popular Courses
            </h4>
            <div className="space-y-2.5">
              {[
                "Artificial Intelligence",
                "Web Development",
                "Data Science",
                "Machine Learning",
                "Cyber Security",
                "DSA in Python",
              ].map((course) => (
                <Link
                  key={course}
                  to="/courses"
                  className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors link-underline w-fit"
                >
                  {course}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:help@mindseekers.live"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 icon-hover" />
                help@mindseekers.live
              </a>
              <a
                href="tel:+918310803817"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 icon-hover" />
                +91 8310803817
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} MindSeekers Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary transition-colors link-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary transition-colors link-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
