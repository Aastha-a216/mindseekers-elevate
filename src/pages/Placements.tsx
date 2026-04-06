import { Briefcase, TrendingUp, Users, Award, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";

const selectedStudents = [
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-1-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-6-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/05/LENTRA-11-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/05/LENTRA-12-1024x724.png",
  "https://mindseekers.live/wp-content/uploads/2025/04/LENTRA-9-1024x724.png",
];

const Placements = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Placements
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="gradient-text">Selected Students</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our students have been placed in top companies across India. Join MindSeekers and kickstart your career.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, value: 500, suffix: "+", label: "Students Placed" },
              { icon: Building2, value: 30, suffix: "+", label: "Hiring Partners" },
              { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Rate" },
              { icon: Award, value: 8, suffix: " LPA", label: "Avg. Package" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-foreground mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Students Gallery */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Success Stories"
            title="Our Selected Students"
            subtitle="Meet some of our students who've successfully launched their careers through MindSeekers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedStudents.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <div className="card-3d overflow-hidden">
                  <img src={img} alt={`Selected student ${i + 1}`} className="w-full h-auto object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-tight text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Begin Your <span className="gradient-text">Career Journey?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join MindSeekers and get 100% placement assistance with top companies.
            </p>
            <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 font-semibold shadow-lg">
                Enroll Now
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
