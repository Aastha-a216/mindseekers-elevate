import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is MindSeekers Technologies?", a: "MindSeekers Technologies is a leading EdTech company that provides industry-relevant courses in Computer Science, Engineering, and Non-Technical domains with expert mentorship and placement support." },
  { q: "Are the certifications industry-recognized?", a: "Yes, all our certifications are industry-recognized and valued by top companies. They help boost your resume and career prospects." },
  { q: "Do you provide placement assistance?", a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and direct connections with our 30+ hiring partners." },
  { q: "What is the mode of learning?", a: "We offer flexible online learning with live classes, recorded sessions, hands-on projects, and personal mentorship through doubt-clearing sessions." },
  { q: "How long are the courses?", a: "Course duration varies from 8 to 24 weeks depending on the program. Each course is designed to make you industry-ready within the timeframe." },
  { q: "Is there any EMI option available?", a: "Yes, we offer affordable EMI options to make our courses accessible to everyone. Contact us for detailed payment plans." },
  { q: "Can I get a refund if I'm not satisfied?", a: "We have a refund policy for eligible cases. Please contact our support team for more details on our refund process." },
  { q: "How do I enroll in a course?", a: "You can enroll by clicking the 'Enroll Now' button on any course page or contacting us directly. Our team will guide you through the process." },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden pb-20">
        <ParallaxSection speed={0.1}>
          <div className="absolute top-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </ParallaxSection>
        <div className="container-tight px-6 sm:px-8 lg:px-12 relative z-10 pt-32">
          <TextReveal>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">FAQ</p>
          </TextReveal>
          <TextReveal delay={100}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-8 max-w-3xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Everything you need to know about MindSeekers courses and programs.
            </p>
          </TextReveal>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <AccordionItem value={`faq-${i}`} className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary transition-colors text-base py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
