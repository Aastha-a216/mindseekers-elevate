import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";
import MagneticButton from "@/components/MagneticButton";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import FloatingElements from "@/components/FloatingElements";
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
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <FloatingElements variant="hero" />

        <div className="container-tight px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Where Knowledge Meets Opportunity
              </span>
            </TextReveal>

            <TextReveal delay={120}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
                Build Your Future with{" "}
                <span className="gradient-text">MindSeekers</span>
              </h1>
            </TextReveal>

            <TextReveal delay={240}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Industry-recognized certifications, expert mentorship, and hands-on projects.
                Join 60,000+ learners who've transformed their careers.
              </p>
            </TextReveal>

            <TextReveal delay={360}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton>
                  <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="btn-premium ripple bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold shadow-lg">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2 icon-hover" />
                    </Button>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/courses">
                    <Button variant="outline" size="lg" className="btn-premium rounded-full px-8 h-12 text-base font-medium border-foreground/20 hover:bg-secondary">
                      Explore Courses
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <TiltCard intensity={5}>
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary mb-4 icon-hover group">
                      <stat.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos - Original colors */}
      <section className="py-12 bg-secondary/30 border-b border-border">
        <InfiniteCarousel speed={0.5} pauseOnHover>
          {partnerLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-8">
              <img
                src={logo}
                alt="Partner"
                className="h-10 sm:h-12 object-contain opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </InfiniteCarousel>
      </section>

      {/* Featured Courses */}
      <section className="section-padding relative overflow-hidden">
        <FloatingElements variant="section" />
        <div className="container-tight relative z-10">
          <SectionHeading
            badge="Popular Courses"
            title="Pick A Course To Get Started"
            subtitle="Industry-relevant courses designed by experts with hands-on projects and real-world applications."
          />
        </div>

        <InfiniteCarousel speed={0.6} pauseOnHover className="py-4">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex-shrink-0 w-[320px] mx-3">
              <TiltCard intensity={5}>
                <Link to={`/courses/${course.id}`} className="group block">
                  <div className="card-3d overflow-hidden h-full">
                    <div className="img-reveal">
                      <img src={course.image} alt={course.name} className="w-full h-44 object-cover" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-medium text-primary mb-2">{course.categoryLabel}</p>
                      <h3 className="font-heading font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className={`w-3.5 h-3.5 ${j < course.rating ? "fill-primary text-primary" : "text-border"}`} />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                          <span className="text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <BookOpen className="w-3.5 h-3.5" /> {course.lessons} Lessons
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="w-3.5 h-3.5" /> {course.students} Students
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </div>
          ))}
        </InfiniteCarousel>

        <div className="text-center mt-10">
          <MagneticButton>
            <Link to="/courses">
              <Button variant="outline" className="btn-premium rounded-full px-8 font-medium border-foreground/20 hover:bg-secondary">
                Browse All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* Community Stats */}
      <section className="section-padding" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-tight">
          <SectionHeading
            badge="Community"
            title="Our MindSeekers Community"
            subtitle="Globally connected community with 30+ partner companies."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Authorized Universities", value: 10, suffix: "+" },
              { label: "Authorized Companies", value: 30, suffix: "+" },
              { label: "Industry Professionals", value: 20, suffix: "+" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <TiltCard intensity={5}>
                  <div className="card-3d p-8 text-center">
                    <div className="text-4xl font-heading font-bold gradient-text mb-2">
                      <AnimatedCounter end={item.value} suffix={item.suffix} />
                    </div>
                    <p className="text-muted-foreground font-medium">{item.label}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Testimonials"
            title="What Our Students Have To Say"
            subtitle="We take pride in helping thousands of learners achieve their career goals through expertly designed courses."
          />
        </div>

        <InfiniteCarousel speed={0.4} direction="right" pauseOnHover className="py-4">
          {testimonials.map((t) => (
            <div key={t.name} className="flex-shrink-0 w-[400px] mx-3">
              <div className="card-3d p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">
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

      {/* CTA */}
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight text-center">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Smart. Sharp. <span className="gradient-text">Certified.</span>
            </h2>
          </TextReveal>
          <TextReveal delay={100}>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Start your journey today with MindSeekers and unlock your full potential.
            </p>
          </TextReveal>
          <TextReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium ripple bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold shadow-lg">
                    Get Started Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="btn-premium rounded-full px-8 h-12 text-base font-medium border-foreground/20 hover:bg-secondary">
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
