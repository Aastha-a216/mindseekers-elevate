import { Star, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
 
const testimonials = [
  { name: "Rohan Gupta", role: "Senior Product and Compliance Associate", text: "I landed my dream job after completing MindSeekers Full Stack Development course. The curriculum was practical, and the mentors were incredibly supportive throughout my journey.", rating: 5, initials: "RG" },
  { name: "Neha Sharma", role: "Product Manager", text: "The personal mentorship and doubt sessions made learning so much easier. Highly recommended for professionals and beginners alike — the structured learning path is exceptional.", rating: 5, initials: "NS" },
  { name: "Aditya Sharma", role: "Software Developer", text: "MindSeekers courses transformed my career! The hands-on projects and expert mentorship gave me real-world experience that I use daily at my current role.", rating: 5, initials: "AS" },
  { name: "Priya Agarwal", role: "Full Stack Developer", text: "Flexible learning, industry-recognized certifications, and live doubt sessions made this the best learning experience I've had. The community is also very supportive.", rating: 5, initials: "PA" },
  { name: "Vikram Singh", role: "Data Analyst", text: "The Data Science course at MindSeekers was incredibly comprehensive. I went from knowing nothing about Python to building production-ready ML models in just 18 weeks.", rating: 5, initials: "VS" },
  { name: "Sneha Patel", role: "Cyber Security Analyst", text: "The hands-on labs and real-world scenarios in the Cyber Security course prepared me perfectly for industry challenges. I passed my certification on the first attempt.", rating: 5, initials: "SP" },
  { name: "Arjun Reddy", role: "Cloud Engineer", text: "The AWS course was well-structured with practical projects that gave me confidence. Got certified and landed a cloud engineering role within 2 months of completing.", rating: 4, initials: "AR" },
  { name: "Meera Joshi", role: "Digital Marketing Manager", text: "The Digital Marketing course covered everything from SEO to paid campaigns with real client simulations. Now I manage marketing for a top-funded startup!", rating: 5, initials: "MJ" },
];
 
const SLIDE_DURATION = 450; // ms
 
const Testimonials = () => {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  // phase: "idle" | "exit" | "enter"
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [displayed, setDisplayed] = useState(0); // index actually rendered
  const locked = useRef(false);
 
  const navigate = (targetIndex: number, dir: "next" | "prev") => {
    if (locked.current || targetIndex === current) return;
    locked.current = true;
    setDirection(dir);
    setCurrent(targetIndex);
 
    // Phase 1: exit current slide
    setPhase("exit");
 
    setTimeout(() => {
      // Swap content instantly while off-screen, then enter
      setDisplayed(targetIndex);
      setPhase("enter");
 
      setTimeout(() => {
        setPhase("idle");
        locked.current = false;
      }, SLIDE_DURATION);
    }, SLIDE_DURATION);
  };
 
  const goNext = () => {
    const idx = (current + 1) % testimonials.length;
    navigate(idx, "next");
  };
 
  const goPrev = () => {
    const idx = (current - 1 + testimonials.length) % testimonials.length;
    navigate(idx, "prev");
  };
 
  // Auto-advance
  useEffect(() => {
    const timer = setInterval(goNext, 5500);
    return () => clearInterval(timer);
  }, [current]); // eslint-disable-line react-hooks/exhaustive-deps
 
  // Slide transform logic:
  // "next" direction: exit slides left (-100%), enter comes from right (+100%)
  // "prev" direction: exit slides right (+100%), enter comes from left (-100%)
  const exitTranslate =
    phase === "exit"
      ? direction === "next" ? "-100%" : "100%"
      : "0%";
 
  const enterTranslateStart = direction === "next" ? "100%" : "-100%";
  const enterTranslate = phase === "enter" ? "0%" : enterTranslateStart;
 
  const t = testimonials[displayed];
 
  return (
    <Layout>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              What Our Students <span className="gradient-text">Have To Say</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At MindSeekers, we take pride in helping thousands of learners achieve their career goals through our expertly designed courses.
            </p>
          </ScrollReveal>
        </div>
      </section>
 
      {/* Video Section */}
      <section className="section-padding">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="card-3d overflow-hidden group">
                <div className="relative aspect-video bg-foreground/5">
                  {playing ? (
                    <video
                      src="/videos/review.mp4"
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                  ) : (
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-full h-full flex items-center justify-center bg-foreground/5 relative"
                    >
                      <video
                        src="/videos/review.mp4"
                        className="w-full h-full object-cover absolute inset-0"
                        muted
                        preload="metadata"
                      />
                      <div className="relative z-10 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                      <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-300 group-hover:opacity-0" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">Hear from our students about their MindSeekers experience</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
 
      {/* Testimonials Slider */}
      <section className="section-padding pt-0 pb-24">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
 
              {/* Slider card — overflow hidden clips the sliding content */}
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-card"
                style={{ boxShadow: "var(--shadow-elevated)", minHeight: "260px" }}
              >
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-8 text-8xl font-heading text-primary/10 leading-none select-none pointer-events-none z-0">
                  "
                </div>
 
                {/* Sliding panel */}
                <div
                  className="p-8 sm:p-12 relative z-10"
                  style={{
                    transform: phase === "idle"
                      ? "translateX(0%) scale(1)"
                      : phase === "exit"
                      ? `translateX(${exitTranslate}) scale(0.98)`
                      : `translateX(${enterTranslate}) scale(1)`,
                    opacity: phase === "exit" ? 0 : 1,
                    filter: phase === "exit" ? "blur(2px)" : "blur(0px)",
                    transition: `transform ${SLIDE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${SLIDE_DURATION * 0.6}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${SLIDE_DURATION * 0.6}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    willChange: "transform, opacity, filter",
                    backfaceVisibility: "hidden" as const,
                    WebkitFontSmoothing: "antialiased" as const,
                  }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`w-5 h-5 ${j < t.rating ? "fill-primary text-primary" : "fill-border text-border"}`}
                      />
                    ))}
                  </div>
 
                  {/* Quote text */}
                  <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed mb-8 italic font-light">
                    "{t.text}"
                  </p>
 
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-heading font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Navigation row */}
              <div className="flex items-center justify-between mt-8">
 
                {/* Prev arrow */}
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-all duration-200 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
 
                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => navigate(idx, idx > current ? "next" : "prev")}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      style={{
                        width: idx === current ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "9999px",
                        background: idx === current
                          ? "hsl(var(--primary))"
                          : "hsl(var(--border))",
                        transition: "width 0.3s ease, background 0.3s ease",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
 
                {/* Next arrow */}
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-all duration-200 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
 
              {/* Counter */}
              <p className="text-center text-xs text-muted-foreground mt-4 tabular-nums">
                {current + 1} / {testimonials.length}
              </p>
 
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};
 
export default Testimonials;
