import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, BookOpen, Star, CheckCircle, Award } from "lucide-react";
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

      {/* Content */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Syllabus */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="card-3d p-6 sm:p-8">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-6">Course Syllabus</h2>
                  <div className="space-y-3">
                    {course.syllabus.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="card-3d p-6 sm:p-8">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-6">Hands-on Projects</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.projects.map((project) => (
                      <div key={project} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{project}</span>
                      </div>
                    ))}
                  </div>
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
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-semibold shadow-lg">
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
    </Layout>
  );
};

export default CourseDetail;
