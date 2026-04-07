import ScrollReveal from "@/components/ScrollReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${center ? "text-center max-w-2xl mx-auto" : ""}`}>
      {badge && (
        <ScrollReveal>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">
            {badge}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={80}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em] mb-4">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={150}>
          <p className="text-muted-foreground leading-relaxed text-lg">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeading;
