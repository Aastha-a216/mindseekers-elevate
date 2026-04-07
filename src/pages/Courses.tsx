import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Star } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import TiltCard from "@/components/TiltCard";
import ParallaxSection from "@/components/ParallaxSection";
import { courses, categories } from "@/data/courses";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-20">
        <ParallaxSection speed={0.1}>
          <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
        </ParallaxSection>
        <div className="container-tight px-6 sm:px-8 lg:px-12 relative z-10 pt-32">
          <TextReveal>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Our Programs</p>
          </TextReveal>
          <TextReveal delay={100}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-8 max-w-3xl">
              Pick A Course To <span className="gradient-text">Get Started</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Industry-relevant courses across Computer Science, Engineering, and Professional Development.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
                  activeCategory === cat.value
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <ScrollReveal key={course.id} delay={(i % 3) * 80}>
                <TiltCard intensity={4}>
                  <Link to={`/courses/${course.id}`} className="group block h-full" data-cursor="view">
                    <div className="card-3d overflow-hidden h-full flex flex-col">
                      <div className="img-reveal relative">
                        <img src={course.image} alt={course.name} className="w-full h-52 object-cover" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-[10px] tracking-[0.1em] uppercase font-medium">
                            {course.duration}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-[10px] tracking-[0.1em] uppercase font-medium">
                            {course.level}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-medium text-primary mb-3">{course.categoryLabel}</p>
                        <h3 className="font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {course.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{course.description}</p>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
