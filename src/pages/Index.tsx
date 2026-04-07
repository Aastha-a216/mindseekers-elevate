import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";
import MagneticButton from "@/components/MagneticButton";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import { courses } from "@/data/courses";

const partnerLogos = [
  "https://mindseekers.live/wp-content/uploads/2025/04/internship_logo-1.svg",
  "https://mindseekers.live/wp-content/uploads/2025/04/msmelogo-removebg-preview.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/9e4198383730a6e7036b2c7cf50554d0-1-1.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/ee17a1d06126f8bfc5444ad666e8ba21-1-1.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/9a47085894be9870158c9ad4e23c1a24.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/e24ce5f542c45a73c05172d9c4f38e2e.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/0f683ab474c5a018baa3bdd53330c9ae.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/b5070669b92945ffb20fadc3ea552d16.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/5a5a608278ba2b74aff5fb081f7df81c.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/689bf09a2c1040423fba7a8db0248211.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/622a116daf32436d38271cd6c49ee3af.png",
  "https://mindseekers.live/wp-content/uploads/2025/03/02fb63567e1b107d549d5d15e922424b.png",
];

const stats = [
  { icon: Award, value: 100, suffix: "+", label: "Certifications" },
  { icon: Users, value: 60000, suffix: "+", label: "Membership" },
  { icon: BookOpen, value: 30, suffix: "+", label: "Partner Companies" },
  { icon: GraduationCap, value: 20, suffix: "+", label: "Industry Professionals" },
];

const testimonials = [
  { name: "Rohan Gupta", role: "Senior Product and Compliance Associate", text: "I landed my dream job after completing MindSeekers Full Stack Development course. Highly recommended!" },
  { name: "Neha Sharma", role: "Product Manager", text: "The personal mentorship and doubt sessions made learning so much easier. Highly recommended for professionals and beginners alike!" },
  { name: "Aditya Sharma", role: "Software Developer", text: "MindSeekers courses transformed my career! The hands-on projects and expert mentorship gave me real-world experience." },
  { name: "Priya Agarwal", role: "Full Stack Developer", text: "Flexible learning, industry-recognized certifications, and live doubt sessions made this the best learning experience!" },
];

const featuredCourses = courses.slice(0, 6);

const Index = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Ambient shapes */}
        <ParallaxSection speed={0.15}>
          <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />
        </ParallaxSection>
        <ParallaxSection speed={-0.1}>
          <div className="absolute bottom-[10%] left-[0%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <div className="absolute top-[40%] left-[30%] w-[200px] h-[200px] rounded-full bg-primary/[0.02] blur-[80px]" />
        </ParallaxSection>

        <div className="container-tight px-6 sm:px-8 lg:px-12 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl">
            <TextReveal>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
                Where Knowledge Meets Opportunity
              </p>
            </TextReveal>

            <TextReveal delay={100}>
              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-heading font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-8">
                Build Your
                <br />
                Future with{" "}
                <span className="gradient-text">MindSeekers</span>
              </h1>
            </TextReveal>

            <TextReveal delay={250}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
                Industry-recognized certifications, expert mentorship, and hands-on projects.
                Join 60,000+ learners who've transformed their careers.
              </p>
            </TextReveal>

            <TextReveal delay={400}>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="btn-premium ripple bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-semibold">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 icon-hover" />
                    </Button>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/courses">
                    <Button variant="outline" size="lg" className="btn-premium rounded-full px-10 h-14 text-base font-medium border-foreground/15">
                      Explore Programs
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </TextReveal>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-6 sm:left-8 lg:left-12">
            <TextReveal delay={600}>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-[1px] h-12 bg-border relative overflow-hidden">
                  <div className="w-full h-4 bg-primary animate-[scrollDown_2s_ease-in-out_infinite]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 border-t border-border">
        <div className="container-tight px-6 sm:px-8 lg:px-12 mb-8">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Trusted By</p>
          </ScrollReveal>
        </div>
        <InfiniteCarousel speed={0.4} pauseOnHover>
          {partnerLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-10">
              <img
                src={logo}
                alt="Partner"
                className="h-8 sm:h-10 object-contain opacity-30 hover:opacity-80 transition-all duration-600 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </InfiniteCarousel>
      </section>

      {/* ── Featured Courses ── */}
      <section className="section-padding">
        <div className="container-tight mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <ScrollReveal>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Programs</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em]">
                  Featured Courses
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={150}>
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                View all programs
                <ArrowRight className="w-3.5 h-3.5 icon-hover" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        <InfiniteCarousel speed={0.5} pauseOnHover className="pb-4">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex-shrink-0 w-[340px] mx-3">
              <TiltCard intensity={4}>
                <Link to={`/courses/${course.id}`} className="group block" data-cursor="view">
                  <div className="card-3d overflow-hidden h-full">
                    <div className="img-reveal relative">
                      <img src={course.image} alt={course.name} className="w-full h-52 object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-[10px] tracking-[0.1em] uppercase font-medium text-foreground">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] tracking-[0.15em] uppercase font-medium text-primary mb-3">{course.categoryLabel}</p>
                      <h3 className="font-heading font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className={`w-3 h-3 ${j < course.rating ? "fill-primary text-primary" : "text-border"}`} />
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                          <span className="text-xs text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.lessons}</span>
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </div>
          ))}
        </InfiniteCarousel>
      </section>

      {/* ── Community ── */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Community</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em] mb-6">
                  A Global Network of Learners
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Globally connected community with 30+ partner companies, 10+ universities, and 20+ industry professionals shaping the future of education.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "Authorized Universities", value: 10, suffix: "+" },
                { label: "Authorized Companies", value: 30, suffix: "+" },
                { label: "Industry Professionals", value: 20, suffix: "+" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 80}>
                  <div className="flex items-center justify-between py-6 border-b border-border">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                      <AnimatedCounter end={item.value} suffix={item.suffix} />
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding border-t border-border">
        <div className="container-tight mb-16">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Testimonials</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em] max-w-2xl">
              What Our Students Say
            </h2>
          </ScrollReveal>
        </div>

        <InfiniteCarousel speed={0.35} direction="right" pauseOnHover className="pb-4">
          {testimonials.map((t) => (
            <div key={t.name} className="flex-shrink-0 w-[440px] mx-3">
              <div className="card-3d p-8 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-8 flex-1 text-[15px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary font-heading font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteCarousel>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding border-t border-border relative overflow-hidden">
        <ParallaxSection speed={0.1}>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </ParallaxSection>
        <div className="container-tight text-center relative z-10">
          <TextReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-6">Get Started</p>
          </TextReveal>
          <TextReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-[-0.03em] mb-6 leading-[1.1]">
              Smart. Sharp.
              <br />
              <span className="gradient-text">Certified.</span>
            </h2>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto">
              Start your journey today with MindSeekers and unlock your full potential.
            </p>
          </TextReveal>
          <TextReveal delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium ripple bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-semibold">
                    Get Started Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="btn-premium rounded-full px-10 h-14 text-base font-medium border-foreground/15">
                    Contact Us
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
