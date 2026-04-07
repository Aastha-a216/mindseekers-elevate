import { BookOpen, Award, Headphones, TrendingUp, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";

const services = [
  { icon: BookOpen, title: "Professional Training", desc: "Industry-relevant curriculum designed by experts with hands-on learning approach." },
  { icon: Award, title: "Certifications", desc: "Industry-recognized certifications that boost your resume and career prospects." },
  { icon: Headphones, title: "Live Mentorship", desc: "Personal mentorship and live doubt-clearing sessions with industry professionals." },
  { icon: TrendingUp, title: "Placement Support", desc: "Dedicated placement assistance with resume building and interview preparation." },
];

const whyChooseUs = [
  "Expert instructors with industry experience",
  "Hands-on projects and real-world applications",
  "Flexible learning schedules",
  "Industry-recognized certifications",
  "Personal mentorship and doubt sessions",
  "100% placement assistance",
  "Affordable pricing with EMI options",
  "Community of 60,000+ learners",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-20">
        <ParallaxSection speed={0.1}>
          <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
        </ParallaxSection>
        <div className="container-tight px-6 sm:px-8 lg:px-12 relative z-10 pt-32">
          <TextReveal>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">About Us</p>
          </TextReveal>
          <TextReveal delay={100}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-8 max-w-4xl">
              Empowering Learners,{" "}
              <span className="gradient-text">Building Futures</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              MindSeekers Technologies is a leading EdTech company committed to bridging the gap between education and industry through expert-led courses, hands-on projects, and career support.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <ScrollReveal>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Who We Are</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8 tracking-[-0.02em]">
                  Where Knowledge Meets <span className="gradient-text">Opportunity</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  At MindSeekers, we believe that everyone deserves access to quality education. Our mission is to provide industry-relevant training that empowers learners to achieve their career goals.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  With over 100+ certifications, 30+ partner companies, and a community of 60,000+ members, we are one of India's fastest-growing EdTech platforms.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 100, suffix: "+", label: "Certifications" },
                { value: 60000, suffix: "+", label: "Members" },
                { value: 30, suffix: "+", label: "Partner Companies" },
                { value: 10, suffix: "+", label: "Universities" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 80}>
                  <div className="py-8 border-b border-border">
                    <div className="text-3xl font-heading font-bold text-foreground mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Services</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em] mb-16 max-w-2xl">
              What We Offer
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <TiltCard intensity={4}>
                  <div className="card-3d p-8 h-full group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary mb-6 transition-transform duration-500 group-hover:scale-110">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <ScrollReveal>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Why Us</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em] mb-8">
                  The MindSeekers Advantage
                </h2>
              </ScrollReveal>
              <div className="space-y-1">
                {whyChooseUs.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 50}>
                    <div className="flex items-center gap-4 py-3 group hover:pl-2 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={150}>
              <TiltCard intensity={3}>
                <div className="card-3d overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="MindSeekers Introduction"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-medium">Watch our introduction</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
