import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, BookOpen, Star, CheckCircle, Award, Calendar, Phone, Mail, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { courses } from "@/data/courses";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center container-tight px-4">
          <h1 className="text-2xl font-heading font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button variant="outline" className="rounded-full">Back to Courses</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const syllabusIcons = [Layers, BookOpen, Award, Star, CheckCircle, Clock, Users, Calendar, Layers, BookOpen, Award, Star, CheckCircle, Clock, Users];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4">
                  {course.categoryLabel}
                </span>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">{course.name}</h1>
                <p className="text-muted-foreground leading-relaxed mb-6">{course.description}</p>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-4 h-4" />{course.duration}</span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><BookOpen className="w-4 h-4" />{course.lessons} Lessons</span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Users className="w-4 h-4" />{course.students} Students</span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Award className="w-4 h-4" />{course.level}</span>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < course.rating ? "fill-primary text-primary" : "text-border"}`} />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">({course.rating}.0 rating)</span>
                </div>
              </div>
              <div className="card-3d overflow-hidden">
                <img src={course.image} alt={course.name} className="w-full h-64 object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Syllabus as visual blocks */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Course Syllabus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.syllabus.map((item, i) => {
                    const Icon = syllabusIcons[i % syllabusIcons.length];
                    return (
                      <div
                        key={i}
                        className="card-3d p-5 flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium mb-1">Module {i + 1}</p>
                          <p className="text-sm font-semibold text-foreground">{item}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Hands-on Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.projects.map((project) => (
                    <div key={project} className="card-3d p-5 flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{project}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={200}>
                <div className="card-3d p-6 sm:p-8 sticky top-28">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-heading font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                      <span className="text-lg text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      Save ₹{(course.originalPrice - course.price).toLocaleString()}
                    </span>
                  </div>

                  <a href="https://form.qfixonline.com/mind" target="_blank" rel="noopener noreferrer" className="block mb-4">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-semibold shadow-lg btn-premium">
                      Enroll Now
                    </Button>
                  </a>

                  <div className="space-y-3 pt-4 border-t border-border">
                    {[
                      "Certificate of completion",
                      "Lifetime access to materials",
                      "Live doubt sessions",
                      "Personal mentorship",
                      "Placement assistance",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Blocks */}
      <section className="section-padding" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-tight">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground text-center mb-10">
              Ready to get started?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Book Demo Class",
                desc: "Experience a free demo class before you enroll.",
                href: "https://form.qfixonline.com/mind",
                btnLabel: "Book Now",
              },
              {
                icon: Phone,
                title: "Request a Call",
                desc: "Our counselor will call you to discuss your goals.",
                href: "tel:+918310803817",
                btnLabel: "Call Us",
              },
              {
                icon: Mail,
                title: "Mail Us",
                desc: "Send us your queries and we'll respond within 24 hours.",
                href: "mailto:help@mindseekers.live",
                btnLabel: "Send Email",
              },
            ].map((cta) => (
              <ScrollReveal key={cta.title}>
                <div className="card-3d p-8 text-center h-full flex flex-col items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-accent text-primary flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <cta.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{cta.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{cta.desc}</p>
                  <a href={cta.href} target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 btn-premium font-semibold">
                      {cta.btnLabel}
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
