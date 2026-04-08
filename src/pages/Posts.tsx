import { Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Posts = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Insights & Updates
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay tuned for the latest from MindSeekers Technologies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="card-3d p-12 sm:p-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-primary mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                  Something exciting is coming
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We'll be sharing insights, updates, and student success stories here.
                </p>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Posts coming soon
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Posts;
