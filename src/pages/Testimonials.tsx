import { Star, Play } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

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
  const [playing, setPlaying] = useState(false);

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
        <div className="container-tight">
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

      <section className="section-padding pt-0">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 2) * 100}>
                <div className="card-3d p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < t.rating ? "fill-primary text-primary" : "text-border"}`} />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
