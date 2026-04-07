import { Star } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";
import TiltCard from "@/components/TiltCard";

const testimonials = [
  { name: "Rohan Gupta", role: "Senior Product and Compliance Associate", text: "I landed my dream job after completing MindSeekers Full Stack Development course. Highly recommended!", rating: 5 },
  { name: "Neha Sharma", role: "Product Manager", text: "The personal mentorship and doubt sessions made learning so much easier. Highly recommended for professionals and beginners alike!", rating: 5 },
  { name: "Aditya Sharma", role: "Software Developer", text: "MindSeekers courses transformed my career! The hands-on projects and expert mentorship gave me real-world experience.", rating: 5 },
  { name: "Priya Agarwal", role: "Full Stack Developer", text: "Flexible learning, industry-recognized certifications, and live doubt sessions made this the best learning experience!", rating: 5 },
  { name: "Vikram Singh", role: "Data Analyst", text: "The Data Science course at MindSeekers was incredibly comprehensive. I went from knowing nothing about Python to building ML models in just 18 weeks.", rating: 5 },
  { name: "Sneha Patel", role: "Cyber Security Analyst", text: "The hands-on labs and real-world scenarios in the Cyber Security course prepared me perfectly for industry challenges.", rating: 5 },
  { name: "Arjun Reddy", role: "Cloud Engineer", text: "AWS course was well-structured with practical projects. Got certified and landed a cloud engineering role within 2 months.", rating: 4 },
  { name: "Meera Joshi", role: "Digital Marketing Manager", text: "The Digital Marketing course covered everything from SEO to paid campaigns. Now I manage marketing for a top startup!", rating: 5 },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-20">
        <ParallaxSection speed={0.1}>
          <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
        </ParallaxSection>
        <div className="container-tight px-6 sm:px-8 lg:px-12 relative z-10 pt-32">
          <TextReveal>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Testimonials</p>
          </TextReveal>
          <TextReveal delay={100}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-8 max-w-4xl">
              What Our Students <span className="gradient-text">Have To Say</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              At MindSeekers, we take pride in helping thousands of learners achieve their career goals through our expertly designed courses.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 2) * 80}>
                <TiltCard intensity={3}>
                  <div className="card-3d p-8 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-3.5 h-3.5 ${j < t.rating ? "fill-primary text-primary" : "text-border"}`} />
                      ))}
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-8 flex-1 text-[15px]">"{t.text}"</p>
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
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
