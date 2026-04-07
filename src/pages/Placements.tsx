import { Briefcase, TrendingUp, Building2, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";

const selectedStudents = [
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-1-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-6-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/05/LENTRA-11-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/05/LENTRA-12-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-9-1024x724.png",
];

const placementStats = [
  { icon: Briefcase, value: 500, suffix: "+", label: "Students Placed" },
  { icon: Building2, value: 30, suffix: "+", label: "Hiring Partners" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Rate" },
  { icon: Award, value: 8, suffix: " LPA", label: "Avg. Package" },
];

const Placements = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-20">
        <ParallaxSection speed={0.1}>
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
        </ParallaxSection>
        <div className="container-tight px-6 sm:px-8 lg:px-12 relative z-10 pt-32">
          <TextReveal>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Placements</p>
          </TextReveal>
          <TextReveal delay={100}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-8 max-w-3xl">
              Our <span className="gradient-text">Selected Students</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Our students have been placed in top companies across India. Join MindSeekers and kickstart your career.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {placementStats.map((stat, i) => (
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

      {/* Gallery */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="mb-16">
            <ScrollReveal>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Success Stories</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em]">
                Meet Our Achievers
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedStudents.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 80}>
                <div className="card-3d overflow-hidden img-reveal">
                  <img src={img} alt={`Selected student ${i + 1}`} className="w-full h-auto object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border relative overflow-hidden">
        <ParallaxSection speed={0.1}>
          <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </ParallaxSection>
        <div className="container-tight text-center relative z-10">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em] mb-6">
              Ready to Begin Your <span className="gradient-text">Career Journey?</span>
            </h2>
          </TextReveal>
          <TextReveal delay={100}>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Join MindSeekers and get 100% placement assistance with top companies.
            </p>
          </TextReveal>
          <TextReveal delay={200}>
            <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-premium ripple bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 font-semibold">
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </TextReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
