import { Target, Lightbulb, Users, CheckCircle, BookOpen, Award, Headphones, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/TextReveal";

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
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center">
          <TextReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              About Us
            </span>
          </TextReveal>
          <TextReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Empowering Learners, <span className="gradient-text">Building Futures</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MindSeekers Technologies is a leading EdTech company committed to bridging the gap between education and industry through expert-led courses, hands-on projects, and career support.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                  Where Knowledge Meets <span className="gradient-text">Opportunity</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At MindSeekers, we believe that everyone deserves access to quality education. Our mission is to provide industry-relevant training that empowers learners to achieve their career goals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 100+ certifications, 30+ partner companies, and a community of 60,000+ members, we are one of India's fastest-growing EdTech platforms, serving students across Computer Science, Engineering, and Non-Technical domains.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 100, suffix: "+", label: "Certifications" },
                  { value: 60000, suffix: "+", label: "Members" },
                  { value: 30, suffix: "+", label: "Partner Companies" },
                  { value: 10, suffix: "+", label: "Universities" },
                ].map((stat) => (
                  <TiltCard key={stat.label} intensity={5}>
                    <div className="card-3d p-6 text-center">
                      <div className="text-2xl font-heading font-bold gradient-text mb-1">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-tight">
          <SectionHeading
            badge="Our Services"
            title="What We Offer"
            subtitle="Comprehensive learning solutions designed to take you from beginner to industry-ready professional."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <TiltCard intensity={6}>
                  <div className="card-3d p-6 text-center h-full group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <SectionHeading
                badge="Why Choose Us"
                title="The MindSeekers Advantage"
                center={false}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item, i) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 hover:translate-x-1 group">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <TiltCard intensity={4}>
                <div className="card-3d p-8 text-center">
                  <div className="aspect-video rounded-lg bg-secondary flex items-center justify-center mb-4 overflow-hidden img-reveal">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="MindSeekers Introduction"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Watch our introduction video</p>
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
