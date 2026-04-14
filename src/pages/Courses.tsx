import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import FloatingElements from "@/components/FloatingElements";
import { courses, categories } from "@/data/courses";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <Layout>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <FloatingElements variant="hero" />
        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Our Courses
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Pick A Course To <span className="gradient-text">Get Started</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-relevant courses across Computer Science, Engineering, and Professional Development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-sm scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course, i) => (
              <ScrollReveal key={course.id} delay={(i % 3) * 100}>
                <TiltCard intensity={5}>
                  <Link to={`/courses/${course.id}`} className="group block h-full" data-cursor="view">
                    <div className="card-3d overflow-hidden h-full flex flex-col">
                      <div className="img-reveal relative">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium">
                            {course.duration}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium">
                            {course.level}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-xs font-medium text-primary mb-2">{course.categoryLabel}</p>
                        <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {course.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{course.description}</p>
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className={`w-3.5 h-3.5 ${j < course.rating ? "fill-primary text-primary" : "text-border"}`} />
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" />{course.lessons}</span>
                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.students}</span>
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
